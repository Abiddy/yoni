"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "v4c-contact-modal-dismissed";
const AUTO_OPEN_MS = 4000;

export function ContactModal() {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 1024;

    const openModal = () => {
      if (!isDesktop()) return;
      setOpen(true);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (
        (href === "#contact" || href === "/#contact") &&
        isDesktop()
      ) {
        event.preventDefault();
        openModal();
      }
    };

    const onHash = () => {
      if (window.location.hash === "#contact") openModal();
    };

    const onCustom = () => openModal();

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("open-contact", onCustom);
    onHash();

    let timer = 0;
    try {
      if (!sessionStorage.getItem(STORAGE_KEY) && isDesktop()) {
        timer = window.setTimeout(openModal, AUTO_OPEN_MS);
      }
    } catch {
      timer = window.setTimeout(openModal, AUTO_OPEN_MS);
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("open-contact", onCustom);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] hidden lg:block"
      onWheel={(event) => {
        window.scrollBy({ top: event.deltaY, left: event.deltaX });
      }}
    >
      <button
        type="button"
        aria-label="Close form"
        className="absolute inset-0 bg-forest-deep/70 backdrop-blur-[2px]"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className={cn(
          "absolute top-1/2 left-1/2 w-[min(34rem,calc(100vw-3rem))] -translate-x-1/2 -translate-y-1/2 border border-white/12 bg-forest-deep px-8 py-8 shadow-[0_24px_80px_rgb(0_0_0_/0.45)]",
        )}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center text-white/55 transition-colors hover:text-white"
          onClick={close}
        >
          <X className="h-5 w-5" />
        </button>
        <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
          Start here
        </p>
        <h2
          id="contact-modal-title"
          className="mt-3 pr-10 font-serif text-[2rem] text-white"
        >
          Leave your information
        </h2>
        <p className="mt-3 mb-7 text-[14px] leading-6 text-white/62">
          We will call you in less than 60 minutes and give you the value you
          deserve for your casa.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
