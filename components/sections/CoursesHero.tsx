import Link from "next/link";

export default function CoursesHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#03112a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(213,173,81,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(213,173,81,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(213,173,81,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Breadcrumb */}
      <nav className="relative z-10 flex items-center gap-2 px-5 pt-5 md:px-12 md:pt-7 text-[10px] tracking-[0.14em] uppercase">
        <Link href="/" className="text-white/30 hover:text-[#d5ad51] transition-colors">Home</Link>
        <span className="text-white/15">›</span>
        <span className="text-[#d5ad51]">Courses</span>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 py-10 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-5 max-w-2xl">
          <h1
            className="font-light leading-[1.05] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px, 10vw, 82px)" }}
          >
            Our
            <br />
            <em className="text-[#d5ad51] not-italic">Programs</em>
          </h1>

          <p
            className="text-[15px] md:text-[17px] italic text-white/60 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Industry-aligned aviation courses designed for tomorrow&apos;s professionals
          </p>

          <p className="text-sm md:text-[15px] leading-[1.85] text-white/50 font-light">
            From{" "}
            <strong className="text-white/80 font-normal">Airport Management</strong> to{" "}
            <strong className="text-white/80 font-normal">Cabin Crew Training</strong>, our
            programs are crafted with industry experts to ensure{" "}
            <strong className="text-white/80 font-normal">career-ready graduates</strong>.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <button className="flex items-center gap-2 bg-[#d5ad51] text-[#03112a] text-[11px] font-medium tracking-[0.1em] uppercase px-5 py-3 hover:bg-[#e8c46a] transition-all hover:-translate-y-px active:scale-95">
              View All Courses
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="relative z-10 flex items-center justify-between flex-wrap gap-2.5 px-5 py-3.5 md:px-12 md:py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex flex-wrap gap-3 md:gap-6">
          {["Aviation Management", "Airport Operations", "Cabin Crew", "Hospitality"].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 text-[9px] md:text-[10px] tracking-[0.13em] uppercase text-[#fff]/50">
              <span className="w-[3px] h-[3px] rounded-full bg-[#d5ad51] opacity-60" />
              {tag}
            </span>
          ))}
        </div>
        <span
          className="text-[11px] text-[#fff]/50 italic tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Denali — Bihar&apos;s Skyward Institution
        </span>
      </div>
    </section>
  );
}
