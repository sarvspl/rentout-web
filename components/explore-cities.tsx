import type { CitiesContent } from "@/lib/cms";
import { ArrowUpRightIcon } from "@/components/icons";

/**
 * The city strip. Each tile's `span` is its share of the row, which is how
 * the design's uneven rhythm survives an editor adding or removing a tile.
 *
 * Photos are administered in the CMS and can live on any host, so a plain
 * <img> rather than next/image.
 */
export function ExploreCities({ content }: { content: CitiesContent }) {
  if (content.rows.length === 0) return null;

  return (
    <section className="shell pb-[50px] lg:pb-[70px]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-bold text-ink">{content.title}</h2>
          {content.subtitle ? (
            <p className="mt-2 text-[14px] text-ink/70">{content.subtitle}</p>
          ) : null}
        </div>
        {content.linkLabel ? (
          <a
            href={content.linkHref}
            className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-brand hover:underline"
          >
            {content.linkLabel}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>

      <div className="mt-6 space-y-4 lg:mt-[36px]">
        {content.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid gap-4 sm:grid-cols-2 lg:flex lg:gap-4">
            {row.map((city, index) => (
              <article
                key={`${city.name}-${rowIndex}-${index}`}
                className="group relative h-[160px] overflow-hidden lg:h-[200px]"
                style={{ flexGrow: city.span, flexBasis: 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={city.image}
                  alt={city.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-[90px] bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute left-4 top-3 text-white">
                  <p className="text-[14px] font-semibold">{city.name}</p>
                  {city.caption ? (
                    <p className="mt-0.5 text-[12px] text-white/80">{city.caption}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
