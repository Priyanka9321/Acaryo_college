const testimonials = [
  {
    text: "Denali College transformed my career. The placement support was exceptional and I landed my dream job within months.",
    name: "Priya Sharma",
    role: "Ground Operations, IndiGo",
  },
  {
    text: "The PGDM program gave me deep industry knowledge. Faculty are experienced and supportive.",
    name: "Rahul Verma",
    role: "Airport Manager, AAI",
  },
  {
    text: "Best decision of my life! Practical training and exposure are unmatched.",
    name: "Sneha Patel",
    role: "Cabin Crew, Air India",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-secondary uppercase tracking-wide">Student Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            What Our Graduates Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ text, name, role }) => (
            <div
              key={name}
              className="h-full bg-white p-6 rounded-xl border border-gray-100 shadow-soft hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <span className="text-sm" style={{ color: "#d5ad51" }}>★★★★★</span>
              <p className="text-gray-600 leading-relaxed mt-3 flex-1">{text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center shrink-0">
                  {name[0]}
                </div>
                <div>
                  <p className="font-medium text-primary">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
