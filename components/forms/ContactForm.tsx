"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success">("idle");

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `KTech Website Enquiry - ${formData.enquiryType || "General"}`
    );

    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Enquiry Type: ${formData.enquiryType}

Message:
${formData.message}
    `);

    window.location.href = `mailto:hello@ktechitservices.com?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#406E8E]">
          Contact form
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#161925]">
          Send KTech a message.
        </h2>

        <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
          Choose the right enquiry type so your message can be routed to the
          correct KTech pathway.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 flex gap-3 rounded-2xl bg-[#CBF7ED] p-4 text-[#161925]">
          <CheckCircle2 className="shrink-0 text-[#23395B]" />
          <p className="text-sm font-bold">
            Your email draft has been opened. Please send it from your email
            client.
          </p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-[#161925]">
            Full Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={updateField}
            required
            placeholder="Your name"
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
            Phone <span className="font-medium text-slate-500">(optional)</span>
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
            Company / Organisation
          </label>
          <input
            name="company"
            value={formData.company}
            onChange={updateField}
            placeholder="Company name"
            className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#161925]">
          Enquiry Type
        </label>
        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={updateField}
          required
          className="h-14 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#161925] outline-none transition focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
        >
          <option value="">Select enquiry type</option>
          <option value="Employer Hiring Requirement">
            Employer Hiring Requirement
          </option>
          <option value="Candidate / Resume Submission">
            Candidate / Resume Submission
          </option>
          <option value="IT Services Enquiry">IT Services Enquiry</option>
          <option value="Partnership Enquiry">Partnership Enquiry</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#161925]">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={updateField}
          required
          rows={6}
          placeholder="Tell us how KTech can help..."
          className="w-full resize-none rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#161925] outline-none transition placeholder:text-slate-400 focus:border-[#406E8E] focus:ring-4 focus:ring-[#CBF7ED]"
        />
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
      >
        Send Message
        <Send size={18} />
      </button>
    </form>
  );
}