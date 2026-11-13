/**
 * Hosted payment links (<site>/pay/<token>), read from the RentOut API.
 *
 * The app starts a checkout and opens the link here; this site only ever sees
 * what the API returns for the token, and payment is confirmed by the API.
 */
const API_URL = (process.env.RENTOUT_API_URL ?? "http://127.0.0.1:8081/api/v1").replace(/\/$/, "");

export type PaymentLinkState = "READY" | "PAID" | "REFUNDED" | "EXPIRED" | "SUPERSEDED" | "UNAVAILABLE";

export type PaymentLink = {
  state: PaymentLinkState;
  purpose: "AGENCY_SUBSCRIPTION" | "BOOKING" | "FRANCHISE";
  title: string;
  lines: { label: string; value: string; money?: boolean }[];
  amount: string;
  currency: string;
  expiresAt: string | null;
  lastAttemptFailed: boolean;
  failureReason: string | null;
  returnUrl: string | null;
  checkout: {
    keyId: string;
    orderId: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    prefill: { name: string; email: string; contact: string };
  } | null;
  result:
    | { type: "SUBSCRIPTION"; planName: string; state: string; startsAt: string | null; endsAt: string | null }
    | { type: "BOOKING"; reference: string; paymentStatus: string }
    | { type: "FRANCHISE"; reference: string }
    | null;
  paidAt: string | null;
};

export type PaymentLinkResult =
  | { kind: "ok"; link: PaymentLink }
  | { kind: "invalid" }
  | { kind: "unavailable" };

/** Shape the API promises; anything else is treated as "could not load". */
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;

export async function getPaymentLink(token: string): Promise<PaymentLinkResult> {
  if (!TOKEN_PATTERN.test(token)) return { kind: "invalid" };
  try {
    const response = await fetch(`${API_URL}/payments/links/${token}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (response.status === 404 || response.status === 422) return { kind: "invalid" };
    if (!response.ok) return { kind: "unavailable" };
    const payload = await response.json();
    const link = payload?.data?.link as PaymentLink | undefined;
    return link ? { kind: "ok", link } : { kind: "unavailable" };
  } catch {
    return { kind: "unavailable" };
  }
}

/** "36500.00" -> "₹36,500"; keeps paise when there are any. */
export function formatRupees(amount: string) {
  const value = Number(amount);
  return `₹${value.toLocaleString("en-IN", { minimumFractionDigits: value % 1 ? 2 : 0, maximumFractionDigits: 2 })}`;
}
