"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatRupees, type PaymentLink } from "@/lib/payment-link";

/**
 * The payment card on /pay/<token>.
 *
 * Opens Razorpay Checkout with the order the API prepared, then hands the
 * result to /api/payments/verify. Nothing is marked paid here: on success the
 * page re-reads the link from the API and shows whatever the API now says.
 */

type RazorpayResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayInstance = {
  open: () => void;
  on: (event: "payment.failed", callback: (response: { error?: { description?: string } }) => void) => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

const CHECKOUT_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

function loadCheckout(): Promise<boolean> {
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${CHECKOUT_SCRIPT}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve(Boolean(window.Razorpay)));
    script.addEventListener("error", () => resolve(false));
    if (!existing) {
      script.src = CHECKOUT_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  });
}

type Phase =
  | { kind: "idle"; message?: string }
  | { kind: "opening" }
  | { kind: "paying" }
  | { kind: "verifying" }
  | { kind: "refund"; message: string };

const STATE_COPY: Record<Exclude<PaymentLink["state"], "READY" | "PAID">, { title: string; body: string }> = {
  EXPIRED: {
    title: "This payment link has expired",
    body: "For your security, payment links work for a limited time. Please start the payment again in the RentOut app.",
  },
  SUPERSEDED: {
    title: "A newer payment was started",
    body: "You started another payment for this in the app. Please use the latest link.",
  },
  UNAVAILABLE: {
    title: "Nothing to pay here",
    body: "What this link was for can no longer be paid - it may already be paid or cancelled. Check the RentOut app for its current status.",
  },
  REFUNDED: {
    title: "This payment was refunded",
    body: "The amount has been returned to your original payment method.",
  },
};

function formatDate(value: string | null) {
  return value ? new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "";
}

function ReturnToApp({ url }: { url: string | null }) {
  if (!url) return <p className="mt-4 text-[13px] text-ink/60">You can now close this page and return to the RentOut app.</p>;
  return (
    <a
      href={url}
      className="mt-5 inline-flex h-[46px] w-full items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white transition-colors hover:bg-black"
    >
      Back to the RentOut app
    </a>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[20px] border border-ink/10 bg-white p-6 shadow-[0_10px_30px_rgba(17,24,38,0.06)] sm:p-8">
      {children}
    </div>
  );
}

export function PayPanel({ link }: { link: PaymentLink }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>(
    link.lastAttemptFailed
      ? { kind: "idle", message: `Your last attempt did not go through${link.failureReason ? `: ${link.failureReason}` : ""}. You can try again.` }
      : { kind: "idle" },
  );

  // ---- settled or unusable links ------------------------------------------
  if (link.state === "PAID") {
    const result = link.result;
    return (
      <Card>
        <div className="mx-auto grid h-[56px] w-[56px] place-items-center rounded-full bg-[#e8f7ee] text-[28px] text-[#1a7f45]" aria-hidden>
          ✓
        </div>
        <h1 className="mt-4 text-center text-[22px] font-bold text-ink">Payment successful</h1>
        <p className="mt-1 text-center text-[14px] text-ink/70">
          {formatRupees(link.amount)} paid{link.paidAt ? ` on ${formatDate(link.paidAt)}` : ""}.
        </p>
        {result?.type === "SUBSCRIPTION" && (
          <p className="mt-4 rounded-[12px] bg-[#f6f7f9] p-4 text-center text-[14px] text-ink">
            {result.state === "SCHEDULED"
              ? `Your ${result.planName} plan starts on ${formatDate(result.startsAt)} and runs until ${formatDate(result.endsAt)}.`
              : `Your ${result.planName} plan is active until ${formatDate(result.endsAt)}.`}
          </p>
        )}
        {result?.type === "BOOKING" && (
          <p className="mt-4 rounded-[12px] bg-[#f6f7f9] p-4 text-center text-[14px] text-ink">
            Rent for booking <span className="font-mono font-semibold">{result.reference}</span> is paid.
          </p>
        )}
        {result?.type === "FRANCHISE" && (
          <p className="mt-4 rounded-[12px] bg-[#f6f7f9] p-4 text-center text-[14px] text-ink">
            Reference <span className="font-mono font-semibold">{result.reference}</span>. Our team will contact you shortly.
          </p>
        )}
        <ReturnToApp url={link.returnUrl} />
      </Card>
    );
  }

  if (link.state !== "READY" || !link.checkout) {
    const copy = STATE_COPY[link.state as keyof typeof STATE_COPY] ?? STATE_COPY.UNAVAILABLE;
    return (
      <Card>
        <h1 className="text-[22px] font-bold text-ink">{copy.title}</h1>
        <p className="mt-2 text-[14px] leading-[1.6] text-ink/70">{copy.body}</p>
        <ReturnToApp url={link.returnUrl} />
      </Card>
    );
  }

  if (phase.kind === "refund") {
    return (
      <Card>
        <h1 className="text-[22px] font-bold text-ink">Payment received</h1>
        <p className="mt-2 text-[14px] leading-[1.6] text-ink/70">{phase.message}</p>
        <ReturnToApp url={link.returnUrl} />
      </Card>
    );
  }

  // ---- ready to pay -----------------------------------------------------------
  const checkout = link.checkout;
  const busy = phase.kind !== "idle";

  async function verify(response: RazorpayResponse) {
    setPhase({ kind: "verifying" });
    try {
      const result = await fetch("/api/payments/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
      });
      const payload = await result.json().catch(() => null);
      if (!result.ok) {
        setPhase({ kind: "idle", message: payload?.message ?? "We could not confirm the payment." });
        return;
      }
      if (payload?.needsRefund) {
        setPhase({ kind: "refund", message: payload.message });
        return;
      }
      // The API now says PAID: re-render from it.
      router.refresh();
    } catch {
      setPhase({
        kind: "idle",
        message: "We could not confirm the payment. If money was taken it will be confirmed automatically - check the app in a few minutes.",
      });
    }
  }

  async function pay() {
    setPhase({ kind: "opening" });
    const ready = await loadCheckout();
    if (!ready || !window.Razorpay) {
      setPhase({ kind: "idle", message: "The payment window could not be loaded. Check your connection and try again." });
      return;
    }

    const razorpay = new window.Razorpay({
      key: checkout.keyId,
      order_id: checkout.orderId,
      amount: checkout.amount,
      currency: checkout.currency,
      name: checkout.name,
      description: checkout.description,
      prefill: checkout.prefill,
      theme: { color: "#f96e12" },
      handler: (response: RazorpayResponse) => verify(response),
      modal: {
        ondismiss: () =>
          setPhase((current) =>
            current.kind === "paying" ? { kind: "idle", message: "Payment was not completed. You can try again." } : current,
          ),
      },
    });
    razorpay.on("payment.failed", (response) => {
      setPhase({ kind: "idle", message: response.error?.description ?? "The payment failed. You can try again." });
    });
    setPhase({ kind: "paying" });
    razorpay.open();
  }

  return (
    <Card>
      <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/55">Complete your payment</p>
      <h1 className="mt-2 text-[24px] font-bold leading-tight text-ink">{link.title}</h1>

      <dl className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
        {link.lines.map((line) => (
          <div key={line.label} className="flex items-baseline justify-between gap-4 py-2.5 text-[14px]">
            <dt className="text-ink/60">{line.label}</dt>
            <dd className="text-right font-medium text-ink">{line.money ? formatRupees(line.value) : line.value}</dd>
          </div>
        ))}
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-[15px] font-semibold text-ink">Total</dt>
          <dd className="text-[22px] font-bold text-ink">{formatRupees(link.amount)}</dd>
        </div>
      </dl>

      {phase.kind === "idle" && phase.message && (
        <p role="alert" className="mt-4 rounded-[10px] bg-[#fdecec] px-3 py-2 text-[13px] text-[#b42318]">
          {phase.message}
        </p>
      )}

      <button
        type="button"
        onClick={pay}
        disabled={busy}
        className="mt-5 inline-flex h-[50px] w-full items-center justify-center rounded-full bg-brand text-[16px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {phase.kind === "verifying"
          ? "Confirming payment…"
          : phase.kind === "opening" || phase.kind === "paying"
            ? "Waiting for payment…"
            : `Pay ${formatRupees(link.amount)}`}
      </button>

      <p className="mt-3 text-center text-[12px] text-ink/55">
        Secure payment by Razorpay · UPI, cards, netbanking and wallets
      </p>
      {link.expiresAt && (
        <p className="mt-1 text-center text-[11px] text-ink/45">
          This link works until {new Date(link.expiresAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}.
        </p>
      )}
    </Card>
  );
}
