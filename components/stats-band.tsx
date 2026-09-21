import { stats } from "@/content/site";

export function StatsBand() {
  return (
    <section className="shell pb-[54px] pt-[10px] lg:pb-[86px]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,780px)_1fr] lg:gap-16">
        <p className="max-w-[750px] text-[clamp(22px,2.5vw,34px)] font-medium leading-[1.5]">
          {stats.headline.map((part, index) => (
            <span key={index} className={part.accent ? "text-brand" : undefined}>
              {part.text}
            </span>
          ))}
        </p>

        <div className="grid grid-cols-2 gap-8 self-start lg:gap-16 lg:pl-8">
          {stats.figures.map((figure) => (
            <div key={figure.label}>
              <p className="text-[clamp(38px,5vw,64px)] font-medium leading-none">{figure.value}</p>
              <p className="mt-4 text-[15px] text-ink/70 lg:text-[19px]">{figure.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
