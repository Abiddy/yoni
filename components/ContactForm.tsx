"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initial: ContactState = {
  ok: false,
  message: "",
  errors: {},
  values: { name: "", address: "", phone: "", email: "", note: "" },
};

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    placeholder: "Your full name",
    span: "sm:col-span-1",
  },
  {
    name: "phone",
    label: "Contact #",
    type: "tel",
    autoComplete: "tel",
    placeholder: "(555) 000-0000",
    span: "sm:col-span-1",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "you@example.com",
    span: "sm:col-span-1",
  },
  {
    name: "address",
    label: "Property address",
    type: "text",
    autoComplete: "street-address",
    placeholder: "Street, city, and ZIP",
    span: "sm:col-span-1",
  },
] as const;

export function ContactForm({
  tone = "dark",
  stickySubmit = false,
  compact = false,
}: {
  tone?: "dark" | "light";
  stickySubmit?: boolean;
  compact?: boolean;
}) {
  const [state, action, pending] = useActionState(submitContact, initial);
  const light = tone === "light";

  if (state.ok) {
    return (
      <div
        className={cn(
          "flex flex-col justify-center py-6",
          stickySubmit ? "min-h-40 px-5" : "min-h-40 sm:min-h-[280px]",
        )}
      >
        <p className="font-serif text-3xl text-gold">Thank you.</p>
        <p
          className={cn(
            "mt-4 text-[15px] leading-7",
            light ? "text-forest/70" : "text-white/75",
          )}
        >
          {state.message}
        </p>
      </div>
    );
  }

  const labelClass = light
    ? "text-[11px] font-medium tracking-[0.18em] text-forest/50 uppercase"
    : "text-[11px] font-medium tracking-[0.18em] text-white/55 uppercase";
  const inputClass = light ? "underline-input-light mt-1" : "underline-input mt-1";
  const errorClass = light
    ? "mt-2 block text-xs tracking-wide text-forest"
    : "mt-2 block text-xs tracking-wide text-gold-bright";

  const fieldsBlock = (
    <>
      <div className={cn("grid grid-cols-1 sm:grid-cols-2", compact ? "gap-3" : "gap-4")}>
        {fields.map((field) => {
          const error = state.errors[field.name];
          return (
            <label key={field.name} className={`block ${field.span}`}>
              <span className={labelClass}>{field.label}</span>
              <input
                name={field.name}
                type={field.type}
                inputMode={field.name === "phone" ? "tel" : undefined}
                autoComplete={field.autoComplete}
                autoCapitalize={field.name === "name" ? "words" : undefined}
                placeholder={field.placeholder}
                defaultValue={state.values[field.name]}
                className={inputClass}
                aria-invalid={Boolean(error)}
              />
              {error ? <span className={errorClass}>{error}</span> : null}
            </label>
          );
        })}
      </div>

      <label className="block">
        <span className={labelClass}>How can we help</span>
        <textarea
          name="note"
          rows={compact ? 2 : 3}
          placeholder="Foreclosure, probate, selling as-is, or investing"
          defaultValue={state.values.note}
          className={`${inputClass} resize-none`}
        />
      </label>
    </>
  );

  const submit = (
    <>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center bg-gold px-8 py-3.5 text-[12px] font-semibold tracking-[0.2em] text-forest-deep uppercase transition-colors hover:bg-gold-bright disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a call"}
      </button>
      {state.message && !state.ok ? (
        <p className={cn("text-sm", light ? "text-forest" : "text-gold-bright")}>
          {state.message}
        </p>
      ) : null}
    </>
  );

  if (stickySubmit) {
    return (
      <form
        action={action}
        className="flex min-h-0 flex-1 flex-col"
        key={JSON.stringify(state.errors)}
      >
        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-5 pb-4">
          {fieldsBlock}
        </div>
        <div className="shrink-0 space-y-3 border-t border-forest/10 bg-cream px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          {submit}
        </div>
      </form>
    );
  }

  return (
    <form action={action} className={compact ? "space-y-4" : "space-y-5"} key={JSON.stringify(state.errors)}>
      {fieldsBlock}
      {submit}
    </form>
  );
}
