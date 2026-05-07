"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Search,
  UploadCloud,
  Users,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F1DE] px-6 py-20 lg:px-8 lg:py-24">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B3D2F]/10 bg-white/65 px-4 py-2 text-sm font-bold text-[#1B3D2F] shadow-sm">
            <BriefcaseBusiness size={16} />
            The future of IT workforce hiring
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
            Right IT Talent.
            <br />
            Right Now.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
            KTech helps companies hire skilled IT professionals faster while
            connecting candidates with technology roles that match their real
            skills.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/employers"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-bold text-[#F4F1DE] transition hover:bg-[#163226]"
            >
              Find IT Talent
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/jobs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-bold text-white transition hover:bg-[#cf6b52]"
            >
              Find a Role
              <Search size={18} />
            </a>
          </div>

          <div className="mt-8 rounded-3xl border border-[#1B3D2F]/10 bg-white/70 p-5 shadow-sm">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#1B3D2F]" />
              <p className="text-sm leading-6 text-[#3D405B]">
                Employers submit hiring needs. KTech reviews, posts active
                roles, and matches candidates from applications and its talent
                database.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-[#DCD9FF] blur-sm" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#1B3D2F]/10 bg-white p-4 shadow-xl">
            <div className="rounded-[1.5rem] bg-[#1B3D2F] p-6 text-[#F4F1DE]">
              <p className="text-sm font-medium text-[#F4F1DE]/75">
                KTech Talent Workflow
              </p>

              <h2 className="mt-2 text-3xl font-black leading-tight">
                One platform.
                <br />
                Two journeys.
              </h2>

              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl bg-[#F4F1DE] p-5 text-[#1B3D2F]">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE]">
                    <Users size={21} />
                  </div>

                  <h3 className="text-xl font-extrabold">Employers</h3>

                  <p className="mt-2 text-sm leading-6 text-[#3D405B]">
                    Share your hiring requirement and get a relevant IT talent
                    shortlist.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#E07A5F] p-5 text-white">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#E07A5F]">
                    <UploadCloud size={21} />
                  </div>

                  <h3 className="text-xl font-extrabold">Candidates</h3>

                  <p className="mt-2 text-sm leading-6 text-white/90">
                    Apply to active jobs or upload your resume for future
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}