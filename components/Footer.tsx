import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { cn, KalamIcon } from "@/components/KalamUI";
import {
  contact,
  footerExperienceLinks,
  footerProgramLinks,
  navLinks,
} from "@/data/kalam";

const socials = [
  { label: "Facebook", icon: <FacebookIcon />, color: "bg-[#3158C9]" },
  { label: "Instagram", icon: <InstagramIcon />, color: "bg-[#D9468F]" },
  { label: "YouTube", icon: <YoutubeIcon />, color: "bg-[#E11D48]" },
];

export default function Footer() {
  return (
    <footer className="mt-0">
      <div className="grid h-2 grid-cols-5">
        <span className="bg-[#7B4EF4]" />
        <span className="bg-[#20A95E]" />
        <span className="bg-[#F5B700]" />
        <span className="bg-[#F43F7F]" />
        <span className="bg-[#2474E8]" />
      </div>

      <div className="bg-[#081331] text-white">
        <div className="mx-auto max-w-[1379px] px-4 py-8 sm:px-6 sm:py-12 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.25fr_1.2fr_1fr] sm:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <BrandLogo compact />
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/72 sm:mt-5">
                Kalam Study Hall is a creative after-school enrichment space where children come
                together to learn with confidence, curiosity, creativity, and joy.
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/72 sm:mt-4">
                Through academics, communication development, creative workshops, and meaningful
                experiences, we help children grow beyond classrooms.
              </p>
              <div className="mt-5 flex gap-3 sm:mt-6">
                {socials.map(({ label, icon, color }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:-translate-y-0.5",
                      color,
                    )}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn title="Explore" tone="text-[#B38CFF]">
              {navLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label === "About" ? "About Us" : link.label}
                </FooterLink>
              ))}
              <FooterLink href="/workshops">Gallery</FooterLink>
            </FooterColumn>

            <FooterColumn title="Our Programs" tone="text-[#3DE38A]">
              {footerProgramLinks.map((label) => (
                <FooterLink key={label} href="/programs">
                  {label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Weekend Experiences" tone="text-[#FFC83D]">
              {footerExperienceLinks.map((label) => (
                <FooterLink key={label} href="/workshops">
                  {label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Get In Touch" tone="text-[#FF72AE]">
              <li className="flex gap-3 text-sm leading-5 text-white/78">
                <MapPin className="mt-0.5 shrink-0 text-white/80" size={18} />
                <span>
                  {contact.address}
                  <br />
                  {contact.addressDetail}
                </span>
              </li>
              <li className="flex gap-3 text-sm text-white/78">
                <Phone className="shrink-0 text-white/80" size={18} />
                <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
              </li>
              <li className="flex gap-3 text-sm text-white/78">
                <Mail className="shrink-0 text-white/80" size={18} />
                <a href={`mailto:${contact.email}`} className="break-all">{contact.email}</a>
              </li>
              <li className="flex gap-3 text-sm text-white/78">
                <KalamIcon name="globe" size={18} className="shrink-0 text-white/80" />
                <span className="break-all">{contact.website}</span>
              </li>
            </FooterColumn>
          </div>

          <div className="mt-8 border-t border-white/12 pt-5 text-center text-xs text-white/65 sm:mt-10 sm:pt-6 sm:text-sm">
            <span className="text-[#FF72AE]">Kalam</span> - A space where children come together
            to learn, explore, create, and grow.
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.2 22v-8h2.7l.4-3.1h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.1h2.8v8h3.4z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31.4 31.4 0 0 0 2 12a31.4 31.4 0 0 0 .4 4.9 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 22 12a31.4 31.4 0 0 0-.4-4.9zM10 15.4V8.6l5.8 3.4L10 15.4z" />
    </svg>
  );
}

function FooterColumn({
  title,
  tone,
  children,
}: {
  title: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className={cn("text-sm font-extrabold uppercase tracking-wide", tone)}>{title}</h3>
      <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="inline-flex items-center gap-2 text-sm text-white/78 transition hover:text-white">
        <ChevronRight size={14} />
        {children}
      </Link>
    </li>
  );
}
