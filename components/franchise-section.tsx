import Image from "next/image";
import { franchise } from "@/content/site";
import { PinIcon } from "@/components/icons";

export function FranchiseSection() {
  return (
    <section className="shell py-[60px] lg:py-[96px]">
      <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-[36px]">
        <div className="lg:pt-[24px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink/70">
            {franchise.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.22]">
            {franchise.title}
          </h2>
          <p className="mt-6 max-w-[320px] text-[15px] leading-[1.65] text-ink/75 lg:text-[16px]">
            {franchise.body}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {franchise.plans.map((plan) => (
            <article
              key={plan.tier}
              className="flex flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_10px_40px_rgba(17,24,38,0.10)]"
            >
              <div className="relative aspect-[304/330] w-full">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-deep/85 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur">
                  <PinIcon className="h-3.5 w-3.5" />
                  {plan.tier}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[19px] font-semibold leading-tight">{plan.name}</h3>
                <p className="mt-1 text-[11px] text-ink/60">{plan.scope}</p>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[21px] font-bold leading-none">{plan.price}</p>
                    <p className="mt-1.5 text-[10px] text-ink/60">{plan.priceNote}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[19px] font-bold leading-none text-grape">{plan.commission}</p>
                    <p className="mt-1.5 text-[9px] text-ink/60">commission</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[11.5px] text-ink/85">
                      <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-grape" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                  <div>
                    <p className="text-[12px] font-semibold">{plan.footerTitle}</p>
                    <p className="mt-0.5 text-[9.5px] text-ink/60">{plan.footerNote}</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex h-[34px] shrink-0 items-center rounded-full bg-ink-deep px-4 text-[11.5px] font-medium text-white transition-colors hover:bg-black"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
