"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const allowedStatuses = ["new", "contacted", "qualified", "converted", "archived"];

export async function updateLeadStatus(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const leadId = String(formData.get("leadId") || "");
  const status = String(formData.get("status") || "");

  if (!leadId || !allowedStatuses.includes(status)) {
    return;
  }

  const { error } = await supabase
    .from("employer_leads")
    .update({ status })
    .eq("id", leadId);

  if (error) {
    console.error("Failed to update lead status:", error);
    return;
  }

  revalidatePath("/admin/leads");
  revalidatePath("/admin");
}