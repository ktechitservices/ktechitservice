import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EmployerRequirementForm } from "@/components/forms/EmployerRequirementForm";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire IT Talent",
  description:
    "Submit your IT hiring requirement and get relevant technology candidate shortlists with KTech IT Services.",
};

const painPoints = [
  "Time-to-hire is too long for urgent IT roles",
  "Generic applicants do not match technical requirements",
  "Niche skills are hard to find quickly",
  "Hiring managers lose time screening irrelevant profiles",
];

const hiringSolutions = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Scale your IT team with vetted contractors for urgent delivery needs.",
  },
  {
    icon: Code2,
    title: "Direct Hire",
    description:
      "Build your core technology team with screened permanent IT professionals.",
  },
  {
    icon: SearchCheck,
    title: "Contract-to-Hire",
    description:
      "Reduce hiring risk by working with talent before making a long-term decision.",
  },
  {
    icon: Database,
    title: "Candidate Database",
    description:
      "Use KTech’s growing talent network to identify suitable profiles faster.",
  },
];

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Government",
  "Energy",
  "Enterprise IT",
];

const process = [
  {
    title: "Intake & Discovery",
    description:
      "You share the role, skills, timeline, work mode, and hiring context.",
  },
  {
    title: "Search & Screen",
    description:
      "KTech reviews applications, searches its database, and filters relevant IT profiles.",
  },
  {
    title: "Present Shortlist",
    description:
      "You receive a focused shortlist instead of a flood of generic candidates.",
  },
  {
    title: "Interview & Placement",
    description:
      "You interview, select, and move forward with the right technology talent.",
  },
];

export default function EmployersPage() {
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
              <Users size={16} />
              Employer hiring solutions
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
              IT talent solutions built for speed and precision.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
              KTech helps companies fill technology roles by reviewing hiring
              needs, posting active jobs, sourcing candidates, and shortlisting
              relevant IT professionals.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#employer-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Get IT Talent Now
                <ArrowRight size={18} />
              </a>

              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                View Active Jobs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#DCD9FF] blur-sm" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white p-4 shadow-xl">
              <div className="rounded-[1.5rem] bg-[#1B3D2F] p-6 text-[#F4F1DE]">
                <p className="text-sm font-medium text-[#F4F1DE]/75">
                  Hiring workflow
                </p>

                <h2 className="mt-2 text-3xl font-black leading-tight">
                  From requirement
                  <br />
                  to shortlist.
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "Employer submits hiring need",
                    "KTech reviews the requirement",
                    "Job is posted or sourced internally",
                    "Relevant IT profiles are shortlisted",
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

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-[#F4F1DE] p-5 text-[#1B3D2F]">
                    <p className="text-4xl font-black">48h</p>
                    <p className="mt-1 text-xs font-bold text-[#3D405B]">
                      Initial shortlist target
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#E07A5F] p-5 text-white">
                    <p className="text-4xl font-black">IT</p>
                    <p className="mt-1 text-xs font-bold text-white/85">
                      Specialist hiring focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Hiring pain points
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Hiring IT talent should not slow delivery down.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              KTech is built for companies that need relevant technology talent
              without wasting time on broad, unfocused applicant pools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-3xl border border-[#1B3D2F]/10 bg-white/75 p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
                <p className="text-sm font-semibold leading-6 text-[#3D405B]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Staffing models
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Flexible hiring support for modern IT teams.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              KTech can support urgent contract hiring, permanent roles,
              contract-to-hire pathways, and database-led candidate matching.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hiringSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black text-[#1B3D2F]">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Process
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Clear process. Less hiring noise.
            </h2>

            <p className="mx-auto mt-5 text-lg leading-8 text-[#3D405B]">
              KTech keeps the hiring process structured so your team can move
              from requirement to shortlist faster.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E07A5F] text-sm font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black text-[#1B3D2F]">
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

      {/* Industries */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Industries served
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              IT talent across high-demand sectors.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              KTech can support roles across technology-led organisations and
              business teams building digital capability.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-3xl bg-[#1B3D2F] p-5 text-center text-[#F4F1DE] shadow-sm"
              >
                <ShieldCheck className="mx-auto mb-3 text-[#E07A5F]" />
                <p className="text-sm font-extrabold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="employer-form" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Start hiring
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Get your IT talent shortlist.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              Keep it simple. Share the role, timeline, and contact details.
              KTech will review the requirement and help identify relevant IT
              professionals.
            </p>

            <div className="mt-8 rounded-[2rem] bg-[#1B3D2F] p-6 text-[#F4F1DE] shadow-xl">
              <h3 className="text-2xl font-black">Response commitment</h3>

              <div className="mt-5 space-y-4">
                {[
                  "Your requirement is reviewed by the KTech team.",
                  "KTech clarifies the role and skills needed.",
                  "Relevant candidates are sourced or shortlisted.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Clock className="mt-0.5 shrink-0 text-[#E07A5F]" />
                    <p className="text-sm leading-6 text-[#F4F1DE]/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <EmployerRequirementForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}