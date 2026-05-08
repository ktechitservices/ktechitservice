"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const allowedStatuses = ["active", "draft", "closed"];

export async function updateJobStatus(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const jobId = String(formData.get("jobId") || "");
  const slug = String(formData.get("slug") || "");
  const status = String(formData.get("status") || "");

  if (!jobId || !allowedStatuses.includes(status)) {
    return;
  }

  const { error } = await supabase
    .from("jobs")
    .update({ status })
    .eq("id", jobId);

  if (error) {
    console.error("Failed to update job status:", error);
    return;
  }

  revalidatePath("/admin");
  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");

  if (slug) {
    revalidatePath(`/jobs/${slug}`);
  }
}