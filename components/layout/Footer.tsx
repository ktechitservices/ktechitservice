import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  UploadCloud,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ],
  pathways: [
    { label: "For Employers", href: "/employers" },
    { label: "For Candidates", href: "/candidates" },
    { label: "Open Jobs", href: "/jobs" },
    { label: "Upload Resume", href: "/candidates" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#161925] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="/" className="inline-flex items-center">
              <Image
                src="/images/ktech-logo-footer.png"
                alt="KTech IT Services"
                width={260}
                height={75}
                className="h-auto w-[155px] rounded-2xl bg-white px-4 py-3 object-contain sm:w-[175px]"
              />
            </a>

            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-slate-300">
              KTech connects employers with skilled IT talent and helps
              candidates find technology roles across software, cloud, data,
              cybersecurity, infrastructure, and digital delivery.
            </p>

            <div className="mt-6 space-y-3 text-sm font-semibold text-slate-300">
              <a
                href="mailto:hello@ktechitservices.com"
                className="flex items-center gap-3 hover:text-[#CBF7ED]"
              >
                <Mail size={17} className="text-[#CBF7ED]" />
                hello@ktechitservices.com
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-[#CBF7ED]" />
                Delaware, United States
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
              Company
            </h3>

            <div className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-semibold text-slate-300 hover:text-[#CBF7ED]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
              Pathways
            </h3>

            {footerLinks.pathways.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="block text-sm font-semibold text-slate-300 hover:text-[#CBF7ED]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
              Start here
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="/employers"
                className="flex items-center justify-between rounded-xl bg-[#23395B] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#406E8E]"
              >
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness size={16} />
                  Hire Talent
                </span>
                <ArrowRight size={15} />
              </a>

              <a
                href="/candidates"
                className="flex items-center justify-between rounded-xl bg-[#CBF7ED] px-4 py-3 text-sm font-bold text-[#161925] transition hover:bg-white"
              >
                <span className="inline-flex items-center gap-2">
                  <UploadCloud size={16} />
                  Upload Resume
                </span>
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-6 space-y-3">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-semibold text-slate-400 hover:text-[#CBF7ED]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 text-sm font-semibold text-slate-400 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} KTech IT Services. All rights
              reserved.
            </p>

            <p>IT staffing, recruitment, and technology services.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
