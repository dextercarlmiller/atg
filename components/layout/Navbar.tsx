"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const services = [
  { label: "Managed IT", href: "/managed-it" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Co-Managed IT", href: "/co-managed-it" },
  { label: "VoIP & Phones", href: "/voip" },
  { label: "Security & Surveillance", href: "/security-surveillance" },
  { label: "AI Services", href: "/ai-services" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Legal", href: "/legal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServiceActive = services.some((s) => pathname.startsWith(s.href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/90 shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* LOGO: replace with <Image src="/images/atg-logo.png" width={160} height={50} alt="ATG" /> */}
            <span
              className="font-sora font-bold text-2xl tracking-tight"
              style={{ color: "#0A2463" }}
            >
              ATG
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-blue relative pb-1 ${
                  isActive(link.href)
                    ? "text-accent-blue after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:rounded"
                    : "text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent-blue pb-1 relative ${
                  isServiceActive
                    ? "text-accent-blue after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:rounded"
                    : "text-text-primary"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-text-primary hover:bg-light-bg hover:text-accent-blue transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-blue relative pb-1 ${
                  isActive(link.href)
                    ? "text-accent-blue after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:rounded"
                    : "text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:18338324033"
              className="flex items-center gap-1.5 text-sm font-bold text-text-primary hover:text-accent-blue transition-colors"
            >
              <Phone className="w-4 h-4" />
              1-833-832-4033
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Assessment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 text-accent-blue"
                    : "text-text-primary hover:bg-light-bg"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-text-primary hover:bg-light-bg"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-text-secondary hover:text-accent-blue transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 text-accent-blue"
                    : "text-text-primary hover:bg-light-bg"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-border space-y-3">
              <a
                href="tel:18338324033"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-text-primary border border-primary-blue rounded-lg"
              >
                <Phone className="w-4 h-4" />
                1-833-832-4033
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-accent-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Assessment
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
