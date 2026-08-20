"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

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

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="flex min-h-[360px] flex-col justify-center">
        <p className="font-serif text-3xl text-gold">Thank you.</p>
        <p className="mt-4 text-[15px] leading-7 text-white/75">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5" key={JSON.stringify(state.errors)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const error = state.errors[field.name];
          return (
            <label key={field.name} className={`block ${field.span}`}>
              <span className="text-[11px] font-medium tracking-[0.18em] text-white/55 uppercase">
                {field.label}
              </span>
              <input
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                defaultValue={state.values[field.name]}
                className="underline-input mt-1"
                aria-invalid={Boolean(error)}
              />
              {error ? (
                <span className="mt-2 block text-xs tracking-wide text-gold-bright">
                  {error}
                </span>
              ) : null}
            </label>
          );
        })}
      </div>

      <label className="block">
        <span className="text-[11px] font-medium tracking-[0.18em] text-white/55 uppercase">
          How can we help
        </span>
        <textarea
          name="note"
          rows={3}
          placeholder="Foreclosure, probate, selling as-is, or investing"
          defaultValue={state.values.note}
          className="underline-input mt-1 resize-none"
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center bg-gold px-8 py-3.5 text-[12px] font-semibold tracking-[0.2em] text-forest-deep uppercase transition-colors hover:bg-gold-bright disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a call"}
      </button>

      {state.message && !state.ok ? (
        <p className="text-sm text-gold-bright">{state.message}</p>
      ) : null}
    </form>
  );
}
