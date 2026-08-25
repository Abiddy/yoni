import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-14">
        <div>
          <a href="/" className="inline-block">
            <Logo size="footer" />
          </a>
          <p className="mt-5 max-w-sm font-serif text-xl leading-snug text-pretty text-white/90 sm:text-2xl">
            Real estate, foreclosure & probate — with a team in your corner.
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] text-white/45 uppercase">
            Visit
          </p>
          <p className="mt-3 text-[15px] leading-7 text-white/80">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex min-h-11 items-center text-gold"
            >
              {site.phone}
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] text-white/45 uppercase">
            Explore
          </p>
          <nav className="mt-2 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-[15px] text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-5 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Family owned in Commerce, California.</p>
        </div>
      </div>
    </footer>
  );
}
