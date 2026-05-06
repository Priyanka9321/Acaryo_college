import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <nav
          className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#8c1515]">
            Home
          </Link>
          <span aria-hidden="true" className="text-slate-300">
            /
          </span>
          <span className="text-[#8c1515]">About Us</span>
        </nav>

        <div className="mb-6 text-center sm:mb-8 lg:mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            About Us
          </h1>
        </div>

        <div className="overflow-hidden rounded bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
          <div className="relative aspect-[16/9] w-full lg:aspect-[16/7]">
            <Image
              src="/assets/images/about.jpg"
              alt="About Acaryo Institute"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="py-8 text-center sm:py-10">
          <div className="text-[1.25rem] font-thin tracking-wide text-slate-400 sm:text-[1.5rem] sm:leading-10 lg:text-[1.75rem] lg:leading-[2.8rem]">
            <p>
              Acaryo Institute of Technology and Management, established in 2026 in Sikkim and affiliated with Sikkim Skill University, is a forward-thinking institution dedicated to industry-relevant and skill-based education, combining practical learning with real-world exposure to bridge academic knowledge with industry requirements. With programs in management, technology, aviation, data science, and fire & safety, we open diverse career paths through our &ldquo;Learn and Earn&rdquo; approach hands-on experience, internships, career guidance, and placement assistance empowering students to build successful and meaningful careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
