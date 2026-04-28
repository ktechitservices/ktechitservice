import type { MetadataRoute } from "next";
import { getActiveJobs } from "@/lib/jobs";

const baseUrl = "https://ktechitservices.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs = await getActiveJobs();
  const staticPages = [
    "",
    "/employers",
    "/candidates",
    "/jobs",
    "/services",
    "/industries",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const jobPages = jobs.map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...jobPages];
}
