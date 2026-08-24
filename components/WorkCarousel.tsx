"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { workCases } from "@/lib/work";

export function WorkCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [index, setIndex] = useState(0);

  const syncIndex = useCallback(() => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | undefined;
    if (!el || !card) return;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 16;
    const step = card.getBoundingClientRect().width + gap;
    if (step <= 0) return;
    const next = Math.round(el.scrollLeft / step);
    setIndex(Math.max(0, Math.min(workCases.length - 1, next)));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => syncIndex();
    el.addEventListener("scroll", onScroll, { passive: true });
    syncIndex();
    return () => el.removeEventListener("scroll", onScroll);
  }, [syncIndex]);

  const goTo = (next: number) => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | undefined;
    if (!el || !card) return;
    const total = workCases.length;
    const target = (next + total) % total;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 16;
    el.scrollTo({
      left: target * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !ref.current) return;
    const delta = event.clientX - drag.current.startX;
    if (Math.abs(delta) > 8) drag.current.moved = true;
    ref.current.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    if (ref.current?.hasPointerCapture(event.pointerId)) {
      ref.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="mt-8 md:hidden">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {workCases.map((prop) => (
          <Link
            key={prop.slug}
            href={`/work/${prop.slug}`}
            draggable={false}
            onClick={(event) => {
              if (drag.current.moved) {
                event.preventDefault();
                drag.current.moved = false;
              }
            }}
            className="w-[min(17.5rem,calc(100%-1.75rem))] shrink-0 snap-start overflow-hidden bg-forest-deep"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={prop.image}
                alt={prop.description}
                fill
                className="object-cover"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60" />
            </div>
            <div className="px-3.5 py-3">
              <p className="text-[10px] font-medium tracking-[0.16em] text-gold uppercase">
                {prop.title}
              </p>
              <h3 className="mt-1 font-serif text-[1.05rem] leading-snug text-white">
                {prop.location}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-white/60">
                {prop.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous property"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="min-w-[4.75rem] text-center text-[11px] tracking-[0.18em] text-white/50 uppercase tabular-nums">
          {index + 1} / {workCases.length}
        </p>
        <button
          type="button"
          aria-label="Next property"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
