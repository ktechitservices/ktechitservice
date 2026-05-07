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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how KTech IT Services handles candidate, employer, resume, and website enquiry information.",
};

const sections = [
  {
    title: "Information We Collect",
    points: [
      "Candidate details such as name, email, phone number, location, work experience, skills, and resume files.",
      "Employer details such as name, company name, work email, phone number, and hiring requirements.",
      "Website enquiry details submitted through contact forms.",
      "Basic website usage information used to improve performance, navigation, and user experience.",
    ],
  },
  {
    title: "How We Use Information",
    points: [
      "To match candidates with suitable IT job opportunities.",
      "To help employers fulfil hiring requirements.",
      "To manage applications, resume submissions, and employer enquiries.",
      "To communicate with candidates, employers, and business contacts.",
      "To improve KTech’s website, services, and recruitment process.",
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
      "Resume uploads and application details should be stored securely once backend storage is connected.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B3D2F]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1B3D2F] shadow-sm">
            <ShieldCheck size={16} />
            Privacy Policy
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
            How KTech handles candidate and employer information.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3D405B]">
            This Privacy Policy explains how KTech IT Services may collect, use,
            store, and protect information submitted by candidates, employers,
            and website visitors.
          </p>

          <p className="mt-5 rounded-3xl bg-white/70 p-5 text-sm font-semibold leading-7 text-[#3D405B] shadow-sm">
            This page is a practical website draft and should be reviewed by a
            qualified legal professional before launch.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            {
              icon: UploadCloud,
              title: "Resume Uploads",
              text: "Candidate resumes may be used for current and future IT opportunities.",
            },
            {
              icon: Database,
              title: "Talent Database",
              text: "Profiles may be stored to support future matching.",
            },
            {
              icon: Lock,
              title: "Access Control",
              text: "Candidate and employer information should be restricted to authorised users.",
            },
            {
              icon: Mail,
              title: "Communication",
              text: "KTech may contact users about roles, hiring needs, or enquiries.",
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

      {/* Policy Sections */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {sections.map((section) => (
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
              Contact about privacy
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#F4F1DE]/80">
              For privacy-related questions or requests about candidate,
              employer, or website enquiry information, contact KTech IT
              Services.
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