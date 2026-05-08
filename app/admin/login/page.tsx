import { login } from "./actions";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const hasError = params.error === "invalid_credentials";

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <section className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left panel */}
        <div className="hidden bg-[#161925] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <a href="/" className="inline-flex w-fit items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CBF7ED] text-[#161925]">
              <span className="text-sm font-black">KT</span>
            </div>

            <div>
              <p className="text-lg font-black leading-none text-white">
                KTech
              </p>
              <p className="text-xs font-semibold text-slate-400">
                IT Services
              </p>
            </div>
          </a>

          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-[#CBF7ED]">
              <ShieldCheck size={16} />
              Internal Admin Access
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white">
              Manage KTech jobs, candidates, and employer leads.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              This dashboard is for authorised KTech staff to manage job
              postings, candidate profiles, resume records, and employer hiring
              enquiries.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Create and manage active job postings",
                "Review candidate profiles and resume uploads",
                "Track employer hiring requirements",
                "Support client and internal hiring workflows",
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

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
              Protected workspace
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">
              Only authorised users should access KTech internal hiring and
              candidate management tools.
            </p>
          </div>
        </div>

        {/* Login panel */}
        <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#23395B] hover:text-[#406E8E]"
            >
              <ArrowLeft size={16} />
              Back to website
            </a>

            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg sm:p-8">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                  <LockKeyhole size={30} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
                  KTech Admin
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-[#161925]">
                  Staff login
                </h2>

                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                  Sign in to access the internal dashboard.
                </p>
              </div>

              {hasError && (
                <div className="mb-5 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
                  Invalid email or password. Please try again.
                </div>
              )}

              <form action={login} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#161925]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="admin@ktechitservices.com"
                    className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#161925]">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
                >
                  Login to Admin
                  <ShieldCheck size={18} />
                </button>
              </form>

              <div className="mt-7 rounded-2xl bg-[#F8FAFC] p-5">
                <div className="flex gap-3">
                  <BriefcaseBusiness
                    className="mt-0.5 shrink-0 text-[#406E8E]"
                    size={20}
                  />
                  <p className="text-sm font-semibold leading-7 text-slate-600">
                    After login, authorised staff can manage jobs, candidates,
                    resumes, and employer leads.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs font-semibold leading-6 text-slate-500">
              KTech IT Services internal dashboard. Unauthorised access is not
              permitted.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}