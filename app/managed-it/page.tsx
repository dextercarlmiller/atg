import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import ContactForm from "@/components/ui/ContactForm";
import {
  Headphones,
  Server,
  Monitor,
  ShieldCheck,
  Cloud,
  HardDrive,
  Mail,
  Wrench,
  DollarSign,
  Users,
  Wifi,
  Globe,
  AlertTriangle,
  Key,
  Eye,
  Activity,
  Zap,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed IT Services | Applied Technology Group | Fort Wayne, IN",
  description:
    "ATG's managed IT services include 24/7 monitoring, help desk support, server management, backup & disaster recovery, and complete network management for Midwest businesses.",
  openGraph: {
    title: "Managed IT Services | ATG",
    description:
      "Flat-rate managed IT with 24/7 monitoring, unlimited help desk, and complete network management.",
  },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const features = [
  {
    icon: Headphones,
    title: "Help Desk Support",
    description:
      "Unlimited remote support via phone, email, and client portal. Real technicians, fast responses.",
  },
  {
    icon: Server,
    title: "Server Monitoring & Management",
    description:
      "24/7 alert monitoring, performance tuning, remote remediation, and backup management.",
  },
  {
    icon: Monitor,
    title: "Desktop Monitoring & Management",
    description:
      "Proactive desktop oversight, firmware updates, configuration backups, and performance reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Core Security Services",
    description:
      "Monthly Microsoft patch management, antivirus, remote software installations, and employee onboarding/offboarding.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Public, hybrid, or private cloud solutions managed to fit your needs and budget.",
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    description:
      "Local, remote, and cloud backup options with disaster recovery planning.",
  },
  {
    icon: Mail,
    title: "Email & Website Hosting",
    description:
      "Managed hosting so you never have to worry about uptime or email deliverability.",
  },
  {
    icon: Wrench,
    title: "On-Site Support",
    description:
      "When remote won't cut it, our technicians come to you during business hours.",
  },
];

const securityAddOns = [
  { icon: Wifi, label: "Firewall management + intrusion prevention" },
  { icon: ShieldCheck, label: "Advanced antivirus + anti-malware" },
  { icon: Globe, label: "DNS filtering (office + laptop/remote)" },
  { icon: AlertTriangle, label: "Security awareness training & phishing simulations" },
  { icon: Key, label: "Multi-factor authentication setup" },
  { icon: Eye, label: "Security Operations Center (SOC) — 24/7" },
  { icon: Activity, label: "SIEM monitoring" },
  { icon: Zap, label: "Incident response (first 24 hours)" },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Proactive, Not Reactive",
    body: "We monitor before things break — catching issues before they become outages.",
  },
  {
    icon: DollarSign,
    title: "No Surprise Bills",
    body: "Flat-rate managed services with predictable monthly costs. No hidden fees.",
  },
  {
    icon: Users,
    title: "Local Team",
    body: "Real technicians who know your business and your environment.",
  },
];

export default function ManagedITPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Managed IT Services
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed mb-8 max-w-2xl">
            Make your IT hassle-free. We manage your entire network with proactive monitoring,
            a responsive help desk, and complete technology support.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-7 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Get a Free IT Assessment
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Everything Included in Managed IT
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              One flat rate covers everything your business needs to run smoothly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="inline-flex p-3 rounded-lg bg-blue-50 mb-4">
                    <Icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="font-sora font-semibold text-text-primary text-base mb-2">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Add-Ons */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-white mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Layered Security Built In
            </h2>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">
              Optional security services that stack on top of managed IT for complete protection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityAddOns.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4">
                  <Icon className="w-5 h-5 text-accent-green flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The ATG Difference */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              The ATG Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="text-center p-8 bg-light-bg rounded-xl">
                  <div className="inline-flex p-4 rounded-full bg-blue-50 mb-5">
                    <Icon className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="font-sora font-semibold text-text-primary text-lg mb-3">
                    {d.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{d.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm headline="Ready to Get Started?" />
      <CTABanner headline="Schedule Your Free IT Assessment" body="Let our engineers review your current technology setup — at no cost. See exactly what's working, what's not, and how ATG can help." />
    </div>
  );
}
