/**
 * The live catalogue: the categories an administrator maintains in the admin
 * panel, with how many published listings sit under each one.
 *
 * Unlike the CMS copy, this is not editorial content - it is the marketplace's
 * own structure, so there is no editable fallback for it. If the backend
 * cannot be reached the homepage shows no categories rather than an invented
 * list.
 */
const API_URL = (process.env.RENTOUT_API_URL ?? "http://127.0.0.1:8081/api/v1").replace(/\/$/, "");

/** How many category cards the homepage shows. */
export const HOME_CATEGORY_LIMIT = 10;

export type CatalogueCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  /** Published listings in this category and everything beneath it. */
  listingCount: number;
};

type ApiCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  listingCount?: number;
};

export async function getHomeCategories(): Promise<CatalogueCategory[]> {
  try {
    const response = await fetch(`${API_URL}/public/categories`, { cache: "no-store" });
    if (!response.ok) return [];

    const payload = await response.json();
    const rows = payload?.data?.categories;
    if (!Array.isArray(rows)) return [];

    return rows.slice(0, HOME_CATEGORY_LIMIT).map((category: ApiCategory) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description?.trim() ?? "",
      image: category.imageUrl ?? "",
      listingCount: category.listingCount ?? 0,
    }));
  } catch {
    return [];
  }
}
