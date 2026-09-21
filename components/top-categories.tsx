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
    filterRow.current?.scrollBy({ left: step * 220, behavior: "smooth" });
  };

  return (
    <section id="categories" className="shell pb-[60px] lg:pb-[92px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[clamp(30px,3.6vw,48px)] font-semibold">Top Categories</h2>

        <div className="flex items-center gap-4">
          <div
            ref={filterRow}
            className="flex flex-1 items-center gap-3 overflow-x-auto scroll-smooth pb-1 lg:max-w-[880px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categoryFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={
                  item === filter
                    ? "h-[50px] shrink-0 rounded-full border border-ink/70 px-8 text-[17px] font-medium text-ink"
                    : "h-[50px] shrink-0 rounded-full border border-[#dcdce0] px-8 text-[17px] text-ink transition-colors hover:border-ink/50"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Previous categories"
              onClick={() => scrollFilters(-1)}
              className="grid h-[48px] w-[48px] place-items-center rounded-full border border-[#dcdce0] text-ink/50 transition-colors hover:text-ink"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="More categories"
              onClick={() => scrollFilters(1)}
              className="grid h-[48px] w-[48px] place-items-center rounded-full bg-ink text-white transition-opacity hover:opacity-90"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-[42px] lg:grid-cols-3 xl:grid-cols-5">
        {visible.map((item) => (
          <article key={item.index} className="rounded-[18px] bg-[#f7f7f8] p-[10px]">
            <div className="relative aspect-[280/210] w-full overflow-hidden rounded-[14px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                className="object-cover"
              />
              <button
                type="button"
                aria-label={liked[item.index] ? "Remove from wishlist" : "Add to wishlist"}
                aria-pressed={Boolean(liked[item.index])}
                onClick={() =>
                  setLiked((current) => ({ ...current, [item.index]: !current[item.index] }))
                }
                className="absolute right-3 top-3 grid h-[34px] w-[34px] place-items-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
              >
                <HeartIcon
                  filled={Boolean(liked[item.index])}
                  className={
                    liked[item.index] ? "h-[18px] w-[18px] text-[#ef2b2b]" : "h-[18px] w-[18px] text-ink/70"
                  }
                />
              </button>
            </div>

            <div className="px-[10px] pb-3 pt-4">
              <h3 className="text-[19px] font-medium leading-tight">{item.title}</h3>
              <p className="mt-2 line-clamp-2 text-[12.5px] leading-[1.5] text-ink/55">{item.body}</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-[13px] font-semibold">{item.price}</span>
                <span className="flex items-center gap-1 text-[13px] text-ink/60">
                  <PinIcon className="h-[14px] w-[14px]" />
                  {item.location}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center lg:mt-[54px]">
        <a
          href="#categories"
          className="inline-flex h-[62px] items-center rounded-full bg-ink px-10 text-[19px] text-white transition-colors hover:bg-black"
        >
          Explore more
        </a>
      </div>
    </section>
  );
}
