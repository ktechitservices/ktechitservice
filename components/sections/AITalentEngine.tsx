import {
  BrainCircuit,
  CheckCircle2,
  Database,
  FileSearch,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: FileSearch,
    title: "AI-assisted resume screening",
    description:
      "KTech can review resumes against role requirements, skills, experience, keywords, and work preferences to support faster shortlisting.",
  },
  {
    icon: ScanSearch,
    title: "Role-to-candidate matching",
    description:
      "Profiles can be compared with job requirements so recruiters focus on the most relevant candidates first.",
  },
  {
    icon: Database,
    title: "Talent database intelligence",
    description:
      "Candidate profiles can be stored, tagged, searched, and reused for future client or internal job requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Human-reviewed decisions",
    description:
      "AI can support the process, but final screening, communication, and hiring judgement stay with the KTech team.",
  },
];

const workflow = [
  "Employer submits hiring requirement",
  "KTech structures the role requirements",
  "Candidate profiles are searched and compared",
  "Relevant profiles are shortlisted",
  "Recruiters review and contact candidates",
];

export function AITalentEngine() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <BrainCircuit size={16} />
              AI-enabled recruitment workflow
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Using AI to make IT hiring faster, smarter, and more relevant.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech combines recruiter judgement with AI-assisted screening,
              skills matching, candidate database intelligence, and structured
              shortlisting to help employers move from role requirement to
              relevant IT talent faster.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Resume parsing support",
                "Skill-based candidate matching",
                "Role requirement structuring",
                "Recruiter-reviewed shortlists",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#406E8E]"
                    size={20}
                  />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#161925] p-6 text-white shadow-lg sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CBF7ED] text-[#161925]">
              <Sparkles size={28} />
            </div>

            <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
              From requirement to shortlist.
            </h3>

            <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">
              KTech’s AI-assisted workflow helps organise hiring data so the
              team can focus on quality conversations, not manual filtering.
            </p>

            <div className="mt-7 space-y-4">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CBF7ED] text-sm font-black text-[#161925]">
                    {index + 1}
                  </div>

                  <p className="text-sm font-semibold leading-6 text-slate-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-[#23395B] p-5">
              <div className="flex gap-3">
                <Users className="mt-0.5 shrink-0 text-[#CBF7ED]" size={22} />
                <p className="text-sm font-bold leading-6 text-slate-100">
                  AI supports speed and structure. KTech recruiters still review
                  fit, communication, role context, and client needs before
                  moving candidates forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-black tracking-tight text-[#161925]">
                  {capability.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}