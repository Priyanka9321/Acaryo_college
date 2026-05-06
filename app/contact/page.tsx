import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us | Acaryo Institute of Technology and Management",
  description:
    "Get in touch with Acaryo Institute of Technology and Management. Contact us for admissions, courses, and general inquiries.",
  keywords: [
    "Contact Acaryo Institute",
    "College Contact Details",
    "Admission Inquiry",
    "Engineering College Contact",
    "College Address and Phone",
  ],
  openGraph: {
    title: "Contact Acaryo Institute",
    description:
      "Reach out to Acaryo Institute for admissions, support, and course-related queries.",
    url: "https://yourdomain.com/contact",
    siteName: "Acaryo Institute",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Acaryo Institute",
      },
    ],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
    </main>
  );
}