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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the website terms for candidates, employers, and visitors using KTech IT Services.",
};

const terms = [
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
      "KTech aims to keep job information accurate, but availability is not guaranteed.",
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

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B3D2F]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1B3D2F] shadow-sm">
            <Scale size={16} />
            Terms of Use
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
            Website terms for candidates, employers, and visitors.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3D405B]">
            These Terms of Use outline the basic conditions for using the KTech
            IT Services website, submitting employer enquiries, applying to jobs,
            and uploading candidate information.
          </p>

          <p className="mt-5 rounded-3xl bg-white/70 p-5 text-sm font-semibold leading-7 text-[#3D405B] shadow-sm">
            This page is a practical website draft and should be reviewed by a
            qualified legal professional before launch.
          </p>
        </div>
      </section>

      {/* Quick Cards */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
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
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                  <Icon size={26} />
                </div>

                <h2 className="text-xl font-black text-[#1B3D2F]">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Terms Sections */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {terms.map((section) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-7 shadow-sm"
            >
              <h2 className="text-3xl font-black tracking-tight text-[#1B3D2F]">
                {section.title}
              </h2>

              <div className="mt-6 space-y-4">
                {section.points.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#E07A5F]"
                      size={20}
                    />
                    <p className="text-sm font-semibold leading-7 text-[#3D405B]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-[2rem] bg-[#1B3D2F] p-8 text-[#F4F1DE] shadow-xl">
            <FileText className="text-[#E07A5F]" size={34} />

            <h2 className="mt-6 text-3xl font-black tracking-tight">
              Questions about these terms?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#F4F1DE]/80">
              For questions about website use, candidate submissions, employer
              enquiries, or job listings, contact KTech IT Services.
            </p>

            <a
              href="mailto:hello@ktechitservices.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#E07A5F]"
            >
              Email KTech <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}