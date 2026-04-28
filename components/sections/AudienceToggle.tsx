"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Search,
  UploadCloud,
  Users,
} from "lucide-react";

export function AudienceToggle() {
  const [activeTab, setActiveTab] = useState<"employers" | "candidates">(
    "employers"
  );

  const employerPoints = [
    "Submit your hiring requirement",
    "Ktech reviews and clarifies the role",
    "Ktech posts the job and searches its database",
    "You receive relevant IT candidate shortlists",
  ];

  const candidatePoints = [
    "Search active IT job postings",
    "Apply directly to a suitable role",
    "Upload your resume if no role matches today",
    "Stay in Ktech’s database for future opportunities",
  ];

  return (
    <section className="bg-[#F4F1DE] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
            Choose your path
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
            Built for employers and IT professionals.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#3D405B]">
            Ktech works as the bridge between companies looking for IT talent
            and candidates looking for the right technology opportunity.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-xl grid-cols-2 rounded-full border border-[#1B3D2F]/10 bg-white/70 p-1.5 shadow-sm">
          <button
            onClick={() => setActiveTab("employers")}
            className={`min-h-12 rounded-full px-5 py-3 text-sm font-extrabold transition ${
              activeTab === "employers"
                ? "bg-[#1B3D2F] text-[#F4F1DE] shadow-sm"
                : "text-[#3D405B] hover:bg-[#F4F1DE]"
            }`}
          >
            Employers
          </button>

          <button
            onClick={() => setActiveTab("candidates")}
            className={`min-h-12 rounded-full px-5 py-3 text-sm font-extrabold transition ${
              activeTab === "candidates"
                ? "bg-[#E07A5F] text-white shadow-sm"
                : "text-[#3D405B] hover:bg-[#F4F1DE]"
            }`}
          >
            Candidates
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-4 shadow-xl"
        >
          {activeTab === "employers" ? (
            <div className="grid gap-6 rounded-[1.5rem] bg-[#F4F1DE] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
              <div className="rounded-[1.5rem] bg-white p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE]">
                  <Users size={28} />
                </div>

                <h3 className="text-3xl font-black leading-tight text-[#1B3D2F]">
                  Need IT talent for a client or internal role?
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-[#3D405B]">
                  Employers share their hiring requirement with Ktech. The Ktech
                  team reviews the need, creates suitable job postings, and
                  matches candidates from applications and its internal talent
                  database.
                </p>

                <a
                  href="/employers"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
                >
                  Get My IT Talent Shortlist
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="rounded-[1.5rem] bg-[#1B3D2F] p-6 text-[#F4F1DE]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F1DE] text-[#1B3D2F]">
                    <BriefcaseBusiness size={21} />
                  </div>
                  <h4 className="text-2xl font-black">Employer Journey</h4>
                </div>

                <div className="space-y-4">
                  {employerPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#E07A5F]"
                        size={20}
                      />
                      <p className="text-sm leading-6 text-[#F4F1DE]/90">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 rounded-[1.5rem] bg-[#F4F1DE] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
              <div className="rounded-[1.5rem] bg-white p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E07A5F] text-white">
                  <UploadCloud size={28} />
                </div>

                <h3 className="text-3xl font-black leading-tight text-[#1B3D2F]">
                  Search jobs or upload your resume for future matches.
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-[#3D405B]">
                  Candidates can apply to active job postings. If no role
                  matches today, they can still upload their resume so Ktech can
                  keep them in the database and contact them for future roles.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/jobs"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-6 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
                  >
                    Search IT Jobs
                    <Search size={18} />
                  </a>

                  <a
                    href="/candidates"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#1B3D2F]/15 bg-[#F4F1DE] px-6 py-3 font-extrabold text-[#1B3D2F] transition hover:bg-white"
                  >
                    Upload Resume
                    <UploadCloud size={18} />
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#E07A5F] p-6 text-white">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#E07A5F]">
                    <BriefcaseBusiness size={21} />
                  </div>
                  <h4 className="text-2xl font-black">Candidate Journey</h4>
                </div>

                <div className="space-y-4">
                  {candidatePoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-white"
                        size={20}
                      />
                      <p className="text-sm leading-6 text-white/90">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}