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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <ServiceBar />
        <FranchiseSection />
        <TopCategories />
        <ExploreCities />
        <AboutSection />
        <FaqSection />
        <WallOfLove />
        <SiteFooter />
      </main>
    </>
  );
}
