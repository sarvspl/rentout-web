"use client";

import Image from "next/image";
import { useState } from "react";
import { hero } from "@/content/site";
import { CartIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function Hero() {
  const [slide, setSlide] = useState(0);
  const move = (step: number) =>
    setSlide((current) => (current + step + hero.slides) % hero.slides);

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="shell relative">
        {/* Collage: full-bleed on large screens, stacked below the copy on small ones. */}
        <div className="pointer-events-none absolute bottom-[96px] left-1/2 hidden w-screen -translate-x-1/2 lg:block">
          <div className="relative mx-auto w-full max-w-[1794px]">
            <Image
              src="/img/hero-collage.png"
              alt=""
              width={1800}
              height={914}
              priority
              className="h-auto w-full"
            />
            {hero.pins.map((pin, index) => (
              <Pin key={`${pin.label}-${index}`} label={pin.label} left={pin.left} top={pin.top} />
            ))}
          </div>
        </div>

        <div className="relative z-10 grid gap-10 pt-10 lg:min-h-[900px] lg:grid-cols-[minmax(0,760px)_1fr] lg:gap-0 lg:pt-[104px]">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-ink/60 sm:text-[14px]">
              {hero.eyebrow}
            </p>

            <h1 className="mt-5 text-[clamp(42px,7.2vw,84px)] font-extrabold leading-[1.08] tracking-[0.02em]">
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

            <p className="mt-6 max-w-[690px] text-[16px] leading-[1.85] text-ink/85 sm:text-[19px]">
              {hero.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-[58px] items-center rounded-full border border-ink px-8 text-[17px] transition-colors hover:bg-ink hover:text-white sm:h-[62px] sm:px-10 sm:text-[20px]"
              >
                {hero.secondaryCta.label}
              </a>
              <a
                href={hero.primaryCta.href}
                className="inline-flex h-[58px] items-center rounded-full bg-ink px-8 text-[17px] text-white transition-colors hover:bg-black sm:h-[62px] sm:px-10 sm:text-[20px]"
              >
                {hero.primaryCta.label}
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute right-[6%] top-[18px] flex items-center gap-3 rounded-[14px] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.10)] backdrop-blur">
              <span className="grid h-[52px] w-[52px] place-items-center rounded-[12px] bg-brand text-white">
                <CartIcon className="h-6 w-6" />
              </span>
              <span className="text-[19px] leading-[1.3]">
                {hero.badge[0]}
                <br />
                {hero.badge[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile / tablet collage */}
        <div className="relative mt-8 lg:hidden">
          <Image
            src="/img/hero-collage.png"
            alt="Rent furniture, vehicles, appliances and devices"
            width={1800}
            height={914}
            priority
            className="h-auto w-full"
          />
          {hero.pins.map((pin, index) => (
            <Pin key={`${pin.label}-m-${index}`} label={pin.label} left={pin.left} top={pin.top} small />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pb-10 pt-6 lg:justify-end lg:gap-6 lg:pb-[46px]">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => move(-1)}
            className="grid h-[44px] w-[44px] place-items-center rounded-full bg-royal-deep text-white transition-opacity hover:opacity-90 lg:h-[52px] lg:w-[52px]"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 lg:gap-[18px]">
            {Array.from({ length: hero.slides }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setSlide(index)}
                className={
                  index === slide
                    ? "h-[13px] w-[13px] rounded-full bg-royal"
                    : "h-[13px] w-[13px] rounded-full bg-[#dfe3ea] transition-colors hover:bg-[#c7cdd8]"
                }
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => move(1)}
            className="grid h-[44px] w-[44px] place-items-center rounded-full bg-royal text-white transition-opacity hover:opacity-90 lg:h-[52px] lg:w-[52px]"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Pin({
  label,
  left,
  top,
  small,
}: {
  label: string;
  left: number;
  top: number;
  small?: boolean;
}) {
  return (
    <span
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <span
        className={
          small
            ? "relative grid h-[34px] min-w-[34px] place-items-center rounded-full bg-white px-2 text-[10px] font-medium shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
            : "relative grid h-[46px] min-w-[46px] place-items-center rounded-full bg-white px-3 text-[14px] font-medium shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        }
      >
        {label}
        <span className="absolute -right-1 -bottom-0.5 h-[10px] w-[10px] rounded-full bg-brand" />
      </span>
    </span>
  );
}
