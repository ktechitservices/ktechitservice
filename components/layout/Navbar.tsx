"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Employers", href: "/employers" },
  { label: "Candidates", href: "/candidates" },
  { label: "Jobs", href: "/jobs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/ktech-logo.png"
            alt="KTech IT Services"
            width={987}
            height={253}
            priority
            className="block h-auto w-[165px] object-contain sm:w-[175px] lg:w-[190px]"
          />
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#23395B]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/jobs"
            className="rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
          >
            Find Jobs
          </a>

          <a
            href="/employers"
            className="rounded-xl bg-[#23395B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
          >
            Hire Talent
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#23395B] text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#E2E8F0] bg-white px-4 pb-5 lg:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="mt-4 grid gap-1 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-white hover:text-[#23395B]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="/jobs"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-bold text-[#23395B]"
              >
                Find Jobs
              </a>

              <a
                href="/employers"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#23395B] px-5 py-3 text-sm font-bold text-white"
              >
                Hire Talent
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
