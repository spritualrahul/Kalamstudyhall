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

/* ── Category → experience.category mapping ── */
const categories = [
  { label: "All Experiences", sub: "All", icon: "grid", tone: "purple", filter: null },
  { label: "Workshops", sub: "Creative Learning", icon: "palette", tone: "pink", filter: "Workshop" },
  { label: "Fun Experiences", sub: "Games & Activities", icon: "gamepad", tone: "yellow", filter: "Fun Experience" },
  { label: "Movie & Media", sub: "Movie Nights", icon: "film", tone: "green", filter: "Movie & Media" },
  { label: "Celebrations", sub: "Festivals & Themes", icon: "party", tone: "purple", filter: "Celebration" },
  { label: "Special Events", sub: "Unique Occasions", icon: "calendar", tone: "blue", filter: "Special Event" },
] as const;

const PREVIEW_COUNT = 6;

function Wide({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1700px] px-4 sm:px-5 lg:px-6", className)}>
      {children}
    </div>
  );
}

export default function WorkshopsPage() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  /* Toggle a category filter on/off */
  function toggleFilter(filter: string | null) {
    // "All Experiences" clears all filters
    if (filter === null) {
      setActiveFilters(new Set());
      setShowAll(false);
      return;
    }

    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter); // double-click removes filter
      } else {
        next.add(filter); // add filter
      }
      return next;
    });
    setShowAll(false);
  }

  /* Filter experiences based on active categories */
  const filteredExperiences =
    activeFilters.size === 0
      ? experiences
      : experiences.filter((exp) => {
          // "Movie & Media" matches category "Fun Experience" items with film icon,
          // or we can match by checking if the experience is movie-related
          for (const filter of activeFilters) {
            if (filter === "Movie & Media") {
              if (exp.category === "Fun Experience" && exp.icon === "film") return true;
            } else if (exp.category === filter) {
              return true;
            }
          }
          return false;
        });

  const visible = showAll ? filteredExperiences : filteredExperiences.slice(0, PREVIEW_COUNT);
  const isAllActive = activeFilters.size === 0;

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
      <section className="relative pt-[90px] sm:pt-[104px]" style={{ minHeight: "40vh", zIndex: 1 }}>
        <div className="relative z-10 flex min-h-[calc(40vh-90px)] items-start justify-center pt-2 sm:min-h-[calc(60vh-104px)]" style={{ minHeight: undefined }}>
          <Wide className="py-8 text-center sm:py-12">
            <Link
              href="/"
              className="absolute left-4 top-4 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[var(--kalam-navy)] shadow-md sm:left-5 sm:top-5 md:inline-flex"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="mx-auto max-w-4xl text-[clamp(1.8rem,4.2vw,3.85rem)] font-black leading-none text-[var(--kalam-navy)]">
              Explore All Experiences
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-6 text-[var(--kalam-muted)] sm:text-lg sm:leading-7">
              Choose a category and discover exciting workshops, fun experiences and
              special events for your child.
            </p>
          </Wide>
        </div>
      </section>

      {/* ── Category strip ── */}
      <section className="relative -mt-16 py-4 sm:-mt-32 lg:-mt-48" style={{ zIndex: 1 }}>
        <Wide>
          <div className="grid gap-2 grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const tone = toneStyles[category.tone];
              const isActive =
                category.filter === null
                  ? isAllActive
                  : activeFilters.has(category.filter);

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => toggleFilter(category.filter)}
                  className={cn(
                    "k-card flex items-center gap-2 p-3 cursor-pointer transition-all text-left w-full sm:gap-3 sm:p-4 border-2",
                    isActive
                      ? cn(tone.pale, tone.border, "shadow-sm -translate-y-0.5 scale-[1.02]")
                      : "bg-white/85 border-transparent hover:-translate-y-0.5 hover:shadow-md",
                  )}
                >
                  <IconBubble icon={category.icon} tone={category.tone} size="sm" className={cn("h-8 w-8 shrink-0 ring-0 sm:h-10 sm:w-10", isActive ? "bg-white" : "")} />
                  <div className="min-w-0">
                    <h2 className={cn("text-[0.65rem] font-black leading-tight sm:text-[0.75rem]", isActive ? tone.text : "text-[var(--kalam-navy)]")}>{category.label}</h2>
                    <p className={cn("mt-0.5 text-[0.6rem] font-bold leading-tight sm:mt-1 sm:text-[0.68rem]", isActive ? tone.text : "text-[var(--kalam-muted)]")}>{category.sub}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </Wide>
      </section>

      {/* ── Cards ── */}
      <section className="relative py-6 sm:py-10" style={{ zIndex: 1 }}>
        <Wide>
          <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--kalam-muted)] sm:text-base">
              <KalamIcon name="calendar" className="text-[#6E3FE5]" />
              Showing{" "}
              <span className="text-[#6E3FE5] font-black mx-1">{visible.length}</span>
              of {filteredExperiences.length} Experiences
            </div>
            {activeFilters.size > 0 && (
              <button
                type="button"
                onClick={() => setActiveFilters(new Set())}
                className="ml-auto rounded-full border border-[#E6DAFF] bg-white px-3 py-1 text-xs font-bold text-[#6E3FE5] hover:bg-[#F7F2FF] transition"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredExperiences.length === 0 ? (
            <div className="py-16 text-center">
              <KalamIcon name="calendar" className="mx-auto text-[#BBA6FF]" size={48} />
              <p className="mt-4 text-lg font-bold text-[var(--kalam-navy)]">No experiences found</p>
              <p className="mt-2 text-sm text-[var(--kalam-muted)]">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {visible.map((experience) => (
                <ExperienceCard
                  key={experience.title}
                  experience={experience}
                  buttonLabel="View Details"
                />
              ))}
            </div>
          )}

          {filteredExperiences.length > PREVIEW_COUNT && (
            <div className="mt-8 text-center sm:mt-12">
              {!showAll ? (
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] px-6 py-3 text-sm font-extrabold text-white shadow-xl shadow-purple-200/60 hover:-translate-y-1 transition-transform sm:px-10 sm:py-4 sm:text-base"
                >
                  View All {filteredExperiences.length} Experiences
                  <ChevronDown size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setShowAll(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#7B4EF4]/30 bg-white px-6 py-3 text-sm font-extrabold text-[#6E3FE5] hover:-translate-y-1 transition-transform sm:px-10 sm:py-4 sm:text-base"
                >
                  <ChevronUp size={18} />
                  Show Less
                </button>
              )}
            </div>
          )}
        </Wide>
      </section>
    </div>
  );
}
