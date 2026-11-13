import type { Metadata } from "next";
import { getPaymentLink } from "@/lib/payment-link";
import { PayPanel } from "@/components/pay-panel";

/**
 * Hosted payment page. The RentOut app opens <site>/pay/<token> after it
 * starts a checkout; the token comes from the API and works once.
 */
export const metadata: Metadata = {
  title: "Complete your payment",
  // A personal, one-time page: never indexed, never sent as a referrer.
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function PayPage(props: PageProps<"/pay/[token]">) {
  const { token } = await props.params;
  const result = await getPaymentLink(token);

  return (
    <section className="shell flex justify-center py-[40px] lg:py-[70px]">
      <div className="w-full max-w-[520px]">
        {result.kind === "ok" ? (
          <PayPanel link={result.link} />
        ) : (
          <div className="rounded-[20px] border border-ink/10 bg-white p-6 text-center shadow-[0_10px_30px_rgba(17,24,38,0.06)] sm:p-8">
            <h1 className="text-[22px] font-bold text-ink">
              {result.kind === "invalid" ? "This payment link is not valid" : "Payment page unavailable"}
            </h1>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink/70">
              {result.kind === "invalid"
                ? "The link may be incomplete or already replaced. Please start the payment again in the RentOut app."
                : "We could not load this payment right now. Please try again in a moment."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
