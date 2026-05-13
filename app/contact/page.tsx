import type { Metadata } from "next";
import {
  DoodleLayer,
  GradientWord,
  IconBubble,
  SectionBadge,
} from "@/components/KalamUI";
import { LottieContactAnimation } from "@/components/LottieContactAnimation";
import { contact } from "@/data/kalam";
import ContactForm from "@/components/ContactForm";

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

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
