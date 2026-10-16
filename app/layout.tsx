import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteContent } from "@/lib/cms";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RentOut — India's All-in-One Rental Marketplace",
    template: "%s | RentOut",
  },
  description:
    "Rent what you need. List what you own. Earn from what you have. Property, vehicles, electronics, furniture, appliances, tools, events and services on one rental marketplace.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Header and footer are shared by every page; the copy comes from the CMS.
  const { navLinks, newsletter, footer } = await getSiteContent();

  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-ink">
        <SiteHeader navLinks={navLinks} />
        <main>{children}</main>
        <SiteFooter navLinks={navLinks} newsletter={newsletter} content={footer} />
      </body>
    </html>
  );
}
