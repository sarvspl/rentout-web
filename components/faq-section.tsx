"use client";

import { useState } from "react";
import { faq } from "@/content/site";
import { MinusIcon, PlusIcon } from "@/components/icons";

type Item = { id: string; question: string };

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(faq.columnOne[0].id);

  const toggle = (id: string) => setOpen((current) => (current === id ? null : id));

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(240deg,#fff1e6_0%,#fff8f3_38%,#ffffff_72%)] py-[50px] lg:py-[70px]">
      <div className="shell">
        <h2 className="text-center text-[clamp(22px,2.5vw,32px)] font-bold text-navy">
          {faq.title}
        </h2>

        <div className="mx-auto mt-8 grid max-w-[1000px] gap-4 lg:mt-[50px] lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            {faq.columnOne.map((item) => (
              <FaqCard key={item.id} item={item} open={open === item.id} onToggle={toggle} />
            ))}
          </div>
          <div className="space-y-4">
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
    <div className="rounded-[10px] bg-white px-5 py-4 shadow-[0_6px_20px_rgba(24,42,84,0.06)]">
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 text-left"
      >
        <span className="shrink-0 text-ink/50">
          {open ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
        </span>
        <span className="text-[14px] font-medium text-ink lg:text-[15px]">{item.question}</span>
      </button>

      {open ? (
        <p className="mt-3 max-w-[360px] pl-7 text-[12px] leading-[1.65] text-ink/65">
          {faq.answer}
        </p>
      ) : null}
    </div>
  );
}
