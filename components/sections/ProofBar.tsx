import { BriefcaseBusiness, Database, Globe2, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Candidate Profiles",
    description: "Growing IT talent database for future matching.",
  },
  {
    icon: BriefcaseBusiness,
    value: "48h",
    label: "Shortlist Target",
    description: "Structured hiring review and candidate matching process.",
  },
  {
    icon: Database,
    value: "20+",
    label: "IT Skill Areas",
    description: "Software, cloud, data, DevOps, cybersecurity and support.",
  },
  {
    icon: Globe2,
    value: "Client + Internal",
    label: "Job Coverage",
    description: "Support for client roles and KTech internal hiring.",
  },
];

export function ProofBar() {
  return (
    <section className="border-y border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#23395B] text-white">
                  <Icon size={21} />
                </div>

                <p className="text-3xl font-black tracking-tight text-[#161925]">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-bold text-[#23395B]">
                  {stat.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}