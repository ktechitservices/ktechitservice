import {
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  SearchCheck,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Intake",
    description:
      "Employers share role details, skills required, work mode, urgency, and hiring context.",
  },
  {
    icon: SearchCheck,
    title: "Talent Search",
    description:
      "KTech reviews applications, searches its candidate database, and identifies relevant IT profiles.",
  },
  {
    icon: Users,
    title: "Shortlist Delivery",
    description:
      "Employers receive focused candidate profiles instead of broad, generic applications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Interview & Placement",
    description:
      "KTech supports the next steps across interview coordination, selection, and placement.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
            Our process
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
            A structured hiring workflow from requirement to placement.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            KTech keeps the hiring process clear, practical, and focused on
            matching employers with relevant IT talent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="relative rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CBF7ED] text-sm font-black text-[#161925]">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-black tracking-tight text-[#161925]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-[#E2E8F0] bg-[#161925] p-8 text-white shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8EA8C3]">
                Why it works
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Less hiring noise. More relevant conversations.
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clear requirement review before sourcing",
                "Candidate profiles stored for future matching",
                "Client and internal roles supported",
                "Technology-focused staffing workflow",
              ].map((item) => (
                <div key={item} className="flex gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}