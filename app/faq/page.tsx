import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { getSiteContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about renting and listing on RentOut.",
};

export default async function FaqPage() {
  const { faq } = await getSiteContent();
  return <FaqSection content={faq} />;
}
