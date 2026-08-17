import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

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
  title: `${site.name} | Foreclosure, Probate & Real Estate Experts`,
  description:
    "Family-owned real estate acquisition firm in Commerce, CA with 25+ years helping homeowners with foreclosure, probate, as-is sales, and investing.",
  keywords: [
    "Value 4 Casa",
    "foreclosure",
    "probate",
    "sell house as is",
    "Commerce CA real estate",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-forest font-sans text-white">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
