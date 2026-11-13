import type { LegalDocument } from "@/content/legal";

/** Shared layout for the Privacy Policy and Terms & Conditions pages. */
export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <article className="shell pb-[60px] pt-[40px] lg:pb-[90px] lg:pt-[60px]">
      <div className="mx-auto max-w-[820px]">
        <h1 className="text-[clamp(26px,3vw,40px)] font-bold text-ink">{doc.title}</h1>
        <p className="mt-2 text-[13px] text-ink/60">Last updated: {doc.updated}</p>
        <p className="mt-5 text-[14px] leading-[1.75] text-ink/80 lg:text-[15.5px]">{doc.intro}</p>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="text-[18px] font-semibold text-ink lg:text-[20px]">{section.heading}</h2>
            {section.paragraphs?.map((text) => (
              <p key={text} className="mt-3 text-[14px] leading-[1.75] text-ink/80 lg:text-[15.5px]">
                {text}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[14px] leading-[1.7] text-ink/80 marker:text-brand lg:text-[15.5px]">
                {section.bullets.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="mt-10 text-[14px] text-ink/80">
          Questions?{" "}
          <a href="/contact" className="font-medium text-brand hover:underline">
            Contact RentOut
          </a>
          .
        </p>
      </div>
    </article>
  );
}
