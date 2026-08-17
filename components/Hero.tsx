import { services, site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col bg-forest"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,108,0.08),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="relative flex flex-1 flex-col px-5 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
          <div className="flex items-start justify-between text-[12px] tracking-[0.22em] text-white/55 uppercase">
            <span>{site.name}</span>
            <span className="tabular-nums">01</span>
          </div>

          <div className="flex flex-1 items-center justify-center py-16 sm:py-20">
            <h1 className="rise max-w-[18ch] text-center font-serif text-[clamp(2.4rem,6vw,5.4rem)] leading-[1.12] font-normal text-white">
              Value 4 Casa,{" "}
              <span className="block text-[0.72em] text-white/92">
                Your trusted real estate, foreclosures & probate experts
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div id="services" className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`px-6 py-10 sm:px-8 lg:px-10 lg:py-12 ${
                index > 0 ? "border-t border-white/10 lg:border-t-0 lg:border-l" : ""
              }`}
            >
              <h2 className="font-sans text-[15px] font-semibold tracking-tight text-white">
                {service.title}
              </h2>
              <p className="mt-4 max-w-[34ch] text-[14px] leading-6 text-white/68">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
