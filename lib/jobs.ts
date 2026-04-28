import { unstable_noStore as noStore } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { jobs as fallbackJobs } from "@/data/jobs";
import type { PublicJob } from "@/types/job";

type DbJob = {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  work_mode: string | null;
  experience: string | null;
  salary: string | null;
  source_type: "client" | "internal";
  company_display_name: string | null;
  summary: string;
  responsibilities: string[] | null;
  requirements: string[] | null;
  skills: string[] | null;
};

function hasSupabaseEnv() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );
}

function mapDbJob(job: DbJob): PublicJob {
  return {
    id: job.id,
    slug: job.slug,
    title: job.title,
    department: job.department,
    location: job.location,
    type: job.employment_type,
    workMode: job.work_mode || "Flexible",
    experience: job.experience || "Experience flexible",
    salary: job.salary || "Not disclosed",
    sourceType: job.source_type,
    companyDisplayName: job.company_display_name || "Confidential Client",
    summary: job.summary,
    responsibilities: job.responsibilities || [],
    requirements: job.requirements || [],
    skills: job.skills || [],
  };
}

function getFallbackJobs(): PublicJob[] {
  return fallbackJobs.map((job) => ({
    ...job,
    workMode: "Flexible",
    sourceType: "client",
    companyDisplayName: "Confidential Client",
    responsibilities: job.responsibilities || [],
    requirements: job.requirements || [],
    skills: job.skills || [],
  }));
}

export async function getActiveJobs(limit?: number): Promise<PublicJob[]> {
  noStore();

  if (!hasSupabaseEnv()) {
    const fallback = getFallbackJobs();
    return limit ? fallback.slice(0, limit) : fallback;
  }

  const supabase = await createClient();

  let query = supabase
    .from("jobs")
    .select(
      `
      id,
      title,
      slug,
      department,
      location,
      employment_type,
      work_mode,
      experience,
      salary,
      source_type,
      company_display_name,
      summary,
      responsibilities,
      requirements,
      skills
    `
    )
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error || !data) {
    console.error("Failed to fetch jobs:", error);
    const fallback = getFallbackJobs();
    return limit ? fallback.slice(0, limit) : fallback;
  }

  return data.map((job) => mapDbJob(job as DbJob));
}

export async function getJobBySlug(slug: string): Promise<PublicJob | null> {
  noStore();

  if (!hasSupabaseEnv()) {
    return getFallbackJobs().find((job) => job.slug === slug) || null;
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("jobs")
    .select(
      `
      id,
      title,
      slug,
      department,
      location,
      employment_type,
      work_mode,
      experience,
      salary,
      source_type,
      company_display_name,
      summary,
      responsibilities,
      requirements,
      skills
    `
    )
    .eq("slug", slug)
    .eq("status", "active")
    .single();

  if (error || !data) {
    console.error("Failed to fetch job:", error);
    return getFallbackJobs().find((job) => job.slug === slug) || null;
  }

  return mapDbJob(data as DbJob);
}