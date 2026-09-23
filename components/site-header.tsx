"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { appCta, nav } from "@/content/site";
import type { NavLink } from "@/lib/cms";
import { AppleIcon, CloseIcon, MenuIcon, PlayStoreIcon } from "@/components/icons";

const STORES = [
  { key: "play", line1: "GET IT ON", line2: "Google Play", Icon: PlayStoreIcon },
  { key: "app", line1: "DOWNLOAD ON THE", line2: "App Store", Icon: AppleIcon },
];

export function SiteHeader({ navLinks }: { navLinks?: NavLink[] }) {
  const links = navLinks?.length ? navLinks : nav;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(links[0]?.label ?? "");

  // The apps are not out yet, so the buttons answer rather than navigate.
  // The notice clears itself; the timer is held so a second press restarts it
  // instead of letting the first one cut the second one short.
  const [notice, setNotice] = useState(false);
  const noticeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (noticeTimer.current) clearTimeout(noticeTimer.current);
  }, []);

  function announceApp() {
    setNotice(true);
    if (noticeTimer.current) clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(false), 2500);
  }

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
        {/* Three columns from lg up, so the nav stays centred with store badges on the right. */}
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
            {links.map((item) => (
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

          <div className="relative flex items-center gap-2.5 lg:justify-self-end lg:gap-3">
            <div className="hidden items-center gap-2 xl:gap-2.5 lg:flex">
              {STORES.map(({ key, line1, line2, Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={announceApp}
                  aria-label={`${line2} - ${appCta.notice}`}
                  className="inline-flex items-center gap-2 rounded-[9px] bg-[#262626] px-3 py-1.5 text-left text-white transition-opacity hover:opacity-90"
                >
                  <Icon className="h-[20px] w-[20px] shrink-0" />
                  <span className="leading-tight">
                    <span className="block text-[8px] font-medium uppercase tracking-[0.06em] text-white/75">
                      {line1}
                    </span>
                    <span className="block text-[12.5px] font-semibold text-white">{line2}</span>
                  </span>
                </button>
              ))}
            </div>

            {notice ? (
              <span
                role="status"
                className="absolute right-0 top-[calc(100%+10px)] z-20 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.12)] lg:block"
              >
                {appCta.notice}
              </span>
            ) : null}

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
          <div className="shell relative pb-5 lg:hidden">
            <nav className="flex flex-col gap-1 border-t border-ink/10 pt-3">
              {links.map((item) => (
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

              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                {STORES.map(({ key, line1, line2, Icon }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={announceApp}
                    aria-label={`${line2} - ${appCta.notice}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-[9px] bg-[#262626] px-3 py-2 text-left text-white"
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                    <span className="leading-tight">
                      <span className="block text-[8px] font-medium uppercase tracking-[0.06em] text-white/75">
                        {line1}
                      </span>
                      <span className="block text-[12px] font-semibold text-white">{line2}</span>
                    </span>
                  </button>
                ))}
              </div>

              {notice ? (
                <span role="status" className="mt-2 text-center text-[13px] text-ink/70">
                  {appCta.notice}
                </span>
              ) : null}
            </nav>
          </div>
        ) : null}
      </header>
    </div>
  );
}
