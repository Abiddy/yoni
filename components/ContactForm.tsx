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
    name: "address",
    label: "Address",
    type: "text",
    autoComplete: "street-address",
    placeholder: "Street, city, and ZIP",
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    placeholder: "Your full name",
  },
  {
    name: "phone",
    label: "Contact #",
    type: "tel",
    autoComplete: "tel",
    placeholder: "(555) 000-0000",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "you@example.com",
  },
] as const;

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center border border-gold/30 bg-white/3 px-8 py-12">
        <p className="font-serif text-4xl text-gold">Thank you.</p>
        <p className="mt-5 max-w-md text-[15px] leading-7 text-white/75">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-8" key={JSON.stringify(state.errors)}>
      {fields.map((field) => {
        const error = state.errors[field.name];
        return (
          <label key={field.name} className="block">
            <span className="font-serif text-[28px] leading-none text-white sm:text-[32px]">
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

      <label className="block">
        <span className="font-serif text-[28px] leading-none text-white sm:text-[32px]">
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
        className="mt-2 inline-flex items-center justify-center border border-gold px-8 py-3.5 text-[12px] font-medium tracking-[0.22em] text-gold uppercase transition-colors hover:bg-gold hover:text-forest-deep disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a call"}
      </button>

      {state.message && !state.ok ? (
        <p className="text-sm text-gold-bright">{state.message}</p>
      ) : null}
    </form>
  );
}
