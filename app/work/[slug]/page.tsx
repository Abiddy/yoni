import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/seo";
import { getWorkBySlug, workCases } from "@/lib/work";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return {};

  return {
    title: `${item.headline} | ${site.name}`,
    description: item.summary,
    alternates: { canonical: `${siteUrl}/work/${item.slug}` },
    openGraph: {
      title: item.headline,
      description: item.summary,
      url: `${siteUrl}/work/${item.slug}`,
      images: [{ url: item.image }],
    },
  };
}

export default async function WorkCasePage({ params }: Props) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  const related = workCases.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.headline,
    description: item.summary,
    areaServed: item.location,
    provider: {
      "@type": "RealEstateAgent",
      name: site.name,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: "Commerce",
        addressRegion: "CA",
        postalCode: "90040",
      },
    },
    image: `${siteUrl}${item.image}`,
    url: `${siteUrl}/work/${item.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main className="bg-forest pt-[calc(4.5rem+env(safe-area-inset-top))] sm:pt-24 lg:pt-28">
        <article className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-14 sm:gap-12 sm:px-10 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:pb-28">
          <div>
            <p className="text-[12px] tracking-[0.18em] text-gold uppercase sm:tracking-[0.22em]">
              {item.location} · {item.title}
            </p>
            <h1 className="mt-4 font-serif text-[clamp(1.85rem,7vw,3.8rem)] leading-[1.12] text-balance text-white">
              {item.headline}
            </h1>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-forest-deep sm:mt-8">
              <Image
                src={item.image}
                alt={item.description}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="mt-6 space-y-5 text-[16px] leading-7 text-pretty text-white/78 sm:mt-8 sm:text-[17px] sm:leading-8">
              {item.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-[15px] text-white/60">
              Serving {item.city} and nearby Southern California cities.{" "}
              <a href={site.phoneHref} className="text-gold">
                {site.phone}
              </a>
            </p>
          </div>

          <aside id="contact" className="h-fit scroll-mt-24 border border-white/12 bg-forest-deep/70 px-4 py-6 sm:scroll-mt-28 sm:px-8 sm:py-7 lg:sticky lg:top-28">
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
              Start here
            </p>
            <h2 className="mt-3 font-serif text-[1.75rem] text-balance text-white sm:text-3xl">
              Leave your information
            </h2>
            <p className="mt-3 mb-6 text-[14px] leading-6 text-pretty text-white/62 sm:mb-7">
              Tell us about the {item.city} property. We will call you in less
              than 60 minutes.
            </p>
            <ContactForm />
          </aside>
        </article>

        <section className="border-t border-white/10 bg-forest-deep">
          <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-10 sm:py-16 lg:px-14">
            <h2 className="font-serif text-[1.75rem] text-white sm:text-3xl">More local work</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {related.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/work/${entry.slug}`}
                  className="group border border-white/10 p-5 transition-colors hover:border-gold/40"
                >
                  <p className="text-[11px] tracking-[0.16em] text-gold uppercase">
                    {entry.title}
                  </p>
                  <p className="mt-2 font-serif text-xl text-white group-hover:text-gold">
                    {entry.location}
                  </p>
                  <p className="mt-2 text-[14px] text-pretty text-white/55">
                    {entry.description}
                  </p>
                </Link>
              ))}
            </div>
            <Link
              href="/#work"
              className="mt-8 inline-flex min-h-11 items-center text-[13px] tracking-[0.14em] text-white/50 uppercase hover:text-gold sm:mt-10"
            >
              ← All recent work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
