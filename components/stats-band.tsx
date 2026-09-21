import { stats } from "@/content/site";

export function StatsBand() {
  return (
    <section className="shell pb-[40px] pt-[6px] lg:pb-[60px]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-12">
        <p className="max-w-[620px] text-[clamp(18px,2vw,24px)] font-medium leading-[1.5] text-ink">
          {stats.headline.map((part, index) => (
            <span key={index} className={part.accent ? "text-brand font-semibold" : undefined}>
              {part.text}
            </span>
          ))}
        </p>

        <div className="grid grid-cols-2 gap-6 self-start lg:gap-10 lg:pl-6">
          {stats.figures.map((figure) => (
            <div key={figure.label}>
              <p className="text-[clamp(28px,3.5vw,44px)] font-bold leading-none text-ink">{figure.value}</p>
              <p className="mt-2 text-[13px] text-ink/70 lg:text-[15px]">{figure.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
