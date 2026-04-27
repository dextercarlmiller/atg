import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import ContactForm from "@/components/ui/ContactForm";
import {
  Video,
  MessageSquare,
  MousePointerClick,
  Server,
  Smartphone,
  GitMerge,
  MessageCircle,
  Laptop,
  Printer,
  Calendar,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VoIP & Phone Systems | Applied Technology Group | Fort Wayne, IN",
  description:
    "Modern VoIP and unified communications for Midwest businesses. Cloud, on-premise, or hybrid phone systems with mobile app, SMS texting, and CRM integration.",
  openGraph: {
    title: "VoIP & Phone Systems | ATG",
    description:
      "Modern phone systems for modern businesses. Stay connected anywhere with crystal-clear VoIP.",
    url: "https://atgfw.com/voip",
    type: "website",
  },
  alternates: { canonical: "https://atgfw.com/voip" },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const services = [
  {
    icon: Video,
    title: "Web Conferencing & Collaboration",
    description: "Video meetings, screen sharing, invite anyone with an email — no software required.",
  },
  {
    icon: MessageSquare,
    title: "Unified Communications",
    description: "See coworker availability, group chat, presence indicators — all in one platform.",
  },
  {
    icon: MousePointerClick,
    title: "Click-to-Call",
    description: "Make calls directly from your computer with one click — no handset required.",
  },
  {
    icon: Server,
    title: "On-Premise or Hosted",
    description: "Flexible deployment: cloud, on-site, or hybrid — whatever fits your environment.",
  },
  {
    icon: Smartphone,
    title: "Smartphone App Integration",
    description: "Use your business number from your cell phone. Stay connected from anywhere.",
  },
  {
    icon: GitMerge,
    title: "CRM Integration",
    description: "Sync your phone system with your existing business software for seamless workflows.",
  },
  {
    icon: MessageCircle,
    title: "SMS/MMS Texting",
    description: "Send and receive texts from your business number — not your personal cell.",
  },
  {
    icon: Laptop,
    title: "Remote Work Ready",
    description: "Your laptop becomes your phone — work from anywhere with the same business number.",
  },
];

export default function VoIPPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm text-purple-200 font-medium">
              Find out if you&apos;re overpaying on your current phone system
            </span>
          </div>
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            VoIP & Unified Communications
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed mb-8 max-w-2xl">
            Modern phone systems for modern businesses. Stay connected anywhere — desk, laptop, or
            mobile — with crystal-clear VoIP and powerful collaboration tools.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-7 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Get a Free Assessment — See If You&apos;re Overpaying
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Everything in Your Phone System
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              One platform for calls, messaging, video, and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="inline-flex p-3 rounded-lg bg-purple-50 mb-4">
                    <Icon className="w-6 h-6 text-purple-500" />
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

      {/* Fax Portal Callout */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 bg-blue-50 border border-blue-100 rounded-xl px-6 py-5">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
              <Printer className="w-6 h-6 text-accent-blue" />
            </div>
            <div className="flex-1">
              <p className="text-text-primary font-medium text-sm">
                Need digital fax? Access your ATG Fax Portal for a modern faxing experience.
              </p>
            </div>
            <a
              href="https://portal.fax.atgfw.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-accent-blue font-semibold text-sm hover:underline"
            >
              Fax Portal <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* On-Premise vs Hosted */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              On-Premise vs. Hosted: Which Is Right for You?
            </h2>
            <p className="text-text-secondary text-lg">
              ATG supports both deployment models — we&apos;ll help you choose the best fit.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary bg-light-bg border-b border-border">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-blue bg-blue-50 border-b border-border">
                    On-Premise
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent-blue bg-blue-50 border-b border-border">
                    Hosted / Cloud
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm text-text-primary">
                {[
                  ["Hardware ownership", "You own it", "Provider owns it"],
                  ["Upfront cost", "Higher", "Low / monthly"],
                  ["Ongoing maintenance", "Managed by ATG", "Minimal — cloud-managed"],
                  ["Scalability", "Add hardware to scale", "Scale instantly"],
                  ["Remote work support", "Requires VPN/softphone", "Native — work from anywhere"],
                  ["Best for", "Enterprises with complex PBX needs", "SMBs, remote/hybrid teams"],
                ].map(([feature, onPrem, hosted]) => (
                  <tr key={feature} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-text-secondary">{feature}</td>
                    <td className="px-6 py-3 text-center">{onPrem}</td>
                    <td className="px-6 py-3 text-center">{hosted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactForm headline="Ready to Modernize Your Phones?" />
      <CTABanner
        headline="Find Out If You're Overpaying"
        body="ATG will review your current phone bill and setup — at no cost — and show you how modern VoIP can cut costs and improve communication."
        buttonLabel="Book a Free Phone Assessment"
      />
    </div>
  );
}
