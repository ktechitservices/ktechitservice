"use server";

import { createAdminClient } from "@/lib/supabase/admin";

type CandidateActionResult = {
  success: boolean;
  message: string;
};

function skillsToArray(value: FormDataEntryValue | null) {
  if (!value) return [];

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function cleanFileName(fileName: string) {
  return fileName
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");
}

export async function submitCandidateProfile(
  formData: FormData
): Promise<CandidateActionResult> {
  try {
    const supabase = createAdminClient();

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const currentJobTitle = String(formData.get("currentRole") || "").trim();
    const experience = String(formData.get("experience") || "").trim();
    const preferredRole = String(formData.get("preferredRole") || "").trim();
    const workMode = String(formData.get("workMode") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const skills = skillsToArray(formData.get("skills"));

    const resume = formData.get("resume");

    if (!fullName || !email) {
      return {
        success: false,
        message: "Please enter your full name and email.",
      };
    }

    let resumePath: string | null = null;

    if (resume instanceof File && resume.size > 0) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(resume.type)) {
        return {
          success: false,
          message: "Please upload a PDF, DOC, or DOCX resume.",
        };
      }

      if (resume.size > 10 * 1024 * 1024) {
        return {
          success: false,
          message: "Resume file size must be under 10MB.",
        };
      }

      const filePath = `candidates/${Date.now()}-${crypto.randomUUID()}-${cleanFileName(
        resume.name
      )}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, resume, {
          contentType: resume.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Resume upload error:", uploadError);

        return {
          success: false,
          message: "Resume upload failed. Please try again.",
        };
      }

      resumePath = filePath;
    }

    const { error } = await supabase.from("candidates").insert({
      full_name: fullName,
      email,
      phone: phone || null,
      location: location || null,
      current_job_title: currentJobTitle || null,
      experience: experience || null,
      preferred_role: preferredRole || null,
      work_mode: workMode || null,
      skills,
      resume_path: resumePath,
      source: "general_upload",
      notes: message || null,
      status: "new",
    });

    if (error) {
      console.error("Candidate insert error:", error);

      return {
        success: false,
        message: "Could not save your profile. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "Your profile has been submitted. Ktech will review it for suitable IT opportunities.",
    };
  } catch (error) {
    console.error("Candidate action error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}