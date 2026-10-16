import type { Metadata } from "next";
import { contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact RentOut about renting, listing an asset, partnerships or technical support.",
};

/** Intro and support topics; the newsletter card and contact details follow in the shared footer. */
export default function ContactPage() {
  return (
    <section className="shell pb-[60px] pt-[40px] lg:pb-[90px] lg:pt-[60px]">
      <h1 className="text-[clamp(26px,3vw,40px)] font-bold text-ink">{contactPage.title}</h1>
      <p className="mt-2 text-[16px] font-semibold text-brand lg:text-[18px]">{contactPage.subtitle}</p>
      <p className="mt-3 max-w-[620px] text-[14px] leading-[1.7] text-ink/80 lg:text-[16px]">
        {contactPage.body}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-[40px] lg:grid-cols-4">
        {contactPage.topics.map((topic) => (
          <article
            key={topic.title}
            className="rounded-[14px] bg-[#f7f7f8] p-5 transition-transform duration-200 hover:-translate-y-1"
          >
            <h2 className="text-[16px] font-semibold text-ink">{topic.title}</h2>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-ink/70">{topic.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
