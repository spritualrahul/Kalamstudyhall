import Image from "next/image";
import Link from "next/link";
import { cn } from "@/components/KalamUI";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5 sm:gap-3">
      <Image
        src="/kalam-logo-transparent.png"
        alt="Kalam Study Hall"
        width={compact ? 56 : 72}
        height={compact ? 56 : 72}
        className={cn(
          "h-auto object-contain transition group-hover:scale-105",
          compact ? "w-14" : "w-14 md:w-[72px]"
        )}
        priority={!compact}
      />
      <span
        className={cn(
          "font-black tracking-tight",
          compact ? "text-xl" : "text-xl sm:text-2xl"
        )}
      >
        <span className="text-[#6E3FE5]">Kalam</span>{" "}
        <span className="text-[#F43F7F]">Study</span>{" "}
        <span className="text-[#F97316]">Hall</span>
      </span>
    </Link>
  );
}
