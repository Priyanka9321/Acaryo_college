import type { Metadata } from "next";
import AdmissionsHero from "@/components/sections/AdmissionsHero";

export const metadata: Metadata = {
  title: "Admissions | Acaryo Institute of Technology and Management",
  description:
    "Apply for admission at Acaryo Institute of Technology and Management. Check eligibility criteria, courses offered, and download the admission form.",
  keywords: [
    "Acaryo Institute Admissions",
    "Engineering Admission",
    "Management College Admission",
    "Apply Now College",
    "Admission Form Download",
  ],
  openGraph: {
    title: "Admissions | Acaryo Institute",
    description:
      "Start your journey with Acaryo Institute. Explore courses, eligibility, and apply for admission today.",
    url: "https://yourdomain.com/admissions",
    siteName: "Acaryo Institute",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Admissions at Acaryo Institute",
      },
    ],
    type: "website",
  },
};

export default function AdmissionsPage() {
  return (
    <main>
      <AdmissionsHero />
    </main>
  );
}