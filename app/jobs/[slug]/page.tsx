import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getJobBySlug } from "@/lib/jobs";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  MapPin,
  Send,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type JobPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found | KTech IT Services",
    };
  }

  return {
    title: `${job.title} | KTech IT Services`,
    description: job.summary,
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const responsibilities =
    job.responsibilities && job.responsibilities.length > 0
      ? job.responsibilities
      : [
          "Work with the team to deliver technology solutions aligned with the role requirements.",
          "Collaborate with stakeholders, technical teams, and delivery partners.",
          "Maintain quality, communication, and delivery standards throughout the engagement.",
        ];

  const requirements =
    job.requirements && job.requirements.length > 0
      ? job.requirements
      : [
          "Relevant experience in the required technology area.",
          "Strong communication and problem-solving skills.",
          "Ability to work effectively in the listed work mode and location context.",
        ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      <section className="border-b border-[#E2E8F0] bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <a
            href="/jobs"
            className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#23395B] hover:text-[#406E8E]"
          >
            <ArrowLeft size={16} />
            Back to all jobs
          </a>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-[#CBF7ED] px-3 py-1.5 text-xs font-black text-[#161925]">
                  {job.type}
                </span>

                <span className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-black text-[#406E8E]">
                  {job.workMode || "Flexible"}
                </span>

                {job.sourceType === "internal" && (
                  <span className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-black text-[#406E8E]">
                    KTech Role
                  </span>
                )}
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
                {job.department}
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
                {job.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {job.summary}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <MapPin className="text-[#406E8E]" size={24} />
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-black text-[#161925]">
                    {job.location}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <Clock className="text-[#406E8E]" size={24} />
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                    Experience
                  </p>
                  <p className="mt-2 text-sm font-black text-[#161925]">
                    {job.experience || "Experience flexible"}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <BriefcaseBusiness className="text-[#406E8E]" size={24} />
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                    Salary
                  </p>
                  <p className="mt-2 text-sm font-black text-[#161925]">
                    {job.salary || "Not disclosed"}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#406E8E]">
                  Skills
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(job.skills || []).length > 0 ? (
                    job.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-bold text-slate-700"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm font-semibold text-slate-500">
                      Skills will be discussed during the screening process.
                    </span>
                  )}
                </div>
              </div>
            </div>

            <aside className="rounded-3xl bg-[#161925] p-6 text-white shadow-lg sm:p-8 lg:sticky lg:top-28">
              <BriefcaseBusiness className="text-[#CBF7ED]" size={36} />

              <h2 className="mt-6 text-3xl font-black tracking-tight text-white">
                Interested in this role?
              </h2>

              <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">
                Apply for this role or upload your resume so KTech can keep your
                profile available for current and future IT opportunities.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href={`/candidates#resume-upload`}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#CBF7ED] px-6 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
                >
                  <UploadCloud size={18} />
                  Apply / Upload Resume
                </a>

                <a
                  href="/jobs"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  View More Jobs
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8EA8C3]">
                  Posted by
                </p>

                <p className="mt-2 text-sm font-bold leading-6 text-slate-200">
                  {job.companyDisplayName || "KTech IT Services"}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.38fr]">
          <div className="space-y-8">
            <article className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                  <FileText size={26} />
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#406E8E]">
                    Role Overview
                  </p>
                  <h2 className="mt-1 text-3xl font-black tracking-tight text-[#161925]">
                    What you will do.
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {responsibilities.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#406E8E]"
                      size={20}
                    />
                    <p className="text-sm font-semibold leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                  <ShieldCheck size={26} />
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#406E8E]">
                    Requirements
                  </p>
                  <h2 className="mt-1 text-3xl font-black tracking-tight text-[#161925]">
                    What KTech is looking for.
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {requirements.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#406E8E]"
                      size={20}
                    />
                    <p className="text-sm font-semibold leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <Building2 className="text-[#406E8E]" size={32} />

              <h3 className="mt-5 text-2xl font-black text-[#161925]">
                About this opportunity
              </h3>

              <div className="mt-5 space-y-4 text-sm font-semibold text-slate-600">
                <div className="flex items-center gap-3">
                  <Globe2 size={18} className="text-[#406E8E]" />
                  <span>{job.workMode || "Flexible"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#406E8E]" />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <BriefcaseBusiness size={18} className="text-[#406E8E]" />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#161925] p-6 text-white shadow-lg">
              <Send className="text-[#CBF7ED]" size={32} />

              <h3 className="mt-5 text-2xl font-black text-white">
                No perfect match?
              </h3>

              <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">
                Upload your resume anyway. KTech can keep your profile in its
                candidate database for future IT roles.
              </p>

              <a
                href="/candidates#resume-upload"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#CBF7ED] px-6 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
              >
                Join Candidate Database
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}