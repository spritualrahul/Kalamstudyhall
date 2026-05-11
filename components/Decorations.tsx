import { Send, Sparkles, Star } from "lucide-react";
import { cn } from "@/components/KalamUI";

export function BooksBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute bg-no-repeat", className)}
      style={{
        backgroundImage: "url('/books%20bg.png')",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    />
  );
}

export function PaperPlaneDecor({ className, animated = false }: { className?: string; animated?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-28 w-44 text-[#6E3FE5]",
        animated ? "plane-float" : "",
        className,
      )}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 176 112" fill="none">
        <path
          className={animated ? "dash-draw" : ""}
          d="M5 88C28 104 43 71 24 59C4 46 23 18 47 38C64 52 59 83 87 72C111 63 105 27 137 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 8"
          strokeLinecap="round"
          opacity="0.48"
        />
      </svg>
      <Send
        className={cn(
          "absolute right-3 top-2 rotate-[-18deg] drop-shadow-sm",
          animated ? "plane-icon-float" : "",
        )}
        size={42}
        strokeWidth={2.2}
      />
      <Star className="absolute left-8 top-8 text-[#24B15F]" size={18} />
      <Sparkles className="absolute right-16 bottom-8 text-[#7B4EF4]" size={18} />
    </div>
  );
}

export function BookPencilDecor({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute h-48 w-52", className)}>
      <span className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#DFF3EB]/80" />
      <span className="absolute bottom-1 left-4 h-5 w-40 rounded-full bg-[#07143A]/12 blur-md" />

      <div className="absolute bottom-5 right-0 h-8 w-36 rotate-[4deg] rounded-lg bg-[#FF7A1A] shadow-lg">
        <span className="absolute left-4 top-1.5 h-5 w-2 rounded-full bg-white/45" />
        <span className="absolute right-5 top-2 h-1.5 w-16 rounded-full bg-white/35" />
        <span className="absolute bottom-1 right-5 h-1.5 w-12 rounded-full bg-[#B84B00]/35" />
      </div>
      <div className="absolute bottom-[2.65rem] right-3 h-8 w-36 rotate-[-2deg] rounded-lg bg-[#7B4EF4] shadow-lg">
        <span className="absolute left-4 top-1.5 h-5 w-2 rounded-full bg-white/45" />
        <span className="absolute right-5 top-2 h-1.5 w-16 rounded-full bg-white/35" />
        <span className="absolute bottom-1 right-5 h-1.5 w-12 rounded-full bg-[#4F2BB4]/35" />
      </div>
      <div className="absolute bottom-[4.3rem] right-1 h-9 w-40 rotate-[2deg] rounded-lg bg-[#18BFA2] shadow-xl">
        <span className="absolute left-5 top-2 h-5 w-2 rounded-full bg-white/45" />
        <span className="absolute right-6 top-2.5 h-1.5 w-20 rounded-full bg-white/35" />
        <span className="absolute bottom-1.5 right-6 h-1.5 w-14 rounded-full bg-[#087B6C]/30" />
      </div>

      <div className="absolute bottom-[6.3rem] right-10 h-[4.75rem] w-16 rounded-b-[1.35rem] rounded-t-lg bg-gradient-to-b from-[#FFD957] to-[#F5A400] shadow-2xl ring-2 ring-white">
        <span className="absolute -top-11 left-2 h-[3.5rem] w-2.5 rotate-[-13deg] rounded-full bg-[#2474E8] shadow-md">
          <span className="absolute -top-2 left-0 h-3 w-2.5 bg-[#F3B06F]" />
        </span>
        <span className="absolute -top-[3.85rem] left-[1.45rem] h-[4.2rem] w-2.5 rotate-[-2deg] rounded-full bg-[#20A95E] shadow-md">
          <span className="absolute -top-2 left-0 h-3 w-2.5 bg-[#F3B06F]" />
        </span>
        <span className="absolute -top-[4.25rem] right-[1.55rem] h-[4.6rem] w-2.5 rotate-[9deg] rounded-full bg-[#F97316] shadow-md">
          <span className="absolute -top-2 left-0 h-3 w-2.5 bg-[#F3B06F]" />
        </span>
        <span className="absolute -top-12 right-2 h-[3.8rem] w-2.5 rotate-[17deg] rounded-full bg-[#B91C1C] shadow-md">
          <span className="absolute -top-2 left-0 h-3 w-2.5 bg-[#F3B06F]" />
        </span>
        <span className="absolute left-2.5 top-3 h-9 w-11 rounded-b-xl bg-white/30" />
        <span className="absolute inset-x-2 top-1 h-2 rounded-full bg-white/35" />
      </div>

      <Star className="absolute left-2 top-14 text-[#7B4EF4]" size={18} />
      <Star className="absolute right-1 top-8 text-[#F5B700]" size={19} />
      <Sparkles className="absolute left-9 top-2 text-[#FFB703]" size={20} />
    </div>
  );
}

export function ArtSuppliesDecor({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute h-44 w-72", className)}>
      <span className="absolute right-7 top-1 h-12 w-12 rounded-full bg-[#EAF8EF]" />
      <span className="absolute left-16 top-5 h-8 w-8 rounded-full bg-[#F7E8FF]" />
      <span className="absolute bottom-2 left-6 h-5 w-52 rounded-full bg-[#07143A]/10 blur-sm" />

      <div className="absolute right-0 top-4 h-24 w-40 rotate-[3deg] rounded-[1.8rem] bg-white shadow-xl ring-1 ring-[#F1E8FF]">
        {["#F97316", "#7B4EF4", "#2474E8", "#20A95E", "#F43F7F", "#F5B700"].map((color, index) => (
          <span
            key={color}
            className="absolute h-8 w-8 rounded-full border-[3px] border-white shadow"
            style={{
              backgroundColor: color,
              left: `${14 + (index % 3) * 42}px`,
              top: `${13 + Math.floor(index / 3) * 38}px`,
            }}
          />
        ))}
        <span className="absolute right-3 top-3 h-5 w-5 rounded-full border-4 border-[#07143A]/10" />
      </div>

      {["#F97316", "#2474E8", "#F43F7F", "#20A95E"].map((color, index) => (
        <span
          key={color}
          className="absolute top-[6.2rem] h-3.5 w-36 origin-left rounded-full shadow-md"
          style={{
            backgroundColor: color,
            left: `${56 + index * 18}px`,
            transform: `rotate(${index * 10 - 22}deg)`,
          }}
        />
      ))}

      <div className="absolute bottom-3 left-2 h-28 w-24 rounded-b-[1.5rem] rounded-t-lg bg-gradient-to-b from-[#F0E7FF] to-[#D9C7FF] shadow-xl ring-2 ring-white">
        <span className="absolute -top-11 left-4 h-16 w-3 rotate-[-13deg] rounded-full bg-[#F43F7F]" />
        <span className="absolute -top-14 left-9 h-20 w-3 rotate-[1deg] rounded-full bg-[#F5B700]" />
        <span className="absolute -top-12 left-14 h-[4.4rem] w-3 rotate-[12deg] rounded-full bg-[#20A95E]" />
        <span className="absolute -top-9 right-3 h-14 w-3 rotate-[20deg] rounded-full bg-[#2474E8]" />
        <span className="absolute bottom-4 left-1/2 h-9 w-14 -translate-x-1/2 rounded-b-xl bg-white/35" />
      </div>

      <Sparkles className="absolute left-0 top-8 text-[#7B4EF4]" size={22} />
      <Star className="absolute right-16 top-0 text-[#FFC83D]" size={20} />
    </div>
  );
}
