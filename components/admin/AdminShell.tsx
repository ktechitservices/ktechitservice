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
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-[#1B3D2F]/10 bg-[#1B3D2F] p-6 text-[#F4F1DE] lg:block">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F1DE] text-[#1B3D2F]">
              <ShieldCheck size={21} />
            </div>

            <div>
              <p className="text-lg font-black leading-none">Ktech Admin</p>
              <p className="text-xs font-medium text-[#F4F1DE]/65">
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
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-[#F4F1DE]/75 transition hover:bg-[#F4F1DE]/10 hover:text-white"
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-10 rounded-3xl bg-[#F4F1DE]/10 p-5">
            <p className="text-sm font-black text-[#E07A5F]">Admin Access</p>
            <p className="mt-2 text-xs leading-6 text-[#F4F1DE]/70">
              This area will later be protected using Supabase Auth so only
              Ktech staff can manage jobs and candidate records.
            </p>
          </div>

          <a
            href="/admin/logout"
            className="mt-10 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-[#F4F1DE]/70 transition hover:bg-[#F4F1DE]/10 hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </a>
        </aside>

        <section>
          <header className="sticky top-0 z-40 border-b border-[#1B3D2F]/10 bg-[#F4F1DE]/85 px-6 py-4 backdrop-blur-xl lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E07A5F]">
                  Ktech Internal
                </p>
                <h1 className="text-2xl font-black text-[#1B3D2F]">
                  Admin Dashboard
                </h1>
              </div>

              <a
                href="/admin/jobs/new"
                className="hidden rounded-full bg-[#1B3D2F] px-5 py-2.5 text-sm font-extrabold text-[#F4F1DE] transition hover:bg-[#163226] sm:inline-flex"
              >
                Add Job
              </a>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
