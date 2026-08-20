import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:px-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-14">
        <div>
          <Logo size="footer" />
          <p className="mt-5 max-w-sm font-serif text-2xl leading-snug text-white/90">
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
            <a href={site.phoneHref} className="mt-2 inline-block text-gold">
              {site.phone}
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] text-white/45 uppercase">
            Explore
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Family owned in Commerce, California.</p>
        </div>
      </div>
    </footer>
  );
}
