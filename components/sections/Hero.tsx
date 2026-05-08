import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Search,
} from "lucide-react";

const proofPoints = [
  "IT staffing and recruitment support",
  "Client and internal job posting capability",
  "Candidate resume database",
  "Software, cloud, data, and cybersecurity talent",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
            <BriefcaseBusiness size={16} />
            IT Staffing & Technology Recruitment
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
            Connecting businesses with skilled IT talent.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            KTech helps employers fill critical technology roles and helps
            candidates find the right opportunities across software, cloud,
            infrastructure, data, cybersecurity, and digital transformation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/employers"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
            >
              Hire IT Talent
              <ArrowRight size={18} />
            </a>

            <a
              href="/jobs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
            >
              Search Jobs
              <Search size={18} />
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#406E8E]"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-xl">
            <div className="relative block h-[320px] w-full overflow-hidden sm:h-[420px]">
              <Image
                src="/images/ktech-hero.jpg"
                alt="Professional IT staffing and recruitment meeting"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="grid gap-4 border-t border-[#E2E8F0] bg-white p-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F8FAFC] p-4">
                <p className="text-sm font-black text-[#161925]">
                  For Employers
                </p>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">
                  Share hiring requirements and receive relevant IT talent
                  support.
                </p>
              </div>

              <div className="rounded-2xl bg-[#CBF7ED] p-4">
                <p className="text-sm font-black text-[#161925]">
                  For Candidates
                </p>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-700">
                  Search jobs or upload your resume for future opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
