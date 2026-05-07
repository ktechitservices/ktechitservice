"use client";

import { useMemo, useState } from "react";
import type { PublicJob } from "@/types/job";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  MapPin,
  Search,
  UploadCloud,
  X,
} from "lucide-react";

type JobsSearchClientProps = {
  jobs: PublicJob[];
};

function clean(value: unknown) {
  return String(value || "").toLowerCase().trim();
}

export function JobsSearchClient({ jobs }: JobsSearchClientProps) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [workMode, setWorkMode] = useState("");

  const jobTypes = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.type).filter(Boolean)));
  }, [jobs]);

  const workModes = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.workMode).filter(Boolean)));
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchableText = [
        job.title,
        job.department,
        job.summary,
        job.location,
        job.type,
        job.workMode,
        job.experience,
        job.salary,
        job.companyDisplayName,
        ...(job.skills || []),
      ]
        .map(clean)
        .join(" ");

      const matchesKeyword =
        keyword === "" || searchableText.includes(clean(keyword));

      const matchesLocation =
        location === "" ||
        clean(job.location).includes(clean(location)) ||
        clean(job.workMode).includes(clean(location));

      const matchesType = jobType === "" || clean(job.type) === clean(jobType);

      const matchesMode =
        workMode === "" || clean(job.workMode) === clean(workMode);

      return matchesKeyword && matchesLocation && matchesType && matchesMode;
    });
  }, [jobs, keyword, location, jobType, workMode]);

  const hasFilters = keyword || location || jobType || workMode;

  function clearFilters() {
    setKeyword("");
    setLocation("");
    setJobType("");
    setWorkMode("");
  }

  return (
    <section className="mt-12">
      <div className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/85 p-5 shadow-xl">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_auto]">
          <div>
            <label
              htmlFor="job-keyword"
              className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]"
            >
              Keyword
            </label>

            <input
              id="job-keyword"
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Search React, Cloud, Data..."
              className="h-14 w-full rounded-2xl border border-[#1B3D2F]/15 bg-[#F4F1DE] px-4 text-sm font-bold text-[#1B3D2F] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F] focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="job-location"
              className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]"
            >
              Location
            </label>

            <input
              id="job-location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Search Remote, Hybrid, United States..."
              className="h-14 w-full rounded-2xl border border-[#1B3D2F]/15 bg-[#F4F1DE] px-4 text-sm font-bold text-[#1B3D2F] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F] focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="job-type"
              className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]"
            >
              Type
            </label>

            <select
              id="job-type"
              value={jobType}
              onChange={(event) => setJobType(event.target.value)}
              className="h-14 w-full rounded-2xl border border-[#1B3D2F]/15 bg-[#F4F1DE] px-4 text-sm font-bold text-[#1B3D2F] outline-none transition focus:border-[#E07A5F] focus:bg-white"
            >
              <option value="">All types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="work-mode"
              className="mb-2 block text-xs font-extrabold uppercase tracking-[0.16em] text-[#E07A5F]"
            >
              Work Mode
            </label>

            <select
              id="work-mode"
              value={workMode}
              onChange={(event) => setWorkMode(event.target.value)}
              className="h-14 w-full rounded-2xl border border-[#1B3D2F]/15 bg-[#F4F1DE] px-4 text-sm font-bold text-[#1B3D2F] outline-none transition focus:border-[#E07A5F] focus:bg-white"
            >
              <option value="">All modes</option>
              {workModes.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end gap-3">
            <a
              href="#open-roles"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#1B3D2F] px-5 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
            >
              <Search size={18} />
            </a>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#E07A5F] px-4 font-extrabold text-white transition hover:bg-[#cf6b52]"
                aria-label="Clear filters"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-3 rounded-2xl bg-[#F4F1DE] px-5 py-4 text-sm font-bold text-[#3D405B] md:flex-row md:items-center">
          <p>
            Showing{" "}
            <span className="text-[#1B3D2F]">{filteredJobs.length}</span> of{" "}
            <span className="text-[#1B3D2F]">{jobs.length}</span> active jobs
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-left text-[#E07A5F] hover:text-[#cf6b52]"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      <div id="open-roles" className="scroll-mt-28 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
              Open opportunities
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
              Active IT Jobs
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3D405B]">
              Apply to current roles or join the KTech candidate database for
              future matching.
            </p>
          </div>

          <a
            href="/candidates"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#cf6b52]"
          >
            Join Candidate Database
            <ArrowRight size={18} />
          </a>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="rounded-[2rem] bg-[#1B3D2F] p-8 text-center text-[#F4F1DE] shadow-xl">
            <h3 className="text-3xl font-black">No matching jobs found.</h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#F4F1DE]/80">
              Try changing your filters, or upload your resume so KTech can keep
              your profile in its candidate database for future IT roles.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F4F1DE] px-7 py-3 font-extrabold text-[#1B3D2F] transition hover:bg-white"
              >
                Clear Filters
              </button>

              <a
                href="/candidates"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
              >
                Upload Resume
                <UploadCloud size={18} />
              </a>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {filteredJobs.map((job) => (
              <article
                key={job.slug}
                className="group rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
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

                <h2 className="mt-3 text-2xl font-black tracking-tight text-[#1B3D2F]">
                  {job.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#3D405B]">
                  {job.summary}
                </p>

                <div className="mt-5 space-y-2 text-sm text-[#3D405B]">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#1B3D2F]" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe2 size={16} className="text-[#1B3D2F]" />
                    <span>{job.workMode || "Flexible"}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(job.skills || []).map((skill) => (
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
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}