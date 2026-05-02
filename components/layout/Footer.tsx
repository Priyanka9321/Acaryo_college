import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "PGDM Aviation", href: "/courses/pgdm-aviation" },
  { label: "BBA Aviation", href: "/courses/bba-aviation" },
  { label: "Apply Now", href: "/admissions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#02142b] border-t border-white/10 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 — Logo + About */}
          <div className="space-y-4">
            <Image
              src="/assets/images/logo.png"
              alt="Denali College Logo"
              height={48}
              width={160}
              className="h-12 w-auto object-contain"
            />
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              Premier aviation education institution in Bihar. PGDM &amp; BBA
              programs with 100% placement support and AICTE approval.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/70 text-sm hover:text-[#d5ad51] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/70 text-sm hover:text-[#d5ad51] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-white/70 text-sm leading-relaxed">
              <p>
                311 A, Ashiana Tower,
                <br />
                Exhibition Rd, Patna
              </p>
              <p>
                <a
                  href="tel:+919031202161"
                  className="hover:text-[#d5ad51] transition-colors"
                >
                  +91-9031202161
                </a>
              </p>
              <p>
                <a
                  href="mailto:denalicollegepatna@gmail.com"
                  className="hover:text-[#d5ad51] transition-colors break-all"
                >
                  denalicollegepatna@gmail.com
                </a>
              </p>
              <p>Mon–Fri: 9am – 6pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60 text-sm space-y-1">
          <p>
            © 2026 Denali College of Management &amp; Technology. All rights
            reserved.
          </p>
          <p>Kanhauli, Mahua, Vaishali, Bihar</p>
        </div>
      </div>
    </footer>
  );
}
