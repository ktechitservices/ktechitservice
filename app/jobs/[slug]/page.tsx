import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getJobBySlug } from "@/lib/jobs";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Send,
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


export async function generateMetadata({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found | Ktech IT Services",
    };
  }

  return {
    title: `${job.title} | Ktech IT Services`,
    description: job.summary,
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary,
    hiringOrganization: {
      "@type": "Organization",
      name: "Ktech IT Services",
    },
    jobLocationType: job.location.toLowerCase().includes("remote")
      ? "TELECOMMUTE"
      : undefined,
    employmentType: job.type.toUpperCase().replace("-", "_"),
  };

  return (
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />

      <Navbar />

      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <a
            href="/jobs"
            className="mb-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#1B3D2F] transition hover:text-[#E07A5F]"
          >
            <ArrowLeft size={16} />
            Back to all jobs
          </a>

          <div className="overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-5 shadow-xl">
            <div className="rounded-[1.5rem] bg-[#1B3D2F] p-7 text-[#F4F1DE] md:p-10">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#F4F1DE] px-4 py-2 text-sm font-extrabold text-[#1B3D2F]">
                  {job.department}
                </span>

                <span className="rounded-full bg-[#E07A5F] px-4 py-2 text-sm font-extrabold text-white">
                  {job.type}
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                {job.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#F4F1DE]/85">
                {job.summary}
              </p>

              <div className="mt-9 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-[#F4F1DE]/10 p-5">
                  <MapPin className="mb-3 text-[#E07A5F]" size={24} />
                  <p className="text-sm text-[#F4F1DE]/65">Location</p>
                  <p className="mt-1 font-extrabold text-[#F4F1DE]">
                    {job.location}
                  </p>
                </div>

                <div className="rounded-3xl bg-[#F4F1DE]/10 p-5">
                  <BriefcaseBusiness
                    className="mb-3 text-[#E07A5F]"
                    size={24}
                  />
                  <p className="text-sm text-[#F4F1DE]/65">Experience</p>
                  <p className="mt-1 font-extrabold text-[#F4F1DE]">
                    {job.experience}
                  </p>
                </div>

                <div className="rounded-3xl bg-[#F4F1DE]/10 p-5">
                  <Send className="mb-3 text-[#E07A5F]" size={24} />
                  <p className="text-sm text-[#F4F1DE]/65">Salary</p>
                  <p className="mt-1 font-extrabold text-[#F4F1DE]">
                    {job.salary}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F4F1DE] px-3 py-1.5 text-xs font-bold text-[#3D405B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.75fr]">
            <div className="space-y-8">
              <section className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-7 shadow-sm">
                <h2 className="text-3xl font-black tracking-tight text-[#1B3D2F]">
                  Responsibilities
                </h2>

                <ul className="mt-6 space-y-4">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#E07A5F]"
                        size={20}
                      />
                      <span className="leading-7 text-[#3D405B]">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-7 shadow-sm">
                <h2 className="text-3xl font-black tracking-tight text-[#1B3D2F]">
                  Requirements
                </h2>

                <ul className="mt-6 space-y-4">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#1B3D2F]"
                        size={20}
                      />
                      <span className="leading-7 text-[#3D405B]">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="h-fit rounded-[2rem] bg-[#E07A5F] p-7 text-white shadow-xl">
              <h2 className="text-3xl font-black tracking-tight">
                Apply for this role
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/85">
                Send your resume to Ktech and mention this job title in the
                subject line. A proper database-backed application form will be
                connected in the backend stage.
              </p>

              <a
                href={`mailto:hello@ktechitservices.com?subject=Application for ${job.title}`}
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Apply via Email
                <Send size={18} />
              </a>

              <a
                href="/candidates"
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-extrabold text-[#1B3D2F] transition hover:bg-[#F4F1DE]"
              >
                Upload Resume Instead
                <UploadCloud size={18} />
              </a>

              <div className="mt-7 rounded-3xl bg-white/15 p-5">
                <p className="font-black">No perfect match?</p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Join Ktech’s candidate database so the team can contact you
                  when a suitable IT opportunity becomes available.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
