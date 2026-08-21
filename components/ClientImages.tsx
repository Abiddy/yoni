import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { workCases } from "@/lib/work";

export function ClientImages() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-forest sm:scroll-mt-28">
      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-28">
        <div className="flex items-start justify-between text-[11px] tracking-[0.18em] text-white/45 uppercase sm:text-[12px] sm:tracking-[0.22em]">
          <span>Recent Work</span>
          <span className="tabular-nums">03</span>
        </div>

        <div className="mt-8 sm:mt-10">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.9rem,8vw,4.6rem)] leading-[1.08] text-balance text-white sm:leading-[1.05]">
              Properties we&apos;ve helped transition.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {workCases.map((prop, index) => (
            <Reveal key={prop.slug} delay={index * 80}>
              <Link href={`/work/${prop.slug}`} className="group block overflow-hidden bg-forest-deep shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-gold uppercase">
                    {prop.title}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-balance text-white group-hover:text-gold">
                    {prop.location}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-pretty text-white/60">
                    {prop.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
