import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: "🏛️",
    title: "AICTE Approved",
    desc: "Nationally recognized programs",
  },
  {
    icon: "🤝",
    title: "50+ Partners",
    desc: "Airlines & airport recruiters",
  },
  {
    icon: "👨🏫",
    title: "Expert Faculty",
    desc: "Industry mentors and trainers",
  },
  {
    icon: "🎯",
    title: "100% Placement",
    desc: "Strong placement support",
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm text-secondary uppercase tracking-wide font-medium">
                  About Us
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Bihar&apos;s Premier Aviation Institute
                </h2>
              </div>

              <div className="flex flex-col gap-4 max-w-xl">
                <p className="text-gray-600 leading-relaxed">
                  Located in Kanhauli, Mahua, Vaishali — with our admission office
                  in Patna — the institute has been shaping careers since 2010.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We offer affordable, industry-aligned programs with hands-on
                  training, airport visits, and direct placement support with
                  leading airlines and airports across India.
                </p>
              </div>

              <div>
                <a
                  href="/about"
                  className="inline-block border border-primary text-primary px-5 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="p-5 rounded-lg border border-gray-100 shadow-soft hover:shadow-md transition-shadow duration-200">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="mt-3 font-semibold text-primary">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
