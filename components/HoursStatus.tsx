"use client";

import { useEffect, useState } from "react";
import { getBusinessStatus } from "@/lib/hours";

export function HoursStatus() {
  const [label, setLabel] = useState("Hours");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const status = getBusinessStatus();
      setOpen(status.open);
      setLabel(status.label);
    };
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const [state, rest] = label.split(" ⋅ ");

  return (
    <p>
      <span className={open ? "text-[#188038]" : "text-[#d93025]"}>{state}</span>
      {rest ? <span> ⋅ {rest}</span> : null}
    </p>
  );
}
