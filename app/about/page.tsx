import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import OurMission from "@/components/sections/OurMission";
import CoreValues from "@/components/sections/CoreValues";

export const metadata: Metadata = {
  title: "About Us | Acaryo Institute of Technology and Management",
  description:
    "Learn about Acaryo Institute of Technology and Management — a premier institution focused on excellence in engineering, technology, and management education.",
  keywords: [
    "About Acaryo Institute",
    "Engineering College",
    "Management Institute",
    "Technology Education",
    "College Overview",
  ],
  openGraph: {
    title: "About Acaryo Institute",
    description:
      "Discover our mission, vision, and core values that drive excellence in education.",
    url: "https://yourdomain.com/about",
    siteName: "Acaryo Institute",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Acaryo Institute",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurMission />
      <CoreValues />
    </main>
  );
}