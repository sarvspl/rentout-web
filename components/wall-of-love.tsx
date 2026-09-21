import Image from "next/image";
import { testimonials } from "@/content/site";
import { QuoteIcon } from "@/components/icons";

export function WallOfLove() {
  return (
    <section className="shell py-[60px] lg:py-[90px]">
      <div className="text-center">
        <h2 className="text-[clamp(30px,3.7vw,50px)] font-semibold">{testimonials.title}</h2>
        <p className="mt-4 text-[15px] text-ink/70">{testimonials.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:mt-[70px] lg:grid-cols-3 lg:gap-[26px]">
        {testimonials.items.map((item) => (
          <article
            key={item.name}
            className="relative rounded-[8px] border border-line bg-white p-8 lg:p-10"
          >
            <QuoteIcon className="absolute right-8 top-8 h-7 w-7 text-[#e6e6e8]" />
            <div className="flex items-center gap-4">
              <div className="relative h-[56px] w-[56px] overflow-hidden rounded-full">
                <Image src={item.avatar} alt={item.name} fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="text-[14px] font-semibold">{item.name}</p>
                <p className="mt-0.5 text-[13px] text-ink/55">{item.role}</p>
              </div>
            </div>
            <p className="mt-7 text-[15px] leading-[1.85] text-ink/85">{item.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
