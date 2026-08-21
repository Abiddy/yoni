"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-forest-deep shadow-[0_1px_0_rgb(255_255_255_/0.06)]"
          : "bg-forest-deep"
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="/" className="text-white" onClick={() => setOpen(false)}>
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

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-forest-deep px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-gold"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
