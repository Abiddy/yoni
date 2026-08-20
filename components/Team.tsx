import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site, team } from "@/lib/site";

export function Team() {
  return (
    <section id="team" className="relative bg-forest-mid">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="flex items-start justify-between text-[12px] tracking-[0.22em] text-white/50 uppercase">
          <span>{site.name}</span>
          <span className="tabular-nums">05</span>
        </div>

        <Reveal>
          <h2 className="mt-10 font-serif text-[clamp(3rem,7vw,6.5rem)] leading-none font-normal text-white italic">
            Our team
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 90}>
              <article className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden bg-forest-deep">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale-[18%] contrast-[1.06] transition-all duration-700 hover:scale-[1.04] hover:grayscale-0"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 80vw"
                  />
                </div>
                <p className="mt-5 text-[11px] tracking-[0.22em] text-white/70 uppercase">
                  {member.title}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-white">
                  {member.name}
                </h3>
                <p className="mx-auto mt-3 max-w-[28ch] text-[13px] leading-5 text-white/68">
                  {member.bio}
                </p>
                <p className="mt-5 text-[12px] text-white/40">{member.handle}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
