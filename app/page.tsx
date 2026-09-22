import { AboutSection } from "@/components/about-section";
import { ExploreCities } from "@/components/explore-cities";
import { FaqSection } from "@/components/faq-section";
import { FranchiseSection } from "@/components/franchise-section";
import { Hero } from "@/components/hero";
import { ServiceBar } from "@/components/service-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatsBand } from "@/components/stats-band";
import { TopCategories } from "@/components/top-categories";
import { WallOfLove } from "@/components/wall-of-love";
import { getSiteContent } from "@/lib/cms";
import { getHomeCategories } from "@/lib/catalogue";

export default async function Home() {
  // Editorial copy the admin panel owns, and the live category catalogue.
  // The copy falls back to shipped content if the backend is unreachable, so
  // the page always renders.
  const [
    {
      navLinks,
      hero,
      stats,
      services,
      franchise,
      cities,
      about,
      faq,
      testimonials,
      newsletter,
      footer,
    },
    categories,
  ] =
    await Promise.all([
      getSiteContent(),
      getHomeCategories(),
    ]);

  return (
    <>
      <SiteHeader navLinks={navLinks} />
      <main>
        <Hero content={hero} />
        <StatsBand content={stats} />
        <ServiceBar items={services} />
        <FranchiseSection content={franchise} />
        <TopCategories categories={categories} />
        <ExploreCities content={cities} />
        <AboutSection content={about} />
        <FaqSection content={faq} />
        <WallOfLove content={testimonials} />
        <SiteFooter navLinks={navLinks} newsletter={newsletter} content={footer} />
      </main>
    </>
  );
}
