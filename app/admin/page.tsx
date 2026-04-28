import { AdminShell } from "@/components/admin/AdminShell";
import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Database,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "Active Jobs",
    value: "3",
    icon: BriefcaseBusiness,
  },
  {
    label: "Candidate Profiles",
    value: "0",
    icon: Users,
  },
  {
    label: "Employer Leads",
    value: "0",
    icon: Building2,
  },
  {
    label: "Applications",
    value: "0",
    icon: Database,
  },
];

const workflows = [
  "Employer submits hiring requirement",
  "Ktech reviews the role and confirms details",
  "Ktech posts the job from admin dashboard",
  "Candidates apply or upload resumes",
  "Ktech shortlists and matches candidates",
];

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                <Icon size={24} />
              </div>

              <p className="text-4xl font-black text-[#1B3D2F]">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-bold text-[#3D405B]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <section className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-7 shadow-sm">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E07A5F]">
            Workflow
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#1B3D2F]">
            How Ktech manages hiring.
          </h2>

          <div className="mt-6 space-y-4">
            {workflows.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
                <p className="text-sm font-semibold leading-6 text-[#3D405B]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-[#1B3D2F] p-7 text-[#F4F1DE] shadow-xl">
          <Clock className="text-[#E07A5F]" size={34} />

          <h2 className="mt-6 text-3xl font-black leading-tight">
            Backend connection comes next.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#F4F1DE]/80">
            This dashboard is currently frontend-only. Next, we connect
            Supabase Auth, database tables, and resume storage so Ktech staff can
            securely manage jobs, candidates, employer leads, and applications.
          </p>
        </section>
      </div>
    </AdminShell>
  );
}