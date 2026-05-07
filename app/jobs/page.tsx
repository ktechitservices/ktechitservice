import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getActiveJobs } from "@/lib/jobs";
import { JobsSearchClient } from "@/components/jobs/JobsSearchClient";
import { BriefcaseBusiness, Search, UploadCloud } from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "IT Jobs",
  description:
    "Explore active IT jobs across software, cloud, data, cybersecurity, and digital delivery.",
};

export default async function JobsPage() {
  const jobs = await getActiveJobs();

  return (
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <Navbar />

      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B3D2F]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1B3D2F] shadow-sm">
              <BriefcaseBusiness size={16} />
              KTech Careers & Client Job Portal
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
              Find IT roles that match your skills.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
              Browse active technology roles posted by KTech for client
              companies and internal hiring needs. If nothing matches today, you
              can still upload your resume for future opportunities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#open-roles"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Search Open Jobs
                <Search size={18} />
              </a>

              <a
                href="/candidates"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                Upload Resume
                <UploadCloud size={18} />
              </a>
            </div>
          </div>

          <JobsSearchClient jobs={jobs} />
        </div>
      </section>

      <Footer />
    </main>
  );
}