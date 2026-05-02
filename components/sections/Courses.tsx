import Link from "next/link";
import Container from "@/components/ui/Container";
import { COURSES } from "@/constants/courses";

export default function Courses() {
  return (
    <section id="courses" className="bg-primary py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-wide text-secondary font-medium">
            Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Courses We Offer
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto text-sm md:text-base">
            Industry-aligned programs designed to prepare you for a successful career in aviation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="flex flex-col bg-white border border-gray-100 rounded-xl p-6 md:p-7 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col flex-1 space-y-4">
                {/* Tag */}
                <p className="text-xs uppercase tracking-wide text-secondary font-medium">
                  {course.tag}
                </p>

                {/* Title + Duration */}
                <div>
                  <h3 className="text-xl font-semibold text-primary">{course.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{course.duration}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>

                {/* Features */}
                <ul className="space-y-2 flex-1">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-secondary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={course.learnMoreUrl ?? "#"}
                    className="text-primary font-medium text-sm hover:underline"
                  >
                    Learn More →
                  </Link>
                  <Link
                    href={course.applyUrl ?? "#"}
                    className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-opacity-90 transition-opacity"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
