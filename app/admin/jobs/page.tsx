import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowRight,
  BriefcaseBusiness,
  Plus,
  Search,
  ShieldCheck,
} from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type AdminJob = {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  work_mode: string | null;
  source_type: "client" | "internal";
  status: "draft" | "active" | "closed";
  created_at: string;
};

async function getAdminJobs(): Promise<AdminJob[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("jobs")
    .select(
      `
      id,
      title,
      slug,
      department,
      location,
      employment_type,
      work_mode,
      source_type,
      status,
      created_at
    `
    )
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Failed to fetch admin jobs:", error);
    return [];
  }

  return data as AdminJob[];
}

export default async function AdminJobsPage() {
  const jobs = await getAdminJobs();

  const activeJobs = jobs.filter((job) => job.status === "active").length;
  const draftJobs = jobs.filter((job) => job.status === "draft").length;
  const closedJobs = jobs.filter((job) => job.status === "closed").length;

  return (
    <AdminShell>
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E07A5F]">
            Job management
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#1B3D2F]">
            Manage job postings.
          </h2>

          <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#3D405B]">
            Create, review, and manage KTech client jobs and internal hiring
            roles. Active jobs appear on the public job portal.
          </p>
        </div>

        <a
          href="/admin/jobs/new"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 text-sm font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
        >
          <Plus size={18} />
          Add New Job
        </a>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-4">
        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <BriefcaseBusiness className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {jobs.length}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">Total Jobs</p>
        </div>

        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <ShieldCheck className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {activeJobs}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">Active Jobs</p>
        </div>

        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <BriefcaseBusiness className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {draftJobs}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">Draft Jobs</p>
        </div>

        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <BriefcaseBusiness className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {closedJobs}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">Closed Jobs</p>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black text-[#1B3D2F]">
              Job records
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#3D405B]/75">
              These jobs are pulled from the Supabase jobs table.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-[#F4F1DE] px-4 py-3">
            <Search size={17} className="text-[#1B3D2F]" />
            <span className="text-sm font-bold text-[#3D405B]/65">
              Search coming later
            </span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-[1.5rem] border border-[#1B3D2F]/10">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-[1.4fr_1fr_0.9fr_0.9fr_0.8fr_0.7fr_0.6fr] gap-4 bg-[#1B3D2F] px-6 py-4 text-sm font-extrabold text-[#F4F1DE]">
              <p>Job Title</p>
              <p>Department</p>
              <p>Location</p>
              <p>Type</p>
              <p>Source</p>
              <p>Status</p>
              <p>View</p>
            </div>

            {jobs.length === 0 ? (
              <div className="bg-white px-6 py-12 text-center">
                <p className="text-lg font-black text-[#1B3D2F]">
                  No jobs found.
                </p>

                <p className="mt-2 text-sm font-semibold text-[#3D405B]/70">
                  Create your first job posting from the Add Job page.
                </p>

                <a
                  href="/admin/jobs/new"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 text-sm font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
                >
                  <Plus size={18} />
                  Add Job
                </a>
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="grid grid-cols-[1.4fr_1fr_0.9fr_0.9fr_0.8fr_0.7fr_0.6fr] gap-4 border-b border-[#1B3D2F]/10 bg-white px-6 py-5 text-sm last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DDEDE6] text-[#1B3D2F]">
                      <BriefcaseBusiness size={18} />
                    </div>

                    <div>
                      <p className="font-black text-[#1B3D2F]">{job.title}</p>

                      <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                        /jobs/{job.slug}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                        Created:{" "}
                        {new Date(job.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <p className="font-semibold text-[#3D405B]">
                    {job.department}
                  </p>

                  <p className="font-semibold text-[#3D405B]">
                    {job.location}
                  </p>

                  <div>
                    <p className="font-semibold text-[#3D405B]">
                      {job.employment_type}
                    </p>

                    {job.work_mode && (
                      <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                        {job.work_mode}
                      </p>
                    )}
                  </div>

                  <span className="h-fit w-fit rounded-full bg-[#1B3D2F]/10 px-3 py-1 text-xs font-extrabold capitalize text-[#1B3D2F]">
                    {job.source_type}
                  </span>

                  <span
                    className={`h-fit w-fit rounded-full px-3 py-1 text-xs font-extrabold capitalize ${
                      job.status === "active"
                        ? "bg-[#1B3D2F]/10 text-[#1B3D2F]"
                        : job.status === "draft"
                        ? "bg-[#E07A5F]/15 text-[#E07A5F]"
                        : "bg-[#3D405B]/10 text-[#3D405B]"
                    }`}
                  >
                    {job.status}
                  </span>

                  <a
                    href={`/jobs/${job.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-fit items-center gap-1 text-sm font-extrabold text-[#1B3D2F] transition hover:text-[#E07A5F]"
                  >
                    Open <ArrowRight size={14} />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}