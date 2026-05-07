import { login } from "./actions";
import { ShieldCheck } from "lucide-react";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const hasError = params.error === "invalid_credentials";

  return (
    <main className="min-h-screen bg-[#F4F1DE] px-6 py-20 text-[#3D405B] lg:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
        <div className="w-full rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-7 shadow-xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE]">
              <ShieldCheck size={30} />
            </div>

            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              KTech Admin
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#1B3D2F]">
              Staff login
            </h1>

            <p className="mt-3 text-sm font-semibold leading-6 text-[#3D405B]/75">
              Only authorised KTech staff should access the admin dashboard.
            </p>
          </div>

          {hasError && (
            <div className="mb-5 rounded-2xl bg-[#E07A5F]/15 p-4 text-sm font-bold text-[#E07A5F]">
              Invalid email or password. Please try again.
            </div>
          )}

          <form action={login} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="admin@ktechitservices.com"
                className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1B3D2F] px-6 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
            >
              Login to Admin
            </button>
          </form>

          <a
            href="/"
            className="mt-6 block text-center text-sm font-extrabold text-[#E07A5F]"
          >
            Back to website
          </a>
        </div>
      </div>
    </main>
  );
}