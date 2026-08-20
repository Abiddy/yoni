import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { about, mission } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative bg-forest">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,108,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mb-12 flex justify-between text-[12px] tracking-[0.22em] text-white/45 uppercase">
          <span>Who we are</span>
          <span className="tabular-nums">04</span>
        </div>

        <div className="space-y-24 lg:space-y-40">
          {/* About Section */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative aspect-[4/3] overflow-hidden bg-forest-deep shadow-2xl lg:order-last">
              <Image
                src="/images/about-1.jpg"
                alt="Professional real estate consultation"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                {about.heading}
              </h2>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-8 font-serif text-[1.4rem] leading-9 text-white/90 sm:text-[1.6rem] sm:leading-10">
                {about.body}
              </p>
            </Reveal>
          </div>

          {/* Mission Statement Section */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative aspect-[4/3] overflow-hidden bg-forest-deep shadow-2xl">
              <Image
                src="/images/mission-1.jpg"
                alt="Homeowners receiving support"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                {mission.heading}
              </h2>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-8 text-[17px] leading-8 text-white/78 sm:text-[18px]">
                {mission.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
