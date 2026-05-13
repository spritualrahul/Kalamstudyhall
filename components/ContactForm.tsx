"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { LottieMessageAnimation } from "@/components/LottieMessageAnimation";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: fd.get("Parent Name"),
          phone: fd.get("Phone"),
          childAge: fd.get("Child Age or Grade"),
          interestedIn: fd.get("Interested In"),
          message: fd.get("Message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="k-card p-7 md:p-9">
      <h2 className="text-3xl font-black text-[var(--kalam-navy)]">Send a Message</h2>
      <p className="mt-3 text-base leading-7 text-[var(--kalam-muted)]">
        Share a few details and we will get back to you with the right next step.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Parent Name" name="Parent Name" placeholder="Your name" required />
        <Field label="Phone Number" name="Phone" placeholder="+91 XXXXX XXXXX" required />
        <Field label="Child Age / Grade" name="Child Age or Grade" placeholder="Grade 3" />
        <Field label="Interested In" name="Interested In" placeholder="Programs or workshops" />
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-extrabold text-[var(--kalam-navy)]">Message</span>
        <textarea
          name="Message"
          rows={6}
          placeholder="Tell us what your child enjoys, where support is needed, or which experience you would like to book."
          className="mt-2 w-full rounded-2xl border border-[#E6DAFF] bg-[#FCFAFF] px-4 py-3 text-base text-[var(--kalam-navy)] outline-none transition focus:border-[#7B4EF4] focus:ring-4 focus:ring-[#F3EDFF]"
        />
      </label>

      <div className="mt-7 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="k-button bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] text-white shadow-xl shadow-purple-200/70 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <ArrowRight size={19} />
        </button>
        <LottieMessageAnimation />
      </div>

      {status === "sent" && (
        <p className="mt-4 text-sm font-semibold text-green-600">
          ✓ Message sent! We will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-semibold text-red-500">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-extrabold text-[var(--kalam-navy)]">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[#E6DAFF] bg-[#FCFAFF] px-4 py-3 text-base text-[var(--kalam-navy)] outline-none transition focus:border-[#7B4EF4] focus:ring-4 focus:ring-[#F3EDFF]"
      />
    </label>
  );
}
