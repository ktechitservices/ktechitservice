import { AdminShell } from "@/components/admin/AdminShell";
import { Plus } from "lucide-react";
import { createJob } from "./actions";

type NewJobPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function NewJobPage({ searchParams }: NewJobPageProps) {
  const params = await searchParams;

  return (
    <AdminShell>
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E07A5F]">
          Add job
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-[#1B3D2F]">
          Create a new job posting.
        </h2>

        <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#3D405B]">
          Ktech staff can post client roles or internal Ktech roles. Active jobs
          will appear on the public job portal.
        </p>
      </div>

      {params.error && (
        <div className="mb-6 rounded-2xl bg-[#E07A5F]/15 p-4 text-sm font-bold text-[#E07A5F]">
          {params.error === "missing_fields"
            ? "Please fill in all required fields."
            : "Something went wrong while creating the job."}
        </div>
      )}

      <form
        action={createJob}
        className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-6 shadow-xl md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Job Title
            </label>
            <input
              name="title"
              required
              placeholder="Software Engineer"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Department
            </label>
            <input
              name="department"
              required
              placeholder="Software Development"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Job Source
            </label>
            <select
              name="sourceType"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#E07A5F]"
            >
              <option value="client">Client Role</option>
              <option value="internal">Internal Ktech Role</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Company Display Name
            </label>
            <input
              name="companyDisplayName"
              placeholder="Confidential Client / Ktech IT Services"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Employment Type
            </label>
            <select
              name="employmentType"
              required
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#E07A5F]"
            >
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Contract-to-hire">Contract-to-hire</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Work Mode
            </label>
            <select
              name="workMode"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#E07A5F]"
            >
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Location
            </label>
            <input
              name="location"
              required
              placeholder="Remote / United States"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Experience
            </label>
            <input
              name="experience"
              placeholder="3+ years"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Salary
            </label>
            <input
              name="salary"
              placeholder="$90k - $130k"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
              Status
            </label>
            <select
              name="status"
              className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#E07A5F]"
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Skills
          </label>
          <input
            name="skills"
            placeholder="React, Node.js, AWS, TypeScript"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
          <p className="mt-2 text-xs font-semibold text-[#3D405B]/60">
            Separate skills with commas.
          </p>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Job Summary
          </label>
          <textarea
            name="summary"
            required
            rows={4}
            placeholder="Short role summary..."
            className="w-full resize-none rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Responsibilities
          </label>
          <textarea
            name="responsibilities"
            rows={5}
            placeholder={`Build and maintain features\nCollaborate with product teams\nWrite clean, tested code`}
            className="w-full resize-none rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
          <p className="mt-2 text-xs font-semibold text-[#3D405B]/60">
            Add one responsibility per line.
          </p>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Requirements
          </label>
          <textarea
            name="requirements"
            rows={5}
            placeholder={`3+ years of experience\nStrong React knowledge\nGood communication skills`}
            className="w-full resize-none rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
          <p className="mt-2 text-xs font-semibold text-[#3D405B]/60">
            Add one requirement per line.
          </p>
        </div>

        <button
          type="submit"
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
        >
          <Plus size={18} />
          Save Job Posting
        </button>
      </form>
    </AdminShell>
  );
}