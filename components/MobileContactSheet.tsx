"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileContactSheet() {
  const [expanded, setExpanded] = useState(false);
  const drag = useRef({ active: false, startY: 0 });

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#contact" && window.innerWidth < 1024) {
        setExpanded(true);
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (
        (href === "#contact" || href === "/#contact") &&
        window.innerWidth < 1024
      ) {
        event.preventDefault();
        setExpanded(true);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", openFromHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded]);

  const onHandleDown = (event: PointerEvent<HTMLDivElement>) => {
    drag.current = { active: true, startY: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onHandleUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const delta = event.clientY - drag.current.startY;
    drag.current.active = false;
    if (delta < -36) setExpanded(true);
    if (delta > 36) setExpanded(false);
  };

  return (
    <div className="lg:hidden">
      {expanded ? (
        <button
          type="button"
          aria-label="Close form"
          className="fixed inset-0 z-40 bg-forest-deep/45"
          onClick={() => setExpanded(false)}
        />
      ) : null}

      <div
        id="mobile-contact"
        role="dialog"
        aria-labelledby="mobile-contact-title"
        aria-modal={expanded}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 flex flex-col rounded-t-[1.75rem] bg-cream text-forest shadow-[0_-18px_50px_rgb(0_0_0_/0.28)] transition-[height] duration-300 ease-out",
          expanded ? "h-[min(92dvh,46rem)]" : "h-auto",
        )}
      >
        <div
          className="flex shrink-0 cursor-grab touch-none flex-col items-center pt-2.5 pb-1 active:cursor-grabbing"
          onPointerDown={onHandleDown}
          onPointerUp={onHandleUp}
          onPointerCancel={onHandleUp}
          onClick={() => {
            if (!expanded) setExpanded(true);
          }}
        >
          <span className="h-1 w-10 rounded-full bg-forest/20" />
        </div>

        {expanded ? (
          <>
            <div className="shrink-0 px-5 pb-3">
              <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
                Start here
              </p>
              <h2
                id="mobile-contact-title"
                className="mt-2 font-serif text-[1.65rem] leading-tight text-forest"
              >
                Leave your information
              </h2>
              <p className="mt-2 text-[13px] leading-5 text-forest/60">
                We will call you in less than 60 minutes.
              </p>
            </div>
            <ContactForm tone="light" stickySubmit />
          </>
        ) : (
          <div className="px-5 pt-1 pb-[max(0.85rem,env(safe-area-inset-bottom))]">
            <p className="text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
              Start here
            </p>
            <h2
              id="mobile-contact-title"
              className="mt-1.5 font-serif text-[1.35rem] leading-tight text-forest"
            >
              Leave your information
            </h2>
            <p className="mt-1 text-[13px] text-forest/55">
              We’ll call you in under 60 minutes.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-12 items-center justify-center border border-forest/15 px-3 text-[11px] font-semibold tracking-[0.14em] text-forest uppercase"
              >
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                Call
              </a>
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center bg-gold px-3 text-[11px] font-semibold tracking-[0.14em] text-forest-deep uppercase"
                onClick={() => setExpanded(true)}
              >
                Request a call
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
