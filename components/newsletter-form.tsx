"use client";

import { useState } from "react";
import { MailIcon } from "@/components/icons";

type Status = { tone: "idle" | "success" | "error"; message: string };

/**
 * The sign-up form.
 *
 * Posts to this app's own route handler, which forwards to the API. The
 * answer is the same whether the address was new or already subscribed, so
 * the form cannot be used to check whether someone is on the list.
 */
export function NewsletterForm({
  placeholder,
  ctaLabel,
}: {
  placeholder: string;
  ctaLabel: string;
}) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ tone: "idle", message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ tone: "idle", message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus({
          tone: "error",
          message: payload?.message ?? "Sorry, that did not go through. Please try again.",
        });
        return;
      }

      setEmail("");
      setStatus({ tone: "success", message: "Thanks — you’re on the list." });
    } catch {
      setStatus({ tone: "error", message: "Sorry, that did not go through. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-[420px]">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full bg-[#5d86ea] p-1">
        <span aria-hidden className="grid h-[36px] w-[36px] shrink-0 place-items-center text-white/80">
          <MailIcon className="h-4 w-4" />
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          disabled={submitting}
          className="h-[36px] min-w-0 flex-1 bg-transparent text-[13px] text-white placeholder:text-white/80 focus:outline-none disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={submitting}
          className="h-[36px] shrink-0 rounded-full bg-white px-5 text-[13px] font-medium text-ink transition-colors hover:bg-white/90 disabled:opacity-70"
        >
          {submitting ? "Sending…" : ctaLabel}
        </button>
      </form>

      {status.message ? (
        <p
          role="status"
          aria-live="polite"
          className={
            status.tone === "error"
              ? "mt-2 text-[12px] text-[#ffd9d4]"
              : "mt-2 text-[12px] text-white"
          }
        >
          {status.message}
        </p>
      ) : null}
    </div>
  );
}
