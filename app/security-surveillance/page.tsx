import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import ContactForm from "@/components/ui/ContactForm";
import {
  Camera,
  CreditCard,
  Bell,
  AlertTriangle,
  Lightbulb,
  MapPin,
  Smartphone,
  Wifi,
  Building2,
  Home,
  ExternalLink,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physical Security & Surveillance | Applied Technology Group | Fort Wayne, IN",
  description:
    "ATG provides video surveillance, access control, 24/7 alarm monitoring, and Alarm.com-powered smart security for businesses and homes across Indiana and Ohio.",
  openGraph: {
    title: "Physical Security & Surveillance | ATG",
    description:
      "Protect your people, property, and assets with intelligent security solutions monitored 24/7.",
  },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const services = [
  {
    icon: Camera,
    title: "Video Surveillance",
    description: "On-premise and cloud cameras with analytics — indoors, outdoors, and everything in between.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: CreditCard,
    title: "Access Control",
    description: "FOBs, key cards, badges, or mobile access. Multi-site management from one platform.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Bell,
    title: "24/7 Alarm Monitoring",
    description: "Certified monitoring team responds to every emergency — around the clock.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: AlertTriangle,
    title: "Intrusion Detection",
    description: "Instant alerts, local sirens, and automatic camera activation on breach.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Lightbulb,
    title: "Smart Building Controls",
    description: "Remotely manage lights, HVAC, garage doors, and more from your phone.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: MapPin,
    title: "Vehicle & Asset Tracking",
    description: "Real-time GPS tracking for company vehicles and valuable assets.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description: "Arm/disarm, view cameras, manage access, and receive alerts from anywhere.",
    color: "text-accent-blue",
    bg: "bg-blue-50",
  },
  {
    icon: Wifi,
    title: "Hybrid Solutions",
    description: "Wired, wireless, or hybrid — we design the right system for your space.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
];

export default function SecuritySurveillancePage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-sm text-orange-200 font-medium">
              Authorized Alarm.com Dealer
            </span>
          </div>
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Physical Security & Surveillance
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed mb-8 max-w-2xl">
            Protect your people, property, and assets with intelligent security solutions
            — monitored 24/7 by a certified team.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-7 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Get a Free Security Assessment
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Complete Physical Security Solutions
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              From cameras to access control — one company manages it all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg ${s.bg} mb-4`}>
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <h3 className="font-sora font-semibold text-text-primary text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alarm.com Partner */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-blue-200 font-medium">Authorized Alarm.com Dealer</span>
            </div>
            <h2 className="font-sora font-bold text-white mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Powered by Alarm.com
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
              ATG is an authorized Alarm.com dealer. The Alarm.com platform powers our interactive
              monitoring — giving you real-time control from your smartphone with industry-leading
              reliability.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.alarm.com/productservices/apps.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Smartphone className="w-5 h-5" />
              Download the Alarm.com App
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.alarm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/20 transition-colors"
            >
              Already a client? Log into your portal
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Business vs Residential */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Security for Business & Home
            </h2>
            <p className="text-text-secondary text-lg">
              We protect both commercial properties and residential homes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light-bg rounded-2xl p-8">
              <div className="inline-flex p-4 bg-blue-50 rounded-xl mb-6">
                <Building2 className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="font-sora font-bold text-primary-blue text-xl mb-4">Business Security</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                  Multi-site management from a single dashboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                  Access control with audit trails for compliance
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                  Compliance-grade video retention policies
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                  Integration with HR and building management systems
                </li>
              </ul>
            </div>
            <div className="bg-light-bg rounded-2xl p-8">
              <div className="inline-flex p-4 bg-green-50 rounded-xl mb-6">
                <Home className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="font-sora font-bold text-primary-blue text-xl mb-4">Home Security</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
                  Smart home integration — lights, locks, thermostat
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
                  Remote control and live video from your phone
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
                  Professional 24/7 monitoring by a certified team
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
                  Doorbell cameras, motion sensors, and water leak detection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm headline="Get a Free Security Assessment" />
      <CTABanner
        headline="Secure Your Property Today"
        body="Schedule a free on-site security assessment and let ATG design the right solution for your space."
        buttonLabel="Book a Free Assessment"
      />
    </div>
  );
}
