import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RentOut collects, uses, shares and protects your information.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
