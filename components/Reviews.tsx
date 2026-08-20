import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { reviews, site } from "@/lib/site";

export function Reviews() {
  const featured = reviews[0];
  const rest = reviews.slice(1);

  return (
    <section id="reviews" className="relative bg-forest-deep">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(47,134,255,0.07),transparent_42%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="flex items-start justify-between text-[12px] tracking-[0.22em] text-white/45 uppercase">
          <span>Client stories</span>
          <span className="tabular-nums">02</span>
        </div>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.05] text-white">
              Families who came to us just like you.
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/68">
              Take a few minutes with the reviews. Our clients were in
              foreclosure, probate, or selling as-is — and the stories help
              people feel a little more comfortable taking the next step.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0">
              <div>
                <p className="font-serif text-6xl leading-none text-white sm:text-7xl">
                  {site.google.rating}
                  <span className="ml-1 text-3xl text-azure">/5</span>
                </p>
                <p className="mt-3 flex items-center gap-2 text-[13px] text-white/70">
                  <span className="flex text-gold" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                  {site.google.reviews} Google reviews
                </p>
                <p className="mt-1 text-[13px] text-white/45">
                  {site.google.category}
                </p>
              </div>
              <a
                href={site.maps.search}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-white uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Read on Google
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col border border-gold/25 bg-white/3 px-7 py-8 sm:px-10 sm:py-10">
              <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
              <p className="mt-6 font-serif text-[1.45rem] leading-9 text-white sm:text-[1.7rem] sm:leading-10">
                “{featured.quote}”
              </p>
              <div className="mt-auto pt-8">
                <p className="text-[11px] tracking-[0.18em] text-gold uppercase">
                  {featured.service}
                </p>
                <p className="mt-2 font-serif text-xl text-white">
                  {featured.name}
                </p>
                <p className="text-[13px] text-white/50">{featured.location}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {rest.slice(0, 4).map((review, index) => (
              <Reveal key={review.name} delay={80 + index * 60}>
                <article className="flex h-full flex-col border border-white/10 px-5 py-6">
                  <div className="flex items-center justify-between">
                    <span className="flex text-gold" aria-hidden="true">
                      {Array.from({ length: review.rating }).map((_, star) => (
                        <Star key={star} className="h-3 w-3 fill-current" />
                      ))}
                    </span>
                    <span className="text-[10px] tracking-[0.16em] text-white/40 uppercase">
                      {review.service}
                    </span>
                  </div>
                  <p className="mt-4 text-[14px] leading-6 text-white/78">
                    “{review.quote}”
                  </p>
                  <p className="mt-auto pt-5 text-[13px] text-white">
                    {review.name}
                    <span className="text-white/40"> · {review.location}</span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="mt-8">
          <article className="border border-white/10 px-6 py-6 sm:px-8">
            <p className="text-[15px] leading-7 text-white/75">
              “{rest[4].quote}”
            </p>
            <p className="mt-4 text-[13px] text-white">
              {rest[4].name}
              <span className="text-white/40">
                {" "}
                · {rest[4].location} · {rest[4].service}
              </span>
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
