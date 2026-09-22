import type { CatalogueCategory } from "@/lib/catalogue";

/**
 * The catalogue on the homepage: the categories an administrator maintains,
 * each with how many published listings sit under it.
 *
 * Category artwork is optional and uploaded by administrators, so it can live
 * on any host - hence a plain <img>, which next/image cannot be configured
 * for ahead of time. A category without a picture gets a lettered tile rather
 * than an empty box.
 */
export function TopCategories({ categories }: { categories: CatalogueCategory[] }) {
  return (
    <section id="categories" className="shell pb-[50px] lg:pb-[70px]">
      <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold text-ink">Top Categories</h2>

      {categories.length === 0 ? (
        <p className="mt-6 rounded-[14px] bg-[#f7f7f8] px-6 py-10 text-center text-[15px] text-ink/60">
          No categories yet.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-[32px] lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <article
              key={category.id}
              className="rounded-[14px] bg-[#f7f7f8] p-[8px] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative aspect-[280/200] w-full overflow-hidden rounded-[10px] bg-brand/10">
                {category.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex h-full w-full items-center justify-center text-[40px] font-bold text-brand/45"
                  >
                    {category.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="px-[8px] pb-2 pt-3">
                <h3 className="text-[15px] font-semibold leading-snug text-ink">{category.name}</h3>
                {category.description ? (
                  <p className="mt-1 line-clamp-2 text-[12px] leading-[1.45] text-ink/60">
                    {category.description}
                  </p>
                ) : null}
                <p className="mt-3 text-[13px] font-bold text-ink">
                  {category.listingCount === 0
                    ? "Nothing listed yet"
                    : `${category.listingCount} listing${category.listingCount === 1 ? "" : "s"}`}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
