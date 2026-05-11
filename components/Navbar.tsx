"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { cn } from "@/components/KalamUI";
import { navLinks } from "@/data/kalam";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
      <nav className="flex h-[86px] w-full items-center justify-between px-4 md:px-6 lg:px-8">
        <BrandLogo />

        <div className="hidden items-center gap-14 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-3 text-base font-bold transition",
                  active ? "text-[#6E3FE5]" : "text-[var(--kalam-navy)] hover:text-[#6E3FE5]",
                )}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-[#6E3FE5]" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-full bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-purple-200/60 transition hover:-translate-y-0.5 lg:inline-flex"
        >
          Enroll Now
          <ArrowRight size={19} />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[var(--kalam-navy)] lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-[1379px] flex-col gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-extrabold",
                    active ? "bg-[#F3EDFF] text-[#6E3FE5]" : "text-[var(--kalam-navy)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7B4EF4] to-[#5A34D6] px-5 py-3 text-sm font-extrabold text-white"
            >
              Enroll Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
