import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Team } from "@/components/Team";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Contact />
        <About />
        <Team />
      </main>
      <Footer />
      <a
        href={site.phoneHref}
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-forest-deep uppercase shadow-lg lg:hidden"
      >
        Call now
      </a>
    </>
  );
}
