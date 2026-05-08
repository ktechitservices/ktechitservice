import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import { ArrowLeft, BriefcaseBusiness, FileText, Save } from "lucide-react";
import { notFound } from "next/navigation";
import { updateJob } from "./actions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type EditJobPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    error?: string;
  }>;
};

type JobRecord = {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  work_mode: string | null;
  experience: string | null;
  salary: string | null;
  source_type: "client" | "internal";
  company_display_name: string | null;
  summary: string;
  responsibilities: string[] | null;
  requirements: string[] | null;
  skills: string[] | null;
  status: "draft" | "active" | "closed";
};

async function getJob(id: string): Promise<JobRecord | null> {
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
      experience,
      salary,
      source_type,
      company_display_name,
      summary,
      responsibilities,
      requirements,
      skills,
      status
    `
    )
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Failed to fetch job for edit:", error);
    return null;
  }

  return data as JobRecord;
}

function getErrorMessage(error?: string) {
  if (error === "missing_fields") return "Please fill in all required fields.";
  if (error === "invalid_status") return "Invalid job status selected.";
  if (error === "invalid_source") return "Invalid job source selected.";
  if (error === "update_failed")
    return "Could not update the job. Check if the slug is already used by another job.";

  return null;
}

export default async function EditJobPage({
  params,
  searchParams,
}: EditJobPageProps) {
  const { id } = await params;
  const query = await searchParams;
  const job = await getJob(id);

  if (!job) {
    notFound();
  }

  const errorMessage = getErrorMessage(query.error);

  return (
    <AdminShell>
      <div className="mb-8">
        <a
          href="/admin/jobs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-black text-[#23395B] hover:text-[#406E8E]"
        >
          <ArrowLeft size={16} />
          Back to jobs
        </a>

        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
          Edit job
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925] sm:text-4xl">
          Edit job posting.
        </h2>

        <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">
          Update job details, public status, skills, responsibilities, and
          requirements. Active jobs appear on the public jobs page.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid gap-8 xl:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-3xl bg-[#161925] p-7 text-white shadow-lg">
          <BriefcaseBusiness className="text-[#CBF7ED]" size={36} />

          <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
            Editing role details.
          </h3>

          <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">
            Keep job information accurate and use draft status when the role
            should not be visible publicly.
          </p>

          <div className="mt-7 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8EA8C3]">
                Current URL
              </p>
              <p className="mt-2 break-all text-sm font-semibold leading-6 text-slate-300">
                /jobs/{job.slug}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8EA8C3]">
                Current Status
              </p>
              <p className="mt-2 text-sm font-semibold capitalize leading-6 text-slate-300">
                {job.status}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8EA8C3]">
                Source
              </p>
              <p className="mt-2 text-sm font-semibold capitalize leading-6 text-slate-300">
                {job.source_type}
              </p>
            </div>
          </div>

          {job.status === "active" && (
            <a
              href={`/jobs/${job.slug}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#CBF7ED] px-6 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
            >
              Open Public Role
            </a>
          )}
        </aside>

        <form
          action={updateJob}
          className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"
        >
          <input type="hidden" name="jobId" value={job.id} />
          <input type="hidden" name="previousSlug" value={job.slug} />

          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#23395B] text-white">
              <FileText size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-[#161925]">
                Job details
              </h3>

              <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
                Changes will update the Supabase jobs table.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Job Title *
              </label>
              <input
                name="title"
                required
                defaultValue={job.title}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Slug *
              </label>
              <input
                name="slug"
                required
                defaultValue={job.slug}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              />
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Public URL: /jobs/{job.slug}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Department *
              </label>
              <input
                name="department"
                required
                defaultValue={job.department}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Job Source
              </label>
              <select
                name="sourceType"
                defaultValue={job.source_type}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              >
                <option value="client">Client Role</option>
                <option value="internal">Internal KTech Role</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Company Display Name
              </label>
              <input
                name="companyDisplayName"
                defaultValue={job.company_display_name || ""}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Employment Type *
              </label>
              <select
                name="employmentType"
                required
                defaultValue={job.employment_type}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              >
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
                <option value="Contract-to-hire">Contract-to-hire</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Work Mode
              </label>
              <select
                name="workMode"
                defaultValue={job.work_mode || "Flexible"}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Location *
              </label>
              <input
                name="location"
                required
                defaultValue={job.location}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Experience
              </label>
              <input
                name="experience"
                defaultValue={job.experience || ""}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Salary
              </label>
              <input
                name="salary"
                defaultValue={job.salary || ""}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#161925]">
                Status
              </label>
              <select
                name="status"
                defaultValue={job.status}
                className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#161925]">
              Skills
            </label>
            <input
              name="skills"
              defaultValue={(job.skills || []).join(", ")}
              className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
            />
            <p className="mt-2 text-xs font-semibold text-slate-500">
              Separate skills with commas.
            </p>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#161925]">
              Job Summary *
            </label>
            <textarea
              name="summary"
              required
              rows={4}
              defaultValue={job.summary}
              className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#161925]">
              Responsibilities
            </label>
            <textarea
              name="responsibilities"
              rows={5}
              defaultValue={(job.responsibilities || []).join("\n")}
              className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
            />
            <p className="mt-2 text-xs font-semibold text-slate-500">
              Add one responsibility per line.
            </p>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#161925]">
              Requirements
            </label>
            <textarea
              name="requirements"
              rows={5}
              defaultValue={(job.requirements || []).join("\n")}
              className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
            />
            <p className="mt-2 text-xs font-semibold text-slate-500">
              Add one requirement per line.
            </p>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
          >
            <Save size={18} />
            Save Changes
          </button>
        </form>
      </div>
    </AdminShell>
  );
}