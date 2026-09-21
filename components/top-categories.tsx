"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { categoryFilters, listings } from "@/content/site";
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, PinIcon } from "@/components/icons";

export function TopCategories() {
  const [filter, setFilter] = useState<string>(categoryFilters[0]);
  const [liked, setLiked] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(listings.map((item, index) => [index, Boolean(item.liked)])),
  );
  const filterRow = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () =>
      listings
        .map((item, index) => ({ ...item, index }))
        .filter((item) => filter === "All" || item.category === filter),
    [filter],
  );

  const scrollFilters = (step: number) => {
    filterRow.current?.scrollBy({ left: step * 200, behavior: "smooth" });
  };

  return (
    <section id="categories" className="shell pb-[50px] lg:pb-[70px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold text-ink">Top Categories</h2>

        <div className="flex items-center gap-3">
          <div
            ref={filterRow}
            className="flex flex-1 items-center gap-2 overflow-x-auto scroll-smooth pb-1 lg:max-w-[700px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categoryFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={
                  item === filter
                    ? "h-[38px] shrink-0 rounded-full border border-ink bg-ink px-5 text-[13.5px] font-medium text-white"
                    : "h-[38px] shrink-0 rounded-full border border-[#dcdce0] bg-white px-5 text-[13.5px] text-ink transition-colors hover:border-ink/50"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <button
              type="button"
              aria-label="Previous categories"
              onClick={() => scrollFilters(-1)}
              className="grid h-[38px] w-[38px] place-items-center rounded-full border border-[#dcdce0] text-ink/60 transition-colors hover:text-ink"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="More categories"
              onClick={() => scrollFilters(1)}
              className="grid h-[38px] w-[38px] place-items-center rounded-full bg-ink text-white transition-opacity hover:opacity-90"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-[32px] lg:grid-cols-3 xl:grid-cols-5">
        {visible.map((item) => (
          <article key={item.index} className="rounded-[14px] bg-[#f7f7f8] p-[8px] transition-transform duration-200 hover:-translate-y-1">
            <div className="relative aspect-[280/200] w-full overflow-hidden rounded-[10px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />
              <button
                type="button"
                aria-label={liked[item.index] ? "Remove from wishlist" : "Add to wishlist"}
                aria-pressed={Boolean(liked[item.index])}
                onClick={() =>
                  setLiked((current) => ({ ...current, [item.index]: !current[item.index] }))
                }
                className="absolute right-2.5 top-2.5 grid h-[30px] w-[30px] place-items-center rounded-full bg-white/95 shadow-[0_3px_8px_rgba(0,0,0,0.12)]"
              >
                <HeartIcon
                  filled={Boolean(liked[item.index])}
                  className={
                    liked[item.index] ? "h-[15px] w-[15px] text-[#ef2b2b]" : "h-[15px] w-[15px] text-ink/70"
                  }
                />
              </button>
            </div>

            <div className="px-[8px] pb-2 pt-3">
              <h3 className="text-[15px] font-semibold leading-snug text-ink">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-[12px] leading-[1.45] text-ink/60">{item.body}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[13px] font-bold text-ink">{item.price}</span>
                <span className="flex items-center gap-1 text-[11.5px] text-ink/60">
                  <PinIcon className="h-[12px] w-[12px]" />
                  {item.location}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center lg:mt-[40px]">
        <a
          href="#categories"
          className="inline-flex h-[46px] items-center rounded-full bg-ink px-8 text-[14px] font-medium text-white transition-colors hover:bg-black"
        >
          Explore more
        </a>
      </div>
    </section>
  );
}
