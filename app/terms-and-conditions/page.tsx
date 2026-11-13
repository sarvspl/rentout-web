import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsAndConditions } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of the RentOut website and app.",
};

export default function TermsPage() {
  return <LegalPage doc={termsAndConditions} />;
}
