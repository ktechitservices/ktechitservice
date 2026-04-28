"use client";

import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-[#1B3D2F]/10 bg-[#F4F1DE]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE]">
            <Sparkles size={18} />
          </div>

          <div>
            <p className="text-base font-extrabold leading-none text-[#1B3D2F]">
              Ktech
            </p>
            <p className="text-xs font-medium text-[#3D405B]/70">
              IT Services
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 rounded-full bg-white/55 px-6 py-3 text-sm font-semibold text-[#3D405B] shadow-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#1B3D2F]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/employers"
          className="hidden rounded-full bg-[#1B3D2F] px-5 py-2.5 text-sm font-bold text-[#F4F1DE] shadow-sm transition hover:bg-[#163226] lg:inline-flex"
        >
          Hire Talent
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="border-t border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 pb-5 lg:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="mt-4 grid gap-2 rounded-[1.5rem] bg-white/70 p-3 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-extrabold text-[#3D405B] transition hover:bg-[#F4F1DE] hover:text-[#1B3D2F]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="/employers"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1B3D2F] px-5 py-3 text-sm font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Hire IT Talent
              </a>

              <a
                href="/jobs"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#E07A5F] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                Find a Job
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}