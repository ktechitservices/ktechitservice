"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toArray(value: FormDataEntryValue | null) {
  if (!value) return [];

  return String(value)
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function skillsToArray(value: FormDataEntryValue | null) {
  if (!value) return [];

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function createJob(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const title = String(formData.get("title") || "").trim();
  const department = String(formData.get("department") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const employmentType = String(formData.get("employmentType") || "").trim();
  const workMode = String(formData.get("workMode") || "").trim();
  const experience = String(formData.get("experience") || "").trim();
  const salary = String(formData.get("salary") || "").trim();
  const sourceType = String(formData.get("sourceType") || "client").trim();
  const companyDisplayName = String(
    formData.get("companyDisplayName") || "Confidential Client"
  ).trim();
  const status = String(formData.get("status") || "active").trim();
  const summary = String(formData.get("summary") || "").trim();

  const responsibilities = toArray(formData.get("responsibilities"));
  const requirements = toArray(formData.get("requirements"));
  const skills = skillsToArray(formData.get("skills"));

  if (!title || !department || !location || !employmentType || !summary) {
    redirect("/admin/jobs/new?error=missing_fields");
  }

  const slug = `${slugify(title)}-${crypto.randomUUID().slice(0, 6)}`;

  const { error } = await supabase.from("jobs").insert({
    title,
    slug,
    department,
    location,
    employment_type: employmentType,
    work_mode: workMode,
    experience,
    salary,
    source_type: sourceType,
    company_display_name: companyDisplayName,
    summary,
    responsibilities,
    requirements,
    skills,
    status,
    created_by: user.id,
  });

  if (error) {
    console.error("Create job error:", error);
    redirect("/admin/jobs/new?error=create_failed");
  }

  redirect("/admin/jobs");
}