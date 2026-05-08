import {
  BriefcaseBusiness,
  Building2,
  LayoutDashboard,
  LogOut,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Jobs",
    href: "/admin/jobs",
    icon: BriefcaseBusiness,
  },
  {
    label: "Add Job",
    href: "/admin/jobs/new",
    icon: Plus,
  },
  {
    label: "Candidates",
    href: "/admin/candidates",
    icon: Users,
  },
  {
    label: "Employer Leads",
    href: "/admin/leads",
    icon: Building2,
  },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-white/10 bg-[#161925] p-6 text-white lg:block">
          <a href="/admin" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CBF7ED] text-[#161925]">
              <span className="text-sm font-black">KT</span>
            </div>

            <div>
              <p className="text-lg font-black leading-none text-white">
                KTech Admin
              </p>
              <p className="text-xs font-semibold text-slate-400">
                Internal dashboard
              </p>
            </div>
          </a>

          <nav className="mt-10 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#CBF7ED] text-[#161925]">
              <ShieldCheck size={21} />
            </div>

            <p className="text-sm font-black text-white">Protected Access</p>

            <p className="mt-2 text-xs font-semibold leading-6 text-slate-400">
              This dashboard is for authorised KTech staff to manage jobs,
              candidates, resumes, and employer leads.
            </p>
          </div>

          <a
            href="/admin/logout"
            className="mt-10 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </a>
        </aside>

        {/* Main area */}
        <section className="min-w-0">
          <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#406E8E]">
                  KTech Internal
                </p>

                <h1 className="mt-1 text-xl font-black tracking-tight text-[#161925] sm:text-2xl">
                  Admin Dashboard
                </h1>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <a
                  href="/"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-5 py-2.5 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-[#F8FAFC]"
                >
                  View Website
                </a>

                <a
                  href="/admin/jobs/new"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
                >
                  <Plus size={17} />
                  Add Job
                </a>
              </div>
            </div>

            {/* Mobile admin nav */}
            <div className="mx-auto mt-4 flex max-w-7xl gap-2 overflow-x-auto pb-1 lg:hidden">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-xs font-black text-[#23395B]"
                  >
                    <Icon size={15} />
                    {item.label}
                  </a>
                );
              })}

              <a
                href="/admin/logout"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#161925] px-4 py-2.5 text-xs font-black text-white"
              >
                <LogOut size={15} />
                Logout
              </a>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}