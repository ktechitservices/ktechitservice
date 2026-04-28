"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Layers3,
  ShieldCheck,
  Cloud,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Source skilled developers, analysts, cloud engineers, cybersecurity experts, and IT professionals for contract or permanent roles.",
  },
  {
    icon: Code2,
    title: "Software Development Talent",
    description:
      "Connect with frontend, backend, full-stack, mobile, and DevOps professionals who can support modern product delivery.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Support cloud migration, DevOps, automation, infrastructure, and platform engineering hiring needs.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Hire data analysts, BI developers, data engineers, and reporting specialists for insight-driven teams.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Support",
    description:
      "Access security-focused professionals for compliance, risk, monitoring, governance, and secure technology operations.",
  },
  {
    icon: Layers3,
    title: "Project-Based Teams",
    description:
      "Build flexible technology teams for transformation projects, product builds, migrations, and digital delivery.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#F4F1DE] px-6 py-24 lg:px-8">
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E07A5F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#E07A5F]">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#1B3D2F] md:text-6xl">
            IT services and recruitment built for growing technology teams.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3D405B]">
            Ktech combines IT staffing, candidate database management, and
            technology delivery support to help businesses hire and scale
            faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-[2rem] border border-[#1B3D2F]/10 bg-white/65 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DDEDE6] text-[#1B3D2F] transition group-hover:bg-[#1B3D2F] group-hover:text-[#F4F1DE]">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black tracking-tight text-[#1B3D2F]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#3D405B]">
                  {service.description}
                </p>

                <a
                  href="/employers"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#E07A5F]"
                >
                  Learn more
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}