"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// eslint-disable-next-line @next/next/no-img-element
import logoSrc from "@/assets/images/Logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Fixed Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* LEFT: Logo */}
            <Link href="/" aria-label="Home" className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc.src ?? logoSrc}
                alt="College Logo"
                className="h-12 w-auto md:h-16 object-contain rounded-full"
              />
            </Link>

            {/* CENTER: Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`relative text-sm md:text-base font-medium transition-colors duration-200 py-1 group ${isActive
                        ? "text-[#d5ad51]"
                        : "text-[#041d3d] hover:text-[#d5ad51]"
                      }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-[#d5ad51] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Apply Now + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/admissions"
                className="text-sm font-medium text-white bg-[#041d3d] px-4 py-2
                          hover:bg-[#d5ad51] hover:text-black hover:opacity-90 transition-opacity duration-200"
              >
                Apply Now
              </Link>

              {/* Hamburger — mobile only */}
              <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10
                           gap-[5px] rounded-md hover:bg-gray-100 transition-colors duration-200
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d5ad51]"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span
                  className={`block h-[2px] w-6 bg-[#041d3d] rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                />
                <span
                  className={`block h-[2px] bg-[#041d3d] rounded-full transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`}
                />
                <span
                  className={`block h-[2px] w-6 bg-[#041d3d] rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white flex flex-col items-center justify-center
                    transition-all duration-300 ${menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col items-center space-y-6"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition-colors duration-200 ${isActive
                    ? "text-[#d5ad51]"
                    : "text-[#041d3d] hover:text-[#d5ad51]"
                  }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/admissions"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-sm font-medium text-white bg-[#041d3d] px-6 py-2.5
             hover:bg-[#d5ad51] hover:text-black transition-all duration-300"
          >
            Apply Now
          </Link>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
