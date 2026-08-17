"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

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

  const lead = {
    name,
    address,
    phone,
    email,
    note,
    createdAt: new Date().toISOString(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "leads.jsonl"),
      `${JSON.stringify(lead)}\n`,
      "utf8",
    );
  } catch (error) {
    console.error("Could not persist lead locally", error);
  }

  return {
    ...empty,
    ok: true,
    message:
      "Thank you. A specialist will call you in less than 60 minutes.",
  };
}
