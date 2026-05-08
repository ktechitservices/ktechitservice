import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Scale,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the website terms for candidates, employers, and visitors using KTech IT Services.",
};

const termsSections = [
  {
    title: "Use of the Website",
    points: [
      "The KTech website is provided for employers, candidates, and business visitors seeking IT staffing and services information.",
      "Users agree not to misuse the website, submit false information, attempt unauthorised access, or interfere with website functionality.",
      "KTech may update website content, job listings, forms, pages, and features at any time.",
    ],
  },
  {
    title: "Candidate Submissions",
    points: [
      "Candidates may submit profile details, resumes, and application information through the website.",
      "Submitting a resume does not guarantee job placement, interview selection, or employment.",
      "KTech may review candidate information for current or future IT opportunities.",
      "Candidates are responsible for ensuring that submitted information is accurate and up to date.",
    ],
  },
  {
    title: "Employer Enquiries",
    points: [
      "Employers may submit hiring requirements through KTech’s website forms.",
      "Submitting a hiring enquiry does not create a binding staffing agreement unless separately agreed in writing.",
      "KTech may contact employers to clarify requirements, discuss talent needs, and propose next steps.",
    ],
  },
  {
    title: "Job Listings",
    points: [
      "Job postings may represent client hiring requirements or KTech internal roles.",
      "Job details may change, expire, or be closed without prior notice.",
      "KTech aims to keep job information accurate, but job availability is not guaranteed.",
    ],
  },
  {
    title: "Website Content",
    points: [
      "Website content is provided for general information and business communication purposes.",
      "Users should not copy, reproduce, or reuse KTech website content without permission.",
      "All brand names, logos, and materials should be used only with proper authorisation.",
    ],
  },
];

const quickCards = [
  {
    icon: BriefcaseBusiness,
    title: "Employers",
    text: "Hiring enquiries start a conversation but do not create a binding agreement by themselves.",
  },
  {
    icon: UploadCloud,
    title: "Candidates",
    text: "Resume submissions may be reviewed for current or future opportunities but do not guarantee placement.",
  },
  {
    icon: ShieldCheck,
    title: "Website Use",
    text: "Users must use the website responsibly and submit accurate information.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <Scale size={16} />
              Terms of Use
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              Website terms for candidates, employers, and visitors.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              These Terms of Use outline the basic conditions for using the
              KTech IT Services website, submitting employer enquiries, applying
              to jobs, and uploading candidate information.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <p className="text-sm font-semibold leading-7 text-slate-700">
                This page is a practical website draft and should be reviewed by
                a qualified legal professional before final launch.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {quickCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white">
                    <Icon size={26} />
                  </div>

                  <h2 className="text-xl font-black tracking-tight text-[#161925]">
                    {card.title}
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    {card.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {termsSections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm sm:p-8"
            >
              <h2 className="text-3xl font-black tracking-tight text-[#161925]">
                {section.title}
              </h2>

              <div className="mt-6 space-y-4">
                {section.points.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#406E8E]"
                      size={20}
                    />
                    <p className="text-sm font-semibold leading-7 text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <article className="rounded-3xl bg-[#161925] p-8 text-white shadow-lg">
            <FileText className="text-[#CBF7ED]" size={36} />

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white">
              Questions about these terms?
            </h2>

            <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-300">
              For questions about website use, candidate submissions, employer
              enquiries, or job listings, contact KTech IT Services.
            </p>

            <a
              href="mailto:hello@ktechitservices.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#CBF7ED]"
            >
              Email KTech
              <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}