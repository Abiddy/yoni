"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
  errors: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
  };
  values: {
    name: string;
    address: string;
    phone: string;
    email: string;
    note: string;
  };
};

const emptyValues = {
  name: "",
  address: "",
  phone: "",
  email: "",
  note: "",
};

const empty: ContactState = {
  ok: false,
  message: "",
  errors: {},
  values: emptyValues,
};

function read(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = read(formData, "name");
  const address = read(formData, "address");
  const phone = read(formData, "phone");
  const email = read(formData, "email");
  const note = read(formData, "note");

  const errors: ContactState["errors"] = {};

  if (name.length < 2) errors.name = "Please enter your full name.";
  if (address.length < 5) errors.address = "Please enter a street address.";
  if (!/^[+()\d\s.-]{7,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email.";
  }

  const values = { name, address, phone, email, note };

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "riosyoni@gmail.com";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Value 4 Casa <beth.t@example.com>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      ok: false,
      message: "The form is not connected yet. Please call us instead.",
      errors: {},
      values,
    };
  }

  const lead = {
    name,
    address,
    phone,
    email,
    note,
    createdAt: new Date().toISOString(),
  };

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New lead from ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Address: ${address}`,
      `Note: ${note || "(none)"}`,
    ].join("\n"),
    html: `
      <h2>New Value 4 Casa lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Address:</strong> ${escapeHtml(address)}</p>
      <p><strong>How can we help:</strong><br/>${escapeHtml(note || "(none)").replaceAll("\n", "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("Resend failed", error);
    return {
      ok: false,
      message: "Something went wrong sending this. Please call us instead.",
      errors: {},
      values,
    };
  }

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "leads.jsonl"),
      `${JSON.stringify(lead)}\n`,
      "utf8",
    );
  } catch (persistError) {
    console.error("Could not persist lead locally", persistError);
  }

  return {
    ...empty,
    ok: true,
    message:
      "Thank you. A specialist will call you in less than 60 minutes.",
  };
}
