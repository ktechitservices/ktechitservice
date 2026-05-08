import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Clock,
  FileText,
  MapPin,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { updateJobStatus } from "./actions";

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
  company_display_name: string | null;
  status: "draft" | "active" | "closed";
  created_at: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

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
      company_display_name,
      status,
      created_at
    `,
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
  const clientJobs = jobs.filter((job) => job.source_type === "client").length;
  const internalJobs = jobs.filter(
    (job) => job.source_type === "internal",
  ).length;

  const stats = [
    {
      label: "Total Jobs",
      value: jobs.length,
      subtext: `${activeJobs} active roles`,
      icon: BriefcaseBusiness,
    },
    {
      label: "Draft Jobs",
      value: draftJobs,
      subtext: "Not visible publicly",
      icon: FileText,
    },
    {
      label: "Closed Jobs",
      value: closedJobs,
      subtext: "Past or inactive roles",
      icon: Clock,
    },
    {
      label: "Internal Roles",
      value: internalJobs,
      subtext: `${clientJobs} client roles`,
      icon: Building2,
    },
  ];

  return (
    <AdminShell>
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
            Job management
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925] sm:text-4xl">
            Manage job postings.
          </h2>

          <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">
            Create, review, and manage KTech client roles and internal hiring
            roles. Active jobs appear on the public jobs page.
          </p>
        </div>

        <a
          href="/admin/jobs/new"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
        >
          <Plus size={18} />
          Add New Job
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                <Icon size={26} />
              </div>

              <p className="text-4xl font-black tracking-tight text-[#161925]">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-black text-[#23395B]">
                {stat.label}
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                {stat.subtext}
              </p>
            </div>
          );
        })}
      </div>

      <section className="mt-8 rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
              Job records
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
              Supabase job postings.
            </h3>

            <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
              These records are pulled live from the Supabase jobs table.
            </p>
          </div>

          <a
            href="/admin/jobs/new"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
          >
            <Plus size={17} />
            Add Job
          </a>
        </div>

        {jobs.length === 0 ? (
          <div className="rounded-3xl bg-[#F8FAFC] p-10 text-center">
            <BriefcaseBusiness className="mx-auto text-[#406E8E]" size={42} />

            <h3 className="mt-5 text-2xl font-black text-[#161925]">
              No jobs found.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-600">
              Create your first KTech job posting. Active jobs will appear on
              the public jobs page.
            </p>

            <a
              href="/admin/jobs/new"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
            >
              <Plus size={18} />
              Add Job
            </a>
          </div>
        ) : (
          <div className="grid gap-5">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg sm:p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`rounded-lg px-3 py-1.5 text-xs font-black capitalize ${
                          job.status === "active"
                            ? "bg-[#CBF7ED] text-[#161925]"
                            : job.status === "draft"
                              ? "bg-white text-[#406E8E]"
                              : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {job.status}
                      </span>

                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-black capitalize text-[#406E8E]">
                        {job.source_type}
                      </span>

                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-black text-slate-600">
                        {job.employment_type}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black tracking-tight text-[#161925]">
                      {job.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#23395B]">
                      {job.department}
                    </p>

                    <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#406E8E]" />
                        <span>{job.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-[#406E8E]" />
                        <span>{job.work_mode || "Flexible"}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-[#406E8E]" />
                        <span>{formatDate(job.created_at)}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs font-semibold text-slate-500">
                      /jobs/{job.slug}
                    </p>

                    {job.company_display_name && (
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        Display company: {job.company_display_name}
                      </p>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                    {job.status === "active" ? (
                      <a
                        href={`/jobs/${job.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
                      >
                        Open Public Role
                        <ArrowRight size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-bold text-slate-500">
                        Not public
                      </span>
                    )}

                    <a
                      href={`/admin/jobs/${job.id}/edit`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
                    >
                      Edit Job
                      <ArrowRight size={16} />
                    </a>

                    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-3">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                        Update Status
                      </p>

                      <div className="grid gap-2">
                        {["active", "draft", "closed"].map((status) => (
                          <form key={status} action={updateJobStatus}>
                            <input type="hidden" name="jobId" value={job.id} />
                            <input type="hidden" name="slug" value={job.slug} />
                            <input type="hidden" name="status" value={status} />

                            <button
                              type="submit"
                              disabled={job.status === status}
                              className={`w-full rounded-xl px-4 py-2.5 text-left text-xs font-black capitalize transition ${
                                job.status === status
                                  ? "cursor-not-allowed bg-[#CBF7ED] text-[#161925]"
                                  : "bg-[#F8FAFC] text-slate-600 hover:bg-[#23395B] hover:text-white"
                              }`}
                            >
                              {status}
                            </button>
                          </form>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </AdminShell>
  );
}
