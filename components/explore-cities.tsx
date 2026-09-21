import Image from "next/image";
import { cities } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";

export function ExploreCities() {
  return (
    <section className="shell pb-[50px] lg:pb-[70px]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-bold text-ink">{cities.title}</h2>
          <p className="mt-2 text-[14px] text-ink/70">{cities.subtitle}</p>
        </div>
        <a
          href="#categories"
          className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-brand hover:underline"
        >
          {cities.linkLabel}
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-6 space-y-4 lg:mt-[36px]">
        {cities.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid gap-4 sm:grid-cols-2 lg:flex lg:gap-4">
            {row.map((city, index) => (
              <article
                key={`${city.name}-${rowIndex}-${index}`}
                className="group relative h-[160px] overflow-hidden lg:h-[200px]"
                style={{ flexGrow: city.span, flexBasis: 0 }}
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-[90px] bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute left-4 top-3 text-white">
                  <p className="text-[14px] font-semibold">{city.name}</p>
                  <p className="mt-0.5 text-[12px] text-white/80">{city.count}</p>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
