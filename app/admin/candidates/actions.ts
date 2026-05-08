"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const allowedStatuses = [
  "new",
  "reviewed",
  "shortlisted",
  "contacted",
  "archived",
];

export async function updateCandidateStatus(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const candidateId = String(formData.get("candidateId") || "");
  const status = String(formData.get("status") || "");

  if (!candidateId || !allowedStatuses.includes(status)) {
    return;
  }

  const { error } = await supabase
    .from("candidates")
    .update({ status })
    .eq("id", candidateId);

  if (error) {
    console.error("Failed to update candidate status:", error);
    return;
  }

  revalidatePath("/admin/candidates");
  revalidatePath("/admin");
}