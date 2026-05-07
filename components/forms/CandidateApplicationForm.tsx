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
      className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-6 shadow-xl md:p-8"
    >
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
          Candidate profile
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1B3D2F]">
          Upload your resume.
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#3D405B]">
          Share your details and join KTech’s IT talent database for current and
          future opportunities.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 flex gap-3 rounded-2xl bg-[#1B3D2F] p-4 text-[#F4F1DE]">
          <CheckCircle2 className="shrink-0 text-[#E07A5F]" />
          <p className="text-sm font-bold">{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-2xl bg-[#E07A5F]/15 p-4 text-sm font-bold text-[#E07A5F]">
          {message}
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
            placeholder="Your full name"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={updateField}
            required
            placeholder="you@email.com"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Phone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={updateField}
            placeholder="+1 000 000 0000"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Location
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={updateField}
            placeholder="City / Country"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Current Role
          </label>
          <input
            name="currentRole"
            value={formData.currentRole}
            onChange={updateField}
            placeholder="Frontend Developer, Data Analyst..."
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Experience
          </label>
          <input
            name="experience"
            value={formData.experience}
            onChange={updateField}
            placeholder="2 years, 5 years..."
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Preferred Role
          </label>
          <input
            name="preferredRole"
            value={formData.preferredRole}
            onChange={updateField}
            placeholder="Software Engineer, Cloud Engineer..."
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Work Mode
          </label>
          <select
            name="workMode"
            value={formData.workMode}
            onChange={updateField}
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition focus:border-[#E07A5F]"
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
        <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
          Key Skills
        </label>
        <input
          name="skills"
          value={formData.skills}
          onChange={updateField}
          placeholder="React, Node.js, AWS, SQL, Python..."
          className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
          Resume
        </label>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-[#1B3D2F]/20 bg-[#F4F1DE] px-6 py-8 text-center transition hover:border-[#E07A5F] hover:bg-white">
          <UploadCloud className="mb-3 text-[#E07A5F]" size={34} />

          <span className="text-sm font-extrabold text-[#1B3D2F]">
            Click to upload resume
          </span>

          <span className="mt-1 text-xs font-medium text-[#3D405B]/65">
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
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#1B3D2F] p-4 text-[#F4F1DE]">
            <FileText className="text-[#E07A5F]" size={20} />
            <p className="text-sm font-bold">{selectedFile.name}</p>
          </div>
        )}
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={updateField}
          rows={5}
          placeholder="Tell us about your background, availability, target role, or salary expectation..."
          className="w-full resize-none rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-6 py-3 font-extrabold text-white transition hover:bg-[#cf6b52] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Join Candidate Database"}
        <Send size={18} />
      </button>
    </form>
  );
}