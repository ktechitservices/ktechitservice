import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Home,
  Search,
  UploadCloud,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      <Navbar />

      <section className="relative overflow-hidden px-6 py-24 lg:px-8">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#1B3D2F]/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#1B3D2F] text-[#F4F1DE] shadow-xl">
            <Search size={42} />
          </div>

          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
            404 — Page not found
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#1B3D2F] md:text-7xl">
            This page seems to be off the shortlist.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#3D405B]">
            The page you are looking for may have been moved, deleted, or never
            existed. You can return home, explore jobs, or choose the right Ktech
            pathway below.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B3D2F] px-7 py-3 font-extrabold text-[#F4F1DE] transition hover:bg-[#163226]"
            >
              <Home size={18} />
              Back to Home
            </a>

            <a
              href="/jobs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
            >
              <BriefcaseBusiness size={18} />
              View Jobs
            </a>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <a
              href="/employers"
              className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <BriefcaseBusiness className="text-[#E07A5F]" size={28} />

              <h2 className="mt-5 text-2xl font-black text-[#1B3D2F]">
                Employers
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                Submit a hiring requirement and get relevant IT talent support.
              </p>
            </a>

            <a
              href="/candidates"
              className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <UploadCloud className="text-[#E07A5F]" size={28} />

              <h2 className="mt-5 text-2xl font-black text-[#1B3D2F]">
                Candidates
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                Upload your resume or search active IT job opportunities.
              </p>
            </a>

            <a
              href="/services"
              className="rounded-[2rem] border border-[#1B3D2F]/10 bg-white/75 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <ArrowLeft className="rotate-180 text-[#E07A5F]" size={28} />

              <h2 className="mt-5 text-2xl font-black text-[#1B3D2F]">
                Services
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#3D405B]">
                Explore Ktech’s IT staffing and services support.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}