import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  UploadCloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KTech IT Services for employer hiring needs, candidate submissions, IT services, or business enquiries.",
};

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@ktechitservices.com",
    description: "For employer, candidate, and business enquiries.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Delaware, United States",
    description: "US-based IT staffing and services company.",
  },
  {
    icon: Clock,
    title: "Response",
    value: "Fast follow-up",
    description: "Enquiries are routed to the right KTech pathway.",
  },
];

const reasons = [
  "Submit an employer hiring requirement",
  "Upload your resume or ask about candidate opportunities",
  "Explore IT staffing and project-based talent support",
  "Discuss partnerships, delivery support, or business enquiries",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <Building2 size={16} />
              Contact KTech IT Services
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              Let’s talk about hiring, IT services, or your next role.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reach out to KTech for employer hiring needs, candidate resume
              submissions, IT services enquiries, or partnership conversations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/employers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                Hire IT Talent
                <BriefcaseBusiness size={18} />
              </a>

              <a
                href="/candidates"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                Upload Resume
                <UploadCloud size={18} />
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#406E8E]">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
                    {card.value}
                  </h2>

                  <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              How can we help?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Connect with the right KTech pathway.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose the enquiry type that best matches your need. This helps
              KTech route your message between employer hiring, candidate
              support, IT services, and general business enquiries.
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#406E8E]"
                    size={20}
                  />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-[#161925] p-7 text-white shadow-lg">
              <h3 className="text-2xl font-black text-white">
                Prefer a direct pathway?
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-slate-300">
                Employers can submit hiring requirements directly. Candidates
                can upload resumes directly. General enquiries can use the
                contact form.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/employers"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#CBF7ED] px-5 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
                >
                  For Employers
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/candidates"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  For Candidates
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}