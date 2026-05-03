const bullets = [
  "Industry-aligned curriculum",
  "Practical training & airport exposure",
  "Strong placement support",
  "Mentorship from industry experts",
];

const stats = [
  { num: "15+", label: "Experience" },
  { num: "50+", label: "Industry Network" },
  { num: "100%", label: "Placement Support" },
  { num: "1000+", label: "Students Trained" },
];

export default function OurMission() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-5 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-wide text-[#d5ad51] font-medium mb-2">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#041d3d] leading-tight">
              Empowering Future Aviation Professionals
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Our mission is to provide industry-focused education that equips
              students with practical skills, real-world exposure, and the
              confidence to succeed in the aviation and management sectors.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-[#d5ad51] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="bg-[#f9fafb] rounded-xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6 text-center">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl md:text-3xl font-bold text-[#041d3d]">{num}</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
