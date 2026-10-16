import type { Metadata } from "next";
import { ExploreCities } from "@/components/explore-cities";
import { TopCategories } from "@/components/top-categories";
import { getSiteContent } from "@/lib/cms";
import { getHomeCategories } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Explore Rentals",
  description:
    "Explore rental opportunities across property, vehicles, electronics, furniture, appliances, tools, events and services.",
};

export default async function ExploreRentalsPage() {
  // The full catalogue here, not the homepage's first few categories.
  const [{ cities }, categories] = await Promise.all([
    getSiteContent(),
    getHomeCategories(Infinity),
  ]);

  return (
    <div className="pt-[40px] lg:pt-[60px]">
      <TopCategories categories={categories} />
      <ExploreCities content={cities} />
    </div>
  );
}
