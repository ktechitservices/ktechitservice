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
    "Explore active IT jobs across software, cloud, data, cybersecurity, infrastructure, and digital delivery.",
};

export default async function JobsPage() {
  const jobs = await getActiveJobs();

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <BriefcaseBusiness size={16} />
              KTech Careers & Client Job Portal
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              Find technology roles that match your skills.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Browse active technology roles posted by KTech for client
              companies and internal hiring needs. If nothing matches today, you
              can still upload your resume for future opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#open-roles"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                Search Open Jobs
                <Search size={18} />
              </a>

              <a
                href="/candidates"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
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