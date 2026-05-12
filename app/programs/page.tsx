import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PaperPlaneDecor } from "@/components/Decorations";
import {
  GradientWord,
  IconBubble,
  KalamIcon,
  ProgramCard,
  SectionBadge,
} from "@/components/KalamUI";
import { allPrograms, programDifference } from "@/data/kalam";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Kalam Study Hall after-school enrichment programs for foundations, communication, confidence, logic, digital learning, and well-being.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-10 pt-[70px] sm:pb-16 lg:pb-24 lg:pt-[80px]">
        {/* Programs bg image — full cover */}
        <img
          src="/programs-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute left-0 right-0 w-full pointer-events-none"
          style={{ zIndex: 0, top: "4rem", height: "auto" }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none" style={{ zIndex: 1 }} />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="page-container text-center">
            <SectionBadge icon="star" label="After-School Enrichment Programs" tone="purple" />
            <h1 className="section-title mx-auto mt-4 max-w-4xl sm:mt-6">
              Programs That Help Children{" "}
              <GradientWord>Learn, Communicate & Grow</GradientWord>
            </h1>
            <p className="section-copy mx-auto mt-4 max-w-3xl sm:mt-5">
              Meaningful learning experiences designed to help children build confidence,
              creativity, communication skills, and strong academic foundations in a joyful
              environment.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FFFEFB] py-5 sm:py-7">
        <div className="page-container">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
            {allPrograms.map((program) => (
              <ProgramCard key={program.title} program={program} mode="listing" />
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="k-card-soft relative overflow-hidden p-5 sm:p-8">
              <PaperPlaneDecor className="right-6 top-4 hidden scale-75 lg:block" />
              <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-5">
                <div>
                  <h2 className="text-2xl font-black text-[var(--kalam-navy)] sm:text-3xl">
                    Why Our Programs Make a Difference
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--kalam-muted)] sm:mt-4 sm:text-base sm:leading-7">
                    At Kalam Study Hall, learning goes beyond textbooks. Our programs are designed
                    to help children grow into confident, curious, creative, and independent
                    learners through joyful and meaningful experiences.
                  </p>
                </div>
                <KalamIcon name="star" className="text-[#7B4EF4]" size={28} />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8 sm:grid-cols-5 sm:gap-5">
                {programDifference.map((item) => (
                  <div key={item.title} className="text-center">
                    <IconBubble icon={item.icon} tone={item.tone} size="md" />
                    <h3 className="mt-2 text-xs font-black leading-tight text-[var(--kalam-navy)] sm:mt-3 sm:text-sm">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="k-card-soft relative flex flex-col justify-between overflow-hidden bg-[#F3EDFF] p-5 sm:p-8">
              <div>
                <h2 className="text-2xl font-black leading-tight text-[#6E3FE5] sm:text-3xl">
                  Not Sure Which Program Is Right for Your Child?
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--kalam-muted)] sm:mt-5 sm:text-base sm:leading-7">
                  We are happy to help you choose the best learning experience based on your
                  child&apos;s age, interests, and learning needs.
                </p>
              </div>
              <div className="relative z-10 mt-6 flex items-center justify-between sm:mt-8">
                <Link
                  href="/contact"
                  className="k-button w-fit bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] text-white shadow-xl shadow-purple-200/70 relative z-20"
                >
                  <KalamIcon name="calendar" size={20} />
                  Book a Visit
                  <ArrowRight size={19} />
                </Link>
                {React.createElement("dotlottie-wc", {
                  src: "https://lottie.host/af3ce23d-e81c-45ba-aece-4113f662bd11/sscRTWMNAA.lottie",
                  style: { width: "150px", height: "150px" },
                  className: "absolute -bottom-6 -right-2 hidden md:block opacity-90 mix-blend-multiply lg:-bottom-8 lg:-right-4",
                  autoplay: true,
                  loop: true,
                })}
              </div>
            </div>
          </div>

          <p className="mt-6 text-center font-serif text-base italic text-[var(--kalam-navy)] sm:mt-8 sm:text-xl">
            Kalam - A space where children come together to learn, explore, create, and grow.
          </p>
        </div>
      </section>
    </>
  );
}
