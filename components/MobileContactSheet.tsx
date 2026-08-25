"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const PEEK =
  "3rem + max(0.75rem, env(safe-area-inset-bottom, 0px))";

export function MobileContactSheet() {
  const [expanded, setExpanded] = useState(false);

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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Close form"
        tabIndex={expanded ? 0 : -1}
        className={cn(
          "fixed inset-0 z-40 bg-forest-deep/50 transition-opacity duration-500",
          expanded ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setExpanded(false)}
      />

      <div
        id="mobile-contact"
        role={expanded ? "dialog" : "region"}
        aria-labelledby="mobile-contact-title"
        aria-modal={expanded}
        className="fixed inset-x-0 bottom-0 z-40 h-[min(92dvh,46rem)] rounded-t-[1.75rem] bg-cream text-forest shadow-[0_-18px_50px_rgb(0_0_0_/0.28)] will-change-transform"
        style={{
          transform: expanded
            ? "translate3d(0, 0, 0)"
            : `translate3d(0, calc(100% - (${PEEK})), 0)`,
          transition: "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-t-[1.75rem]">
          <div className="flex shrink-0 flex-col pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="grid h-9 grid-cols-[minmax(2.75rem,1fr)_auto_minmax(2.75rem,1fr)] items-center gap-2 px-3">
              <div className="justify-self-start">
                <button
                  type="button"
                  aria-label="Close form"
                  tabIndex={expanded ? 0 : -1}
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center text-forest/70 transition-opacity duration-500",
                    expanded
                      ? "opacity-100"
                      : "pointer-events-none opacity-0",
                  )}
                  onClick={() => setExpanded(false)}
                >
                  <X className="h-5 w-5" strokeWidth={2} />
                </button>
              </div>

              <h2
                id="mobile-contact-title"
                className="truncate text-center font-serif text-[1.05rem] leading-none text-forest"
              >
                Leave your information
              </h2>

              <div className="justify-self-end">
                <button
                  type="button"
                  aria-label="Open form"
                  tabIndex={expanded ? -1 : 0}
                  className={cn(
                    "inline-flex h-9 items-center bg-gold px-3.5 text-[11px] font-semibold tracking-[0.14em] text-forest-deep uppercase transition-opacity duration-500",
                    expanded
                      ? "pointer-events-none opacity-0"
                      : "opacity-100",
                  )}
                  onClick={() => setExpanded(true)}
                >
                  Open
                </button>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col" inert={!expanded}>
            <ContactForm tone="light" stickySubmit />
          </div>
        </div>
      </div>
    </div>
  );
}
