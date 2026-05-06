import Link from "next/link";

export default function AdmissionsHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#03112a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 20%, rgba(213,173,81,0.08) 0%, transparent 60%)",
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
        <span className="text-[#d5ad51]">Admissions</span>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-center gap-9 md:gap-16 px-5 py-7 pb-10 md:px-12 md:py-8 md:pb-16 max-w-7xl mx-auto w-full">
        {/* Left */}
        <div className="flex flex-col gap-5 md:flex-1 md:max-w-xl">
          <h1
            className="font-light leading-[1.05] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px, 10vw, 82px)" }}
          >
            Begin Your
            <br />
            <em className="text-[#d5ad51] not-italic">Journey</em>
          </h1>

          <p
            className="text-[15px] md:text-[17px] italic text-white/60 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Simple, transparent admissions — your aviation career starts here
          </p>

          <p className="text-sm md:text-[15px] leading-[1.85] text-white/50 font-light">
            Join{" "}
            <strong className="text-white/80 font-normal">5,000+ alumni</strong> who launched
            their aviation careers through Denali. Our admissions process is designed to be{" "}
            <strong className="text-white/80 font-normal">straightforward and supportive</strong>{" "}
            every step of the way.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <button className="flex items-center gap-2 bg-[#d5ad51] text-[#03112a] text-[11px] font-medium tracking-[0.1em] uppercase px-5 py-3 hover:bg-[#e8c46a] transition-all hover:-translate-y-px active:scale-95">
              Apply Now
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="flex items-center gap-2 border border-white/20 text-white/70 text-[11px] font-medium tracking-[0.1em] uppercase px-5 py-3 hover:border-[#d5ad51] hover:text-[#d5ad51] transition-all">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right — Steps card */}
        <div className="md:flex-1">
          <div
            className="relative"
            style={{ border: "1px solid rgba(213,173,81,0.15)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, #d5ad51, transparent)" }} />
            <div className="absolute top-0 left-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #d5ad51, transparent)" }} />

            <div className="px-5 pt-5 md:px-6 md:pt-7">
              <p className="flex items-center gap-2.5 text-[9px] tracking-[0.2em] uppercase text-white mb-4">
                Admission Process
                <span className="flex-1 h-px bg-white/[0.07]" />
              </p>
            </div>

            <div className="flex flex-col px-5 pb-5 md:px-6 md:pb-6 gap-4">
              {[
                { step: "01", title: "Fill Application", desc: "Complete the online form with your details" },
                { step: "02", title: "Document Submission", desc: "Upload required academic certificates" },
                { step: "03", title: "Counselling Session", desc: "Meet our advisors to choose the right program" },
                { step: "04", title: "Enrollment", desc: "Confirm your seat and begin your journey" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span
                    className="text-[28px] font-light text-[#d5ad51] leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <p className="text-[13px] text-white/80 font-medium">{item.title}</p>
                    <p className="text-[12px] text-white/40 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="relative z-10 flex items-center justify-between flex-wrap gap-2.5 px-5 py-3.5 md:px-12 md:py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex flex-wrap gap-3 md:gap-6">
          {["Merit Based", "Scholarship Available", "Easy EMI", "100% Placement"].map((tag) => (
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
