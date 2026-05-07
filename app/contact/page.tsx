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
  Phone,
  UploadCloud,
} from "lucide-react";
import type { Metadata } from "next";

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
    description: "KTech reviews enquiries and routes them to the right pathway.",
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
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B3D2F]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1B3D2F] shadow-sm">
              <Building2 size={16} />
              Contact KTech IT Services
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
              Let’s talk about hiring, IT services, or your next role.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
              Reach out to KTech for employer hiring needs, candidate resume
              submissions, IT services enquiries, or partnership conversations.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/employers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Hire IT Talent
                <BriefcaseBusiness size={18} />
              </a>

              <a
                href="/candidates"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
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
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={26} />
                  </div>

                  <p className="text-sm font-extrabold text-[#E07A5F]">
                    {card.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-[#1B3D2F]">
                    {card.value}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              How can we help?
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Connect with the right KTech pathway.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              Choose the enquiry type that best matches your need. This helps
              KTech route your message between employer hiring, candidate
              support, IT services, and general business enquiries.
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex gap-3 rounded-3xl border border-[#1B3D2F]/10 bg-white/75 p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
                  <p className="text-sm font-semibold leading-6 text-[#3D405B]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="/employers"
                className="group rounded-[2rem] bg-[#1B3D2F] p-6 text-[#F4F1DE] shadow-xl transition hover:bg-[#163226]"
              >
                <BriefcaseBusiness className="text-[#E07A5F]" size={28} />

                <h3 className="mt-5 text-2xl font-black">For Employers</h3>

                <p className="mt-3 text-sm leading-7 text-[#F4F1DE]/80">
                  Submit hiring needs and start the shortlist process.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#E07A5F]">
                  Hire Talent <ArrowRight size={16} />
                </span>
              </a>

              <a
                href="/candidates"
                className="group rounded-[2rem] bg-[#E07A5F] p-6 text-white shadow-xl transition hover:bg-[#cf6b52]"
              >
                <UploadCloud className="text-white" size={28} />

                <h3 className="mt-5 text-2xl font-black">For Candidates</h3>

                <p className="mt-3 text-sm leading-7 text-white/85">
                  Upload your resume and join the candidate database.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-white">
                  Upload Resume <ArrowRight size={16} />
                </span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Response Commitment */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-[#1B3D2F] p-7 text-[#F4F1DE] shadow-xl md:col-span-2">
            <Clock className="text-[#E07A5F]" size={34} />

            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Your message should reach the right person quickly.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#F4F1DE]/80">
              Employer enquiries, candidate submissions, and IT services
              requests should not sit unnoticed. KTech’s contact flow is
              designed to route each message to the right next step.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/75 p-7 shadow-sm">
            <Phone className="text-[#E07A5F]" size={34} />

            <h3 className="mt-6 text-3xl font-black text-[#1B3D2F]">
              Prefer direct contact?
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#3D405B]">
              Use the email address on this page for hiring, resumes,
              partnerships, or general enquiries.
            </p>

            <a
              href="mailto:hello@ktechitservices.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#E07A5F]"
            >
              Email KTech <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#1B3D2F] p-8 text-center text-[#F4F1DE] shadow-xl md:p-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
            KTech IT Services
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Technology hiring and IT services support in one place.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#F4F1DE]/80">
            Whether you are building a team or building your career, KTech helps
            connect businesses and IT professionals through a modern
            staffing-focused platform.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/employers"
              className="rounded-full bg-[#F4F1DE] px-7 py-3 font-extrabold text-[#1B3D2F] transition hover:bg-white"
            >
              Hire IT Talent
            </a>

            <a
              href="/jobs"
              className="rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
            >
              View Jobs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}