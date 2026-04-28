import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CandidateApplicationForm } from "@/components/forms/CandidateApplicationForm";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileText,
  Search,
  ShieldCheck,
  UploadCloud,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find IT Jobs",
  description:
    "Search active IT roles or upload your resume to join Ktech’s candidate database for future opportunities.",
};

const specialisations = [
  {
    icon: Code2,
    title: "Software Engineering",
    skills: "React, Node.js, Java, .NET, QA",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: "AWS, Azure, GCP, Terraform, CI/CD",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: "SQL, Python, Power BI, Data Engineering",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    skills: "Security, Risk, Compliance, Monitoring",
  },
];

const benefits = [
  "Search active IT roles",
  "Upload your resume even if no job matches today",
  "Join Ktech’s candidate database",
  "Get considered for client and internal roles",
  "Remote, hybrid, and on-site role options",
  "Software, cloud, data, and cybersecurity opportunities",
];

const steps = [
  {
    icon: Search,
    title: "Search Jobs",
    description:
      "Browse active IT opportunities posted by Ktech for client and internal hiring needs.",
  },
  {
    icon: UploadCloud,
    title: "Upload Profile",
    description:
      "Share your skills, experience, preferred role, and resume with Ktech.",
  },
  {
    icon: Users,
    title: "Get Matched",
    description:
      "Ktech reviews your profile and matches you with suitable employer requirements.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Interview & Grow",
    description:
      "Move forward with relevant opportunities and build your next career step.",
  },
];

export default function CandidatesPage() {
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
              <UploadCloud size={16} />
              Candidate talent network
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
              IT roles that match your skills.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
              Search active roles, apply to suitable jobs, or upload your resume
              so Ktech can keep you in its candidate database for future
              opportunities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Search IT Jobs
                <Search size={18} />
              </a>

              <a
                href="#candidate-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                Upload Resume
                <UploadCloud size={18} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#DCD9FF] blur-sm" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white p-4 shadow-xl">
              <div className="rounded-[1.5rem] bg-[#1B3D2F] p-6 text-[#F4F1DE]">
                <p className="text-sm font-medium text-[#F4F1DE]/75">
                  Candidate profile hub
                </p>

                <h2 className="mt-2 text-3xl font-black leading-tight">
                  No right job today?
                  <br />
                  Upload anyway.
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "Apply to active roles",
                    "Upload resume for future matching",
                    "Join Ktech’s candidate database",
                    "Get contacted for relevant IT jobs",
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

                <div className="mt-6 rounded-3xl bg-[#E07A5F] p-5">
                  <div className="flex items-center gap-3">
                    <FileText className="text-white" />
                    <p className="text-sm font-semibold text-white">
                      Resume database connection comes in the backend stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Widget */}
      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-4 shadow-xl">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_0.7fr_auto]">
            <div className="rounded-2xl bg-[#F4F1DE] px-5 py-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]">
                Keyword
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1B3D2F]">
                React, Cloud, Data, DevOps...
              </p>
            </div>

            <div className="rounded-2xl bg-[#F4F1DE] px-5 py-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]">
                Location
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1B3D2F]">
                Remote, Hybrid, United States
              </p>
            </div>

            <div className="rounded-2xl bg-[#F4F1DE] px-5 py-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]">
                Type
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1B3D2F]">
                Full-time / Contract
              </p>
            </div>

            <a
              href="/jobs"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#1B3D2F] px-6 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
            >
              Search
            </a>
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Tech specialisations
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Roles across the technology stack.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              Ktech supports candidates across software, cloud, data,
              cybersecurity, DevOps, and digital delivery roles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {specialisations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black text-[#1B3D2F]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#3D405B]">
                    {item.skills}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Why join Ktech?
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Get discovered for relevant IT opportunities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              Ktech helps candidates become visible for technology roles that
              match their skills, experience, work preference, and career goals.
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

      {/* Journey */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Candidate journey
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              From resume to opportunity.
            </h2>

            <p className="mx-auto mt-5 text-lg leading-8 text-[#3D405B]">
              Ktech makes the candidate journey simple, structured, and focused
              on matching you with relevant IT roles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={28} />
                  </div>

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
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="candidate-form" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Join the database
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Upload once. Stay visible for future roles.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              Fill out your profile and upload your resume. For now, the form
              opens an email draft. Later, this will connect to Supabase Storage
              and the Ktech candidate database.
            </p>

            <div className="mt-8 rounded-[2rem] bg-[#1B3D2F] p-6 text-[#F4F1DE] shadow-xl">
              <h3 className="text-2xl font-black">What happens next?</h3>

              <div className="mt-5 space-y-4">
                {[
                  "Ktech reviews your candidate profile.",
                  "Your resume is added to the talent database.",
                  "You are matched with relevant active or future roles.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
                    <p className="text-sm leading-6 text-[#F4F1DE]/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CandidateApplicationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}