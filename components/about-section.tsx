import Image from "next/image";
import { about } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="shell pb-[60px] lg:pb-[90px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-[clamp(30px,3.7vw,50px)] font-semibold">{about.title}</h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.6] text-ink/85 lg:text-[20px]">
            {about.body[0]}
            <br />
            {about.body[1]}
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex h-[54px] w-fit items-center rounded-[10px] bg-white px-8 text-[17px] text-ink shadow-[0_12px_34px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)] lg:mt-6"
        >
          {about.cta}
        </a>
      </div>

      <div className="mt-10 grid gap-10 lg:mt-[60px] lg:grid-cols-[minmax(0,780px)_minmax(0,1fr)] lg:gap-12">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {about.steps.map((step) => (
            <div key={step.number}>
              <p className="text-[46px] font-light leading-none lg:text-[58px]">{step.number}</p>
              <h3 className="mt-5 text-[20px] font-medium lg:text-[24px]">{step.title}</h3>
              <p className="mt-3 max-w-[280px] text-[14px] leading-[1.55] text-ink/70 lg:text-[16px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 lg:gap-5">
          <GalleryColumn images={about.gallery.columnOne} offset="" />
          <GalleryColumn images={about.gallery.columnTwo} offset="pt-[18%]" />
          <GalleryColumn images={about.gallery.columnThree} offset="pt-[6%]" />
        </div>
      </div>
    </section>
  );
}

function GalleryColumn({ images, offset }: { images: string[]; offset: string }) {
  return (
    <div className={`flex flex-col gap-4 lg:gap-5 ${offset}`}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`relative w-full overflow-hidden ${
            index === 0 ? "aspect-[250/330]" : "aspect-[250/300]"
          }`}
        >
          <Image
            src={src}
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
