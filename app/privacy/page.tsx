import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileText,
  Lock,
  Mail,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how KTech IT Services handles candidate, employer, resume, and website enquiry information.",
};

const policySections = [
  {
    title: "Information We Collect",
    points: [
      "Candidate details such as name, email, phone number, location, work experience, skills, preferred role, and resume files.",
      "Employer details such as name, company name, work email, phone number, hiring requirement, and hiring timeline.",
      "Website enquiry details submitted through contact forms.",
      "Basic website usage information that may help improve website performance, navigation, and user experience.",
    ],
  },
  {
    title: "How We Use Information",
    points: [
      "To match candidates with suitable IT job opportunities.",
      "To help employers fulfil hiring requirements.",
      "To manage applications, resume submissions, and employer enquiries.",
      "To communicate with candidates, employers, and business contacts.",
      "To improve KTech’s website, recruitment process, and service experience.",
    ],
  },
  {
    title: "Resume and Candidate Database",
    points: [
      "Candidates may upload resumes for specific jobs or for future opportunities.",
      "If no current job matches a candidate’s profile, KTech may retain the resume in its candidate database for future matching.",
      "Candidate information may be reviewed by authorised KTech team members for recruitment-related purposes.",
    ],
  },
  {
    title: "Data Protection",
    points: [
      "KTech aims to handle submitted information with reasonable security safeguards.",
      "Access to candidate and employer information should be limited to authorised team members.",
      "Resume uploads and application details should be stored securely through the connected backend and storage systems.",
    ],
  },
];

const privacyCards = [
  {
    icon: UploadCloud,
    title: "Resume Uploads",
    text: "Candidate resumes may be used for current and future IT opportunity matching.",
  },
  {
    icon: Database,
    title: "Talent Database",
    text: "Profiles may be stored to support future client and internal role matching.",
  },
  {
    icon: Lock,
    title: "Access Control",
    text: "Candidate and employer information should be restricted to authorised users.",
  },
  {
    icon: Mail,
    title: "Communication",
    text: "KTech may contact users about roles, hiring needs, or submitted enquiries.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <ShieldCheck size={16} />
              Privacy Policy
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              How KTech handles candidate and employer information.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              This Privacy Policy explains how KTech IT Services may collect,
              use, store, and protect information submitted by candidates,
              employers, and website visitors.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <p className="text-sm font-semibold leading-7 text-slate-700">
                This page is a practical website draft and should be reviewed by
                a qualified legal professional before final launch.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {privacyCards.map((card) => {
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

      {/* Policy Content */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {policySections.map((section) => (
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
              Contact about privacy
            </h2>

            <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-300">
              For privacy-related questions or requests about candidate,
              employer, resume, or website enquiry information, contact KTech IT
              Services.
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