import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Database,
  FileText,
  Plus,
  UploadCloud,
  Users,
} from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type RecentJob = {
  id: string;
  title: string;
  slug: string;
  status: string;
  source_type: string;
  created_at: string;
};

type RecentCandidate = {
  id: string;
  full_name: string;
  email: string;
  preferred_role: string | null;
  resume_path: string | null;
  created_at: string;
};

type RecentLead = {
  id: string;
  company_name: string;
  full_name: string;
  urgency: string;
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

async function getDashboardData() {
  const supabase = await createClient();

  const [
    totalJobsResult,
    activeJobsResult,
    draftJobsResult,
    closedJobsResult,
    totalCandidatesResult,
    resumeUploadsResult,
    totalLeadsResult,
    newLeadsResult,
    contactedLeadsResult,
    totalApplicationsResult,
    recentJobsResult,
    recentCandidatesResult,
    recentLeadsResult,
  ] = await Promise.all([
    supabase.from("jobs").select("id", { count: "exact", head: true }),

    supabase
      .from("jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "active"),

    supabase
      .from("jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "draft"),

    supabase
      .from("jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "closed"),

    supabase.from("candidates").select("id", { count: "exact", head: true }),

    supabase
      .from("candidates")
      .select("id", { count: "exact", head: true })
      .not("resume_path", "is", null),

    supabase
      .from("employer_leads")
      .select("id", { count: "exact", head: true }),

    supabase
      .from("employer_leads")
      .select("id", { count: "exact", head: true })
      .eq("status", "new"),

    supabase
      .from("employer_leads")
      .select("id", { count: "exact", head: true })
      .eq("status", "contacted"),

    supabase
      .from("applications")
      .select("id", { count: "exact", head: true }),

    supabase
      .from("jobs")
      .select("id, title, slug, status, source_type, created_at")
      .order("created_at", { ascending: false })
      .limit(5),

    supabase
      .from("candidates")
      .select("id, full_name, email, preferred_role, resume_path, created_at")
      .order("created_at", { ascending: false })
      .limit(5),

    supabase
      .from("employer_leads")
      .select("id, company_name, full_name, urgency, status, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  return {
    stats: {
      totalJobs: totalJobsResult.count || 0,
      activeJobs: activeJobsResult.count || 0,
      draftJobs: draftJobsResult.count || 0,
      closedJobs: closedJobsResult.count || 0,
      totalCandidates: totalCandidatesResult.count || 0,
      resumeUploads: resumeUploadsResult.count || 0,
      totalLeads: totalLeadsResult.count || 0,
      newLeads: newLeadsResult.count || 0,
      contactedLeads: contactedLeadsResult.count || 0,
      totalApplications: totalApplicationsResult.count || 0,
    },
    recentJobs: (recentJobsResult.data || []) as RecentJob[],
    recentCandidates: (recentCandidatesResult.data || []) as RecentCandidate[],
    recentLeads: (recentLeadsResult.data || []) as RecentLead[],
  };
}

export default async function AdminDashboardPage() {
  const { stats, recentJobs, recentCandidates, recentLeads } =
    await getDashboardData();

  const statCards = [
    {
      label: "Total Jobs",
      value: stats.totalJobs,
      subtext: `${stats.activeJobs} active, ${stats.draftJobs} draft, ${stats.closedJobs} closed`,
      icon: BriefcaseBusiness,
      href: "/admin/jobs",
    },
    {
      label: "Candidates",
      value: stats.totalCandidates,
      subtext: `${stats.resumeUploads} resume uploads`,
      icon: Users,
      href: "/admin/candidates",
    },
    {
      label: "Employer Leads",
      value: stats.totalLeads,
      subtext: `${stats.newLeads} new, ${stats.contactedLeads} contacted`,
      icon: Building2,
      href: "/admin/leads",
    },
    {
      label: "Applications",
      value: stats.totalApplications,
      subtext: "Job-linked candidate applications",
      icon: Database,
      href: "/admin/candidates",
    },
  ];

  return (
    <AdminShell>
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
            Supabase overview
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925] sm:text-4xl">
            KTech admin dashboard.
          </h2>

          <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">
            Live dashboard connected to Supabase for jobs, candidates, resume
            uploads, applications, and employer hiring leads.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="/admin/jobs/new"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
          >
            <Plus size={18} />
            Add Job
          </a>

          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
          >
            View Website
          </a>
        </div>
      </div>

      {/* Responsive stats */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;

          return (
            <a
              key={stat.label}
              href={stat.href}
              className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white transition group-hover:bg-[#406E8E]">
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
            </a>
          );
        })}
      </div>

      {/* Main responsive content */}
      <div className="mt-8 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        {/* Recent jobs */}
        <section className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
                Recent jobs
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
                Latest job postings.
              </h3>
            </div>

            <a
              href="/admin/jobs"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
            >
              Manage Jobs
              <ArrowRight size={16} />
            </a>
          </div>

          {recentJobs.length === 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <BriefcaseBusiness className="mx-auto text-[#406E8E]" size={34} />
              <p className="mt-4 text-lg font-black text-[#161925]">
                No jobs yet.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Create the first job posting from the admin area.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="truncate text-base font-black text-[#161925]">
                      {job.title}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      /jobs/{job.slug} · {formatDate(job.created_at)}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-lg bg-[#CBF7ED] px-3 py-1 text-xs font-black capitalize text-[#161925]">
                        {job.status}
                      </span>

                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-black capitalize text-[#406E8E]">
                        {job.source_type}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/jobs/${job.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl bg-[#23395B] px-4 py-2 text-xs font-black text-white transition hover:bg-[#1B2D49]"
                  >
                    Open
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick actions */}
        <section className="rounded-3xl bg-[#161925] p-6 text-white shadow-lg sm:p-8">
          <Clock className="text-[#CBF7ED]" size={36} />

          <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
            Quick admin actions.
          </h3>

          <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">
            Shortcuts for KTech’s main recruitment and staffing operations.
          </p>

          <div className="mt-7 space-y-3">
            <a
              href="/admin/jobs/new"
              className="flex items-center justify-between rounded-2xl bg-[#CBF7ED] px-5 py-4 text-sm font-black text-[#161925] transition hover:bg-white"
            >
              Add job posting
              <Plus size={18} />
            </a>

            <a
              href="/admin/candidates"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black text-white transition hover:bg-white/10"
            >
              Review candidates
              <Users size={18} />
            </a>

            <a
              href="/admin/leads"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black text-white transition hover:bg-white/10"
            >
              View employer leads
              <Building2 size={18} />
            </a>

            <a
              href="/admin/jobs"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black text-white transition hover:bg-white/10"
            >
              Manage jobs
              <BriefcaseBusiness size={18} />
            </a>
          </div>
        </section>
      </div>

      {/* Recent candidates and leads */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
                Recent candidates
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
                Latest candidate records.
              </h3>
            </div>

            <a
              href="/admin/candidates"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
            >
              View All
              <ArrowRight size={16} />
            </a>
          </div>

          {recentCandidates.length === 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <Users className="mx-auto text-[#406E8E]" size={34} />
              <p className="mt-4 text-lg font-black text-[#161925]">
                No candidates yet.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Candidate uploads will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="min-w-0">
                      <p className="truncate text-base font-black text-[#161925]">
                        {candidate.full_name}
                      </p>

                      <p className="mt-1 truncate text-xs font-semibold text-slate-500">
                        {candidate.email}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        {candidate.preferred_role || "Open to suitable roles"}
                      </p>
                    </div>

                    {candidate.resume_path && (
                      <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#CBF7ED] px-3 py-1.5 text-xs font-black text-[#161925]">
                        <UploadCloud size={14} />
                        Resume
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs font-semibold text-slate-500">
                    Added {formatDate(candidate.created_at)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
                Employer leads
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
                Latest hiring requests.
              </h3>
            </div>

            <a
              href="/admin/leads"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
            >
              View All
              <ArrowRight size={16} />
            </a>
          </div>

          {recentLeads.length === 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <Building2 className="mx-auto text-[#406E8E]" size={34} />
              <p className="mt-4 text-lg font-black text-[#161925]">
                No employer leads yet.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Employer form submissions will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="min-w-0">
                      <p className="truncate text-base font-black text-[#161925]">
                        {lead.company_name}
                      </p>

                      <p className="mt-1 truncate text-xs font-semibold text-slate-500">
                        Contact: {lead.full_name}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        Urgency: {lead.urgency}
                      </p>
                    </div>

                    <span className="inline-flex w-fit rounded-lg bg-[#CBF7ED] px-3 py-1.5 text-xs font-black capitalize text-[#161925]">
                      {lead.status}
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold text-slate-500">
                    Added {formatDate(lead.created_at)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Backend status */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <FileText className="text-[#406E8E]" size={30} />

          <h3 className="mt-5 text-xl font-black text-[#161925]">
            Resume storage
          </h3>

          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
            Resumes are stored in the private Supabase storage bucket and
            accessed through signed URLs.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <Database className="text-[#406E8E]" size={30} />

          <h3 className="mt-5 text-xl font-black text-[#161925]">
            Database connected
          </h3>

          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
            Jobs, candidates, employer leads, and applications are pulled from
            Supabase.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:col-span-2 xl:col-span-1">
          <CheckCircle2 className="text-[#406E8E]" size={30} />

          <h3 className="mt-5 text-xl font-black text-[#161925]">
            Responsive admin
          </h3>

          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
            Dashboard cards stack on mobile and expand into grids on larger
            screens.
          </p>
        </div>
      </div>
    </AdminShell>
  );
}