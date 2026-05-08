import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe2,
  Handshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About KTech IT Services",
  description:
    "Learn about KTech IT Services, a Delaware-based IT staffing and services company helping employers hire technology talent and candidates find IT opportunities.",
};

const focusAreas = [
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Helping companies source skilled technology professionals for contract, permanent, and contract-to-hire requirements.",
  },
  {
    icon: Code2,
    title: "Technology Talent",
    description:
      "Supporting roles across software engineering, cloud, data, cybersecurity, DevOps, infrastructure, and digital delivery.",
  },
  {
    icon: Database,
    title: "Candidate Database",
    description:
      "Building a searchable talent database so candidates can stay visible for current and future opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Structured Hiring",
    description:
      "Creating a clear workflow for employer requirements, job postings, candidate sourcing, and shortlist delivery.",
  },
];

const values = [
  "Relevant technology matching",
  "Clear employer communication",
  "Candidate-first experience",
  "Structured hiring process",
  "Long-term business relationships",
  "Professional staffing support",
];

const companyFacts = [
  "Delaware-based IT services company",
  "Employer and candidate pathways",
  "Client and internal job posting support",
  "Resume upload and candidate database workflow",
  "Technology-focused hiring and staffing support",
];

const serviceCoverage = [
  "Software Engineering",
  "Cloud & DevOps",
  "Data & Analytics",
  "Cybersecurity",
  "Infrastructure Support",
  "Business Analysis",
  "QA & Testing",
  "Project Delivery",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <Building2 size={16} />
              About KTech IT Services
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              A professional IT staffing partner built for better talent
              matching.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              KTech connects businesses with skilled technology professionals
              while helping candidates find suitable IT opportunities across
              software, cloud, infrastructure, data, cybersecurity, and digital
              delivery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/employers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                Hire IT Talent
                <ArrowRight size={18} />
              </a>

              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                Explore Jobs
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg">
            <div className="rounded-2xl bg-[#161925] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
                Company focus
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                Staffing, recruitment, and IT services support.
              </h2>

              <div className="mt-7 space-y-4">
                {companyFacts.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#CBF7ED]"
                      size={20}
                    />
                    <p className="text-sm font-semibold leading-6 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#CBF7ED] p-5 text-[#161925]">
                <p className="text-4xl font-black">IT</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em]">
                  Specialist staffing focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Our purpose
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Reducing the gap between hiring speed and talent quality.
            </h2>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <div className="space-y-6 text-base font-medium leading-8 text-slate-600">
              <p>
                Technology hiring is often slow, noisy, and difficult to manage.
                Employers need skilled professionals quickly, but finding the
                right fit across software, cloud, data, cybersecurity, and IT
                delivery can take too much time.
              </p>

              <p>
                KTech is designed to make this process more focused. Employers
                can submit hiring requirements, and KTech can review, post,
                source, and shortlist suitable candidates for active roles.
              </p>

              <p>
                Candidates can apply to active jobs or upload their resume even
                when no current role matches. This helps KTech build a useful
                candidate database for future client and internal opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              What we focus on
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Recruitment and IT services under one structured platform.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech combines employer hiring support, candidate profile
              collection, active job posting, and technology-focused staffing
              workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-[#161925]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-[#161925] p-8 text-white shadow-lg sm:p-10">
            <Target className="text-[#CBF7ED]" size={38} />

            <h2 className="mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              Our mission is to make IT hiring faster, clearer, and more
              relevant.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              KTech helps employers access relevant technology professionals and
              helps candidates stay visible for opportunities that match their
              skills, experience, and career direction.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm sm:p-10">
            <Handshake className="text-[#406E8E]" size={38} />

            <h3 className="mt-6 text-3xl font-black tracking-tight text-[#161925]">
              Better matches. Better teams.
            </h3>

            <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
              KTech focuses on clarity, quality, and speed so employers and
              candidates both get a smoother staffing experience.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#23395B] transition hover:text-[#406E8E]"
            >
              Talk to KTech
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Role Coverage */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Technology coverage
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Talent coverage across key IT functions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech is built for technology-focused staffing, where role fit
              depends on both technical skills and business context.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceCoverage.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#406E8E]"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Values
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              What KTech stands for.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech is built around relevance, trust, and professional execution
              across employer and candidate relationships.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#406E8E]"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#161925] p-8 text-center text-white shadow-lg sm:p-10 lg:p-12">
          <Globe2 className="mx-auto text-[#CBF7ED]" size={40} />

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Whether you are hiring or job searching, KTech helps you move
            forward.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Employers can submit hiring requirements. Candidates can search jobs
            or upload resumes to join KTech’s talent database.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/employers"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#CBF7ED] px-6 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
            >
              Hire IT Talent
            </a>

            <a
              href="/jobs"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
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