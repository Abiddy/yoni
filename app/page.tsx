import { About } from "@/components/About";
import { ClientImages } from "@/components/ClientImages";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Team } from "@/components/Team";

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
        <Reviews />
        <ClientImages />
        <About />
        <Team />
      </main>
      <Footer />
    </>
  );
}
