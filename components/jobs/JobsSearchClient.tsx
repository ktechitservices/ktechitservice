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
      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_auto]">
          <div>
            <label
              htmlFor="job-keyword"
              className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]"
            >
              Keyword
            </label>

            <input
              id="job-keyword"
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Search React, Cloud, Data..."
              className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-bold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
            />
          </div>

          <div>
            <label
              htmlFor="job-location"
              className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]"
            >
              Location
            </label>

            <input
              id="job-location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Search Remote, Hybrid, United States..."
              className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-bold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
            />
          </div>

          <div>
            <label
              htmlFor="job-type"
              className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]"
            >
              Type
            </label>

            <select
              id="job-type"
              value={jobType}
              onChange={(event) => setJobType(event.target.value)}
              className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-bold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
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
              className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-[#406E8E]"
            >
              Work Mode
            </label>

            <select
              id="work-mode"
              value={workMode}
              onChange={(event) => setWorkMode(event.target.value)}
              className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-bold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
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
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-5 font-bold text-white transition hover:bg-[#1B2D49]"
            >
              <Search size={18} />
            </a>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex h-14 items-center justify-center rounded-xl bg-[#CBF7ED] px-4 font-bold text-[#161925] transition hover:bg-[#8EA8C3]"
                aria-label="Clear filters"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-3 rounded-2xl bg-[#F8FAFC] px-5 py-4 text-sm font-bold text-slate-600 md:flex-row md:items-center">
          <p>
            Showing{" "}
            <span className="text-[#23395B]">{filteredJobs.length}</span> of{" "}
            <span className="text-[#23395B]">{jobs.length}</span> active jobs
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-left font-black text-[#406E8E] hover:text-[#23395B]"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      <div id="open-roles" className="scroll-mt-28 py-16">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              Open opportunities
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Active IT jobs.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Apply to current roles or join the KTech candidate database for
              future matching.
            </p>
          </div>

          <a
            href="/candidates"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
          >
            Join Candidate Database
            <ArrowRight size={18} />
          </a>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="rounded-3xl bg-[#161925] p-8 text-center text-white shadow-lg">
            <h3 className="text-3xl font-black text-white">
              No matching jobs found.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-300">
              Try changing your filters, or upload your resume so KTech can keep
              your profile in its candidate database for future IT roles.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-black text-[#161925] transition hover:bg-[#CBF7ED]"
              >
                Clear Filters
              </button>

              <a
                href="/candidates"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#CBF7ED] px-7 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
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

                <h2 className="mt-3 text-2xl font-black tracking-tight text-[#161925]">
                  {job.title}
                </h2>

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
                  {(job.skills || []).slice(0, 5).map((skill) => (
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
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-3xl bg-[#161925] p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-black text-white">
            No suitable role right now?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-300">
            Upload your resume anyway. KTech can keep your profile in its
            candidate database and contact you when a matching IT opportunity
            becomes available.
          </p>

          <a
            href="/candidates"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#CBF7ED] px-6 py-3 text-sm font-black text-[#161925] transition hover:bg-white"
          >
            Upload Resume
          </a>
        </div>
      </div>
    </section>
  );
}