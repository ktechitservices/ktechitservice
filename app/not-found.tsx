import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  BriefcaseBusiness,
  Home,
  Search,
  UploadCloud,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />

      <section className="border-b border-[#E2E8F0] bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#23395B] text-white shadow-lg">
              <Search size={36} />
            </div>

            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#406E8E]">
              404 — Page Not Found
            </p>

            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight text-[#161925] sm:text-5xl lg:text-6xl">
              This page is not available.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The page you are looking for may have been moved, deleted, or does
              not exist. You can return home, browse open IT jobs, or choose the
              right KTech pathway below.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23395B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B2D49]"
              >
                <Home size={18} />
                Back to Home
              </a>

              <a
                href="/jobs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-bold text-[#23395B] transition hover:border-[#23395B] hover:bg-slate-50"
              >
                <BriefcaseBusiness size={18} />
                View Jobs
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <a
              href="/employers"
              className="group rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white transition group-hover:bg-[#406E8E]">
                <BriefcaseBusiness size={26} />
              </div>

              <h2 className="text-2xl font-black tracking-tight text-[#161925]">
                For Employers
              </h2>

              <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                Submit a hiring requirement and get relevant IT talent support
                from KTech.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#23395B] group-hover:text-[#406E8E]">
                Hire talent <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="/candidates"
              className="group rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white transition group-hover:bg-[#406E8E]">
                <UploadCloud size={26} />
              </div>

              <h2 className="text-2xl font-black tracking-tight text-[#161925]">
                For Candidates
              </h2>

              <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                Search active IT jobs or upload your resume for future
                technology opportunities.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#23395B] group-hover:text-[#406E8E]">
                Upload resume <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="/services"
              className="group rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#8EA8C3] hover:bg-white hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23395B] text-white transition group-hover:bg-[#406E8E]">
                <Search size={26} />
              </div>

              <h2 className="text-2xl font-black tracking-tight text-[#161925]">
                Services
              </h2>

              <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                Explore KTech’s IT staffing, recruitment, and technology
                services support.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#23395B] group-hover:text-[#406E8E]">
                View services <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}