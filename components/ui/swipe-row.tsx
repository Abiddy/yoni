"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SwipeRow({
  children,
  className = "",
  autoPlay = false,
  interval = 3800,
}: {
  children: ReactNode;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const paused = useRef(false);
  const resumeTimer = useRef<number | null>(null);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tick = () => {
      if (paused.current || drag.current.active) return;
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 16;
      const step = card.getBoundingClientRect().width + gap;
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + step;
      el.scrollTo({
        left: next >= max - 12 ? 0 : next,
        behavior: "smooth",
      });
    };

    const id = window.setInterval(tick, interval);
    return () => {
      window.clearInterval(id);
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, [autoPlay, interval]);

  const pause = () => {
    paused.current = true;
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
  };

  const resumeSoon = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      paused.current = false;
    }, 4500);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pause();
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
    };
    setGrabbing(true);
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !ref.current) return;
    ref.current.scrollLeft =
      drag.current.startScroll - (event.clientX - drag.current.startX);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    resumeSoon();
    if (!drag.current.active) return;
    drag.current.active = false;
    setGrabbing(false);
    if (ref.current?.hasPointerCapture(event.pointerId)) {
      ref.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain px-5 pb-2 scroll-px-5 sm:gap-6 sm:px-8 sm:scroll-px-8 sm:snap-mandatory lg:px-12 lg:scroll-px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        grabbing ? "select-none" : "",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerEnter={pause}
      onPointerLeave={resumeSoon}
    >
      {children}
    </div>
  );
}
