import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import {
  CheckCircle2,
  Download,
  FileText,
  Search,
  UploadCloud,
  Users,
} from "lucide-react";

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

async function getCandidates(): Promise<Candidate[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("candidates")
    .select(
      "id, full_name, email, phone, location, current_job_title, preferred_role, experience, skills, resume_path, source, status, created_at"
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
    })
  );

  return candidatesWithResumeUrls;
}

export default async function AdminCandidatesPage() {
  const candidates = await getCandidates();

  const resumeUploads = candidates.filter(
    (candidate) => candidate.resume_path
  ).length;

  const jobApplications = candidates.filter(
    (candidate) => candidate.source === "job_application"
  ).length;

  return (
    <AdminShell>
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E07A5F]">
          Candidate database
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-[#1B3D2F]">
          Manage candidate profiles.
        </h2>

        <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#3D405B]">
          Candidates who apply to jobs or upload their resume for future
          matching appear here. Resume download links expire after 5 minutes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <Users className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {candidates.length}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">
            Candidate Profiles
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <UploadCloud className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {resumeUploads}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">
            Resume Uploads
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <FileText className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {jobApplications}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">
            Job Applications
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black text-[#1B3D2F]">
              Candidate records
            </h3>
            <p className="mt-2 text-sm font-semibold text-[#3D405B]/75">
              Review candidate profiles and download resumes securely.
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
          <div className="min-w-[1050px]">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_0.85fr_0.9fr] gap-4 bg-[#1B3D2F] px-6 py-4 text-sm font-extrabold text-[#F4F1DE]">
              <p>Name</p>
              <p>Contact</p>
              <p>Preferred Role</p>
              <p>Skills</p>
              <p>Status</p>
              <p>Resume</p>
            </div>

            {candidates.length === 0 ? (
              <div className="bg-white px-6 py-10 text-center">
                <p className="text-lg font-black text-[#1B3D2F]">
                  No candidates yet.
                </p>
                <p className="mt-2 text-sm font-semibold text-[#3D405B]/70">
                  Submit the candidate form on the public site to test this.
                </p>
              </div>
            ) : (
              candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="grid grid-cols-[1fr_1fr_1fr_1fr_0.85fr_0.9fr] gap-4 border-b border-[#1B3D2F]/10 bg-white px-6 py-5 text-sm last:border-b-0"
                >
                  <div>
                    <p className="font-black text-[#1B3D2F]">
                      {candidate.full_name}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                      {candidate.current_job_title || "No current role added"}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                      {new Date(candidate.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#3D405B]">
                      {candidate.email}
                    </p>
                    {candidate.phone && (
                      <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                        {candidate.phone}
                      </p>
                    )}
                    {candidate.location && (
                      <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                        {candidate.location}
                      </p>
                    )}
                  </div>

                  <p className="font-semibold text-[#3D405B]">
                    {candidate.preferred_role || "Open to suitable roles"}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(candidate.skills || []).length > 0 ? (
                      candidate.skills?.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-[#F4F1DE] px-3 py-1 text-xs font-bold text-[#3D405B]"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs font-semibold text-[#3D405B]/60">
                        No skills added
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <span className="block w-fit rounded-full bg-[#E07A5F]/15 px-3 py-1 text-xs font-extrabold capitalize text-[#E07A5F]">
                      {candidate.status}
                    </span>

                    <span className="block w-fit rounded-full bg-[#1B3D2F]/10 px-3 py-1 text-xs font-extrabold capitalize text-[#1B3D2F]">
                      {candidate.source.replace("_", " ")}
                    </span>
                  </div>

                  <div>
                    {candidate.resume_url ? (
                      <a
                        href={candidate.resume_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1B3D2F] px-4 py-2 text-xs font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
                      >
                        <Download size={14} />
                        Download
                      </a>
                    ) : candidate.resume_path ? (
                      <span className="rounded-full bg-[#E07A5F]/15 px-3 py-1 text-xs font-extrabold text-[#E07A5F]">
                        Link unavailable
                      </span>
                    ) : (
                      <span className="rounded-full bg-[#F4F1DE] px-3 py-1 text-xs font-extrabold text-[#3D405B]/70">
                        No resume
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] bg-[#1B3D2F] p-7 text-[#F4F1DE] shadow-xl">
        <h3 className="text-2xl font-black">Resume access</h3>

        <div className="mt-5 space-y-4">
          {[
            "Resume files are stored in the private Supabase resumes bucket.",
            "Admin download links use temporary signed URLs.",
            "Each signed URL expires after 5 minutes.",
            "Next, we can add application tracking for each job role.",
          ].map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
              <p className="text-sm leading-6 text-[#F4F1DE]/85">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}