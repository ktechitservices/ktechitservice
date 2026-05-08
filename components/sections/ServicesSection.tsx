import {
  ArrowRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  ShieldCheck,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Source skilled developers, analysts, cloud engineers, cybersecurity experts, and IT professionals for contract or permanent roles.",
  },
  {
    icon: Code2,
    title: "Software Development Talent",
    description:
      "Connect with frontend, backend, full-stack, mobile, QA, and DevOps professionals for modern product delivery.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Support cloud migration, DevOps, automation, infrastructure, and platform engineering hiring needs.",
  },
  {
    icon: Database,
    title: "Candidate Database",
    description:
      "Build and search a growing candidate database for current and future technology hiring requirements.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Client & Internal Job Posting",
    description:
      "Post client roles and internal KTech openings through a structured careers and admin workflow.",
  },
  {
    icon: ShieldCheck,
    title: "IT Services Support",
    description:
      "Support businesses with technical capability, project-based talent, and IT service delivery resources.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
            What we do
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
            IT services and recruitment built for growing technology teams.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            KTech combines IT staffing, candidate database management, and
            technology delivery support to help businesses hire and scale faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white transition group-hover:bg-[#406E8E]">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-black tracking-tight text-[#161925]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-full bg-[#E2E8F0]" />

                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#23395B] transition group-hover:text-[#406E8E]"
                >
                  Learn more <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}