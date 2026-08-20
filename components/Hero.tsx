import { Home, Landmark, Phone, Scale, Star, TrendingUp } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { services, site } from "@/lib/site";

const serviceIcons = [Home, Landmark, Scale, TrendingUp] as const;

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col bg-forest">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(47,134,255,0.08),transparent_34%),radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1),transparent_32%)]" />

      <div className="relative flex flex-1 flex-col px-5 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.9fr)] lg:gap-16 lg:py-14">
          <div>
            <p className="rise text-[12px] font-medium tracking-[0.28em] text-gold uppercase">
              Foreclosure · Probate · As-is sales
            </p>

            <h1 className="rise mt-5 max-w-[14ch] font-serif text-[clamp(2.6rem,5.6vw,5.4rem)] leading-[1.02] font-normal text-white">
              The value you deserve for your casa.
            </h1>

            <p
              className="rise mt-6 max-w-xl text-[17px] leading-8 text-white/74"
              style={{ animationDelay: "90ms" }}
            >
              Family-owned specialists with 25+ years helping homeowners through
              foreclosure, probate, and selling as-is. No commissions. A real
              person will call you in under 60 minutes.
            </p>

            <a
              href={site.phoneHref}
              className="rise mt-8 inline-flex items-center gap-2 text-[15px] tracking-[0.04em] text-white/88 transition-colors hover:text-gold"
              style={{ animationDelay: "140ms" }}
            >
              <Phone className="h-4 w-4 text-gold" />
              {site.phone}
            </a>

            <div
              className="rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/65"
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
              <a href="#reviews" className="transition-colors hover:text-gold">
                {site.google.reviews} Google reviews
              </a>
              <span>25+ years</span>
              <span>Commerce, CA</span>
            </div>
          </div>

          <div
            id="contact"
            className="rise scroll-mt-28 border border-white/12 bg-forest-deep/70 px-6 py-7 sm:px-8 sm:py-8"
            style={{ animationDelay: "120ms" }}
          >
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
              Start here
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-[2rem]">
              Leave your information
            </h2>
            <p className="mt-3 mb-7 text-[14px] leading-6 text-white/62">
              We will call you in less than 60 minutes and give you the value
              you deserve for your casa.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <div id="services" className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <a
                key={service.title}
                href="#contact"
                className={`group px-6 py-8 transition-colors hover:bg-white/4 sm:px-8 lg:px-10 ${
                  index > 0
                    ? "border-t border-white/10 lg:border-t-0 lg:border-l"
                    : ""
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
