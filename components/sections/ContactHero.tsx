import Link from "next/link";

export default function ContactHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#03112a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(213,173,81,0.07) 0%, transparent 60%)",
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
        <span className="text-[#d5ad51]">Contact</span>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-center gap-9 md:gap-16 px-5 py-7 pb-10 md:px-12 md:py-8 md:pb-16 max-w-7xl mx-auto w-full">
        {/* Left */}
        <div className="flex flex-col gap-5 md:flex-1 md:max-w-xl">
          <h1
            className="font-light leading-[1.05] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px, 10vw, 82px)" }}
          >
            Get In
            <br />
            <em className="text-[#d5ad51] not-italic">Touch</em>
          </h1>

          <p
            className="text-[15px] md:text-[17px] italic text-white/60 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We&apos;re here to answer every question about your aviation future
          </p>

          <p className="text-sm md:text-[15px] leading-[1.85] text-white/50 font-light">
            Reach out to our admissions team, visit our campus in{" "}
            <strong className="text-white/80 font-normal">Patna, Bihar</strong>, or drop us a
            message. We typically respond within{" "}
            <strong className="text-white/80 font-normal">24 hours</strong>.
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
                  <p className="text-[10px] tracking-[0.12em] uppercase text-[#d5ad51]/70">{item.label}</p>
                  <p className="text-[13px] text-white/60">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Contact form */}
        <div className="md:flex-1">
          <div
            className="relative"
            style={{ border: "1px solid rgba(213,173,81,0.15)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, #d5ad51, transparent)" }} />
            <div className="absolute top-0 left-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #d5ad51, transparent)" }} />

            <div className="px-5 pt-5 md:px-6 md:pt-7">
              <p className="flex items-center gap-2.5 text-[9px] tracking-[0.2em] uppercase text-white mb-5">
                Send a Message
                <span className="flex-1 h-px bg-white/[0.07]" />
              </p>
            </div>

            <form className="flex flex-col gap-4 px-5 pb-6 md:px-6">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-white/40">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-white/[0.04] border border-white/10 text-white/70 text-sm px-3 py-2.5 outline-none focus:border-[#d5ad51]/40 transition-colors placeholder:text-white/20"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.12em] uppercase text-white/40">Message</label>
                <textarea
                  rows={3}
                  placeholder="How can we help you?"
                  className="bg-white/[0.04] border border-white/10 text-white/70 text-sm px-3 py-2.5 outline-none focus:border-[#d5ad51]/40 transition-colors placeholder:text-white/20 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-1 bg-[#d5ad51] text-[#03112a] text-[11px] font-medium tracking-[0.1em] uppercase px-5 py-3 hover:bg-[#e8c46a] transition-all hover:-translate-y-px active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="relative z-10 flex items-center justify-between flex-wrap gap-2.5 px-5 py-3.5 md:px-12 md:py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex flex-wrap gap-3 md:gap-6">
          {["Mon–Sat: 9am–6pm", "Patna, Bihar", "AICTE Approved"].map((tag) => (
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
