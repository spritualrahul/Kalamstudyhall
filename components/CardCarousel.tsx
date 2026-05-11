"use client";

import { Children, useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/components/KalamUI";

export default function CardCarousel({
  children,
  className,
  slideClassName = "carousel-slide",
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  slideClassName?: string;
  ariaLabel: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "previous" | "next") => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollBy({
      left: direction === "next" ? viewport.clientWidth * 0.92 : -viewport.clientWidth * 0.92,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("relative", className)}>
      <div className="mb-5 flex justify-end gap-3">
        <button
          type="button"
          aria-label={`Previous ${ariaLabel}`}
          onClick={() => scroll("previous")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E3D8FF] bg-white text-[#6E3FE5] shadow-md transition hover:-translate-y-0.5"
        >
          <ChevronLeft size={21} />
        </button>
        <button
          type="button"
          aria-label={`Next ${ariaLabel}`}
          onClick={() => scroll("next")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E3D8FF] bg-white text-[#6E3FE5] shadow-md transition hover:-translate-y-0.5"
        >
          <ChevronRight size={21} />
        </button>
      </div>

      <div
        ref={viewportRef}
        className="carousel-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3"
      >
        {Children.toArray(children).map((child, index) => (
          <div key={index} className={cn("min-w-0 snap-start", slideClassName)}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
