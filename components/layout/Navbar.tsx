import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1B3D2F]/10 bg-[#F4F1DE]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE]">
            <Sparkles size={18} />
          </div>

          <div>
            <p className="text-base font-extrabold leading-none text-[#1B3D2F]">
              Ktech
            </p>
            <p className="text-xs font-medium text-[#3D405B]/70">IT Services</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 rounded-full bg-white/55 px-6 py-3 text-sm font-semibold text-[#3D405B] shadow-sm md:flex">
          <a href="/services" className="transition hover:text-[#1B3D2F]">
            Services
          </a>
          <a href="/industries" className="transition hover:text-[#1B3D2F]">
            Industries
          </a>

          <a href="/employers" className="transition hover:text-[#1B3D2F]">
            Employers
          </a>

          <a href="/candidates" className="transition hover:text-[#1B3D2F]">
            Candidates
          </a>

          <a href="/jobs" className="transition hover:text-[#1B3D2F]">
            Jobs
          </a>

          <a href="/about" className="transition hover:text-[#1B3D2F]">
            About
          </a>

          <a href="/contact" className="transition hover:text-[#1B3D2F]">
            Contact
          </a>
        </div>

        <a
          href="/employers"
          className="rounded-full bg-[#1B3D2F] px-5 py-2.5 text-sm font-bold text-[#F4F1DE] shadow-sm transition hover:bg-[#163226]"
        >
          Hire Talent
        </a>
      </nav>
    </header>
  );
}
