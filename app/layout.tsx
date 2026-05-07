import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ktechitservices.com"),
  title: {
    default: "KTech IT Services | IT Staffing & Recruitment",
    template: "%s | KTech IT Services",
  },
  description:
    "KTech IT Services helps companies hire skilled IT professionals and helps candidates find better technology roles.",
  keywords: [
    "IT staffing",
    "IT recruitment",
    "IT services",
    "technology recruitment",
    "software developer hiring",
    "cloud engineer jobs",
    "data analyst jobs",
  ],
  openGraph: {
    title: "KTech IT Services | IT Staffing & Recruitment",
    description:
      "Hire skilled IT talent or find your next technology role with KTech IT Services.",
    url: "https://ktechitservices.com",
    siteName: "KTech IT Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KTech IT Services | IT Staffing & Recruitment",
    description:
      "Hire skilled IT talent or find your next technology role with KTech IT Services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>{children}</body>
    </html>
  );
}