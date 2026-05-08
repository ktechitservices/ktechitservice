import { ArrowRight, BriefcaseBusiness, UploadCloud } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-lg">
          <div className="grid lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
                Work with KTech
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
                Need to fill an IT role or looking for your next opportunity?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Employers can submit hiring requirements and candidates can
                search jobs or upload resumes to join KTech’s talent database.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/employers"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
                >
                  <BriefcaseBusiness size={18} />
                  Hire IT Talent
                </a>

                <a
                  href="/candidates"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
                >
                  <UploadCloud size={18} />
                  Upload Resume
                </a>
              </div>
            </div>

            <div className="bg-[#161925] p-8 text-white sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8EA8C3]">
                KTech platform
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
                Built for staffing, services, and future growth.
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Employer hiring requirement forms",
                  "Candidate resume upload and database",
                  "Admin job posting workflow",
                  "Client and internal role management",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-bold leading-6 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#CBF7ED]"
              >
                Talk to KTech <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}