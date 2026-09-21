"use client";

import { useState } from "react";
import { faq } from "@/content/site";
import { MinusIcon, PlusIcon } from "@/components/icons";

type Item = { id: string; question: string };

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(faq.columnOne[0].id);

  const toggle = (id: string) => setOpen((current) => (current === id ? null : id));

  return (
    <section className="relative overflow-hidden rounded-tl-[60px] bg-[linear-gradient(120deg,#fff1e6_0%,#fff8f3_38%,#ffffff_72%)] py-[60px] lg:rounded-tl-[90px] lg:py-[96px]">
      <div className="shell">
        <h2 className="text-center text-[clamp(26px,3.1vw,40px)] font-semibold text-navy">
          {faq.title}
        </h2>

        <div className="mx-auto mt-10 grid max-w-[1200px] gap-5 lg:mt-[76px] lg:grid-cols-2 lg:items-start">
          <div className="space-y-5">
            {faq.columnOne.map((item) => (
              <FaqCard key={item.id} item={item} open={open === item.id} onToggle={toggle} />
            ))}
          </div>
          <div className="space-y-5">
            {faq.columnTwo.map((item) => (
              <FaqCard key={item.id} item={item} open={open === item.id} onToggle={toggle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqCard({
  item,
  open,
  onToggle,
}: {
  item: Item;
  open: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="rounded-[12px] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(24,42,84,0.08)]">
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        aria-expanded={open}
        className="flex w-full items-center gap-5 text-left"
      >
        <span className="shrink-0 text-ink/45">
          {open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
        </span>
        <span className="text-[15px] font-medium text-ink lg:text-[16px]">{item.question}</span>
      </button>

      {open ? (
        <p className="mt-4 max-w-[380px] pl-9 text-[12.5px] leading-[1.75] text-ink/60">
          {faq.answer}
        </p>
      ) : null}
    </div>
  );
}
