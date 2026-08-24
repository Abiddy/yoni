"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { MobileContactSheet } from "@/components/MobileContactSheet";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
          scrolled || open
            ? "bg-forest-deep shadow-[0_1px_0_rgb(255_255_255_/0.06)]"
            : "bg-forest-deep"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-8 lg:h-[84px] lg:px-12">
          <a
            href="/"
            className="min-w-0 shrink text-white"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-[0.16em] text-white/70 uppercase transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[13px] tracking-[0.08em] text-gold transition-colors hover:text-gold-bright lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>

          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={site.phoneHref}
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-gold px-3.5 text-[12px] font-semibold tracking-[0.12em] text-forest-deep uppercase"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-white"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-white/10 bg-forest-deep px-5 py-8 sm:top-[calc(4.5rem+env(safe-area-inset-top))] lg:hidden"
        >
          <nav className="mx-auto flex max-w-lg flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-serif text-[1.75rem] leading-none text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 text-[13px] font-semibold tracking-[0.16em] text-forest-deep uppercase"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}

      {!open ? <MobileContactSheet /> : null}
    </>
  );
}
