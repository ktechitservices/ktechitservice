import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EmployerRequirementForm } from "@/components/forms/EmployerRequirementForm";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hire IT Talent",
  description:
    "Submit your IT hiring requirement and get relevant technology candidate shortlists with KTech IT Services.",
};

const painPoints = [
  "Urgent IT roles take too long to fill",
  "Generic applicants do not match technical requirements",
  "Hiring managers lose time screening irrelevant profiles",
  "Niche software, cloud, data, and security skills are hard to source",
];

const hiringSolutions = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Scale your technology team with skilled contractors for urgent delivery, support, and project needs.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Permanent Hiring",
    description:
      "Build long-term teams with screened IT professionals across software, cloud, data, and support functions.",
  },
  {
    icon: SearchCheck,
    title: "Contract-to-Hire",
    description:
      "Reduce hiring risk by working with talent before making a permanent commitment.",
  },
  {
    icon: Database,
    title: "Candidate Database",
    description:
      "Use KTech’s growing talent database to support active roles and future hiring requirements.",
  },
];

const process = [
  {
    title: "Submit Requirement",
    description:
      "Share the role, skills, timeline, location, work mode, and hiring context.",
  },
  {
    title: "KTech Reviews",
    description:
      "The team clarifies your requirement and identifies suitable sourcing routes.",
  },
  {
    title: "Talent Shortlist",
    description:
      "Receive a focused shortlist of relevant IT profiles for review.",
  },
  {
    title: "Interview & Hire",
    description:
      "Move selected candidates through interview, selection, and placement.",
  },
];

export default function EmployersPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <Users size={16} />
              Employer hiring solutions
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              Hire skilled IT talent with a focused staffing partner.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              KTech helps companies fill technology roles by reviewing hiring
              requirements, sourcing candidates, posting active jobs, and
              building relevant IT talent shortlists.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#employer-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                Submit Hiring Requirement
                <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg">
            <div className="rounded-2xl bg-[#161925] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
                Hiring workflow
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                From requirement to shortlist.
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Employer submits hiring need",
                  "KTech reviews the role and skills required",
                  "Job is posted or candidates are sourced internally",
                  "Relevant IT profiles are shortlisted",
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
                  <p className="text-4xl font-black">48h</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em]">
                    Shortlist target
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

      {/* Pain Points */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Hiring challenge
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              IT hiring should not slow delivery down.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech supports companies that need relevant technology talent
              without wasting time on broad, unfocused applicant pools.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#406E8E]"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Staffing models
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Flexible IT hiring support for modern teams.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech can support contract hiring, permanent recruitment,
              contract-to-hire pathways, and database-led candidate matching.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hiringSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-[#161925]">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Process
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Clear process. Better hiring conversations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech keeps the hiring workflow structured so your team can move
              from requirement to shortlist faster.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#CBF7ED] text-sm font-black text-[#161925]">
                  {index + 1}
                </div>

                <h3 className="text-xl font-black text-[#161925]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="employer-form" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Start hiring
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Submit your IT hiring requirement.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Share the role, timeline, and contact details. KTech will review
              the requirement and help identify relevant IT professionals.
            </p>

            <div className="mt-8 rounded-3xl bg-[#161925] p-7 text-white shadow-lg">
              <Clock className="text-[#CBF7ED]" size={34} />

              <h3 className="mt-5 text-2xl font-black text-white">
                What happens next?
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "KTech reviews your hiring requirement.",
                  "The team clarifies role details and urgency.",
                  "Suitable candidates are sourced or shortlisted.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#CBF7ED]"
                      size={20}
                    />
                    <p className="text-sm font-semibold leading-6 text-slate-300">
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