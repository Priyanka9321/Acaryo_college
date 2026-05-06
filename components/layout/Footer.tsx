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

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "Apple", href: "#", icon: AppleIcon },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[#e6ddd2] bg-[#fff] text-[#2f231f]">
      <div className="border-b border-[#ede3d8] bg-[#f6f4f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-4 md:px-6">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-[#2f231f] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[#8c1515]"
            >
              <Icon className="h-9 w-9" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,280px)_1fr_220px] lg:items-start">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/assets/images/logo.png"
              alt="Denali College Logo"
              height={72}
              width={220}
              className="h-14 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-6 text-[#4b3e38]">
              Premier aviation education institution in Bihar. PGDM &amp; BBA
              programs with 100% placement support and AICTE approval.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <FooterLinksColumn title="Quick Links" items={quickLinks} />
            <FooterLinksColumn title="Programs" items={programs} />
            <FooterContactColumn />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#8c1515]">
              Explore
            </h3>
            <div className="space-y-3">
              <ActionButton label="Home" />
              <ActionButton label="About Us" />
              <ActionButton label="Our Courses" />
              <ActionButton label="Admissions" />
              <ActionButton label="Contact" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinksColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#8c1515]">
        {title}
      </h3>
      <ul className="space-y-3 text-[#2f231f]">
        {items.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="text-[15px] hover:text-[#8c1515]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContactColumn() {
  return (
    <div className="space-y-3">
      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#8c1515]">
        Contact
      </h3>
      <div className="space-y-3 text-[15px] leading-6 text-[#2f231f]">
        <p>
          311 A, Ashiana Tower,
          <br />
          Exhibition Rd, Patna
        </p>
        <p>
          <a href="tel:+919031202161" className="hover:text-[#8c1515]">
            +91-9031202161
          </a>
        </p>
        <p>
          <a
            href="mailto:denalicollegepatna@gmail.com"
            className="break-all hover:text-[#8c1515]"
          >
            denalicollegepatna@gmail.com
          </a>
        </p>
        <p>Mon-Fri: 9am - 6pm</p>
      </div>
    </div>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="flex h-11 items-center justify-center border border-[#8b7766] bg-white px-5 text-[15px] font-medium text-[#5a4a42] shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:bg-[#f7f2ec]"
    >
      {label}
    </Link>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 8.5V6.9c0-.7.5-.9.8-.9h1.9V3h-2.6c-2.9 0-3.5 2.2-3.5 3.6v1.9H8v3h2.1V21h3.4v-9.5h2.3l.3-3h-2.6Z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 2h3.5l-7.7 8.8L24 22h-7.1l-5.6-7.2L5 22H1.5l8.2-9.4L0 2h7.3l5.1 6.5L18.9 2Zm-1.2 18h1.9L6.3 3.9H4.2L17.7 20Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.1 8.5H2.9V22h3.2V8.5ZM4.5 2A1.9 1.9 0 1 0 4.5 5.8 1.9 1.9 0 0 0 4.5 2ZM21.1 22h-3.2v-6.7c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V22H9.7V8.5h3.1v1.8h.1c.4-.8 1.5-2 3.4-2 3.7 0 4.4 2.4 4.4 5.6V22Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.5.4a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.4 7.5.4 7.5.4s5.8 0 7.5-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8Zm-12 7.7V8.9l5.1 3-5.1 3Z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.4 13.1c0-2 1.6-3 1.7-3.1-1-.7-2.6-.9-3.1-.9-1.3-.1-2.5.8-3.1.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.8 2.4 3.2 2.3 1.3 0 1.8-.8 3.4-.8 1.5 0 1.9.8 3.2.8 1.4 0 2.3-1.1 3.1-2.2.9-1.2 1.2-2.3 1.2-2.4 0 0-2.3-.9-2.3-3.4Zm-2.1-6.2c.7-.9 1.2-2 1.1-3.2-1 .1-2.2.7-2.9 1.6-.6.7-1.2 1.9-1.1 3 1.1.1 2.2-.6 2.9-1.4Z" />
    </svg>
  );
}
