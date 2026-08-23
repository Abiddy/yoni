import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { about, mission } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-forest sm:scroll-mt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,108,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-28">
        <div className="mb-10 flex justify-between text-[11px] tracking-[0.18em] text-white/45 uppercase sm:mb-12 sm:text-[12px] sm:tracking-[0.22em]">
          <span>Who we are</span>
          <span className="tabular-nums">04</span>
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-40">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={100}>
              <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                {about.heading}
              </h2>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-6 font-serif text-[1.15rem] leading-8 text-pretty text-white/90 sm:mt-8 sm:text-[1.6rem] sm:leading-10">
                {about.body}
              </p>
            </Reveal>
            <Reveal className="relative aspect-[4/3] overflow-hidden bg-forest-deep shadow-2xl">
              <Image
                src="/images/about-1.jpg"
                alt="Southern California home at dusk behind a gated driveway — the kind of casa Value 4 Casa helps families keep or sell"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
            </Reveal>
          </div>

          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={100} className="lg:order-last">
              <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                {mission.heading}
              </h2>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-6 text-[16px] leading-7 text-pretty text-white/78 sm:mt-8 sm:text-[18px] sm:leading-8">
                {mission.body}
              </p>
            </Reveal>
            <Reveal className="relative aspect-[4/3] overflow-hidden bg-forest-deep shadow-2xl">
              <Image
                src="/images/mission-1.jpg"
                alt="Open living and dining room looking out to a backyard pool — a home Value 4 Casa helps a family move forward"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
