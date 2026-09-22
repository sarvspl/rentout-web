import type { TestimonialsContent } from "@/lib/cms";
import { QuoteIcon } from "@/components/icons";

/**
 * The testimonials band. Avatars are administered in the CMS and can live on
 * any host, so a plain <img> rather than next/image.
 */
export function WallOfLove({ content }: { content: TestimonialsContent }) {
  if (content.items.length === 0) return null;

  return (
    <section className="shell py-[50px] lg:py-[70px]">
      <div className="text-center">
        <h2 className="text-[clamp(24px,2.8vw,38px)] font-bold text-ink">{content.title}</h2>
        {content.subtitle ? (
          <p className="mt-3 text-[14px] text-ink/70">{content.subtitle}</p>
        ) : null}
      </div>

      <div className="mt-8 grid gap-5 lg:mt-[50px] lg:grid-cols-3 lg:gap-6">
        {content.items.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="relative rounded-[10px] border border-line bg-white p-6 lg:p-7"
          >
            <QuoteIcon className="absolute right-6 top-6 h-5 w-5 text-[#e6e6e8]" />
            <div className="flex items-center gap-3.5">
              <div className="h-[46px] w-[46px] overflow-hidden rounded-full bg-[#eeeeef]">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink">{item.name}</p>
                {item.role ? <p className="mt-0.5 text-[12.5px] text-ink/55">{item.role}</p> : null}
              </div>
            </div>
            <p className="mt-6 text-[14px] leading-[1.8] text-ink/85">{item.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
