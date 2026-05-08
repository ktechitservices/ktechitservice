"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const allowedStatuses = ["active", "draft", "closed"];
const allowedSourceTypes = ["client", "internal"];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function commaListToArray(value: FormDataEntryValue | null) {
  if (!value) return [];

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function lineListToArray(value: FormDataEntryValue | null) {
  if (!value) return [];

  return String(value)
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function updateJob(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const jobId = String(formData.get("jobId") || "").trim();
  const previousSlug = String(formData.get("previousSlug") || "").trim();

  const title = String(formData.get("title") || "").trim();
  const rawSlug = String(formData.get("slug") || "").trim();
  const department = String(formData.get("department") || "").trim();
  const sourceType = String(formData.get("sourceType") || "client").trim();
  const companyDisplayName = String(
    formData.get("companyDisplayName") || ""
  ).trim();
  const employmentType = String(formData.get("employmentType") || "").trim();
  const workMode = String(formData.get("workMode") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const experience = String(formData.get("experience") || "").trim();
  const salary = String(formData.get("salary") || "").trim();
  const status = String(formData.get("status") || "draft").trim();
  const summary = String(formData.get("summary") || "").trim();

  const skills = commaListToArray(formData.get("skills"));
  const responsibilities = lineListToArray(formData.get("responsibilities"));
  const requirements = lineListToArray(formData.get("requirements"));

  if (!jobId || !title || !department || !employmentType || !location || !summary) {
    redirect(`/admin/jobs/${jobId}/edit?error=missing_fields`);
  }

  if (!allowedStatuses.includes(status)) {
    redirect(`/admin/jobs/${jobId}/edit?error=invalid_status`);
  }

  if (!allowedSourceTypes.includes(sourceType)) {
    redirect(`/admin/jobs/${jobId}/edit?error=invalid_source`);
  }

  const slug = slugify(rawSlug || title);

  const { error } = await supabase
    .from("jobs")
    .update({
      title,
      slug,
      department,
      source_type: sourceType,
      company_display_name:
        companyDisplayName || (sourceType === "internal" ? "KTech IT Services" : "Confidential Client"),
      employment_type: employmentType,
      work_mode: workMode || null,
      location,
      experience: experience || null,
      salary: salary || null,
      status,
      summary,
      skills,
      responsibilities,
      requirements,
    })
    .eq("id", jobId);

  if (error) {
    console.error("Failed to update job:", error);
    redirect(`/admin/jobs/${jobId}/edit?error=update_failed`);
  }

  revalidatePath("/admin");
  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");

  if (previousSlug) {
    revalidatePath(`/jobs/${previousSlug}`);
  }

  revalidatePath(`/jobs/${slug}`);

  redirect("/admin/jobs");
}