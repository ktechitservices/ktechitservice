"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ClipboardList,
  SearchCheck,
  UsersRound,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Share Requirement",
    description:
      "Employers submit role details, required skills, work mode, budget, and hiring timeline.",
  },
  {
    icon: SearchCheck,
    title: "Screen & Match",
    description:
      "Ktech filters candidates based on technical skills, experience, availability, and role fit.",
  },
  {
    icon: UsersRound,
    title: "Shortlist Talent",
    description:
      "You receive a focused shortlist of relevant IT professionals instead of generic applications.",
  },
  {
    icon: Handshake,
    title: "Hire & Scale",
    description:
      "Interview, select, and onboard the right technology talent for your business needs.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#F4F1DE] px-6 py-24 lg:px-8">
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E07A5F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
            Simple process. Faster hiring.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#3D405B]">
            Ktech keeps the hiring journey focused, structured, and fast so
            businesses can spend less time filtering and more time selecting the
            right talent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-[#1B3D2F]/10 bg-white/70 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F]">
                  <Icon size={28} />
                </div>

                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E07A5F] text-sm font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black tracking-tight text-[#1B3D2F]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#3D405B]">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-[#E07A5F]/60 md:block">
                    <ArrowRight size={26} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}