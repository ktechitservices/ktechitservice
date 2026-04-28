import { Mail, MapPin, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/il-linkedin";

export function Footer() {
  return (
    <footer className="bg-[#F4F1DE] px-6 pb-8 pt-12 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1B3D2F] p-8 text-[#F4F1DE] md:p-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F1DE] text-[#1B3D2F]">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-lg font-black leading-none">Ktech</p>
                <p className="text-xs font-medium text-[#F4F1DE]/70">
                  IT Services
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#F4F1DE]/75">
              A Delaware-based IT staffing and services partner helping
              companies hire skilled technology talent and candidates find
              better opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#E07A5F]">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-[#F4F1DE]/75">
              <a href="/about" className="block hover:text-white">
                About
              </a>
              <a href="/contact" className="block hover:text-white">
                Contact
              </a>
              <a href="/#services" className="block hover:text-white">
                Services
              </a>
              <a href="/jobs" className="block hover:text-white">
                Jobs
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#E07A5F]">
              Pathways
            </h3>

            <div className="mt-5 space-y-3 text-sm text-[#F4F1DE]/75">
              <a href="/employers" className="block hover:text-white">
                For Employers
              </a>
              <a href="/candidates" className="block hover:text-white">
                For Candidates
              </a>
              <a href="/contact" className="block hover:text-white">
                Get in Touch
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#E07A5F]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-[#F4F1DE]/75">
              <div className="flex gap-3">
                <Mail className="mt-0.5 shrink-0 text-[#E07A5F]" size={17} />
                <span>hello@ktechitservices.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[#E07A5F]" size={17} />
                <span>Delaware, United States</span>
              </div>

              <a href="#" className="flex gap-3 hover:text-white">
                <LinkedinIcon
                  className="mt-0.5 shrink-0 text-[#E07A5F]"
                  size={17}
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#F4F1DE]/15 pt-6 text-xs text-[#F4F1DE]/60 md:flex-row">
          <p>© 2026 Ktech IT Services. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
