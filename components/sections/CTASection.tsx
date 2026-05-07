import { ArrowRight, Mail, UploadCloud } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="bg-[#F4F1DE] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#1B3D2F] p-8 text-center text-[#F4F1DE] shadow-xl md:p-14">
        <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
          Ready to get started?
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Build your next technology team or find your next IT opportunity.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#F4F1DE]/80">
          Whether you are a company looking for skilled IT talent or a candidate
          looking for your next role, KTech helps connect the right people with
          the right opportunities.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F4F1DE] px-7 py-3 font-extrabold text-[#1B3D2F] transition hover:bg-white"
          >
            <Mail size={18} />
            Contact KTech
          </a>

          <a
            href="/candidates"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E07A5F] px-7 py-3 font-extrabold text-white transition hover:bg-[#cf6b52]"
          >
            <UploadCloud size={18} />
            Upload Resume
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 border-t border-[#F4F1DE]/15 pt-8 text-left md:grid-cols-3">
          <div className="rounded-3xl bg-[#F4F1DE]/10 p-5">
            <p className="text-lg font-black">For Employers</p>
            <p className="mt-2 text-sm leading-6 text-[#F4F1DE]/75">
              Submit hiring needs and receive relevant IT candidate shortlists.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F4F1DE]/10 p-5">
            <p className="text-lg font-black">For Candidates</p>
            <p className="mt-2 text-sm leading-6 text-[#F4F1DE]/75">
              Browse active roles or join KTech’s candidate database.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F4F1DE]/10 p-5">
            <p className="text-lg font-black">For Growth</p>
            <p className="mt-2 text-sm leading-6 text-[#F4F1DE]/75">
              Scale recruitment, IT services, and project-based talent support.
            </p>
          </div>
        </div>

        <a
          href="/#services"
          className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#E07A5F] hover:text-white"
        >
          Explore services <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}