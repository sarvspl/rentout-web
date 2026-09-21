import Image from "next/image";
import { testimonials } from "@/content/site";
import { QuoteIcon } from "@/components/icons";

export function WallOfLove() {
  return (
    <section className="shell py-[50px] lg:py-[70px]">
      <div className="text-center">
        <h2 className="text-[clamp(24px,2.8vw,38px)] font-bold text-ink">{testimonials.title}</h2>
        <p className="mt-2 text-[14px] text-ink/70">{testimonials.subtitle}</p>
      </div>

      <div className="mt-8 grid gap-5 lg:mt-[50px] lg:grid-cols-3 lg:gap-[20px]">
        {testimonials.items.map((item) => (
          <article
            key={item.name}
            className="relative rounded-[10px] border border-line bg-white p-6 lg:p-7"
          >
            <QuoteIcon className="absolute right-6 top-6 h-5 w-5 text-[#e6e6e8]" />
            <div className="flex items-center gap-3.5">
              <div className="relative h-[46px] w-[46px] overflow-hidden rounded-full">
                <Image src={item.avatar} alt={item.name} fill sizes="46px" className="object-cover" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink">{item.name}</p>
                <p className="mt-0.5 text-[12px] text-ink/55">{item.role}</p>
              </div>
            </div>
            <p className="mt-5 text-[13.5px] leading-[1.75] text-ink/80">{item.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
