import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Staffing Services",
  description:
    "Explore KTech’s IT staffing services including staff augmentation, direct hire, contract-to-hire, and candidate matching.",
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
      "Use KTech’s growing candidate network to identify suitable profiles even before a job is publicly promoted.",
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
    title: "Requirement Intake",
    description:
      "KTech understands the role, skills, urgency, work mode, and hiring context.",
  },
  {
    title: "Search & Screening",
    description:
      "Candidates are sourced from applications, resume uploads, and KTech’s talent database.",
  },
  {
    title: "Shortlist Delivery",
    description:
      "Relevant profiles are shared with the employer for interview and selection.",
  },
  {
    title: "Placement Support",
    description:
      "KTech supports the next steps across interview, selection, and onboarding.",
  },
];

const differentiators = [
  "100% technology-focused hiring support",
  "Employer and candidate journeys clearly separated",
  "Active jobs plus general resume database",
  "Client roles and internal KTech roles supported",
  "Shortlist-led process instead of generic application flow",
  "Built for speed, clarity, and relevant matching",
];

export default function ServicesPage() {
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
              Our Services
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
              IT staffing services built around better matches.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
              KTech helps companies fill technology roles through staff
              augmentation, direct hire, contract-to-hire, and candidate
              database matching.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/employers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Get IT Talent Now
                <ArrowRight size={18} />
              </a>

              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                Search IT Jobs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#DCD9FF] blur-sm" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white p-4 shadow-xl">
              <div className="rounded-[1.5rem] bg-[#1B3D2F] p-6 text-[#F4F1DE]">
                <p className="text-sm font-medium text-[#F4F1DE]/75">
                  Service model
                </p>

                <h2 className="mt-2 text-3xl font-black leading-tight">
                  Hiring support from requirement to shortlist.
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "Employer shares hiring need",
                    "KTech reviews the requirement",
                    "Active job is posted or sourced internally",
                    "Relevant IT candidates are shortlisted",
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

      {/* Staffing Models */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Staffing models
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Flexible hiring options for different IT needs.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3D405B]">
              Different roles need different hiring models. KTech supports
              urgent contract hiring, long-term permanent roles, flexible
              contract-to-hire pathways, and database-led candidate matching.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {staffingModels.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-black text-[#1B3D2F]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                    {service.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-[#F4F1DE] p-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]">
                      Typical use case
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#3D405B]">
                      {service.useCase}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Areas */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Technology coverage
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Talent across the technology stack.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3D405B]">
              KTech focuses on IT roles where technical fit matters — software,
              cloud, data, security, DevOps, and digital delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {techAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black text-[#1B3D2F]">
                    {area.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#F4F1DE] px-3 py-1.5 text-xs font-bold text-[#3D405B]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Why KTech
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Focused on speed, clarity, and relevant matching.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              KTech is designed for companies that need IT hiring support
              without unnecessary complexity — and for candidates who want to
              stay visible for relevant opportunities.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-3xl border border-[#1B3D2F]/10 bg-white/75 p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
                <p className="text-sm font-semibold leading-6 text-[#3D405B]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              From requirement to shortlist.
            </h2>

            <p className="mx-auto mt-5 text-lg leading-8 text-[#3D405B]">
              KTech keeps the process simple so employers can move faster and
              candidates can stay discoverable for current and future roles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                  {index === 0 && <ClipboardList size={26} />}
                  {index === 1 && <SearchCheck size={26} />}
                  {index === 2 && <Users size={26} />}
                  {index === 3 && <Handshake size={26} />}
                </div>

                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E07A5F] text-sm font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-black text-[#1B3D2F]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#3D405B]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#1B3D2F] p-8 text-center text-[#F4F1DE] shadow-xl md:p-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
            Start with KTech
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Need talent or looking for your next IT role?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#F4F1DE]/80">
            Employers can submit hiring requirements. Candidates can search jobs
            or upload resumes for future matching.
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
              Search Jobs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}