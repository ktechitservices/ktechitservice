"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2, FileText, Send, UploadCloud } from "lucide-react";
import { submitCandidateProfile } from "@/app/candidates/actions";

export function CandidateApplicationForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    currentRole: "",
    experience: "",
    skills: "",
    preferredRole: "",
    workMode: "",
    message: "",
  });

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

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10MB.");
      return;
    }

    setSelectedFile(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const payload = new FormData(event.currentTarget);
    const result = await submitCandidateProfile(payload);

    if (!result.success) {
      setStatus("error");
      setMessage(result.message);
      return;
    }

    setStatus("success");
    setMessage(result.message);
    setSelectedFile(null);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      currentRole: "",
      experience: "",
      skills: "",
      preferredRole: "",
      workMode: "",
      message: "",
    });

    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
          Candidate profile
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925]">
          Upload your resume.
        </h2>

        <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
          Share your profile with KTech for active IT roles and future
          technology opportunities.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 flex gap-3 rounded-2xl bg-[#CBF7ED] p-4 text-[#161925]">
          <CheckCircle2 className="shrink-0 text-[#23395B]" />
          <p className="text-sm font-bold">{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
          {message}
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
            placeholder="Your full name"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={updateField}
            required
            placeholder="you@email.com"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Phone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={updateField}
            placeholder="+1 000 000 0000"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Location
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={updateField}
            placeholder="City / Country"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Current Role
          </label>
          <input
            name="currentRole"
            value={formData.currentRole}
            onChange={updateField}
            placeholder="Frontend Developer, Data Analyst..."
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Experience
          </label>
          <input
            name="experience"
            value={formData.experience}
            onChange={updateField}
            placeholder="2 years, 5 years..."
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Preferred Role
          </label>
          <input
            name="preferredRole"
            value={formData.preferredRole}
            onChange={updateField}
            placeholder="Software Engineer, Cloud Engineer..."
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Work Mode
          </label>
          <select
            name="workMode"
            value={formData.workMode}
            onChange={updateField}
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          >
            <option value="">Select preference</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#161925]">
          Key Skills
        </label>
        <input
          name="skills"
          value={formData.skills}
          onChange={updateField}
          placeholder="React, Node.js, AWS, SQL, Python..."
          className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
        />
        <p className="mt-2 text-xs font-semibold text-slate-500">
          Separate skills with commas.
        </p>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#161925]">
          Resume
        </label>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#8EA8C3] bg-[#F8FAFC] px-6 py-8 text-center transition hover:border-[#406E8E] hover:bg-white">
          <UploadCloud className="mb-3 text-[#406E8E]" size={34} />

          <span className="text-sm font-black text-[#161925]">
            Click to upload resume
          </span>

          <span className="mt-1 text-xs font-semibold text-slate-500">
            PDF, DOC, or DOCX up to 10MB
          </span>

          <input
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {selectedFile && (
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#161925] p-4 text-white">
            <FileText className="text-[#CBF7ED]" size={20} />
            <p className="text-sm font-bold">{selectedFile.name}</p>
          </div>
        )}
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#161925]">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={updateField}
          rows={5}
          placeholder="Tell us about your background, availability, target role, or salary expectation..."
          className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Join Candidate Database"}
        <Send size={18} />
      </button>
    </form>
  );
}