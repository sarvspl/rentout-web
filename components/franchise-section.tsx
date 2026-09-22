import Image from "next/image";
import { franchise as fallbackFranchise } from "@/content/site";
import type { FranchiseContent } from "@/lib/cms";
import { PinIcon } from "@/components/icons";

export function FranchiseSection({ content }: { content?: FranchiseContent }) {
  const franchise: FranchiseContent = content ?? fallbackFranchise;

  return (
    <section className="shell py-[50px] lg:py-[70px]">
      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-[32px]">
        <div className="lg:pt-[16px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/70">
            {franchise.eyebrow}
          </p>
          <h2 className="mt-3 text-[clamp(22px,2.4vw,32px)] font-bold leading-[1.25] text-ink">
            {franchise.title}
          </h2>
          <p className="mt-4 max-w-[280px] text-[13.5px] leading-[1.6] text-ink/75">
            {franchise.body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {franchise.plans.map((plan) => (
            <article
              key={`${plan.tier}-${plan.name}`}
              className="flex flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_6px_24px_rgba(17,24,38,0.08)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative aspect-[304/300] w-full">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-ink-deep/85 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                  <PinIcon className="h-3 w-3" />
                  {plan.tier}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-3.5">
                <h3 className="text-[16px] font-semibold leading-tight text-ink">{plan.name}</h3>
                <p className="mt-0.5 text-[10.5px] text-ink/60">{plan.scope}</p>

                <div className="mt-3 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[17px] font-bold leading-none text-ink">{plan.price}</p>
                    <p className="mt-1 text-[9.5px] text-ink/60">{plan.priceNote}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] font-bold leading-none text-grape">{plan.commission}</p>
                    <p className="mt-1 text-[9px] text-ink/60">commission</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 text-[11px] text-ink/80">
                      <span className="mt-[5px] h-[4px] w-[4px] shrink-0 rounded-full bg-grape" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
