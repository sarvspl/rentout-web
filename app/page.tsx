import { ExploreCities } from "@/components/explore-cities";
import { FranchiseSection } from "@/components/franchise-section";
import { Hero } from "@/components/hero";
import { ServiceBar } from "@/components/service-bar";
import { StatsBand } from "@/components/stats-band";
import { TopCategories } from "@/components/top-categories";
import { WallOfLove } from "@/components/wall-of-love";
import { getSiteContent } from "@/lib/cms";
import { getHomeCategories } from "@/lib/catalogue";

export default async function Home() {
  // Editorial copy the admin panel owns, and the live category catalogue.
  // The copy falls back to shipped content if the backend is unreachable, so
  // the page always renders. About, FAQ and Contact have their own pages.
  const [{ hero, stats, services, franchise, cities, testimonials }, categories] =
    await Promise.all([getSiteContent(), getHomeCategories()]);

  return (
    <>
      <Hero content={hero} />
      <StatsBand content={stats} />
      <ServiceBar items={services} />
      <FranchiseSection content={franchise} />
      <TopCategories categories={categories} />
      <ExploreCities content={cities} />
      <WallOfLove content={testimonials} />
    </>
  );
}
