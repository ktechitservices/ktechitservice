import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about KTech IT Services, a Delaware-based IT staffing and services company built for better talent matching.",
};

const focusAreas = [
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Helping companies source technology professionals for contract, permanent, contract-to-hire, and project-based hiring needs.",
  },
  {
    icon: Code2,
    title: "Technology Talent",
    description:
      "Supporting hiring across software engineering, cloud, data, cybersecurity, DevOps, and digital delivery roles.",
  },
  {
    icon: Database,
    title: "Candidate Database",
    description:
      "Allowing candidates to apply to jobs or upload their resume for future matching when no role fits today.",
  },
  {
    icon: ShieldCheck,
    title: "IT Services Support",
    description:
      "Supporting organisations with technology capability, staffing support, and delivery-focused talent solutions.",
  },
];

const values = [
  "Speed with quality",
  "Technology-focused hiring",
  "Relevant candidate matching",
  "Clear employer communication",
  "Candidate-first experience",
  "Long-term business relationships",
];

const trustPoints = [
  "Delaware-based IT services company",
  "Employer and candidate journeys clearly separated",
  "Client and internal job posting capability",
  "Resume database for future opportunity matching",
  "Specialist focus across software, cloud, data, and cybersecurity",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B3D2F]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1B3D2F] shadow-sm">
              <Building2 size={16} />
              About KTech IT Services
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
              A modern IT staffing partner built for better matches.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
              KTech IT Services connects companies with skilled technology
              professionals while helping candidates discover roles that match
              their skills, experience, and career direction.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/employers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
              >
                Hire IT Talent
                <ArrowRight size={18} />
              </a>

              <a
                href="/candidates"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                Upload Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#DCD9FF] blur-sm" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white p-4 shadow-xl">
              <div className="rounded-[1.5rem] bg-[#1B3D2F] p-6 text-[#F4F1DE]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F1DE] text-[#1B3D2F]">
                    <Sparkles size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-[#F4F1DE]/70">Company focus</p>
                    <h2 className="text-2xl font-black">
                      Talent + IT Services
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {trustPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-3xl bg-[#F4F1DE]/10 p-4"
                    >
                      <CheckCircle2 className="text-[#E07A5F]" size={20} />
                      <p className="text-sm font-medium text-[#F4F1DE]/85">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Our story
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Built to reduce the gap between hiring speed and talent quality.
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white/75 p-8 shadow-sm">
            <div className="space-y-6 text-lg leading-8 text-[#3D405B]">
              <p>
                Technology hiring is often slow, noisy, and difficult to manage.
                Employers need skilled professionals quickly, but finding the
                right fit across software, cloud, data, cybersecurity, and IT
                delivery can take too much time.
              </p>

              <p>
                KTech IT Services is designed to make that process more focused.
                Employers share their hiring requirements with KTech, and KTech
                reviews, posts, sources, and shortlists suitable candidates.
              </p>

              <p>
                Candidates can apply to active roles or upload their resume even
                when no job matches today. This helps KTech build a useful
                candidate database for future client and internal opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              What we focus on
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Recruitment and IT services under one modern platform.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3D405B]">
              KTech combines employer hiring support, job posting, candidate
              profile collection, and technology-focused talent matching.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black text-[#1B3D2F]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-[#1B3D2F] p-8 text-[#F4F1DE] shadow-xl lg:col-span-2">
            <Globe2 className="text-[#E07A5F]" size={36} />

            <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Our mission is to make IT hiring faster, cleaner, and more
              relevant.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#F4F1DE]/80">
              KTech aims to reduce hiring friction by helping employers access
              relevant technology professionals and helping candidates get
              discovered for roles that match their profile.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#E07A5F] p-8 text-white shadow-xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-white/75">
              Our promise
            </p>

            <h3 className="mt-4 text-4xl font-black leading-tight">
              Better matches. Better teams.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/85">
              KTech focuses on clarity, quality, and speed so employers and
              candidates both get a smoother staffing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Values
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              What KTech stands for.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#3D405B]">
              KTech is built around speed, relevance, and trust. The experience
              should feel simple for candidates and valuable for employers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex gap-3 rounded-3xl border border-[#1B3D2F]/10 bg-white/75 p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#E07A5F]" />
                <p className="text-sm font-semibold leading-6 text-[#3D405B]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Team/Certifications Placeholder */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/75 p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
                Trust signals
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#1B3D2F] md:text-5xl">
                Built to grow with real proof.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#3D405B]">
                As KTech grows, this section can display team photos,
                certifications, client testimonials, awards, and verified trust
                badges.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {["Team", "Certifications", "Testimonials"].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-[#F4F1DE] p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE]">
                    <Sparkles size={20} />
                  </div>

                  <p className="text-lg font-black text-[#1B3D2F]">{item}</p>

                  <p className="mt-2 text-xs font-semibold leading-5 text-[#3D405B]/75">
                    Add real assets before launch for stronger trust.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#1B3D2F] p-8 text-center text-[#F4F1DE] shadow-xl md:p-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
            Work with KTech
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Whether you are hiring or job searching, KTech helps you move
            forward.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#F4F1DE]/80">
            Employers can submit hiring requirements. Candidates can search jobs
            or upload resumes to join KTech’s talent database.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/employers"
              className="rounded-full bg-[#F4F1DE] px-7 py-3 font-extrabold text-[#1B3D2F] transition hover:bg-white"
            >
              Hire IT Talent
            </a>

            <a
              href="/jobs"
              className="rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
            >
              View Jobs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}