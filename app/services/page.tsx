import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Code2,
  Database,
  Handshake,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Staffing Services",
  description:
    "Explore KTech’s IT staffing services including staff augmentation, direct hire, contract-to-hire, candidate database matching, and technology services support.",
};

const staffingModels = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Scale your IT team with skilled contractors for urgent delivery needs, specialist skills, or short-term project support.",
    useCase: "Best for urgent hiring, workload spikes, and project deadlines.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Direct Hire",
    description:
      "Build your core technology team with screened permanent IT professionals who match the role and long-term team needs.",
    useCase: "Best for permanent software, cloud, data, and IT roles.",
  },
  {
    icon: SearchCheck,
    title: "Contract-to-Hire",
    description:
      "Work with talent before committing permanently, reducing hiring risk while keeping delivery moving.",
    useCase: "Best when you want flexibility before long-term commitment.",
  },
  {
    icon: Database,
    title: "Candidate Database Matching",
    description:
      "Use KTech’s growing candidate database to identify suitable profiles for current and future hiring needs.",
    useCase: "Best for faster shortlists and future hiring pipelines.",
  },
];

const techAreas = [
  {
    icon: Code2,
    title: "Software Engineering",
    skills: ["React", "Node.js", "Java", ".NET", "QA", "Mobile"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Terraform", "CI/CD", "Platform"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: ["SQL", "Python", "Power BI", "Data Engineering", "BI"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    skills: ["Security", "Risk", "Compliance", "Monitoring", "Governance"],
  },
];

const process = [
  {
    icon: ClipboardList,
    title: "Requirement Intake",
    description:
      "KTech understands the role, skills, urgency, work mode, and hiring context.",
  },
  {
    icon: SearchCheck,
    title: "Search & Screening",
    description:
      "Candidates are sourced from applications, resume uploads, and KTech’s talent database.",
  },
  {
    icon: Users,
    title: "Shortlist Delivery",
    description:
      "Relevant profiles are shared with the employer for interview and selection.",
  },
  {
    icon: Handshake,
    title: "Placement Support",
    description:
      "KTech supports the next steps across interview, selection, and onboarding.",
  },
];

const differentiators = [
  "Technology-focused staffing and recruitment",
  "Employer and candidate journeys clearly separated",
  "Active jobs plus general resume database",
  "Client roles and internal KTech roles supported",
  "Shortlist-led process instead of generic applicant flow",
  "Built for speed, clarity, and relevant matching",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <BriefcaseBusiness size={16} />
              KTech Services
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              IT staffing and services built around better matches.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              KTech helps companies fill technology roles through staff
              augmentation, direct hire, contract-to-hire, and database-led
              candidate matching.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/employers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                Get IT Talent
                <ArrowRight size={18} />
              </a>

              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                Search IT Jobs
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg">
            <div className="rounded-2xl bg-[#161925] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
                Service model
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                Hiring support from requirement to shortlist.
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Employer shares hiring need",
                  "KTech reviews the requirement",
                  "Active job is posted or sourced internally",
                  "Relevant IT candidates are shortlisted",
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

              <div className="mt-6 rounded-2xl bg-[#CBF7ED] p-5 text-[#161925]">
                <p className="text-4xl font-black">IT</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em]">
                  Specialist staffing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Models */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Staffing models
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Flexible hiring options for different IT needs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Different roles need different hiring models. KTech supports
              urgent contract hiring, long-term permanent roles, flexible
              contract-to-hire pathways, and database-led candidate matching.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {staffingModels.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-[#161925]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#F8FAFC] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                      Typical use case
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                      {service.useCase}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Coverage */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Technology coverage
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Talent across the technology stack.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech focuses on IT roles where technical fit matters — software,
              cloud, data, security, DevOps, and digital delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techAreas.map((area) => {
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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Why KTech
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Focused on speed, clarity, and relevant matching.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech is designed for companies that need IT hiring support
              without unnecessary complexity — and for candidates who want to
              stay visible for relevant opportunities.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
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

      {/* Process */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              From requirement to shortlist.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech keeps the process simple so employers can move faster and
              candidates can stay discoverable for current and future roles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                      <Icon size={26} />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CBF7ED] text-sm font-black text-[#161925]">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#161925]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#161925] p-8 text-center text-white shadow-lg sm:p-10 lg:p-12">
          <ShieldCheck className="mx-auto text-[#CBF7ED]" size={40} />

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Need talent or looking for your next IT role?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Employers can submit hiring requirements. Candidates can search jobs
            or upload resumes for future matching.
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
              Search Jobs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}