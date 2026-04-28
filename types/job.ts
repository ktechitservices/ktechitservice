export type PublicJob = {
  id?: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  workMode?: string;
  experience?: string;
  salary?: string;
  sourceType?: "client" | "internal";
  companyDisplayName?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
};