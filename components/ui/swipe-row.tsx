"use client";

import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SwipeRow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [grabbing, setGrabbing] = useState(false);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
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
        "flex w-full snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:gap-6 sm:px-8 sm:snap-mandatory lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        grabbing ? "select-none" : "",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {children}
    </div>
  );
}
