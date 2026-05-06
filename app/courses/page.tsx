import type { Metadata } from "next";
import CoursesHero from "@/components/sections/CoursesHero";

export const metadata: Metadata = {
  title: "Courses | Acaryo Institute of Technology and Management",
  description:
    "Explore a wide range of courses at Acaryo Institute, including engineering, technology, and management programs designed for future careers.",
  keywords: [
    "Acaryo Institute Courses",
    "Engineering Courses",
    "Management Programs",
    "Technology Courses",
    "College Programs India",
  ],
  openGraph: {
    title: "Courses | Acaryo Institute",
    description:
      "Discover industry-focused courses at Acaryo Institute to build your career in engineering and management.",
    url: "https://yourdomain.com/courses",
    siteName: "Acaryo Institute",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Courses at Acaryo Institute",
      },
    ],
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <main>
      <CoursesHero />
    </main>
  );
}