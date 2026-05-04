import AboutHero from "@/components/sections/AboutHero";
import OurMission from "@/components/sections/OurMission";
import CoreValues from "@/components/sections/CoreValues";

export const metadata = {
  title: "About Us | Denali College",
  description:
    "Learn about Denali College of Management & Technology — Bihar's premier aviation education institution since 2010.",
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
