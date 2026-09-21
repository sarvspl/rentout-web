import Image from "next/image";
import { cities } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";

export function ExploreCities() {
  return (
    <section className="shell pb-[60px] lg:pb-[100px]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[clamp(30px,3.7vw,50px)] font-semibold">{cities.title}</h2>
          <p className="mt-3 text-[15px] text-ink/70">{cities.subtitle}</p>
        </div>
        <a
          href="#categories"
          className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand hover:underline"
        >
          {cities.linkLabel}
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8 space-y-5 lg:mt-[54px]">
        {cities.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid gap-5 sm:grid-cols-2 lg:flex lg:gap-5">
            {row.map((city, index) => (
              <article
                key={`${city.name}-${rowIndex}-${index}`}
                className="group relative h-[200px] overflow-hidden rounded-[10px] lg:h-[260px]"
                style={{ flexGrow: city.span, flexBasis: 0 }}
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-black/55 to-transparent" />
                <div className="absolute left-5 top-4 text-white">
                  <p className="text-[15px] font-semibold">{city.name}</p>
                  <p className="mt-0.5 text-[13px] text-white/85">{city.count}</p>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
