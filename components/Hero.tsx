import { Home, Landmark, Phone, Scale, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { services, site } from "@/lib/site";

const serviceIcons = [Home, Landmark, Scale, TrendingUp] as const;

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh flex-col bg-forest">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(47,134,255,0.08),transparent_34%),radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1),transparent_32%)]" />

      <div className="relative flex flex-1 flex-col px-4 pt-[calc(4.5rem+env(safe-area-inset-top))] sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.9fr)] lg:gap-12 lg:py-14 xl:gap-16">
          <div>
            <p className="rise text-[11px] font-medium tracking-[0.2em] text-gold uppercase sm:text-[12px] sm:tracking-[0.28em]">
              Foreclosure · Probate · As-is sales
            </p>

            <h1 className="rise mt-4 max-w-[14ch] font-serif text-[clamp(2.15rem,9vw,5.4rem)] leading-[1.05] font-normal text-balance text-white sm:mt-5 sm:leading-[1.02]">
              The value you deserve for your casa.
            </h1>

            <p
              className="rise mt-5 max-w-xl text-[16px] leading-7 text-pretty text-white/74 sm:mt-6 sm:text-[17px] sm:leading-8"
              style={{ animationDelay: "90ms" }}
            >
              Family-owned specialists with 25+ years helping homeowners through
              foreclosure, probate, and selling as-is. No commissions. A real
              person will call you in under 60 minutes.
            </p>

            <a
              href={site.phoneHref}
              className="rise mt-6 inline-flex min-h-11 items-center gap-2 text-[15px] tracking-[0.04em] text-white/88 transition-colors hover:text-gold sm:mt-8"
              style={{ animationDelay: "140ms" }}
            >
              <Phone className="h-4 w-4 text-gold" />
              {site.phone}
            </a>

            <div
              className="rise mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-white/65 sm:mt-8 sm:gap-x-5"
              style={{ animationDelay: "180ms" }}
            >
              <p className="inline-flex items-center gap-1.5 text-white">
                <span className="flex text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                <span className="font-medium">{site.google.rating}</span>
              </p>
              <a href="#reviews" className="py-1 transition-colors hover:text-gold">
                {site.google.reviews} Google reviews
              </a>
              <span>25+ years</span>
              <span>Commerce, CA</span>
            </div>

            <a
              href="#contact"
              className="rise mt-8 hidden min-h-12 items-center justify-center bg-gold px-7 text-[12px] font-semibold tracking-[0.18em] text-forest-deep uppercase transition-colors hover:bg-gold-bright lg:inline-flex"
              style={{ animationDelay: "220ms" }}
            >
              Request a call
            </a>
          </div>

          <div
            className="rise relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end"
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-white/12 bg-forest-deep shadow-[0_24px_60px_rgb(0_0_0_/0.28)] lg:aspect-[4/5] lg:max-h-[min(78vh,680px)]">
              <Image
                src="/images/house.jpg"
                alt="Covina, CA short sale home — a casa Value 4 Casa helped keep out of foreclosure"
                fill
                priority
                className="object-cover object-[center_38%]"
                sizes="(min-width: 1024px) 42vw, 90vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-forest/20" />
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="relative scroll-mt-24 border-t border-white/10 sm:scroll-mt-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <a
                key={service.title}
                href="#contact"
                className={`group border-white/10 px-5 py-7 transition-colors hover:bg-white/4 sm:px-8 lg:px-10 lg:py-8 ${
                  index > 0 ? "max-sm:border-t" : ""
                } ${index % 2 === 1 ? "sm:border-l" : ""} ${
                  index >= 2 ? "sm:border-t" : ""
                } ${index > 0 ? "lg:border-l" : ""} ${
                  index >= 2 ? "lg:border-t-0" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span className="text-[11px] tracking-[0.2em] text-white/35 tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-4 font-sans text-[15px] font-semibold tracking-tight text-white group-hover:text-gold">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-[34ch] text-[14px] leading-6 text-white/64">
                  {service.body}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
