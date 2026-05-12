import Image from "next/image";
import {
  Baby,
  Blocks,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Film,
  FlaskConical,
  Gamepad2,
  Gift,
  Globe2,
  GraduationCap,
  Grid2X2,
  Heart,
  Home,
  Laptop,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Palette,
  PartyPopper,
  Pencil,
  Phone,
  Pizza,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { LottieBookAnimation } from "@/components/LottieBookAnimation";
import { LottieGroupAnimation } from "@/components/LottieGroupAnimation";
import { LottieCommunicationAnimation } from "@/components/LottieCommunicationAnimation";
import { LottieHolisticAnimation } from "@/components/LottieHolisticAnimation";
import type { IconName, Tone } from "@/data/kalam";

export const toneStyles: Record<
  Tone,
  {
    text: string;
    bg: string;
    pale: string;
    border: string;
    ring: string;
    gradient: string;
    shadow: string;
  }
> = {
  purple: {
    text: "text-[#6E3FE5]",
    bg: "bg-[#6E3FE5]",
    pale: "bg-[#F3EDFF]",
    border: "border-[#E1D4FF]",
    ring: "ring-[#E1D4FF]",
    gradient: "from-[#7B4EF4] to-[#5A34D6]",
    shadow: "shadow-purple-200/50",
  },
  green: {
    text: "text-[#20A95E]",
    bg: "bg-[#20A95E]",
    pale: "bg-[#EAF8EF]",
    border: "border-[#CBEED8]",
    ring: "ring-[#CBEED8]",
    gradient: "from-[#2FBF73] to-[#159957]",
    shadow: "shadow-emerald-200/50",
  },
  blue: {
    text: "text-[#1F70E5]",
    bg: "bg-[#1F70E5]",
    pale: "bg-[#EAF3FF]",
    border: "border-[#CFE2FF]",
    ring: "ring-[#CFE2FF]",
    gradient: "from-[#2D8CFF] to-[#1666D8]",
    shadow: "shadow-blue-200/50",
  },
  orange: {
    text: "text-[#F97316]",
    bg: "bg-[#F97316]",
    pale: "bg-[#FFF0E2]",
    border: "border-[#FFD7B3]",
    ring: "ring-[#FFD7B3]",
    gradient: "from-[#FF9A1F] to-[#F05B15]",
    shadow: "shadow-orange-200/50",
  },
  pink: {
    text: "text-[#F43F7F]",
    bg: "bg-[#F43F7F]",
    pale: "bg-[#FFF0F6]",
    border: "border-[#FFD1E2]",
    ring: "ring-[#FFD1E2]",
    gradient: "from-[#FF4C8E] to-[#EC3A76]",
    shadow: "shadow-pink-200/50",
  },
  yellow: {
    text: "text-[#E9A500]",
    bg: "bg-[#F5B700]",
    pale: "bg-[#FFF7D8]",
    border: "border-[#FBE6A1]",
    ring: "ring-[#FBE6A1]",
    gradient: "from-[#FFC83D] to-[#F59E0B]",
    shadow: "shadow-yellow-200/50",
  },
};

const iconMap: Record<IconName, LucideIcon> = {
  book: BookOpen,
  blocks: Blocks,
  graduation: GraduationCap,
  message: MessageCircle,
  star: Star,
  brain: Brain,
  users: Users,
  palette: Palette,
  heart: Heart,
  calendar: CalendarDays,
  clock: Clock3,
  check: CheckCircle2,
  child: Baby,
  pencil: Pencil,
  mic: Mic2,
  shield: ShieldCheck,
  leaf: Leaf,
  laptop: Laptop,
  gamepad: Gamepad2,
  film: Film,
  scissors: Scissors,
  flask: FlaskConical,
  party: PartyPopper,
  pizza: Pizza,
  trophy: Trophy,
  target: Target,
  eye: Eye,
  smile: Smile,
  gift: Gift,
  grid: Grid2X2,
  lightbulb: Lightbulb,
  home: Home,
  map: MapPin,
  mail: Mail,
  phone: Phone,
  globe: Globe2,
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function KalamIcon({
  name,
  className,
  size = 22,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon aria-hidden="true" className={className} size={size} strokeWidth={2.3} />;
}

export function IconBubble({
  icon,
  tone,
  size = "md",
  className,
}: {
  icon: IconName;
  tone: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  };

  return (
    <span
      className={cn(
        "inline-flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-full leading-none ring-4 ring-white",
        sizes[size],
        toneStyles[tone].pale,
        toneStyles[tone].text,
        className,
      )}
    >
      <KalamIcon name={icon} size={size === "lg" ? 30 : size === "md" ? 25 : 20} />
    </span>
  );
}

export function SectionBadge({
  icon = "sparkles",
  label,
  tone = "purple",
  className,
}: {
  icon?: IconName | "sparkles";
  label: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold",
        toneStyles[tone].pale,
        toneStyles[tone].text,
        className,
      )}
    >
      {icon === "sparkles" ? <Sparkles size={17} /> : <KalamIcon name={icon} size={17} />}
      {label}
    </span>
  );
}

export function GradientWord({
  children,
  from = "#7B4EF4",
  via = "#2474E8",
  to = "#22B573",
}: {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
}) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${via}, ${to})` }}
    >
      {children}
    </span>
  );
}

export type ProgramCardItem = {
  title: string;
  description: string;
  shortDescription?: string;
  image: string;
  imagePosition?: string;
  icon: IconName;
  tone: Tone;
  tags?: string[];
  highlights?: string[];
  age: string;
  schedule?: string;
};

export function ProgramCard({
  program,
  mode = "home",
}: {
  program: ProgramCardItem;
  mode?: "home" | "listing";
}) {
  const tone = toneStyles[program.tone];
  const isListing = mode === "listing";
  const description = isListing ? (program.shortDescription ?? program.description) : program.description;

  return (
    <article
      className={cn(
        "k-card group flex h-full flex-col",
        isListing ? "program-card-listing" : "program-card-home",
      )}
    >
      <div className={cn("relative overflow-hidden rounded-t-[1rem] bg-slate-100", isListing ? "h-[10.5rem]" : "h-44")}>
        <Image
          src={program.image}
          alt=""
          fill
          loading="eager"
          quality={92}
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 86vw, (max-width: 1180px) 50vw, 33vw"
          style={{ objectPosition: program.imagePosition ?? "50% 50%" }}
        />
      </div>
      <div className={cn("relative z-10 flex flex-1 flex-col text-center", isListing ? "px-6 pb-6" : "px-6 pb-6")}>
        <IconBubble
          icon={program.icon}
          tone={program.tone}
          size="lg"
          className={cn("-mt-8 self-center shadow-lg", isListing ? "h-[4.6rem] w-[4.6rem]" : "")}
        />
        <h3
          className={cn(
            "mt-4 font-extrabold leading-tight",
            isListing ? "text-[1.35rem] text-[var(--kalam-navy)]" : "text-[1.55rem]",
            !isListing ? tone.text : "",
          )}
        >
          {program.title}
        </h3>
        <p
          className={cn(
            "mx-auto mt-4 text-[var(--kalam-muted)]",
            isListing ? "min-h-[5.3rem] max-w-[14rem] text-[0.82rem] leading-5" : "text-[0.92rem] leading-6",
          )}
        >
          {description}
        </p>

        {mode === "home" && program.tags ? (
          <div className="mt-6 grid grid-cols-2 gap-2.5 text-left">
            {program.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold",
                  tone.pale,
                  tone.text,
                )}
              >
                <KalamIcon name={tagIcon(tag)} size={15} />
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div
          className={cn(
            "mt-auto flex items-center gap-3 border-t pt-5 text-sm font-extrabold",
            isListing ? "justify-center" : "justify-between",
            mode === "home" ? "mt-5" : "mt-4",
            tone.border,
          )}
        >
          <span className={cn("inline-flex items-center gap-2", tone.text)}>
            <KalamIcon name="users" size={18} />
            {program.age}
          </span>
          {!isListing && program.schedule ? (
            <span className="inline-flex items-center gap-2 text-[var(--kalam-navy)]">
              <KalamIcon name="calendar" size={17} />
              {program.schedule}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export type ExperienceItem = {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  icon: IconName;
  tone: Tone;
  category: string;
  date: string;
  time: string;
  age: string;
};

export function ExperienceCard({
  experience,
  buttonLabel = "Register Now",
  variant = "default",
}: {
  experience: ExperienceItem;
  buttonLabel?: string;
  variant?: "default" | "compact";
}) {
  const tone = toneStyles[experience.tone];
  const isCompact = variant === "compact";

  return (
    <article className={cn("k-card group h-full overflow-hidden", isCompact ? "workshop-card-compact" : "")}>
      <div className={cn("relative overflow-hidden bg-slate-100", isCompact ? "h-20" : "h-72")}>
        <Image
          src={experience.image}
          alt=""
          fill
          loading="eager"
          quality={92}
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 86vw, (max-width: 1180px) 50vw, 33vw"
          style={{ objectPosition: experience.imagePosition ?? "50% 50%" }}
        />
        <IconBubble
          icon={experience.icon}
          tone={experience.tone}
          size={isCompact ? "sm" : "md"}
          className={cn("absolute shadow-lg", isCompact ? "left-3 top-3 ring-[3px]" : "left-4 top-4")}
        />
        <span
          className={cn(
            "absolute bottom-2 right-3 rounded-full font-extrabold",
            isCompact ? "px-2.5 py-1 text-[10px]" : "px-3 py-1 text-[11px]",
            tone.pale,
            tone.text,
          )}
        >
          {experience.category}
        </span>
      </div>
      <div className={cn(isCompact ? "p-3.5" : "p-6")}>
        <h3 className={cn("font-extrabold text-[var(--kalam-navy)]", isCompact ? "text-[0.95rem]" : "text-xl")}>
          {experience.title}
        </h3>
        <p
          className={cn(
            "mt-3 text-[var(--kalam-muted)]",
            isCompact ? "min-h-[2.75rem] text-[0.75rem] leading-[1.35]" : "min-h-[4.5rem] text-base leading-6",
          )}
        >
          {experience.description}
        </p>
        <div className={cn("font-semibold text-[var(--kalam-muted)]", isCompact ? "mt-3 space-y-1 text-[0.68rem]" : "mt-5 space-y-2 text-sm")}>
          <span className="flex items-center gap-2">
            <KalamIcon name="calendar" size={14} /> {experience.date}
          </span>
          <span className="flex items-center gap-2">
            <KalamIcon name="clock" size={14} /> {experience.time}
          </span>
          <span className="flex items-center gap-2">
            <KalamIcon name="users" size={14} /> {experience.age}
          </span>
        </div>
        <a
          href="/contact"
          className={cn(
            "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r font-extrabold text-white shadow-lg transition hover:-translate-y-0.5",
            isCompact ? "mt-3 px-3 py-1.5 text-[0.72rem]" : "mt-5 px-4 py-2.5 text-sm",
            tone.gradient,
            tone.shadow,
          )}
        >
          {buttonLabel}
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </article>
  );
}

export function InfoTile({
  title,
  description,
  icon,
  tone,
  compact = false,
}: {
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
  compact?: boolean;
}) {
  return (
    <article className={cn("k-card flex items-start gap-4", compact ? "p-4" : "p-5")}>
      <IconBubble icon={icon} tone={tone} size="sm" />
      <div>
        <h3 className="text-sm font-extrabold leading-tight text-[var(--kalam-navy)]">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-[var(--kalam-muted)]">{description}</p>
      </div>
    </article>
  );
}

export function ValueCard({
  title,
  description,
  icon,
  tone,
}: {
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
}) {
  const toneClass = toneStyles[tone];
  const isLottieCard = title === "Learning Beyond Memorization";
  const isGroupCard = title === "Personalized Small-Group Learning";
  const isCommCard = title === "Communication & Confidence Building";
  const isHolisticCard = title === "Holistic Child Development";

  return (
    <article className="k-card flex h-full flex-col items-center p-8 text-center">
      <IconBubble icon={icon} tone={tone} size="lg" />
      <h3 className="mt-6 max-w-[14rem] text-xl font-extrabold leading-tight text-[var(--kalam-navy)]">
        {title}
      </h3>
      <span className={cn("mt-4 h-1 w-11 rounded-full", toneClass.bg)} />
      <p className="mt-5 text-sm leading-6 text-[var(--kalam-muted)]">{description}</p>
      {isLottieCard && <LottieBookAnimation />}
      {isGroupCard && <LottieGroupAnimation />}
      {isCommCard && <LottieCommunicationAnimation />}
      {isHolisticCard && <LottieHolisticAnimation />}
    </article>
  );
}

export function DoodleLayer({ variant = "default" }: { variant?: "default" | "hero" | "right" }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {variant === "hero" ? (
        <Sparkles className="absolute left-[10%] top-[18%] text-[#7B4EF4]/70" size={25} />
      ) : null}
      <Star
        className={cn(
          "absolute text-[#24B15F]/70",
          variant === "hero" ? "left-[38%] bottom-[18%]" : "right-[12%] top-[14%]",
        )}
        size={24}
      />
    </div>
  );
}

function tagIcon(tag: string): IconName {
  const key = tag.toLowerCase();

  if (key.includes("phonic") || key.includes("reading") || key.includes("vocabulary")) {
    return "book";
  }

  if (key.includes("handwriting") || key.includes("writing")) {
    return "pencil";
  }

  if (key.includes("creative") || key.includes("activity")) {
    return "palette";
  }

  if (key.includes("concept") || key.includes("critical") || key.includes("logical")) {
    return "brain";
  }

  if (key.includes("interactive") || key.includes("teamwork")) {
    return "users";
  }

  if (key.includes("spoken") || key.includes("story") || key.includes("public")) {
    return "message";
  }

  if (key.includes("self") || key.includes("confidence") || key.includes("leadership")) {
    return "star";
  }

  return "check";
}
