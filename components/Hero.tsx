import {
  ArrowRight,
  Home,
  Landmark,
  Phone,
  Scale,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { services, site } from "@/lib/site";

const serviceIcons = [Home, Landmark, Scale, TrendingUp] as const;

const proof = [
  { label: `${site.google.reviews} Google reviews`, href: site.maps.search },
  { label: "25+ years", href: "#about" },
  { label: "No commissions", href: "#contact" },
  { label: "Commerce, CA", href: site.maps.directions },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-forest"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/house.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[72%_center] opacity-[0.18] lg:opacity-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#102827_0%,#163332_38%,rgba(22,51,50,0.78)_62%,rgba(16,40,39,0.42)_100%)] max-lg:bg-[linear-gradient(180deg,#102827_0%,rgba(22,51,50,0.94)_48%,rgba(16,40,39,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,108,0.14),transparent_36%)]" />
      </div>

      <div className="relative flex flex-1 flex-col px-5 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
          <div className="flex items-start justify-between text-[12px] tracking-[0.22em] text-white/50 uppercase">
            <span>Southern California</span>
            <span className="tabular-nums">01</span>
          </div>

          <div className="flex flex-1 flex-col justify-center py-14 lg:py-16">
            <p className="rise text-[12px] font-medium tracking-[0.28em] text-gold uppercase">
              Foreclosure · Probate · As-is sales
            </p>

            <h1 className="rise mt-5 max-w-[13ch] font-serif text-[clamp(2.75rem,7.2vw,6.4rem)] leading-[0.98] font-normal text-white">
              The value you deserve for your casa.
            </h1>

            <p
              className="rise mt-7 max-w-xl text-[17px] leading-8 text-white/74 sm:text-[18px]"
              style={{ animationDelay: "90ms" }}
            >
              Family-owned specialists with 25+ years helping homeowners through
              foreclosure, probate, and selling as-is. No commissions. A real
              person will call you in under 60 minutes.
            </p>

            <div
              className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "160ms" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-[12px] font-semibold tracking-[0.18em] text-forest-deep uppercase transition-colors hover:bg-gold-bright"
              >
                Request a call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-[12px] font-medium tracking-[0.16em] text-white uppercase transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-3.5 w-3.5" />
                {site.phone}
              </a>
            </div>

            <div
              className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/70"
              style={{ animationDelay: "230ms" }}
            >
              <p className="inline-flex items-center gap-1.5 text-white">
                <span className="flex text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                <span className="font-medium">{site.google.rating}</span>
              </p>
              {proof.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="relative border-t border-white/10 bg-forest-deep/35 backdrop-blur-[2px]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <a
                key={service.title}
                href="#contact"
                className={`group px-6 py-9 transition-colors hover:bg-white/4 sm:px-8 lg:px-10 lg:py-11 ${
                  index > 0 ? "border-t border-white/10 lg:border-t-0 lg:border-l" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span className="text-[11px] tracking-[0.2em] text-white/35 tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-5 font-sans text-[15px] font-semibold tracking-tight text-white group-hover:text-gold">
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
