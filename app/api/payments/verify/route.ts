import { NextResponse } from "next/server";

/**
 * Confirms a Razorpay payment made on the /pay page.
 *
 * The browser posts here rather than straight at the API (same reasons as the
 * newsletter route: the API address stays server-side, no cross-origin call).
 * Only the three Razorpay fields are forwarded; the API checks the signature
 * and reads the payment back from Razorpay before recording anything.
 */
const API_URL = (process.env.RENTOUT_API_URL ?? "http://127.0.0.1:8081/api/v1").replace(/\/$/, "");
const TIMEOUT_MS = 20000;

const FIELDS = ["razorpay_order_id", "razorpay_payment_id", "razorpay_signature"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "The payment details were not readable." }, { status: 400 });
  }

  if (!FIELDS.every((field) => typeof body?.[field] === "string" && body[field])) {
    return NextResponse.json({ message: "The payment details were incomplete." }, { status: 400 });
  }

  try {
    const response = await fetch(`${API_URL}/payments/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(FIELDS.map((field) => [field, body[field]]))),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      // A refused payment (400/409) is explained; anything else is ours.
      const explained = response.status === 400 || response.status === 409;
      return NextResponse.json(
        {
          message: explained
            ? (payload?.message ?? "The payment could not be confirmed.")
            : "We could not confirm the payment just now. If money was taken it will be confirmed automatically - check the app in a few minutes.",
        },
        { status: explained ? response.status : 502 },
      );
    }

    return NextResponse.json({
      message: payload?.message ?? "Payment successful",
      needsRefund: Boolean(payload?.data?.needsRefund),
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "We could not confirm the payment just now. If money was taken it will be confirmed automatically - check the app in a few minutes.",
      },
      { status: 502 },
    );
  }
}
