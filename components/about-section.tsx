import Image from "next/image";
import { about } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="shell pb-[50px] lg:pb-[70px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-bold text-ink">{about.title}</h2>
          <p className="mt-3 max-w-[480px] text-[14px] leading-[1.6] text-ink/80 lg:text-[16px]">
            {about.body[0]}
            <br />
            {about.body[1]}
          </p>
        </div>

        {/* Figma: fill #F4F6F6, drop shadows 0/1.85/3.15 #244D4D 2.41% + 0/8.15/6.52 #244D4D 3.93% */}
        <a
          href="#contact"
          className="inline-flex h-[44px] w-fit items-center rounded-[8px] bg-[#F4F6F6] px-6 text-[14px] font-medium text-ink shadow-[0_1.85px_3.15px_rgba(36,77,77,0.0241),0_8.15px_6.52px_rgba(36,77,77,0.0393)] transition-shadow hover:shadow-[0_2px_4px_rgba(36,77,77,0.04),0_10px_10px_rgba(36,77,77,0.06)] lg:mt-4"
        >
          {about.cta}
        </a>
      </div>

      <div className="mt-8 grid gap-8 lg:mt-[44px] lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-10">
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {about.steps.map((step) => (
            <div key={step.number}>
              <p className="text-[34px] font-light leading-none text-ink/80 lg:text-[42px]">{step.number}</p>
              <h3 className="mt-3 text-[16px] font-semibold lg:text-[18px]">{step.title}</h3>
              <p className="mt-2 max-w-[260px] text-[13px] leading-[1.55] text-ink/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Left and right columns share a top edge; only the middle drops down. */}
        <div className="grid grid-cols-3 items-start gap-3 lg:gap-4">
          <GalleryColumn images={about.gallery.columnOne} offset="" />
          <GalleryColumn images={about.gallery.columnTwo} offset="pt-[24%]" />
          <GalleryColumn images={about.gallery.columnThree} offset="" />
        </div>
      </div>
    </section>
  );
}

function GalleryColumn({
  images,
  offset,
}: {
  images: { src: string; ratio: string }[];
  offset: string;
}) {
  return (
    <div className={`flex flex-col gap-3 lg:gap-4 ${offset}`}>
      {images.map((image) => (
        <div
          key={image.src}
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: image.ratio }}
        >
          <Image
            src={image.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 33vw, 18vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
