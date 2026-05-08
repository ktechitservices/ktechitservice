import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "KTech supports IT hiring across technology, finance, healthcare, government, energy, and enterprise IT.",
};

const industries = [
  {
    icon: Code2,
    title: "Technology",
    description:
      "Support for SaaS, product, platform, and digital teams hiring software, cloud, data, QA, and DevOps talent.",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "DevOps Engineer",
      "QA Engineer",
    ],
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Technology hiring support for finance teams needing secure, reliable, data-driven, and compliant IT capability.",
    roles: [
      "Data Analyst",
      "Cloud Engineer",
      "Security Analyst",
      "Business Analyst",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "IT professionals for healthcare platforms, digital health systems, reporting, cloud, and secure operations.",
    roles: [
      "Data Engineer",
      "Systems Analyst",
      "Cloud Specialist",
      "BI Developer",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Government",
    description:
      "Technology staffing support for public-sector style projects where reliability, governance, and security matter.",
    roles: [
      "Cybersecurity Analyst",
      "Project Coordinator",
      "Infrastructure Engineer",
      "Support Analyst",
    ],
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "IT talent for infrastructure, reporting, automation, cloud, operational technology, and transformation support.",
    roles: [
      "Cloud Engineer",
      "Data Analyst",
      "Automation Specialist",
      "IT Support Engineer",
    ],
  },
  {
    icon: Factory,
    title: "Enterprise IT",
    description:
      "Support for internal IT departments scaling systems, service desks, cloud, security, and transformation teams.",
    roles: [
      "IT Project Manager",
      "Systems Engineer",
      "Network Engineer",
      "Service Desk Analyst",
    ],
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

const techCoverage = [
  "Software Development",
  "Cloud Infrastructure",
  "Data & Analytics",
  "Cybersecurity",
  "DevOps & Automation",
  "Infrastructure Support",
  "Business Analysis",
  "IT Project Delivery",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <Building2 size={16} />
              Industries Served
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              IT hiring support across high-demand sectors.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              KTech helps companies source technology professionals across
              industries where software, cloud, data, cybersecurity,
              infrastructure, and digital delivery are critical.
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
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                Search Jobs
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg">
            <div className="rounded-2xl bg-[#161925] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
                Industry-aware hiring
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                Same technical skill. Different business context.
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Understand the industry context",
                  "Map role needs to technical skills",
                  "Source candidates from active and stored profiles",
                  "Shortlist talent for employer review",
                ].map((item) => (
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

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#CBF7ED] p-5 text-[#161925]">
                  <p className="text-4xl font-black">6+</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em]">
                    Industry areas
                  </p>
                </div>

                <div className="rounded-2xl bg-[#23395B] p-5 text-white">
                  <p className="text-4xl font-black">IT</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-200">
                    Specialist focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Grid */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Sector coverage
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Technology talent for different business environments.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech supports employers across sectors that need reliable IT
              talent for delivery teams, internal systems, reporting, security,
              and transformation work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-[#161925]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#F8FAFC] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                      Example roles
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.roles.map((role) => (
                        <span
                          key={role}
                          className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
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
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Why industry context matters
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              The right IT hire depends on more than keywords.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A cloud engineer in finance, a data analyst in healthcare, and a
              developer in SaaS may need similar tools but different business
              awareness. KTech’s approach keeps that context visible in the
              hiring process.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#406E8E]"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Coverage */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Talent coverage
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              KTech covers the core IT functions companies rely on.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From software delivery to infrastructure, KTech focuses on
              technology roles where skill fit and delivery context matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techCoverage.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
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

      {/* Employer / Candidate CTA */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#161925] p-8 text-white shadow-lg">
            <Users className="text-[#CBF7ED]" size={38} />

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Hiring IT talent for your industry?
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-slate-300">
              Share your hiring requirement and KTech can help identify relevant
              technology professionals for your business context.
            </p>

            <a
              href="/employers"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#CBF7ED] px-6 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
            >
              Submit Hiring Need
            </a>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 shadow-sm">
            <Database className="text-[#406E8E]" size={38} />

            <h2 className="mt-6 text-3xl font-black tracking-tight text-[#161925] sm:text-4xl">
              Looking for your next IT role?
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
              Search current roles or upload your resume to stay visible for
              future opportunities across KTech’s client and internal roles.
            </p>

            <a
              href="/candidates"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
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