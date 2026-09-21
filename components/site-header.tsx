"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "@/content/site";
import { CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].label);

  return (
    <div className="px-2 pt-2 sm:px-3 sm:pt-3">
      <header className="rounded-[26px] bg-cream">
        <div className="shell flex h-[86px] items-center justify-between gap-6 lg:h-[112px]">
          <a href="#home" className="shrink-0">
            <Image
              src="/img/logo.png"
              alt="RentOut"
              width={360}
              height={360}
              priority
              className="h-[62px] w-[62px] object-contain lg:h-[111px] lg:w-[111px]"
            />
          </a>

          <nav className="hidden items-center gap-[52px] lg:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={
                  active === item.label
                    ? "relative text-[20px] text-brand after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-brand"
                    : "text-[20px] text-ink transition-colors hover:text-brand"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:gap-5">
            <button
              type="button"
              aria-label="Search"
              className="grid h-[52px] w-[52px] place-items-center rounded-full bg-ink text-white transition-transform hover:scale-105 lg:h-[66px] lg:w-[66px]"
            >
              <SearchIcon className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>

            <a
              href="#contact"
              className="hidden h-[62px] items-center rounded-full bg-ink px-9 text-[20px] text-white transition-colors hover:bg-black lg:inline-flex"
            >
              Get Started
            </a>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="grid h-[52px] w-[52px] place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="shell pb-6 lg:hidden">
            <nav className="flex flex-col gap-1 border-t border-ink/10 pt-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setOpen(false);
                  }}
                  className="rounded-xl px-2 py-3 text-[17px] text-ink hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-[52px] items-center justify-center rounded-full bg-ink px-8 text-[16px] text-white"
              >
                Get Started
              </a>
            </nav>
          </div>
        ) : null}
      </header>
    </div>
  );
}
