import { Home, Landmark, Phone, Scale, Star, TrendingUp } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { services, site } from "@/lib/site";

const serviceIcons = [Home, Landmark, Scale, TrendingUp] as const;

export function Hero() {
  return (
    <section id="top" className="relative bg-forest">
      <div className="bg-forest lg:grid lg:min-h-dvh lg:grid-cols-2 lg:bg-cream">
        <div className="relative flex flex-col justify-center px-4 pt-[calc(7.5rem+env(safe-area-inset-top))] pb-12 text-white sm:px-8 sm:pt-24 sm:pb-12 lg:px-12 lg:pt-28 lg:pb-16 lg:text-forest xl:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(47,134,255,0.08),transparent_34%),radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1),transparent_32%)] lg:hidden" />
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-[34rem]">
            <p className="rise text-[11px] font-medium tracking-[0.22em] text-gold uppercase sm:text-[12px] sm:tracking-[0.28em]">
              Foreclosure · Probate · As-is sales
            </p>
            <div className="rise mt-4 h-px w-10 bg-gold" />

            <h1 className="rise mt-6 font-serif text-[clamp(2.15rem,7.5vw,3.85rem)] leading-[1.08] font-normal text-balance sm:mt-7">
              The value you deserve for your casa.
            </h1>

            <p
              className="rise mt-5 max-w-md text-[16px] leading-7 text-pretty text-white/74 sm:mt-6 sm:text-[17px] sm:leading-8 lg:text-forest/68"
              style={{ animationDelay: "90ms" }}
            >
              Family-owned specialists with 25+ years in foreclosure, probate,
              and selling as-is. No commissions.
            </p>

            <div
              className="rise mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/65 lg:text-forest/55"
              style={{ animationDelay: "140ms" }}
            >
              <a
                href={site.phoneHref}
                className="inline-flex min-h-10 items-center gap-2 text-[15px] tracking-[0.04em] text-white/88 transition-colors hover:text-gold lg:text-forest"
              >
                <Phone className="h-4 w-4 text-gold" />
                {site.phone}
              </a>
              <span className="hidden h-3 w-px bg-white/20 sm:block lg:bg-forest/15" />
              <p className="inline-flex items-center gap-1.5">
                <span className="flex text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                <span className="font-medium text-white lg:text-forest">
                  {site.google.rating}
                </span>
              </p>
              <a href="#reviews" className="py-1 transition-colors hover:text-gold">
                {site.google.reviews} Google reviews
              </a>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="hidden flex-col justify-center border-forest/10 px-8 py-16 lg:flex lg:border-l lg:px-12 lg:pt-28 lg:pb-16 xl:px-16"
        >
          <div className="mx-auto w-full max-w-md">
            <p className="text-[11px] font-bold tracking-[0.22em] text-gold uppercase">
              Request a call
            </p>
            <p className="mt-2 mb-8 text-[15px] leading-6 font-semibold text-forest/80">
              We call back in under 60 minutes.
            </p>
            <ContactForm tone="light" />
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
