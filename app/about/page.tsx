import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { ServiceBar } from "@/components/service-bar";
import { StatsBand } from "@/components/stats-band";
import { getSiteContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RentOut is reimagining the way India rents: one marketplace for people and businesses to list, discover and rent.",
};

export default async function AboutPage() {
  const { about, stats, services } = await getSiteContent();

  return (
    <>
      <div className="pt-[40px] lg:pt-[60px]">
        <AboutSection content={about} />
      </div>
      <StatsBand content={stats} />
      <ServiceBar items={services} />
      <div className="pb-[50px] lg:pb-[70px]" />
    </>
  );
}
