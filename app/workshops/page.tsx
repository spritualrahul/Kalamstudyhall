"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import {
  cn,
  ExperienceCard,
  IconBubble,
  KalamIcon,
  toneStyles,
} from "@/components/KalamUI";
import { experiences } from "@/data/kalam";

const categories = [
  { label: "All Experiences", sub: "All", icon: "grid", tone: "purple" },
  { label: "Workshops", sub: "Creative Learning", icon: "palette", tone: "pink" },
  { label: "Fun Experiences", sub: "Games & Activities", icon: "gamepad", tone: "yellow" },
  { label: "Movie & Media", sub: "Movie Nights", icon: "film", tone: "green" },
  { label: "Celebrations", sub: "Festivals & Themes", icon: "party", tone: "purple" },
  { label: "Special Events", sub: "Unique Occasions", icon: "calendar", tone: "blue" },
] as const;

const PREVIEW_COUNT = 6;

function Wide({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1700px] px-4 lg:px-6", className)}>
      {children}
    </div>
  );
}

export default function WorkshopsPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? experiences : experiences.slice(0, PREVIEW_COUNT);

  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/workshop-bg.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "top 80px center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="fixed inset-0 bg-white/10 pointer-events-none" style={{ zIndex: -1 }} />

      {/* ── Hero ── */}
      <section className="relative pt-[104px]" style={{ minHeight: "60vh", zIndex: 1 }}>
        <div className="relative z-10 flex min-h-[calc(60vh-104px)] items-start justify-center pt-2">
          <Wide className="py-12 text-center">
            <Link
              href="/"
              className="absolute left-5 top-5 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[var(--kalam-navy)] shadow-md md:inline-flex"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="mx-auto max-w-4xl text-[clamp(2.8rem,4.2vw,3.85rem)] font-black leading-none text-[var(--kalam-navy)]">
              Explore All Experiences
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold leading-7 text-[var(--kalam-muted)]">
              Choose a category and discover exciting workshops, fun experiences and
              special events for your child.
            </p>
          </Wide>
        </div>
      </section>

      {/* ── Category strip ── */}
      <section className="relative -mt-48 py-4" style={{ zIndex: 1 }}>
        <Wide>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => {
              const tone = toneStyles[category.tone];
              const isActive = activeCategory === index;
              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(index)}
                  className={cn(
                    "k-card flex items-center gap-3 p-4 backdrop-blur-sm cursor-pointer transition-all text-left w-full",
                    isActive
                      ? "border-[#BBA6FF] bg-[#F7F2FF] shadow-lg shadow-purple-100 -translate-y-0.5"
                      : "bg-white/85 hover:-translate-y-0.5",
                  )}
                >
                  <IconBubble icon={category.icon} tone={category.tone} size="sm" className="h-10 w-10 shrink-0 ring-0" />
                  <div>
                    <h2 className="text-[0.75rem] font-black leading-tight text-[var(--kalam-navy)]">{category.label}</h2>
                    <p className={cn("mt-1 text-[0.68rem] font-bold leading-tight", tone.text)}>{category.sub}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </Wide>
      </section>

      {/* ── Cards ── */}
      <section className="relative py-10" style={{ zIndex: 1 }}>
        <Wide>
          <div className="mb-6 flex items-center">
            <div className="flex items-center gap-2 text-base font-bold text-[var(--kalam-muted)]">
              <KalamIcon name="calendar" className="text-[#6E3FE5]" />
              Showing{" "}
              <span className="text-[#6E3FE5] font-black mx-1">{visible.length}</span>
              of {experiences.length} Experiences
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((experience) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                buttonLabel="View Details"
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            {!showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] px-10 py-4 text-base font-extrabold text-white shadow-xl shadow-purple-200/60 hover:-translate-y-1 transition-transform"
              >
                View All {experiences.length} Experiences
                <ChevronDown size={18} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setShowAll(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#7B4EF4]/30 bg-white px-10 py-4 text-base font-extrabold text-[#6E3FE5] hover:-translate-y-1 transition-transform"
              >
                <ChevronUp size={18} />
                Show Less
              </button>
            )}
          </div>
        </Wide>
      </section>
    </div>
  );
}
