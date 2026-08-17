import { Reveal } from "@/components/Reveal";
import { about, mission } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative bg-forest">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,108,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mb-6 flex justify-between text-[12px] tracking-[0.22em] text-white/45 uppercase">
          <span>Who we are</span>
          <span className="tabular-nums">03</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-white uppercase">
              {about.heading}
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
            <p className="mt-8 max-w-xl font-serif text-[1.35rem] leading-9 text-white/90 sm:text-[1.5rem] sm:leading-10">
              {about.body}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-white uppercase">
              {mission.heading}
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
            <p className="mt-8 max-w-xl text-[17px] leading-8 text-white/72">
              {mission.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
