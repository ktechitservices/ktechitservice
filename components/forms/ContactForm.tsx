"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    company: "",
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

Note: This contact form currently opens an email draft. In the backend stage, this will be routed into CRM/admin dashboard.
    `);

    window.location.href = `mailto:hello@ktechitservices.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/80 p-6 shadow-xl md:p-8"
    >
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
          Contact form
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1B3D2F]">
          Send KTech a message.
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#3D405B]">
          Choose the right enquiry type so your message can be routed to the
          correct KTech pathway.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Full Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={updateField}
            required
            placeholder="Your name"
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
            Phone{" "}
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

        <div>
          <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
            Company / Organisation
          </label>
          <input
            name="company"
            value={formData.company}
            onChange={updateField}
            placeholder="Company name"
            className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
          Enquiry Type
        </label>
        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={updateField}
          required
          className="w-full rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition focus:border-[#E07A5F]"
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
        <label className="mb-2 block text-sm font-bold text-[#1B3D2F]">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={updateField}
          required
          rows={6}
          placeholder="Tell us how KTech can help..."
          className="w-full resize-none rounded-2xl border border-[#1B3D2F]/10 bg-[#F4F1DE] px-4 py-3 text-sm font-medium text-[#3D405B] outline-none transition placeholder:text-[#3D405B]/45 focus:border-[#E07A5F]"
        />
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-6 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
      >
        Send Message
        <Send size={18} />
      </button>
    </form>
  );
}