"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "@/content/site";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].label);

  return (
    <div>
      {/* Figma: bottom radius 24px, 1px #FFCFB0 border, fill at 68% opacity,
          linear-gradient(90deg,#FFFFFB 0%,#FDF8EF 73.9%), blur(207.7px).
          The fill is its own layer so the 68% never touches the logo or links. */}
      <header className="relative rounded-b-[24px] border-b border-[#FFCFB0]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-b-[24px] bg-[linear-gradient(90deg,#FFFFFB_0%,#FDF8EF_73.9%)] opacity-[0.68] backdrop-blur-[207.7px]"
        />
        {/* Three columns from lg up, so the nav stays centred with nothing on the right. */}
        <div className="shell relative flex h-[68px] items-center justify-between gap-4 lg:grid lg:h-[80px] lg:grid-cols-[1fr_auto_1fr]">
          <a href="#home" className="shrink-0 lg:justify-self-start">
            <Image
              src="/img/logo.png"
              alt="RentOut"
              width={240}
              height={240}
              priority
              className="h-[50px] w-[50px] object-contain lg:h-[64px] lg:w-[64px]"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex lg:justify-self-center xl:gap-10">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={
                  active === item.label
                    ? "relative text-[15px] font-medium text-brand after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-brand"
                    : "text-[15px] font-medium text-ink transition-colors hover:text-brand"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 lg:justify-self-end lg:gap-3.5">
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="grid h-[42px] w-[42px] place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="shell pb-5 lg:hidden">
            <nav className="flex flex-col gap-1 border-t border-ink/10 pt-3">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setOpen(false);
                  }}
                  className="rounded-lg px-3 py-2 text-[15px] text-ink hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
    </div>
  );
}
