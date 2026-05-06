import Link from "next/link";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 overflow-hidden bg-white py-20 sm:py-24 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b91c1c]/5 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-slate-900/[0.03] blur-3xl" />
      </div>

      <Container>
        <ScrollReveal delay={0}>
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
                About Acaryo
              </span>
              <span className="h-px w-10 bg-slate-300" />
            </div>

            <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl md:leading-[1.05]">
              Where Ambition Meets Opportunity
            </h2>

            <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-slate-600 sm:text-lg md:text-[1.15rem] md:leading-9">
              <p>
                At Acaryo Institute of Technology and Management, we believe
                education is more than knowledge&mdash;it&apos;s transformation.
                Our
                mission is to inspire innovation, cultivate critical thinking,
                and prepare students to lead in an ever-evolving world.
              </p>
              <p>
                Driven by excellence and guided by purpose, we create an
                ecosystem where learning goes beyond classrooms, ideas turn
                into action, and students grow into confident professionals
                ready to make an impact.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="mt-4 text-sm font-medium text-white bg-[#041d3d] px-6 py-2.5
             hover:bg-[#d5ad51] hover:text-black transition-all duration-300"
              >
                Explore Our Journey
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
