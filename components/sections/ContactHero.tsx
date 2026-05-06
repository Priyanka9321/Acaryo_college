import Link from "next/link";

export default function ContactHero() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "#03112a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(213,173,81,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(213,173,81,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(213,173,81,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, transparent 100%)",
        }}
      />

      <nav
        className="relative z-10 flex items-center gap-2 px-5 pt-5 text-[10px] uppercase tracking-[0.14em] md:px-12 md:pt-7"
        aria-label="Breadcrumb"
      >
        <Link
          href="/"
          className="text-white/30 transition-colors hover:text-[#d5ad51]"
        >
          Home
        </Link>
        <span aria-hidden="true" className="text-white/15">
          /
        </span>
        <span className="text-[#d5ad51]">Contact</span>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col gap-9 px-5 py-7 pb-10 md:flex-row md:items-center md:gap-16 md:px-12 md:py-8 md:pb-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-5 md:max-w-xl md:flex-1">
          <h1
            className="font-light leading-[1.05] text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 10vw, 82px)",
            }}
          >
            Get In
            <br />
            <em className="not-italic text-[#d5ad51]">Touch</em>
          </h1>

          <p
            className="text-[15px] tracking-wide text-white/60 italic md:text-[17px]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We&apos;re here to answer every question about your aviation future
          </p>

          <p className="text-sm font-light leading-[1.85] text-white/50 md:text-[15px]">
            Reach out to our admissions team, visit our campus in{" "}
            <strong className="font-normal text-white/80">Patna, Bihar</strong>, or drop us a
            message. We typically respond within{" "}
            <strong className="font-normal text-white/80">24 hours</strong>.
          </p>

          <div className="flex flex-col gap-3 pt-1">
            {[
              { icon: "📍", label: "Address", value: "Denali College, Patna, Bihar" },
              { icon: "📞", label: "Phone", value: "+91 XXXXX XXXXX" },
              { icon: "✉️", label: "Email", value: "admissions@denalicollege.in" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-base">{item.icon}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[#d5ad51]/70">
                    {item.label}
                  </p>
                  <p className="text-[13px] text-white/60">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:flex-1">
          <div
            className="relative"
            style={{
              border: "1px solid rgba(213,173,81,0.15)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="absolute left-0 right-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, #d5ad51, transparent)" }}
            />
            <div
              className="absolute bottom-0 left-0 top-0 w-px"
              style={{ background: "linear-gradient(to bottom, #d5ad51, transparent)" }}
            />

            <div className="px-5 pt-5 md:px-6 md:pt-7">
              <p className="mb-5 flex items-center gap-2.5 text-[9px] uppercase tracking-[0.2em] text-white">
                Send a Message
                <span className="h-px flex-1 bg-white/[0.07]" />
              </p>
            </div>

            <form className="flex flex-col gap-4 px-5 pb-6 md:px-6">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-[0.12em] text-white/40">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white/70 outline-none transition-colors placeholder:text-white/20 focus:border-[#d5ad51]/40"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-[0.12em] text-white/40">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="How can we help you?"
                  className="resize-none border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white/70 outline-none transition-colors placeholder:text-white/20 focus:border-[#d5ad51]/40"
                />
              </div>
              <button
                type="submit"
                className="mt-1 bg-[#d5ad51] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-[#03112a] transition-all hover:-translate-y-px hover:bg-[#e8c46a] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 px-5 py-3.5 md:px-12 md:py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex flex-wrap gap-3 md:gap-6">
          {["Mon-Sat: 9am-6pm", "Patna, Bihar", "AICTE Approved"].map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.13em] text-[#fff]/50 md:text-[10px]"
            >
              <span className="h-[3px] w-[3px] rounded-full bg-[#d5ad51] opacity-60" />
              {tag}
            </span>
          ))}
        </div>
        <span
          className="text-[11px] italic tracking-wide text-[#fff]/50"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Denali - Bihar&apos;s Skyward Institution
        </span>
      </div>
    </section>
  );
}
