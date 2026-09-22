"use client";

import { useEffect, useState } from "react";
import { hero as fallbackHero } from "@/content/site";
import type { HeroContent } from "@/lib/cms";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function Hero({ content }: { content?: HeroContent }) {
  // `content` comes from the CMS; the shipped copy stands in when it cannot.
  const hero: HeroContent = content ?? {
    ...fallbackHero,
    imageUrl: "/img/hero-collage.png",
    imageUrls: fallbackHero.imageUrls,
  };

  const images = hero.imageUrls.length > 0 ? hero.imageUrls : [hero.imageUrl];
  const slideCount = Math.max(1, images.length);
  const [slide, setSlide] = useState(0);
  const activeSlide = Math.min(slide, slideCount - 1);
  const activeImage = images[activeSlide] ?? hero.imageUrl;
  const hasCarousel = images.length > 1;

  useEffect(() => {
    setSlide((current) => Math.min(current, slideCount - 1));
  }, [slideCount]);

  const move = (step: number) =>
    setSlide((current) => (current + step + slideCount) % slideCount);

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="shell relative">
        {/* Collage: full-bleed background placement on desktop */}
        <div className="pointer-events-none absolute bottom-[40px] left-1/2 hidden w-screen -translate-x-1/2 lg:block">
          <div className="relative mx-auto w-full max-w-[1340px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt=""
              fetchPriority="high"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="relative z-10 grid gap-8 pt-8 lg:min-h-[620px] lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-0 lg:pt-[54px]">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink/60 sm:text-[13px]">
              {hero.eyebrow}
            </p>

            <h1 className="mt-3.5 text-[clamp(32px,4.2vw,56px)] font-extrabold leading-[1.1] tracking-[0.01em]">
              {hero.titleLines.map((line, index) => (
                <span key={index} className="block">
                  {line.map((part, partIndex) => (
                    <span key={partIndex} className={part.accent ? "text-brand" : undefined}>
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="mt-4 max-w-[500px] text-[14px] leading-[1.75] text-ink/80 sm:text-[15px]">
              {hero.body}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-[46px] items-center rounded-full border border-ink px-6 text-[14px] font-medium transition-colors hover:bg-ink hover:text-white sm:h-[48px] sm:px-7 sm:text-[15px]"
              >
                {hero.secondaryCta.label}
              </a>
              <a
                href={hero.primaryCta.href}
                className="inline-flex h-[46px] items-center rounded-full bg-ink px-6 text-[14px] font-medium text-white transition-colors hover:bg-black sm:h-[48px] sm:px-7 sm:text-[15px]"
              >
                {hero.primaryCta.label}
              </a>
            </div>
          </div>
        </div>

        {/* Mobile / tablet collage */}
        <div className="relative mt-6 lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeImage}
            alt="Rent furniture, vehicles, appliances and devices"
            fetchPriority="high"
            className="h-auto w-full"
          />
        </div>

        {hasCarousel ? (
          <div className="relative z-20 flex items-center justify-center gap-[14px] pb-8 pt-4 lg:justify-end lg:gap-[16px] lg:pb-[32px]">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => move(-1)}
              className="grid h-[34px] w-[34px] place-items-center rounded-full bg-royal-deep text-white transition-opacity hover:opacity-90 lg:h-[37px] lg:w-[37px]"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-[16px] lg:gap-[21px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setSlide(index)}
                  className={
                    index === activeSlide
                      ? "h-[10px] w-[10px] rounded-full bg-[#6db0ff]"
                      : "h-[8px] w-[8px] rounded-full bg-[#eeeaea] transition-colors hover:bg-[#dcd7d7]"
                  }
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => move(1)}
              className="grid h-[34px] w-[34px] place-items-center rounded-full bg-royal-deep text-white transition-opacity hover:opacity-90 lg:h-[37px] lg:w-[37px]"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="relative z-20 pb-8 pt-4 lg:pb-[32px]" />
        )}
      </div>
    </section>
  );
}
