"use client";

import { motion } from "motion/react";
import { ArrowRight, BriefcaseBusiness, Globe2, MapPin } from "lucide-react";
import type { PublicJob } from "@/types/job";

type FeaturedJobsClientProps = {
  jobs: PublicJob[];
};

export function FeaturedJobsClient({ jobs }: FeaturedJobsClientProps) {
  return (
    <section id="jobs" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Open opportunities
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Featured IT jobs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore active technology roles posted by KTech for client
              companies and internal hiring needs.
            </p>
          </div>

          <a
            href="/jobs"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
          >
            View All Jobs
            <ArrowRight size={18} />
          </a>
        </div>

        {jobs.length === 0 ? (
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 text-center shadow-sm">
            <h3 className="text-2xl font-black text-[#161925]">
              No active jobs yet.
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              KTech is building its active jobs board. Candidates can still
              upload resumes to join the talent database for future
              opportunities.
            </p>

            <a
              href="/candidates"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
            >
              Upload Resume
            </a>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {jobs.map((job, index) => (
              <motion.article
                key={job.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:shadow-lg"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-lg bg-[#CBF7ED] px-3 py-1.5 text-xs font-black text-[#161925]">
                      {job.type}
                    </span>

                    {job.sourceType === "internal" && (
                      <span className="rounded-lg bg-[#F8FAFC] px-3 py-1.5 text-xs font-black text-[#406E8E]">
                        KTech Role
                      </span>
                    )}
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#23395B] text-white transition group-hover:bg-[#406E8E]">
                    <BriefcaseBusiness size={19} />
                  </div>
                </div>

                <p className="text-sm font-black text-[#406E8E]">
                  {job.department}
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
                  {job.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm font-medium leading-7 text-slate-600">
                  {job.summary}
                </p>

                <div className="mt-6 space-y-3 text-sm font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={17} className="text-[#406E8E]" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe2 size={17} className="text-[#406E8E]" />
                    <span>{job.workMode || "Flexible"}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(job.skills || []).slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-bold text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={`/jobs/${job.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#23395B] transition group-hover:text-[#406E8E]"
                >
                  View role <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-3xl bg-[#161925] p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-black text-white">
            No matching role right now?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-300">
            Upload your resume anyway. KTech can keep your profile in its
            candidate database and contact you when a suitable IT opportunity is
            available.
          </p>

          <a
            href="/candidates"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#CBF7ED] px-6 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
          >
            Join Candidate Database
          </a>
        </div>
      </div>
    </section>
  );
}