"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Database,
  SearchCheck,
  UploadCloud,
  Users,
} from "lucide-react";

const employerPoints = [
  "Submit hiring requirements for client or internal roles",
  "KTech reviews the role, skills, work mode, and timeline",
  "Relevant candidates are sourced from applications and database records",
  "Employers receive a focused IT talent shortlist",
];

const candidatePoints = [
  "Browse active technology roles posted by KTech",
  "Apply to suitable client or internal job openings",
  "Upload your resume even if no role matches today",
  "Stay visible in KTech’s candidate database for future opportunities",
];

const employerJourney = [
  {
    icon: ClipboardList,
    title: "Submit Requirement",
    text: "Share role details, required skills, work mode, and hiring urgency.",
  },
  {
    icon: SearchCheck,
    title: "KTech Reviews",
    text: "The team clarifies the requirement and identifies suitable talent routes.",
  },
  {
    icon: Users,
    title: "Receive Shortlist",
    text: "Get relevant IT profiles instead of generic applications.",
  },
];

const candidateJourney = [
  {
    icon: BriefcaseBusiness,
    title: "Search Roles",
    text: "Explore active software, cloud, data, cybersecurity, and IT roles.",
  },
  {
    icon: UploadCloud,
    title: "Upload Resume",
    text: "Submit your profile for current applications or future matching.",
  },
  {
    icon: Database,
    title: "Get Matched",
    text: "KTech can contact you when a suitable opportunity becomes available.",
  },
];

export function AudienceToggle() {
  const [activeTab, setActiveTab] = useState<"employers" | "candidates">(
    "employers"
  );

  const isEmployers = activeTab === "employers";
  const points = isEmployers ? employerPoints : candidatePoints;
  const journey = isEmployers ? employerJourney : candidateJourney;

  return (
    <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
            Choose your pathway
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
            Built for employers and IT professionals.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            KTech works as the bridge between companies looking for IT talent
            and candidates looking for the right technology opportunity.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab("employers")}
            className={`rounded-xl px-5 py-3 text-sm font-black transition ${
              isEmployers
                ? "bg-[#23395B] text-white"
                : "text-slate-600 hover:bg-[#F8FAFC] hover:text-[#23395B]"
            }`}
          >
            Employers
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("candidates")}
            className={`rounded-xl px-5 py-3 text-sm font-black transition ${
              !isEmployers
                ? "bg-[#23395B] text-white"
                : "text-slate-600 hover:bg-[#F8FAFC] hover:text-[#23395B]"
            }`}
          >
            Candidates
          </button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CBF7ED] text-[#161925]">
              {isEmployers ? (
                <Users size={28} />
              ) : (
                <UploadCloud size={28} />
              )}
            </div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#406E8E]">
              {isEmployers ? "For Employers" : "For Candidates"}
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-4xl">
              {isEmployers
                ? "Need IT talent for a client or internal role?"
                : "Looking for your next IT opportunity?"}
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {isEmployers
                ? "Share your hiring requirement with KTech. The team can review the need, create suitable job postings, source candidates, and build a relevant shortlist."
                : "Search active jobs or upload your resume to join KTech’s candidate database for current and future technology opportunities."}
            </p>

            <div className="mt-7 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#406E8E]"
                    size={20}
                  />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={isEmployers ? "/employers" : "/jobs"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                {isEmployers ? "Submit Hiring Need" : "Search Jobs"}
                <ArrowRight size={18} />
              </a>

              <a
                href={isEmployers ? "/contact" : "/candidates"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                {isEmployers ? "Talk to KTech" : "Upload Resume"}
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#161925] p-8 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8EA8C3]">
              {isEmployers ? "Employer Journey" : "Candidate Journey"}
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isEmployers
                ? "From requirement to shortlist."
                : "From resume to opportunity."}
            </h3>

            <div className="mt-8 space-y-5">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CBF7ED] text-[#161925]">
                        <Icon size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8EA8C3]">
                          Step {index + 1}
                        </p>

                        <h4 className="mt-1 text-lg font-black text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl bg-[#23395B] p-5">
              <p className="text-sm font-bold leading-6 text-slate-100">
                {isEmployers
                  ? "KTech helps companies move from broad hiring needs to relevant IT talent conversations."
                  : "KTech helps candidates stay visible for both active jobs and future client requirements."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}