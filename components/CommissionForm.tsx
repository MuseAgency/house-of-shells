"use client";

import { useState } from "react";

const sizes = [
  { value: "small", label: "Small (≤ 20×20 cm)" },
  { value: "medium", label: "Medium (~30×40 cm)" },
  { value: "large", label: "Large (~50×70 cm)" },
  { value: "xlarge", label: "Extra large (60×80 cm+)" },
  { value: "unsure", label: "Not sure yet" },
];

const budgets = [
  { value: "under-100", label: "Under €100" },
  { value: "100-250", label: "€100 — €250" },
  { value: "250-500", label: "€250 — €500" },
  { value: "500-plus", label: "€500+" },
  { value: "open", label: "Open / advise me" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function CommissionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { "form-name": "commission" };
    data.forEach((value, key) => {
      payload[key] = value.toString();
    });

    const encode = (obj: Record<string, string>) =>
      Object.keys(obj)
        .map(
          (k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`,
        )
        .join("&");

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
      console.error("commission form submit failed", err);
    }
  }

  if (status === "success") {
    return (
      <div className="border border-champagne/40 bg-cream-light/40 px-6 py-12 text-center">
        <p className="font-display text-[10px] tracking-[0.45em] uppercase text-champagne sm:text-xs">
          Received
        </p>
        <h3 className="mt-4 font-display text-2xl leading-tight font-light text-ink italic sm:text-3xl">
          Thank you — we&apos;ll be in touch soon.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft sm:text-base">
          We read every commission request personally. Expect a reply within
          two business days — usually faster.
        </p>
      </div>
    );
  }

  return (
    <form
      name="commission"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-6"
    >
      {/* Netlify fields */}
      <input type="hidden" name="form-name" value="commission" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="WhatsApp (optional)" name="whatsapp" type="tel" />
        <Field label="How did you find us?" name="referrer" placeholder="Instagram, TikTok, friend…" />
      </div>

      <Field
        label="Theme or world that inspires you"
        name="theme"
        placeholder="A film, fairytale, era, color palette, vibe…"
        required
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Select label="Canvas size" name="size" options={sizes} required />
        <Select label="Budget" name="budget" options={budgets} required />
      </div>

      <Field
        label="Deadline (optional)"
        name="deadline"
        placeholder="Birthday in October, no rush…"
      />

      <Textarea
        label="Anything else we should know?"
        name="message"
        placeholder="Colors you love, things to avoid, an occasion, who it's for…"
      />

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-3 border border-ink px-8 py-4 font-display text-sm tracking-[0.3em] uppercase text-ink transition-all duration-500 hover:bg-ink hover:text-pearl disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>{status === "submitting" ? "Sending…" : "Send request"}</span>
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </button>

        {status === "error" && (
          <p className="text-sm text-sage-deep">
            {errorMessage ?? "Something went wrong. Please try again or email us."}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute sm:text-xs">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink placeholder:text-ink-mute/60 focus:border-sage-deep focus:outline-none sm:text-base"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute sm:text-xs">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink placeholder:text-ink-mute/60 focus:border-sage-deep focus:outline-none sm:text-base"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.35em] uppercase text-ink-mute sm:text-xs">
        {label}
        {required ? " *" : ""}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink focus:border-sage-deep focus:outline-none sm:text-base"
      >
        <option value="" disabled>
          Choose one…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
