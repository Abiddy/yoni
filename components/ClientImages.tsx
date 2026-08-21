import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const properties = [
  {
    image: "/images/client-1.jpg",
    title: "Short sale",
    location: "Covina, CA",
    description:
      "Short sale, and avoid foreclosure in Covina CA",
  },
  {
    image: "/images/client-2.jpg",
    title: "Probate & foreclosure",
    location: "Los Angeles, CA",
    description:
      "Probate & foreclosure stopped auction in Los Angeles, CA",
  },
  {
    image: "/images/client-3.jpg",
    title: "Foreclosure & eviction",
    location: "Rancho Cucamonga, CA",
    description:
      "Avoid foreclosures and help with evicting squatters in Rancho Cucamonga, CA",
  },
  {
    image: "/images/client-4.jpg",
    title: "Lien negotiation",
    location: "Norco, CA",
    description:
      "Avoid foreclosure and help negotiate lien on the house in Norco, CA",
  },
  {
    image: "/images/client-5.jpg",
    title: "Stop auction",
    location: "Fontana, CA",
    description:
      "Stop auction and postpone to be able to sale the property in Fontana, CA",
  },
  {
    image: "/images/client-6.jpg",
    title: "Probate · cash as-is",
    location: "Los Angeles, CA",
    description: "Probate in Los Angeles, CA and bought cash as is",
  },
  {
    image: "/images/client-7.jpg",
    title: "Cash as-is offer",
    location: "Pico Rivera, CA",
    description:
      "Stopped auction, avoided foreclosure and did a cash as is offer in Pico Rivera",
  },
  {
    image: "/images/client-8.jpg",
    title: "Probate & foreclosure",
    location: "Rialto, CA",
    description: "Probate and stop foreclosure in Rialto, CA",
  },
] as const;

export function ClientImages() {
  return (
    <section id="work" className="relative bg-forest">
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="flex items-start justify-between text-[12px] tracking-[0.22em] text-white/45 uppercase">
          <span>Recent Work</span>
          <span className="tabular-nums">03</span>
        </div>

        <div className="mt-10">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.05] text-white">
              Properties we&apos;ve helped transition.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((prop, index) => (
            <Reveal key={`${prop.location}-${index}`} delay={index * 80}>
              <article className="group overflow-hidden bg-forest-deep shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-gold uppercase">
                    {prop.title}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-white">
                    {prop.location}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-white/60">
                    {prop.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
