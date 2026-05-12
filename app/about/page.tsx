import type { Metadata } from "next";
import Image from "next/image";
import {
  DoodleLayer,
  GradientWord,
  IconBubble,
  KalamIcon,
  SectionBadge,
} from "@/components/KalamUI";
import {
  aboutIntro,
  aboutParagraphs,
  missionVision,
  parentReasons,
} from "@/data/kalam";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kalam Study Hall, a joyful after-school enrichment space inspired by learning, creativity, and Dr. A.P.J. Abdul Kalam.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-[100px] sm:pt-[118px]">
        <DoodleLayer variant="right" />
        <div className="page-container grid gap-8 py-6 sm:gap-10 sm:py-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionBadge icon="book" label="Our Story" tone="purple" />
            <h1 className="mt-4 text-[clamp(2rem,6vw,5.2rem)] font-black leading-[1.05] text-[var(--kalam-navy)] sm:mt-6">
              About
              <br />
              <GradientWord from="#F45B56" via="#C83FEA" to="#6E3FE5">Kalam</GradientWord>{" "}
              Study Hall
            </h1>

            <div className="mt-6 grid gap-4 border-b border-dashed border-[#DACDFF] pb-6 sm:mt-8 sm:pb-7">
              {aboutIntro.map((line, index) => (
                <div key={line} className="flex gap-3 sm:gap-4">
                  <IconBubble
                    icon={index === 0 ? "pencil" : "users"}
                    tone={index === 0 ? "purple" : "pink"}
                    size="sm"
                  />
                  <p className="text-sm leading-6 text-[var(--kalam-navy)] sm:text-base sm:leading-7">{line}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-4 text-[0.92rem] leading-6 text-[var(--kalam-muted)] sm:mt-7 sm:space-y-5 sm:text-[0.98rem] sm:leading-7">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-purple-100 sm:rounded-[2rem]">
              <div className="relative h-[260px] sm:h-[350px] lg:h-[430px]">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&h=600&fit=crop&q=85"
                  alt="Excited children raising hands in a bright classroom"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-0 bg-white p-4 sm:grid-cols-4 sm:p-6">
                {[
                  ["users", "Learn Together", "purple"],
                  ["lightbulb", "Explore Possibilities", "yellow"],
                  ["heart", "Build Confidence", "pink"],
                  ["smile", "Create Memories", "green"],
                ].map(([icon, label, tone]) => (
                  <div
                    key={label}
                    className="border-slate-200 px-3 py-3 text-center text-xs font-extrabold text-[var(--kalam-navy)] sm:border-l sm:px-4 sm:text-sm first:sm:border-l-0"
                  >
                    <IconBubble
                      icon={icon as "users"}
                      tone={tone as "purple"}
                      size="sm"
                      className="mx-auto mb-2 sm:mb-3"
                    />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-center text-2xl font-black text-[var(--kalam-navy)] sm:text-3xl">
                Our Mission & Vision
              </h2>
              <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-5 md:grid-cols-2">
                {missionVision.map((item) => (
                  <article key={item.title} className="k-card-soft p-5 text-center sm:p-7">
                    <IconBubble icon={item.icon} tone={item.tone} size="lg" />
                    <h3 className="mt-4 text-lg font-black text-[var(--kalam-navy)] sm:mt-5 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--kalam-muted)] sm:mt-4">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-[#FFFEFB]">
        <div className="page-container">
          <h2 className="text-center text-2xl font-black text-[var(--kalam-navy)] sm:text-3xl">
            Why Parents Choose Kalam
          </h2>
          <div className="k-card mt-5 grid gap-0 p-4 sm:mt-7 sm:p-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {parentReasons.map((reason, index) => (
              <article
                key={reason.title}
                className="px-3 py-4 text-center sm:px-5 sm:py-6 xl:border-l xl:border-[#E6DAFF] first:xl:border-l-0"
              >
                <IconBubble icon={reason.icon} tone={reason.tone} size="md" />
                <h3 className="mt-3 text-sm font-black leading-tight text-[var(--kalam-navy)] sm:mt-4 sm:text-base">
                  {reason.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--kalam-muted)] sm:mt-3 sm:text-sm sm:leading-6">{reason.description}</p>
                {index === parentReasons.length - 1 ? (
                  <KalamIcon name="trophy" className="mx-auto mt-3 text-[#2474E8] sm:mt-4" size={20} />
                ) : null}
              </article>
            ))}
          </div>

          <div className="k-card-soft mt-8 grid overflow-hidden sm:mt-10 md:grid-cols-[1fr_0.8fr] lg:grid-cols-[1fr_0.8fr_0.62fr]">
            <div className="p-6 sm:p-9">
              <p className="text-4xl font-black leading-none text-[#6E3FE5] sm:text-5xl">"</p>
              <blockquote className="mt-2 text-base font-bold leading-7 text-[var(--kalam-navy)] sm:text-lg sm:leading-8">
                Kalam means Pen and a place where people come together - and every child at
                Kalam Study Hall is encouraged to write their own story with confidence,
                creativity, and purpose.
              </blockquote>
              <p className="mt-4 font-extrabold text-[#6E3FE5] sm:mt-5">- Dr. A.P.J. Abdul Kalam</p>
            </div>
            <div className="relative min-h-[180px] sm:min-h-[230px]">
              <Image
                src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=700&h=500&fit=crop&q=85"
                alt="A child writing thoughtfully at a desk"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="bg-gradient-to-br from-[#7B4EF4] to-[#5A34D6] p-6 text-white sm:p-9">
              {["Dream Big", "Learn Deep", "Create More", "Inspire Others", "Succeed Together"].map(
                (item, index) => (
                  <p key={item} className="mt-3 flex items-center gap-3 first:mt-0 sm:mt-4">
                    <KalamIcon
                      name={index === 0 ? "star" : index === 1 ? "lightbulb" : index === 2 ? "heart" : index === 3 ? "party" : "trophy"}
                      size={18}
                    />
                    <span className="font-extrabold">{item}</span>
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
