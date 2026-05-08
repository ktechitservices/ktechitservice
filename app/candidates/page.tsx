import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CandidateApplicationForm } from "@/components/forms/CandidateApplicationForm";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  FileText,
  Search,
  UploadCloud,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Find IT Jobs",
  description:
    "Search active IT roles or upload your resume to join KTech’s candidate database for future opportunities.",
};

const candidateBenefits = [
  "Apply to active IT roles posted by KTech",
  "Upload your resume even if no current job matches",
  "Stay visible for future client and internal opportunities",
  "Share your preferred role, skills, location, and work mode",
];

const pathways = [
  {
    icon: Search,
    title: "Search Active Jobs",
    description:
      "Browse software, cloud, data, cybersecurity, infrastructure, and IT support roles.",
  },
  {
    icon: UploadCloud,
    title: "Upload Resume",
    description:
      "Submit your resume to join KTech’s candidate database for future matching.",
  },
  {
    icon: Database,
    title: "Stay Discoverable",
    description:
      "KTech can review your profile when suitable client or internal roles become available.",
  },
];

const roleAreas = [
  "Software Engineering",
  "Cloud & DevOps",
  "Data & Analytics",
  "Cybersecurity",
  "Infrastructure Support",
  "Business Analysis",
  "QA & Testing",
  "IT Project Delivery",
];

export default function CandidatesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <BriefcaseBusiness size={16} />
              Candidate opportunities
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              Find your next opportunity in IT.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Search active technology roles or upload your resume to join
              KTech’s candidate database for future client and internal
              opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                Search Jobs
                <ArrowRight size={18} />
              </a>

              <a
                href="#resume-upload"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                Upload Resume
                <UploadCloud size={18} />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg">
            <div className="rounded-2xl bg-[#161925] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
                Candidate workflow
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                Apply now or stay visible for future roles.
              </h2>

              <div className="mt-7 space-y-4">
                {candidateBenefits.map((item) => (
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
                  Specialist career focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Candidate pathways
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              More than a single job application.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech supports candidates through active job applications and
              future opportunity matching through its candidate database.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;

              return (
                <article
                  key={pathway.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-[#161925]">
                    {pathway.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {pathway.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role Areas */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              IT role coverage
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Opportunities across the technology stack.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech focuses on technology roles where skills, delivery context,
              and business fit matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {roleAreas.map((role) => (
              <div
                key={role}
                className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#406E8E]"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Upload Form */}
      <section
        id="resume-upload"
        className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Join the database
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Upload your resume for future IT opportunities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              If there is no matching role today, your profile can still help
              KTech identify you for future client or internal opportunities.
            </p>

            <div className="mt-8 rounded-3xl bg-[#161925] p-7 text-white shadow-lg">
              <FileText className="text-[#CBF7ED]" size={34} />

              <h3 className="mt-5 text-2xl font-black text-white">
                What happens after you submit?
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "Your profile is stored in KTech’s candidate database.",
                  "KTech can review your skills for relevant opportunities.",
                  "Your resume can support current or future role matching.",
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

          <CandidateApplicationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}