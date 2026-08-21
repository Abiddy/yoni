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
      <main className="bg-forest pt-28">
        <article className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:pb-28">
          <div>
            <p className="text-[12px] tracking-[0.22em] text-gold uppercase">
              {item.location} · {item.title}
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.1] text-white">
              {item.headline}
            </h1>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-forest-deep">
              <Image
                src={item.image}
                alt={item.description}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 90vw"
                priority
              />
            </div>
            <div className="mt-8 space-y-5 text-[17px] leading-8 text-white/78">
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

          <aside id="contact" className="h-fit border border-white/12 bg-forest-deep/70 px-6 py-7 sm:px-8 lg:sticky lg:top-28">
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
              Start here
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white">
              Leave your information
            </h2>
            <p className="mt-3 mb-7 text-[14px] leading-6 text-white/62">
              Tell us about the {item.city} property. We will call you in less
              than 60 minutes.
            </p>
            <ContactForm />
          </aside>
        </article>

        <section className="border-t border-white/10 bg-forest-deep">
          <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 lg:px-14">
            <h2 className="font-serif text-3xl text-white">More local work</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
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
                  <p className="mt-2 text-[14px] text-white/55">
                    {entry.description}
                  </p>
                </Link>
              ))}
            </div>
            <Link
              href="/#work"
              className="mt-10 inline-block text-[13px] tracking-[0.14em] text-white/50 uppercase hover:text-gold"
            >
              ← All recent work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <a
        href={site.phoneHref}
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-forest-deep uppercase shadow-lg lg:hidden"
      >
        Call now
      </a>
    </>
  );
}
