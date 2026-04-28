import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Factory,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Ktech supports IT hiring across technology, finance, healthcare, government, energy, and enterprise IT.",
};

const industries = [
  {
    icon: Code2,
    title: "Technology",
    description:
      "Support for SaaS, product, platform, and digital teams hiring software, cloud, data, and DevOps talent.",
    roles: ["Frontend Developer", "Backend Developer", "DevOps Engineer", "QA Engineer"],
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Technology hiring support for finance teams needing secure, reliable, and data-driven IT capability.",
    roles: ["Data Analyst", "Cloud Engineer", "Security Analyst", "Business Analyst"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "IT professionals for healthcare platforms, digital health systems, data reporting, and secure operations.",
    roles: ["Data Engineer", "Systems Analyst", "Cloud Specialist", "BI Developer"],
  },
  {
    icon: ShieldCheck,
    title: "Government",
    description:
      "Technology support for public-sector style projects where reliability, compliance, and governance matter.",
    roles: ["Cybersecurity Analyst", "Project Coordinator", "Infrastructure Engineer", "Support Analyst"],
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "IT talent for infrastructure, reporting, automation, cloud, and operational technology support.",
    roles: ["Cloud Engineer", "Data Analyst", "Automation Specialist", "IT Support Engineer"],
  },
  {
    icon: Factory,
    title: "Enterprise IT",
    description:
      "Support for internal IT departments scaling delivery, systems, reporting, security, and transformation teams.",
    roles: ["IT Project Manager", "Systems Engineer", "Network Engineer", "Service Desk Analyst"],
  },
];

const benefits = [
  "Sector-aware candidate shortlisting",
  "Technology roles mapped to business context",
  "Support for client and internal hiring requirements",
  "Candidate database for future role matching",
  "Contract, permanent, and contract-to-hire options",
  "Hiring support across software, cloud, data, and cybersecurity",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B3D2F]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1B3D2F] shadow-sm">
              <Building2 size={16} />
              Industries Served
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
              IT hiring support across high-demand sectors.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
              Ktech helps companies source technology professionals across
              industries where software, cloud, data, cybersecurity, and digital
              delivery are critical.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/employers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Hire IT Talent
                <ArrowRight size={18} />
              </a>

              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                Search Jobs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#DCD9FF] blur-sm" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white p-4 shadow-xl">
              <div className="rounded-[1.5rem] bg-[#1B3D2F] p-6 text-[#F4F1DE]">
                <p className="text-sm font-medium text-[#F4F1DE]/75">
                  Industry-aware hiring
                </p>

                <h2 className="mt-2 text-3xl font-black leading-tight">
                  Same tech skill.
                  <br />
                  Different business context.
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "Understand the industry context",
                    "Map role needs to technical skills",
                    "Source candidates from active and stored profiles",
                    "Shortlist talent for employer review",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-3xl bg-[#F4F1DE]/10 p-4"
                    >
                      <CheckCircle2 className="text-[#E07A5F]" size={20} />
                      <p className="text-sm font-medium text-[#F4F1DE]/85">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Sector coverage
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Technology talent for different business environments.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3D405B]">
              Ktech can support employers across sectors that need reliable IT
              talent, whether for delivery teams, internal systems, reporting,
              security, or transformation work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-black text-[#1B3D2F]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                    {industry.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]">
                      Example roles
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.roles.map((role) => (
                        <span
                          key={role}
                          className="rounded-full bg-[#F4F1DE] px-3 py-1.5 text-xs font-bold text-[#3D405B]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry Context Matters */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Why it matters
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              The right IT hire depends on more than keywords.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              A cloud engineer in finance, a data analyst in healthcare, and a
              developer in SaaS may need similar tools but different business
              awareness. Ktech’s positioning should make that clear to hiring
              managers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-3xl border border-[#1B3D2F]/10 bg-white/75 p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
                <p className="text-sm font-semibold leading-6 text-[#3D405B]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer / Candidate CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#1B3D2F] p-8 text-[#F4F1DE] shadow-xl">
            <Users className="text-[#E07A5F]" size={36} />

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Hiring IT talent for your industry?
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#F4F1DE]/80">
              Share your hiring requirement and Ktech will help identify
              relevant technology professionals for your business context.
            </p>

            <a
              href="/employers"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#F4F1DE] px-7 py-3 font-extrabold text-[#1B3D2F] transition hover:bg-white"
            >
              Submit Hiring Need
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#E07A5F] p-8 text-white shadow-xl">
            <Database className="text-white" size={36} />

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Looking for your next IT role?
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/85">
              Search current roles or upload your resume to stay visible for
              future opportunities across Ktech’s client and internal roles.
            </p>

            <a
              href="/candidates"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 font-extrabold text-[#E07A5F] transition hover:bg-[#F4F1DE]"
            >
              Upload Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}