import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Search,
  UploadCloud,
  Users,
} from "lucide-react";
import { updateCandidateStatus } from "./actions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Candidate = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  location: string | null;
  current_job_title: string | null;
  preferred_role: string | null;
  experience: string | null;
  skills: string[] | null;
  resume_path: string | null;
  resume_url?: string | null;
  source: string;
  status: string;
  created_at: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

async function getCandidates(): Promise<Candidate[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("candidates")
    .select(
      "id, full_name, email, phone, location, current_job_title, preferred_role, experience, skills, resume_path, source, status, created_at",
    )
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Failed to fetch candidates:", error);
    return [];
  }

  const candidatesWithResumeUrls = await Promise.all(
    data.map(async (candidate) => {
      if (!candidate.resume_path) {
        return {
          ...candidate,
          resume_url: null,
        };
      }

      const { data: signedUrlData, error: signedUrlError } =
        await supabase.storage
          .from("resumes")
          .createSignedUrl(candidate.resume_path, 60 * 5);

      if (signedUrlError || !signedUrlData?.signedUrl) {
        console.error("Failed to create signed resume URL:", signedUrlError);

        return {
          ...candidate,
          resume_url: null,
        };
      }

      return {
        ...candidate,
        resume_url: signedUrlData.signedUrl,
      };
    }),
  );

  return candidatesWithResumeUrls;
}

export default async function AdminCandidatesPage() {
  const candidates = await getCandidates();

  const resumeUploads = candidates.filter(
    (candidate) => candidate.resume_path,
  ).length;

  const jobApplications = candidates.filter(
    (candidate) => candidate.source === "job_application",
  ).length;

  const generalUploads = candidates.filter(
    (candidate) => candidate.source === "general_upload",
  ).length;

  const newCandidates = candidates.filter(
    (candidate) => candidate.status === "new",
  ).length;

  const stats = [
    {
      label: "Candidate Profiles",
      value: candidates.length,
      subtext: `${newCandidates} new records`,
      icon: Users,
    },
    {
      label: "Resume Uploads",
      value: resumeUploads,
      subtext: "Private bucket files",
      icon: UploadCloud,
    },
    {
      label: "Job Applications",
      value: jobApplications,
      subtext: "Linked to job roles",
      icon: FileText,
    },
    {
      label: "General Uploads",
      value: generalUploads,
      subtext: "Future matching profiles",
      icon: Search,
    },
  ];

  return (
    <AdminShell>
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
            Candidate database
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925] sm:text-4xl">
            Manage candidate profiles.
          </h2>

          <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">
            Review candidate records, profile details, skill tags, and secure
            resume download links. Resume URLs expire after 5 minutes.
          </p>
        </div>

        <a
          href="/candidates"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
        >
          View Candidate Form
          <ArrowRight size={18} />
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
              Candidate records
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
              Supabase candidate profiles.
            </h3>

            <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
              These records are pulled live from the candidates table.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] px-5 py-3 text-sm font-bold text-slate-600">
            Search coming later
          </div>
        </div>

        {candidates.length === 0 ? (
          <div className="rounded-3xl bg-[#F8FAFC] p-10 text-center">
            <Users className="mx-auto text-[#406E8E]" size={42} />

            <h3 className="mt-5 text-2xl font-black text-[#161925]">
              No candidates yet.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-600">
              Candidate form submissions and resume uploads will appear here.
            </p>

            <a
              href="/candidates"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
            >
              Open Candidate Form
              <ArrowRight size={18} />
            </a>
          </div>
        ) : (
          <div className="grid gap-5">
            {candidates.map((candidate) => (
              <article
                key={candidate.id}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg sm:p-6"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-lg bg-[#CBF7ED] px-3 py-1.5 text-xs font-black capitalize text-[#161925]">
                        {candidate.status}
                      </span>

                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-black capitalize text-[#406E8E]">
                        {candidate.source.replace("_", " ")}
                      </span>

                      {candidate.resume_path && (
                        <span className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-black text-[#23395B]">
                          Resume uploaded
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-2xl font-black tracking-tight text-[#161925]">
                      {candidate.full_name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#23395B]">
                      {candidate.current_job_title || "No current role added"}
                    </p>

                    <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600 md:grid-cols-2 xl:grid-cols-3">
                      <div className="flex min-w-0 items-center gap-2">
                        <Mail size={16} className="shrink-0 text-[#406E8E]" />
                        <span className="truncate">{candidate.email}</span>
                      </div>

                      {candidate.phone && (
                        <div className="flex items-center gap-2">
                          <Phone
                            size={16}
                            className="shrink-0 text-[#406E8E]"
                          />
                          <span>{candidate.phone}</span>
                        </div>
                      )}

                      {candidate.location && (
                        <div className="flex items-center gap-2">
                          <MapPin
                            size={16}
                            className="shrink-0 text-[#406E8E]"
                          />
                          <span>{candidate.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                          Preferred Role
                        </p>
                        <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                          {candidate.preferred_role || "Open to suitable roles"}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                          Experience
                        </p>
                        <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                          {candidate.experience || "Not specified"}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                          Submitted
                        </p>
                        <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                          {formatDate(candidate.created_at)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                        Skills
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {(candidate.skills || []).length > 0 ? (
                          candidate.skills?.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm font-semibold text-slate-500">
                            No skills added
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row xl:flex-col">
                    {candidate.resume_url ? (
                      <a
                        href={candidate.resume_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
                      >
                        <Download size={16} />
                        Download Resume
                      </a>
                    ) : candidate.resume_path ? (
                      <span className="inline-flex min-h-11 items-center justify-center rounded-xl bg-red-50 px-5 py-2.5 text-sm font-bold text-red-700">
                        Link unavailable
                      </span>
                    ) : (
                      <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-bold text-slate-500">
                        No resume
                      </span>
                    )}

                    <a
                      href={`mailto:${candidate.email}?subject=${encodeURIComponent(
                        "KTech candidate profile follow-up",
                      )}`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
                    >
                      <Mail size={16} />
                      Email Candidate
                    </a>

                    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-3">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                        Update Status
                      </p>

                      <div className="grid gap-2">
                        {[
                          "new",
                          "reviewed",
                          "shortlisted",
                          "contacted",
                          "archived",
                        ].map((status) => (
                          <form key={status} action={updateCandidateStatus}>
                            <input
                              type="hidden"
                              name="candidateId"
                              value={candidate.id}
                            />
                            <input type="hidden" name="status" value={status} />

                            <button
                              type="submit"
                              disabled={candidate.status === status}
                              className={`w-full rounded-xl px-4 py-2.5 text-left text-xs font-black capitalize transition ${
                                candidate.status === status
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

      <section className="mt-8 rounded-3xl bg-[#161925] p-7 text-white shadow-lg sm:p-8">
        <FileText className="text-[#CBF7ED]" size={36} />

        <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
          Secure resume access.
        </h3>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Resume files are stored in the private Supabase resumes bucket.",
            "Admin resume downloads use temporary signed URLs.",
            "Each signed URL expires after 5 minutes.",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
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
      </section>
    </AdminShell>
  );
}
