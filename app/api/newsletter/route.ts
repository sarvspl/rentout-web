import { NextResponse } from "next/server";

/**
 * Newsletter sign-up.
 *
 * The browser posts here rather than straight at the backend: this keeps the
 * API's address server-side, avoids a cross-origin request from the site, and
 * leaves one place to add anti-abuse measures later.
 *
 * The backend answers identically whether the address was new or already on
 * the list, and this route passes that through unchanged - a visitor should
 * never be able to use the form to find out who has subscribed.
 */
const API_URL = (process.env.RENTOUT_API_URL ?? "http://127.0.0.1:8081/api/v1").replace(/\/$/, "");

/** Never let the site hang on a slow backend. */
const TIMEOUT_MS = 8000;

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ message: "Enter your email address." }, { status: 400 });
  }

  if (typeof email !== "string" || email.trim() === "") {
    return NextResponse.json({ message: "Enter your email address." }, { status: 400 });
  }

  try {
    const response = await fetch(`${API_URL}/public/newsletter/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), source: "website" }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      // A rejected address is the visitor's problem to fix; anything else is
      // ours, and should not be described to them in the backend's words.
      const message =
        response.status === 422
          ? (payload?.errors?.[0]?.message ?? "Enter a valid email address.")
          : "Sorry, that did not go through. Please try again.";
      return NextResponse.json({ message }, { status: response.status === 422 ? 422 : 502 });
    }

    return NextResponse.json({ message: payload?.message ?? "Thanks - you are on the list" });
  } catch {
    return NextResponse.json(
      { message: "Sorry, that did not go through. Please try again." },
      { status: 502 },
    );
  }
}
