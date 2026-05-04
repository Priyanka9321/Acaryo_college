const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description:
      "We maintain the highest academic standards, ensuring every graduate is prepared to excel in their aviation career from day one.",
  },
  {
    icon: "🤝",
    title: "Commitment",
    description:
      "Our 100% placement guarantee is not just a promise — it's our commitment to every student who trusts us with their future.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We continuously update our curriculum to match the rapidly evolving aviation industry, keeping students ahead of the curve.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#f9fafb] py-16 md:py-20">
      <div className="container mx-auto px-5 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-[#d5ad51] font-medium mb-2">
            What We Stand For
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041d3d] leading-tight">
            Our Core Values
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center
                         transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <span className="text-4xl mb-4">{icon}</span>
              <h3 className="text-lg font-bold text-[#041d3d] mb-3">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
