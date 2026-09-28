import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentOut — India's All-in-One Rental Marketplace",
  description:
    "Rent what you need. List what you own. Earn from what you have. Property, vehicles, electronics, furniture, appliances, tools, events and services on one rental marketplace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-ink">{children}</body>
    </html>
  );
}
