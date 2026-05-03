"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const COURSES = [
  "Diploma in Aviation Management",
  "Airport Ground Staff Training",
  "Cabin Crew Training",
  "Air Ticketing & Travel Management",
  "Other",
];

const EDUCATION_LEVELS = [
  "10th Pass",
  "12th Pass",
  "Undergraduate",
  "Graduate",
  "Postgraduate",
];

const EMPTY_FORM = {
  fullName: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  education: "",
  course: "",
  message: "",
};

function validate(form: typeof EMPTY_FORM): string | null {
  const required = [
    "fullName",
    "gender",
    "dob",
    "phone",
    "email",
    "education",
    "course",
  ] as const;
  for (const key of required) {
    if (!form[key].trim()) return "Please fill in all required fields.";
  }
  if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "").slice(-10)))
    return "Enter a valid 10-digit phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    return "Enter a valid email address.";
  return null;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate(form);
    if (validationError) return setError(validationError);

    setSubmitting(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm(EMPTY_FORM);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d5ad51] transition";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left — Highlight Card */}
          <div className="rounded-xl bg-[#041d3d] p-5 md:p-6 text-[#fff] h-fit shadow-sm">
            <div className="space-y-3">
              <p className="uppercase text-sm font-medium tracking-wide">
                Quick Enquiry
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Get in Touch With Us
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md">
                Fill in your details and we'll reach out within 24 hours.
              </p>
              <ul className="space-y-3 text-sm leading-6">
                {[
                  "Expert counsellors available 6 days a week",
                  "Personalised course guidance",
                  "No spam — only relevant updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-base font-semibold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Form Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-soft md:mt-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
                <div className="text-4xl">🎉</div>
                <h3 className="text-xl font-semibold text-[#041d3d]">
                  Thank you for reaching out!
                </h3>
                <p className="text-gray-500 text-sm">
                  Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(EMPTY_FORM);
                  }}
                  className="mt-2 text-sm text-[#d5ad51] font-medium hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Gender + DOB */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gender" className={labelClass}>
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={form.gender}
                      onChange={handleChange}
                      className={`${inputClass} bg-white`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dob" className={labelClass}>
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      required
                      value={form.dob}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Education */}
                <div>
                  <label htmlFor="education" className={labelClass}>
                    Education <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="education"
                    name="education"
                    required
                    value={form.education}
                    onChange={handleChange}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="" disabled>
                      Select qualification
                    </option>
                    {EDUCATION_LEVELS.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course */}
                <div>
                  <label htmlFor="course" className={labelClass}>
                    Course of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={form.course}
                    onChange={handleChange}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    {COURSES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Any questions or additional details…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#041d3d] text-white font-medium py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {submitting ? "Sending…" : "Send Enquiry"}
                </button>

                <p className="text-center text-xs text-gray-400">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
