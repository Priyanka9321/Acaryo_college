export default function AboutHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#03112a", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(213,173,81,0.08) 0%, transparent 60%)",
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
        <a
          href="/"
          className="text-white/30 hover:text-[#d5ad51] transition-colors"
        >
          Home
        </a>
        <span className="text-white/15">›</span>
        <span className="text-[#d5ad51]">About Us</span>
      </nav>

      {/* Main body — stacks on mobile, side-by-side on md+ */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-center gap-9 md:gap-16 px-5 py-7 pb-10 md:px-12 md:py-8 md:pb-16 max-w-7xl mx-auto w-full">
        {/* Left */}
        <div className="flex flex-col gap-5 md:flex-1 md:max-w-xl">
          <h1
            className="font-light leading-[1.05] text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 10vw, 82px)",
            }}
          >
            Shaping
            <br />
            <em className="text-[#d5ad51] not-italic">Aviation</em>
            <br />
            Leaders
          </h1>

          <p
            className="text-[15px] md:text-[17px] italic text-white/60 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Denali College of Management &amp; Technology
          </p>

          <p className="text-sm md:text-[15px] leading-[1.85] text-white/50 font-light">
            Established in{" "}
            <strong className="text-white/82 font-normal">2010</strong>, Denali
            has been Bihar&apos;s premier institution for aviation education —
            producing{" "}
            <strong className="text-white/82 font-normal">
              industry-ready professionals
            </strong>{" "}
            through rigorous academics, hands-on training, and{" "}
            <strong className="text-white/82 font-normal">
              100% placement support
            </strong>
            .
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button className="flex items-center gap-2 bg-[#d5ad51] text-[#03112a] text-[11px] font-medium tracking-[0.1em] uppercase px-5 py-3 hover:bg-[#e8c46a] transition-all hover:-translate-y-px active:scale-95">
              Explore Programs
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right — Stats card */}
        <div className="md:flex-1">
          <div
            className="relative"
            style={{
              border: "1px solid rgba(213,173,81,0.15)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Top + left accent lines */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, #d5ad51, transparent)",
              }}
            />
            <div
              className="absolute top-0 left-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, #d5ad51, transparent)",
              }}
            />

            <div className="px-5 pt-5 md:px-6 md:pt-7">
              <p
                className="flex items-center gap-2.5 text-[9px] tracking-[0.2em] uppercase text-[#fff] mb-4"
                style={{ borderBottom: "none" }}
              >
                Institution at a Glance
                <span className="flex-1 h-px bg-white/[0.07]" />
              </p>
            </div>

            <div
              className="grid grid-cols-2"
              style={{ gap: "1px", background: "rgba(255,255,255,0.04)" }}
            >
              {[
                { num: "15+", label: "Years of\nExcellence" },
                { num: "100%", label: "Placement\nSupport" },
                { num: "5k+", label: "Alumni in\nAviation" },
                { num: "#1", label: "Aviation College\nin Bihar" },
              ].map((s) => (
                <div
                  key={s.num}
                  className="p-5 md:p-6 hover:bg-[rgba(213,173,81,0.04)] transition-colors"
                  style={{ background: "#03112a" }}
                >
                  <div
                    className="text-[38px] md:text-[42px] font-light text-[#d5ad51] leading-none tracking-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.num}
                  </div>
                  <p className="mt-1.5 text-[12px] text-[#fff]/60 tracking-wide leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5 md:px-6 md:py-4"
              style={{
                background: "rgba(213,173,81,0.06)",
                borderTop: "1px solid rgba(213,173,81,0.1)",
              }}
            >
              <span
                className="text-[12px] text-[#fff]/70 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Est. <strong className="not-italic text-[#fff]">2010</strong>,
                Patna, Bihar
              </span>
              <span
                className="text-[9px] tracking-[0.12em] uppercase text-[#d5ad51] px-2 py-1"
                style={{
                  background: "rgba(213,173,81,0.1)",
                  border: "1px solid rgba(213,173,81,0.18)",
                }}
              >
                AICTE Approved
              </span>
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
          {["Aviation Management", "Airport Operations", "Hospitality"].map(
            (tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-[9px] md:text-[10px] tracking-[0.13em] uppercase text-[#fff]/50"
              >
                <span className="w-[3px] h-[3px] rounded-full bg-[#d5ad51] opacity-60" />
                {tag}
              </span>
            ),
          )}
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
