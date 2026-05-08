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
      className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
          Employer enquiry
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925]">
          Tell us who you need.
        </h2>

        <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
          Share your hiring requirement and KTech will review the role, timeline,
          and skills needed to support your shortlist.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 flex gap-3 rounded-2xl bg-[#CBF7ED] p-4 text-[#161925]">
          <CheckCircle2 className="shrink-0 text-[#23395B]" />
          <p className="text-sm font-bold">
            Your hiring request has been submitted. KTech will review it soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Full Name
          </label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={updateField}
            required
            placeholder="Your name"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Company Name
          </label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={updateField}
            required
            placeholder="Company Inc."
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Work Email
          </label>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={updateField}
            required
            placeholder="you@company.com"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Phone{" "}
            <span className="font-medium text-slate-500">(optional)</span>
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={updateField}
            placeholder="+1 000 000 0000"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#161925]">
          What IT role are you looking to fill?
        </label>
        <textarea
          name="hiringNeed"
          value={formData.hiringNeed}
          onChange={updateField}
          required
          rows={5}
          placeholder="Example: We need a React developer with AWS experience for a 6-month contract..."
          className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#161925]">
          How soon do you need to fill this?
        </label>
        <select
          name="urgency"
          value={formData.urgency}
          onChange={updateField}
          required
          className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
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
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Get My IT Talent Shortlist"}
        <Send size={18} />
      </button>
    </form>
  );
}