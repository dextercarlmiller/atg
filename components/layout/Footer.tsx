import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

const services = [
  { label: "Managed IT Services", href: "/managed-it" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Co-Managed IT", href: "/co-managed-it" },
  { label: "VoIP & Phone Systems", href: "/voip" },
  { label: "Security & Surveillance", href: "/security-surveillance" },
  { label: "AI Services", href: "/ai-services" },
];

const locations = [
  {
    city: "Fort Wayne, IN",
    note: "Headquarters",
    phone: "260-482-2844",
    hours: "Mon–Fri 8am–5pm",
  },
  {
    city: "Indianapolis, IN",
    phone: "317-759-2062",
    hours: "Mon–Fri 8am–5pm",
  },
  {
    city: "Lima, OH",
    phone: "419-549-5599",
    hours: "Mon–Fri 8am–5pm",
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A2463" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            {/* LOGO: replace with <Image src="/images/atg-logo-white.png" width={160} height={50} alt="ATG" /> */}
            <span className="font-sora font-bold text-3xl tracking-tight text-white">
              ATG
            </span>
            <p className="text-blue-200 text-sm leading-relaxed">
              Specializing in Technology Solutions Since 1996
            </p>
            <div className="flex gap-4 pt-1">
              <a
                href="https://www.facebook.com/ATGFW/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-300 hover:text-white transition-colors"
              >
                {/* Facebook icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/3064845/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-300 hover:text-white transition-colors"
              >
                {/* LinkedIn icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-sora font-semibold text-white text-base mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Locations & Contact */}
          <div>
            <h3 className="font-sora font-semibold text-white text-base mb-5">
              Locations & Contact
            </h3>
            <div className="space-y-5">
              {locations.map((loc) => (
                <div key={loc.city} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-white text-sm font-medium">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-accent-blue" />
                    {loc.city}
                    {loc.note && (
                      <span className="text-xs text-blue-300 font-normal">
                        ({loc.note})
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 ml-5 text-blue-200 text-sm">
                    <Phone className="w-3 h-3 flex-shrink-0" />
                    <a href={`tel:${loc.phone.replace(/-/g, "")}`} className="hover:text-white transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 ml-5 text-blue-300 text-xs">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    {loc.hours}
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-blue-800">
                <p className="text-sm text-white font-semibold">
                  Toll-Free:{" "}
                  <a href="tel:18338324033" className="text-accent-blue hover:text-blue-300 transition-colors">
                    1-833-832-4033
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>
            © {new Date().getFullYear()} Applied Technology Group Inc. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/legal" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Legal Documents
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
