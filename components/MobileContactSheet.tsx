"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const PEEK =
  "3.75rem + max(1rem, env(safe-area-inset-bottom, 0px))";

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
        aria-label="Request a call"
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
          <div className="relative shrink-0 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              aria-label="Close form"
              tabIndex={expanded ? 0 : -1}
              className={cn(
                "absolute top-4 left-5 z-10 inline-flex h-11 w-11 items-center justify-center text-forest/70 transition-opacity duration-500",
                expanded
                  ? "opacity-100"
                  : "pointer-events-none opacity-0",
              )}
              onClick={() => setExpanded(false)}
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <div
              className={cn(
                "flex justify-center transition-opacity duration-500",
                expanded && "pointer-events-none opacity-0",
              )}
            >
              <button
                type="button"
                aria-label="Request a call"
                tabIndex={expanded ? -1 : 0}
                className="inline-flex min-h-11 items-center justify-center bg-gold px-8 text-[12px] font-semibold tracking-[0.18em] text-forest-deep uppercase"
                onClick={() => setExpanded(true)}
              >
                Request a call
              </button>
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
