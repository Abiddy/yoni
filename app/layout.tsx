import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Foreclosure, Probate & As-Is Real Estate in Southern California`,
    template: `%s | ${site.name}`,
  },
  description:
    "Family-owned real estate firm in Commerce, CA. 25+ years helping homeowners with foreclosure, probate, short sales, and selling as-is across Southern California. Call (949) 325-5813.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Foreclosure, Probate & As-Is Experts`,
    description:
      "Stop foreclosure, settle probate, or sell as-is in Southern California. 4.9 from 100 Google reviews. We call you in under 60 minutes.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Foreclosure, Probate & As-Is Experts`,
    description:
      "Family-owned foreclosure, probate, and as-is specialists in Commerce, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-forest font-sans text-white">
        <JsonLd />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
