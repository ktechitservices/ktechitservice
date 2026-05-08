import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { AudienceToggle } from "@/components/sections/AudienceToggle";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedJobs } from "@/components/sections/FeaturedJobs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "KTech IT Services",
  description:
    "KTech connects employers with skilled IT talent and helps candidates find technology roles that match their skills.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Navbar />
      <Hero />
      <ProofBar />
      <AudienceToggle />
      <ServicesSection />
      <FeaturedJobs />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}