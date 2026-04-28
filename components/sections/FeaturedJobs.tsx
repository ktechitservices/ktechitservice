import { getActiveJobs } from "@/lib/jobs";
import { FeaturedJobsClient } from "@/components/sections/FeaturedJobsClient";

export async function FeaturedJobs() {
  const jobs = await getActiveJobs(3);

  return <FeaturedJobsClient jobs={jobs} />;
}