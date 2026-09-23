"use client";

import { useEffect, useRef, useState } from "react";
import { appCta } from "@/content/site";
import { AppleIcon, PlayStoreIcon } from "@/components/icons";

const STORES = [
  { key: "play", line1: "GET IT ON", line2: "Google Play", Icon: PlayStoreIcon },
  { key: "app", line1: "DOWNLOAD ON THE", line2: "App Store", Icon: AppleIcon },
];

/**
 * The two app store badges in the footer.
 *
 * Neither app is published yet, so these answer instead of leading anywhere:
 * a button, not a link, and one short notice under both of them. The same
 * wording as the navbar button, from the same place.
 */
export function StoreBadges() {
  const [notice, setNotice] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function announce() {
    setNotice(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setNotice(false), 2500);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {STORES.map(({ key, line1, line2, Icon }) => (
          <button
            key={key}
            type="button"
            onClick={announce}
            aria-label={`${line2} - ${appCta.notice}`}
            className="inline-flex items-center gap-2.5 rounded-[10px] bg-ink px-4 py-2 text-left text-white transition-opacity hover:opacity-90"
          >
            <Icon className="h-[22px] w-[22px] shrink-0" />
            <span className="leading-tight">
              <span className="block text-[9px] uppercase tracking-[0.08em] text-white/75">
                {line1}
              </span>
              <span className="block text-[14px] font-semibold">{line2}</span>
            </span>
          </button>
        ))}
      </div>

      {notice ? (
        <p role="status" className="mt-2 text-[13px] text-ink/70">
          {appCta.notice}
        </p>
      ) : null}
    </div>
  );
}
