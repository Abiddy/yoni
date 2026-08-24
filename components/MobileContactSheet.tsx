"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const OPEN_MAX = 46 * 16;
const DRAG_THRESHOLD = 10;

function openHeight() {
  return Math.min(window.innerHeight * 0.92, OPEN_MAX);
}

function isDragHandle(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest("[data-sheet-drag]"));
}

export function MobileContactSheet() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [dragHeight, setDragHeight] = useState<number | null>(null);
  const dragHeightRef = useRef<number | null>(null);
  const frame = useRef<number | null>(null);
  const gesture = useRef({
    active: false,
    startY: 0,
    startH: 0,
    moved: false,
    lastY: 0,
    lastT: 0,
    velocity: 0,
  });

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

  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet) return;

    const begin = (y: number) => {
      gesture.current = {
        active: true,
        startY: y,
        startH: expanded ? openHeight() : sheet.getBoundingClientRect().height,
        moved: false,
        lastY: y,
        lastT: performance.now(),
        velocity: 0,
      };
    };

    const applyHeight = (next: number) => {
      dragHeightRef.current = next;
      if (frame.current != null) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = null;
        setDragHeight(dragHeightRef.current);
      });
    };

    const move = (y: number) => {
      const g = gesture.current;
      if (!g.active) return;
      const now = performance.now();
      const dt = now - g.lastT;
      if (dt > 0) g.velocity = (y - g.lastY) / dt;
      g.lastY = y;
      g.lastT = now;

      const dy = y - g.startY;
      if (Math.abs(dy) > DRAG_THRESHOLD) g.moved = true;

      const max = openHeight();
      const min = expanded ? Math.round(max * 0.28) : Math.min(g.startH, max);
      applyHeight(Math.min(max, Math.max(min, g.startH - dy)));
    };

    const finish = () => {
      const g = gesture.current;
      if (!g.active) return;
      g.active = false;
      const current = dragHeightRef.current ?? g.startH;
      const max = openHeight();

      if (g.moved) {
        if (expanded) {
          setExpanded(!(g.startH - current > 56 || g.velocity > 0.28));
        } else {
          setExpanded(current - g.startH > 40 || g.velocity < -0.22);
        }
      }

      dragHeightRef.current = null;
      setDragHeight(null);
      window.setTimeout(() => {
        gesture.current.moved = false;
      }, 80);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (expanded && !isDragHandle(event.target)) return;
      begin(event.touches[0].clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!gesture.current.active) return;
      if (gesture.current.moved) event.preventDefault();
      move(event.touches[0].clientY);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (expanded && !isDragHandle(event.target)) return;
      begin(event.clientY);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (!gesture.current.active) return;
      move(event.clientY);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      finish();
    };

    sheet.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", finish);
    window.addEventListener("touchcancel", finish);
    sheet.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      sheet.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", finish);
      window.removeEventListener("touchcancel", finish);
      sheet.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      if (frame.current != null) window.cancelAnimationFrame(frame.current);
    };
  }, [expanded]);

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
        ref={sheetRef}
        id="mobile-contact"
        role="dialog"
        aria-labelledby="mobile-contact-title"
        aria-modal={expanded}
        data-sheet-drag={expanded ? undefined : true}
        onClickCapture={(event) => {
          if (gesture.current.moved) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 flex flex-col rounded-t-[1.75rem] bg-cream text-forest shadow-[0_-18px_50px_rgb(0_0_0_/0.28)]",
          dragHeight == null && "transition-[height] duration-300 ease-out",
          expanded && dragHeight == null ? "h-[min(92dvh,46rem)]" : "",
          !expanded && dragHeight == null ? "h-auto" : "",
          !expanded && "[&_a]:[touch-action:none] [&_button]:[touch-action:none]",
        )}
        style={dragHeight != null ? { height: dragHeight } : undefined}
      >
        <div
          data-sheet-drag
          className="flex shrink-0 flex-col items-center pt-3 pb-2"
        >
          <span className="h-1.5 w-12 rounded-full bg-forest/25" />
        </div>

        {expanded ? (
          <>
            <div data-sheet-drag className="shrink-0 px-5 pb-3">
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
              Swipe up for the form — we’ll call in under 60 minutes.
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
