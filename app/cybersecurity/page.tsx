import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import ContactForm from "@/components/ui/ContactForm";
import {
  Wifi,
  Shield,
  Globe,
  AlertTriangle,
  Key,
  Eye,
  Activity,
  Search,
  Lock,
  Zap,
  TrendingUp,
  Clock,
  DollarSign,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Services | Applied Technology Group | Fort Wayne, IN",
  description:
    "ATG's layered cybersecurity services protect Midwest businesses from phishing, ransomware, and zero-day threats. SOC, SIEM, pen testing, and compliance support.",
  openGraph: {
    title: "Cybersecurity Services | ATG",
    description:
      "Layered cybersecurity from firewall to SOC. Protect your business from modern threats.",
  },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const threatStats = [
  {
    icon: TrendingUp,
    stat: "43%",
    label: "of cyberattacks target small businesses",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: DollarSign,
    stat: "$4.45M",
    label: "average cost of a data breach",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: Clock,
    stat: "Every 11s",
    label: "ransomware attack occurs worldwide",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

const services = [
  {
    icon: Wifi,
    title: "Firewall Management & Intrusion Prevention",
    description: "Enterprise-grade firewall configuration, monitoring, and active threat blocking.",
  },
  {
    icon: Shield,
    title: "Advanced Antivirus & Anti-Malware",
    description: "AI-powered, signature-less detection that stops threats traditional AV misses.",
  },
  {
    icon: Globe,
    title: "DNS Filtering",
    description: "Block malicious domains for office users and remote/laptop workers alike.",
  },
  {
    icon: AlertTriangle,
    title: "Security Awareness Training",
    description: "Phishing simulations and ongoing employee training to reduce human risk.",
  },
  {
    icon: Key,
    title: "Multi-Factor Authentication (MFA)",
    description: "Enforce MFA across Microsoft 365, VPNs, and business applications.",
  },
  {
    icon: Eye,
    title: "Security Operations Center (SOC)",
    description: "24/7 human-monitored threat detection and response for your environment.",
  },
  {
    icon: Activity,
    title: "SIEM",
    description: "Security Incident Event Management — correlate logs and detect advanced threats.",
  },
  {
    icon: Search,
    title: "Security Risk Assessments",
    description: "Comprehensive evaluation of your security posture with actionable findings.",
  },
  {
    icon: Lock,
    title: "Data Loss Prevention (DLP)",
    description: "Prevent sensitive data from leaving your organization through any channel.",
  },
  {
    icon: Zap,
    title: "Incident Response Support",
    description: "Rapid response in the first 24 hours of a confirmed security incident.",
  },
];

export default function CybersecurityPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{ backgroundColor: "#0D1117" }}
      >
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-sm text-red-300 font-medium">
              Threats are evolving — is your business protected?
            </span>
          </div>
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Cybersecurity Services
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed mb-8 max-w-2xl">
            Be proactive, not reactive. ATG&apos;s layered cybersecurity approach protects your
            business from modern threats — from phishing to ransomware to zero-day attacks.
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

      {/* Threat Reality Stats */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-blue-300 text-sm font-medium mb-8 uppercase tracking-widest">
            The Threat Landscape
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threatStats.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.stat} className={`flex items-center gap-4 ${t.bg} border border-white/10 rounded-xl p-6`}>
                  <div className={`flex-shrink-0 ${t.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className={`font-sora font-extrabold text-2xl ${t.color}`}>{t.stat}</div>
                    <div className="text-blue-200 text-sm mt-0.5">{t.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Complete Security Coverage
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              A layered approach means no single point of failure in your defenses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow">
                  <div className="inline-flex p-2.5 rounded-lg bg-red-50 mb-3">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-sora font-semibold text-text-primary text-sm mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Penetration Testing Callout */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-accent-blue rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                <Search className="w-8 h-8 text-accent-blue" />
              </div>
              <div>
                <h2 className="font-sora font-bold text-primary-blue mb-3"
                  style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
                  Managed Penetration Testing
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Know your vulnerabilities before attackers do. ATG&apos;s managed penetration testing
                  service proactively identifies weaknesses in your network, systems, and applications
                  — and gives you a clear remediation roadmap.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:underline"
                >
                  Learn More About Pen Testing <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 bg-green-50 rounded-full mb-6">
            <Shield className="w-10 h-10 text-accent-green" />
          </div>
          <h2 className="font-sora font-bold text-primary-blue mb-4"
            style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
            Compliance Support
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Operating in a regulated industry? ATG helps businesses meet HIPAA, CMMC, and other
            compliance frameworks — including policies, procedures, and ongoing management.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Talk to a Compliance Specialist
          </a>
        </div>
      </section>

      <ContactForm headline="Start Your Security Assessment" />
      <CTABanner
        headline="Don't Wait for a Breach"
        body="Schedule a free security assessment. Our engineers will identify your biggest risks and show you exactly how to address them."
        buttonLabel="Book Your Free Assessment"
      />
    </div>
  );
}
