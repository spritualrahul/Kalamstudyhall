import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  DoodleLayer,
  GradientWord,
  IconBubble,
  SectionBadge,
} from "@/components/KalamUI";
import { LottieContactAnimation } from "@/components/LottieContactAnimation";
import { LottieMessageAnimation } from "@/components/LottieMessageAnimation";
import { contact } from "@/data/kalam";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a visit, ask about programs, or contact Kalam Study Hall for creative after-school enrichment programs.",
};

const contactCards = [
  {
    title: "Visit Us",
    value: `${contact.address} - ${contact.addressDetail}`,
    icon: "map",
    tone: "purple",
  },
  {
    title: "Email Us",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: "mail",
    tone: "blue",
  },
  {
    title: "Call Us",
    value: contact.phone,
    href: `tel:${contact.phone.replaceAll(" ", "")}`,
    icon: "phone",
    tone: "pink",
  },
  {
    title: "Weekend Sessions",
    value: "Workshops, games, movie evenings, DIY activities and special events.",
    icon: "calendar",
    tone: "orange",
  },
] as const;

export default function ContactPage() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/contact.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "top 80px center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Light overlay for readability */}
      <div className="fixed inset-0 bg-white/10 pointer-events-none" style={{ zIndex: -1 }} />

      <section className="relative overflow-hidden pt-[118px]" style={{ zIndex: 1 }}>
        <DoodleLayer variant="right" />
        <div className="page-container py-10 text-center">
          <SectionBadge icon="mail" label="Get In Touch" tone="purple" />
          <div className="flex items-center justify-center gap-4 mt-6">
            <h1 className="section-title max-w-4xl">
              Book a Visit at <GradientWord>Kalam</GradientWord>
            </h1>
            <LottieContactAnimation />
          </div>
          <p className="section-copy mx-auto mt-5 max-w-3xl">
            Tell us about your child&apos;s age, interests, and learning needs. We will help you
            choose the best program or weekend experience.
          </p>
        </div>
      </section>

      <section className="page-section pt-8" style={{ zIndex: 1 }}>
        <div className="page-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            {contactCards.map((card) => (
              <article key={card.title} className="k-card flex items-start gap-4 p-6">
                <IconBubble icon={card.icon} tone={card.tone} size="md" />
                <div>
                  <h2 className="text-lg font-black text-[var(--kalam-navy)]">{card.title}</h2>
                  {"href" in card ? (
                    <a
                      href={card.href}
                      className="mt-2 block text-base leading-7 text-[var(--kalam-muted)] hover:text-[#6E3FE5]"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base leading-7 text-[var(--kalam-muted)]">{card.value}</p>
                  )}
                </div>
              </article>
            ))}

            <div className="k-card-soft p-8 text-center">
              <IconBubble icon="star" tone="purple" size="lg" />
              <p className="mt-5 text-base font-bold leading-7 text-[var(--kalam-navy)]">
                Kalam - A space where children come together to learn, explore, create, and grow.
              </p>
            </div>
          </div>

          <form
            action={`mailto:${contact.email}`}
            method="post"
            encType="text/plain"
            className="k-card p-7 md:p-9"
          >
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
                className="k-button bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] text-white shadow-xl shadow-purple-200/70"
              >
                Send Message
                <ArrowRight size={19} />
              </button>
              <LottieMessageAnimation />
            </div>
          </form>
        </div>
      </section>
    </div>
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
