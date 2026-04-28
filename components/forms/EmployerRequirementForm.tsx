"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function EmployerRequirementForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phone: "",
    hiringNeed: "",
    urgency: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  function updateField(
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const supabase = createClient();

    const { error } = await supabase.from("employer_leads").insert({
      full_name: formData.fullName,
      company_name: formData.companyName,
      work_email: formData.workEmail,
      phone: formData.phone || null,
      hiring_need: formData.hiringNeed,
      urgency: formData.urgency,
      status: "new",
    });

    if (error) {
      console.error("Employer lead error:", error);
      setStatus("error");
      return;
    }

    setStatus("success");

    setFormData({
      fullName: "",
      companyName: "",
      workEmail: "",
      phone: "",
      hiringNeed: "",
      urgency: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-6 shadow-xl md:p-8"
    >
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
          Employer lead form
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1B3D2F]">
          Tell us who you need.
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#3D405B]">
          Share your hiring need and Ktech will help identify suitable IT talent
          for your team.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 flex gap-3 rounded-2xl bg-[#1B3D2F] p-4 text-[#F4F1DE]">
          <CheckCircle2 className="shrink-0 text-[#E07A5F]" />
          <p className="text-sm font-bold">
            Your hiring request has been submitted. Ktech will review it soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-2xl bg-[#E07A5F]/15 p-4 text-sm font-bold text-[#E07A5F]">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Full Name
          </label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={updateField}
            required
            placeholder="Your name"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Company Name
          </label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={updateField}
            required
            placeholder="Company Inc."
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Work Email
          </label>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={updateField}
            required
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Phone Number{" "}
            <span className="font-medium text-[#3D405B]/60">(optional)</span>
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={updateField}
            placeholder="+1 000 000 0000"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
          What IT role are you looking to fill?
        </label>
        <textarea
          name="hiringNeed"
          value={formData.hiringNeed}
          onChange={updateField}
          required
          rows={4}
          placeholder="Example: We need a React developer with AWS experience for a 6-month contract..."
          className="w-full resize-none rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
          How soon do you need to fill this?
        </label>
        <select
          name="urgency"
          value={formData.urgency}
          onChange={updateField}
          required
          className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition focus:border-[#E07A5F]"
        >
          <option value="">Select timeline</option>
          <option value="Immediately">Immediately</option>
          <option value="Within 30 days">Within 30 days</option>
          <option value="1–3 months">1–3 months</option>
          <option value="Exploring options">Exploring options</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Get My IT Talent Shortlist"}
        <Send size={18} />
      </button>
    </form>
  );
}