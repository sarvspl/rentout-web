import type { AboutContent, AboutImage } from "@/lib/cms";

/**
 * The About band: heading copy, the numbered points, and the collage.
 *
 * Point numbers come from their order, so reordering in the CMS renumbers
 * the page rather than leaving "1. 3. 2." behind. Collage photos carry their
 * own aspect ratio and column, which is what keeps the staggered look while
 * still being editable.
 */
export function AboutSection({ content }: { content: AboutContent }) {
  const columns = [1, 2, 3].map((column) =>
    content.images.filter((image) => image.column === column),
  );

  // The middle column drops down; the outer two share a top edge.
  const columnOffset = ["", "pt-[24%]", ""];

  return (
    <section id="about" className="shell pb-[50px] lg:pb-[70px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-[clamp(24px,2.8vw,38px)] font-bold text-ink">{content.title}</h2>
          <p className="mt-3 max-w-[480px] text-[14px] leading-[1.6] text-ink/80 lg:text-[16px]">
            {content.body}
          </p>
        </div>

        {content.ctaLabel ? (
          <a
            href={content.ctaHref}
            /* Figma: fill #F4F6F6, drop shadows 0/1.85/3.15 #244D4D 2.41% + 0/8.15/6.52 #244D4D 3.93% */
            className="inline-flex h-[44px] w-fit items-center rounded-[8px] bg-[#F4F6F6] px-6 text-[14px] font-medium text-ink shadow-[0_1.85px_3.15px_rgba(36,77,77,0.0241),0_8.15px_6.52px_rgba(36,77,77,0.0393)] transition-shadow hover:shadow-[0_2px_4px_rgba(36,77,77,0.04),0_10px_10px_rgba(36,77,77,0.06)] lg:mt-4"
          >
            {content.ctaLabel}
          </a>
        ) : null}
      </div>

      <div className="mt-8 grid gap-8 lg:mt-[44px] lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-10">
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {content.steps.map((step, index) => (
            <div key={`${step.title}-${index}`}>
              <p className="text-[34px] font-light leading-none text-ink/80 lg:text-[42px]">
                {index + 1}.
              </p>
              <h3 className="mt-3 text-[16px] font-semibold lg:text-[18px]">{step.title}</h3>
              <p className="mt-2 max-w-[260px] text-[13px] leading-[1.55] text-ink/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 items-start gap-3 lg:gap-4">
          {columns.map((images, index) => (
            <GalleryColumn key={index} images={images} offset={columnOffset[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryColumn({ images, offset }: { images: AboutImage[]; offset: string }) {
  return (
    <div className={`flex flex-col gap-3 lg:gap-4 ${offset}`}>
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: image.ratio }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
