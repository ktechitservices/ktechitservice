import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Search,
  Users,
} from "lucide-react";
import { updateLeadStatus } from "./actions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type EmployerLead = {
  id: string;
  full_name: string;
  company_name: string;
  work_email: string;
  phone: string | null;
  hiring_need: string;
  urgency: string;
  status: string;
  notes: string | null;
  created_at: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

async function getEmployerLeads(): Promise<EmployerLead[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("employer_leads")
    .select(
      "id, full_name, company_name, work_email, phone, hiring_need, urgency, status, notes, created_at",
    )
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Failed to fetch employer leads:", error);
    return [];
  }

  return data as EmployerLead[];
}

export default async function AdminLeadsPage() {
  const leads = await getEmployerLeads();

  const newLeads = leads.filter((lead) => lead.status === "new").length;
  const contactedLeads = leads.filter(
    (lead) => lead.status === "contacted",
  ).length;
  const qualifiedLeads = leads.filter(
    (lead) => lead.status === "qualified",
  ).length;
  const convertedLeads = leads.filter(
    (lead) => lead.status === "converted",
  ).length;

  const immediateLeads = leads.filter(
    (lead) => lead.urgency === "Immediately",
  ).length;

  const stats = [
    {
      label: "Total Leads",
      value: leads.length,
      subtext: `${newLeads} new requests`,
      icon: Building2,
    },
    {
      label: "Contacted",
      value: contactedLeads,
      subtext: "Follow-up started",
      icon: Mail,
    },
    {
      label: "Qualified",
      value: qualifiedLeads,
      subtext: "Ready for next step",
      icon: CheckCircle2,
    },
    {
      label: "Immediate Needs",
      value: immediateLeads,
      subtext: `${convertedLeads} converted leads`,
      icon: Clock,
    },
  ];

  return (
    <AdminShell>
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
            Employer leads
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925] sm:text-4xl">
            Manage hiring requests.
          </h2>

          <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">
            Review employer hiring requirements submitted from the public
            website. These leads can later become client job postings or direct
            sourcing requirements.
          </p>
        </div>

        <a
          href="/employers"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
        >
          View Employer Form
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
              Hiring request records
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
              Supabase employer leads.
            </h3>

            <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
              These records are pulled live from the employer_leads table.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] px-5 py-3 text-sm font-bold text-slate-600">
            <Search size={17} className="text-[#406E8E]" />
            Search coming later
          </div>
        </div>

        {leads.length === 0 ? (
          <div className="rounded-3xl bg-[#F8FAFC] p-10 text-center">
            <Building2 className="mx-auto text-[#406E8E]" size={42} />

            <h3 className="mt-5 text-2xl font-black text-[#161925]">
              No employer leads yet.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-600">
              Employer form submissions will appear here once companies submit
              hiring requirements from the public website.
            </p>

            <a
              href="/employers"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
            >
              Open Employer Form
              <ArrowRight size={18} />
            </a>
          </div>
        ) : (
          <div className="grid gap-5">
            {leads.map((lead) => (
              <article
                key={lead.id}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg sm:p-6"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`rounded-lg px-3 py-1.5 text-xs font-black capitalize ${
                          lead.status === "new"
                            ? "bg-[#CBF7ED] text-[#161925]"
                            : lead.status === "converted"
                              ? "bg-[#23395B] text-white"
                              : "bg-white text-[#406E8E]"
                        }`}
                      >
                        {lead.status}
                      </span>

                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-black text-[#406E8E]">
                        {lead.urgency}
                      </span>

                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-black text-slate-600">
                        {formatDate(lead.created_at)}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black tracking-tight text-[#161925]">
                      {lead.company_name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#23395B]">
                      Contact: {lead.full_name}
                    </p>

                    <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600 md:grid-cols-2 xl:grid-cols-3">
                      <div className="flex min-w-0 items-center gap-2">
                        <Mail size={16} className="shrink-0 text-[#406E8E]" />
                        <span className="truncate">{lead.work_email}</span>
                      </div>

                      {lead.phone && (
                        <div className="flex items-center gap-2">
                          <Phone
                            size={16}
                            className="shrink-0 text-[#406E8E]"
                          />
                          <span>{lead.phone}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <Clock size={16} className="shrink-0 text-[#406E8E]" />
                        <span>{lead.urgency}</span>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-[#E2E8F0] bg-white p-5">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                        Hiring Need
                      </p>

                      <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                        {lead.hiring_need}
                      </p>
                    </div>

                    {lead.notes && (
                      <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-white p-5">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                          Notes
                        </p>

                        <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                          {lead.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row xl:flex-col">
                    <a
                      href={`mailto:${lead.work_email}?subject=${encodeURIComponent(
                        `KTech hiring requirement follow-up`,
                      )}`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
                    >
                      <Mail size={16} />
                      Email Lead
                    </a>

                    <a
                      href="/admin/jobs/new"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
                    >
                      Create Job
                      <ArrowRight size={16} />
                    </a>

                    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-3">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]">
                        Update Status
                      </p>

                      <div className="grid gap-2">
                        {[
                          "new",
                          "contacted",
                          "qualified",
                          "converted",
                          "archived",
                        ].map((status) => (
                          <form key={status} action={updateLeadStatus}>
                            <input
                              type="hidden"
                              name="leadId"
                              value={lead.id}
                            />
                            <input type="hidden" name="status" value={status} />

                            <button
                              type="submit"
                              disabled={lead.status === status}
                              className={`w-full rounded-xl px-4 py-2.5 text-left text-xs font-black capitalize transition ${
                                lead.status === status
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
        <Users className="text-[#CBF7ED]" size={36} />

        <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
          Employer lead workflow.
        </h3>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            "Employer submits a hiring requirement.",
            "KTech reviews role, skills, and urgency.",
            "KTech contacts the employer for clarification.",
            "Approved requirements can become job postings.",
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
