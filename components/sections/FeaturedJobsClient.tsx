"use client";

import { motion } from "motion/react";
import { ArrowRight, BriefcaseBusiness, Globe2, MapPin } from "lucide-react";
import type { PublicJob } from "@/types/job";

type FeaturedJobsClientProps = {
  jobs: PublicJob[];
};

export function FeaturedJobsClient({ jobs }: FeaturedJobsClientProps) {
  return (
    <section id="jobs" className="relative bg-[#F4F1DE] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Open opportunities
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Featured IT Jobs
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3D405B]">
              Explore active technology roles or upload your resume to join
              Ktech’s candidate database for future matches.
            </p>
          </div>

          <a
            href="/candidates"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 text-sm font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
          >
            Upload Resume <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.article
              key={job.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-full bg-[#E07A5F]/15 px-4 py-2 text-xs font-extrabold text-[#E07A5F]">
                  {job.type}
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE] transition group-hover:bg-[#E07A5F]">
                  <BriefcaseBusiness size={18} />
                </div>
              </div>

              <p className="text-sm font-extrabold text-[#E07A5F]">
                {job.department}
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-[#1B3D2F]">
                {job.title}
              </h3>

              <div className="mt-5 space-y-2 text-sm text-[#3D405B]">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#1B3D2F]" />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe2 size={16} className="text-[#1B3D2F]" />
                  <span>{job.experience || "Experience flexible"}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F4F1DE] px-3 py-1.5 text-xs font-bold text-[#3D405B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={`/jobs/${job.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#1B3D2F] transition group-hover:text-[#E07A5F]"
              >
                View role <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#1B3D2F]/10 bg-[#1B3D2F] p-7 text-center text-[#F4F1DE]">
          <h3 className="text-2xl font-black">No matching role right now?</h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#F4F1DE]/80">
            Upload your resume anyway. Ktech can keep your profile in its
            candidate database and contact you when a suitable IT opportunity is
            available.
          </p>

          <a
            href="/candidates"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#E07A5F] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#cf6b52]"
          >
            Join Candidate Database
          </a>
        </div>
      </div>
    </section>
  );
}