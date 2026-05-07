import { AdminShell } from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";
import {
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Search,
} from "lucide-react";

type EmployerLead = {
  id: string;
  full_name: string;
  company_name: string;
  work_email: string;
  phone: string | null;
  hiring_need: string;
  urgency: string;
  status: string;
  created_at: string;
};

async function getEmployerLeads(): Promise<EmployerLead[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("employer_leads")
    .select(
      "id, full_name, company_name, work_email, phone, hiring_need, urgency, status, created_at"
    )
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Failed to fetch employer leads:", error);
    return [];
  }

  return data;
}

export default async function AdminLeadsPage() {
  const leads = await getEmployerLeads();

  const newLeads = leads.filter((lead) => lead.status === "new").length;
  const contactedLeads = leads.filter(
    (lead) => lead.status === "contacted"
  ).length;

  return (
    <AdminShell>
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E07A5F]">
          Employer leads
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-[#1B3D2F]">
          Manage hiring requests.
        </h2>

        <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#3D405B]">
          Employer hiring requirements submitted through the website appear here
          for the KTech team to review, contact, and convert into job postings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <Building2 className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {newLeads}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">
            New Employer Leads
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <Clock className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {leads.length}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">
            Total Hiring Requests
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
          <Mail className="text-[#E07A5F]" size={30} />
          <p className="mt-5 text-4xl font-black text-[#1B3D2F]">
            {contactedLeads}
          </p>
          <p className="mt-2 text-sm font-bold text-[#3D405B]">
            Contacted Leads
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 shadow-sm">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black text-[#1B3D2F]">
              Hiring requirement records
            </h3>
            <p className="mt-2 text-sm font-semibold text-[#3D405B]/75">
              Track employer requirements and convert them into job postings.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-[#F4F1DE] px-4 py-3">
            <Search size={17} className="text-[#1B3D2F]" />
            <span className="text-sm font-bold text-[#3D405B]/65">
              Search coming later
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-[#1B3D2F]/10">
          <div className="grid grid-cols-[1fr_1fr_1.4fr_0.8fr_0.8fr] gap-4 bg-[#1B3D2F] px-6 py-4 text-sm font-extrabold text-[#F4F1DE]">
            <p>Company</p>
            <p>Contact</p>
            <p>Hiring Need</p>
            <p>Urgency</p>
            <p>Status</p>
          </div>

          {leads.length === 0 ? (
            <div className="bg-white px-6 py-10 text-center">
              <p className="text-lg font-black text-[#1B3D2F]">
                No employer leads yet.
              </p>
              <p className="mt-2 text-sm font-semibold text-[#3D405B]/70">
                Submit the employer form on the public site to test this.
              </p>
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="grid grid-cols-[1fr_1fr_1.4fr_0.8fr_0.8fr] gap-4 border-b border-[#1B3D2F]/10 bg-white px-6 py-5 text-sm last:border-b-0"
              >
                <div>
                  <p className="font-black text-[#1B3D2F]">
                    {lead.company_name}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#3D405B]/65">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#3D405B]">
                    {lead.full_name}
                  </p>
                  <div className="mt-2 flex flex-col gap-1 text-xs font-semibold text-[#3D405B]/65">
                    <span className="inline-flex items-center gap-2">
                      <Mail size={14} />
                      {lead.work_email}
                    </span>

                    {lead.phone && (
                      <span className="inline-flex items-center gap-2">
                        <Phone size={14} />
                        {lead.phone}
                      </span>
                    )}
                  </div>
                </div>

                <p className="line-clamp-3 font-semibold leading-6 text-[#3D405B]">
                  {lead.hiring_need}
                </p>

                <p className="font-semibold text-[#3D405B]">{lead.urgency}</p>

                <span className="h-fit w-fit rounded-full bg-[#E07A5F]/15 px-3 py-1 text-xs font-extrabold capitalize text-[#E07A5F]">
                  {lead.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] bg-[#1B3D2F] p-7 text-[#F4F1DE] shadow-xl">
        <h3 className="text-2xl font-black">Employer lead workflow</h3>

        <div className="mt-5 space-y-4">
          {[
            "Employer submits a short hiring requirement form.",
            "KTech reviews the company, role, skills, and urgency.",
            "KTech contacts the employer to clarify the requirement.",
            "Once approved, KTech creates a client job posting from admin.",
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