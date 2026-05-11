import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center">
      <Image
        src="/kalam-logo-transparent.png"
        alt="Kalam Study Hall"
        width={compact ? 64 : 80}
        height={compact ? 64 : 80}
        className="h-auto w-16 object-contain transition group-hover:scale-105 md:w-20"
        priority={!compact}
      />
    </Link>
  );
}
