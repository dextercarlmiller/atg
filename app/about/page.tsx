import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import { MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About ATG | Applied Technology Group | Fort Wayne, IN",
  description:
    "Learn about Applied Technology Group — Fort Wayne's trusted IT and technology partner since 1996. Three offices across Indiana and Ohio.",
  openGraph: {
    title: "About ATG | Applied Technology Group",
    description:
      "Fort Wayne's trusted technology partner since 1996. Managed IT, cybersecurity, VoIP, and more across Indiana and Ohio.",
    url: "https://atgfw.com/about",
    type: "website",
  },
  alternates: { canonical: "https://atgfw.com/about" },
};

const stats = [
  { value: "28+", label: "Years in Business" },
  { value: "3", label: "Regional Offices" },
  { value: "100s", label: "of Clients Served" },
  { value: "24/7", label: "Monitoring & Support" },
];

const serviceAreas = [
  "Fort Wayne, IN and Northeast Indiana",
  "Indianapolis, IN and Central Indiana",
  "Lima, OH and Northwest Ohio",
  "Greater Midwest region",
];

const teamPlaceholders = [
  { name: "Your Name Here", title: "President & CEO" },
  { name: "Your Name Here", title: "Director of Technology" },
  { name: "Your Name Here", title: "Lead Network Engineer" },
  { name: "Your Name Here", title: "Cybersecurity Specialist" },
];

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            About Applied Technology Group
          </h1>
          <p className="text-blue-200 text-xl">
            Fort Wayne&apos;s trusted technology partner since 1996
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div>
            <h2 className="font-sora font-bold text-primary-blue mb-6"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Our Story
            </h2>
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Applied Technology Group was founded in Fort Wayne, Indiana in 1996 with a simple
                mission: help local businesses get the most out of their technology. Nearly three
                decades later, we&apos;ve grown to serve clients across Indiana and Ohio from three
                regional offices — but our commitment to personal service and local relationships
                hasn&apos;t changed.
              </p>
              <p>
                We specialize in Managed IT Services, Cybersecurity, VoIP phone systems, physical
                security and surveillance, co-managed IT partnerships, compliance services, and AI
                solutions. Whatever your technology challenge, we have the experience and
                certifications to solve it.
              </p>
              <p>
                Our team prides itself on being proactive — catching problems before they impact
                your business — and on building long-term relationships with every client we serve.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-light-bg rounded-xl p-8 text-center border border-border"
              >
                <div className="font-sora font-extrabold text-accent-blue mb-2"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-accent-blue">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sora font-semibold text-white italic"
            style={{ fontSize: "clamp(20px, 3vw, 28px)" }}>
            &ldquo;Let us manage your technology so you can focus on your business.&rdquo;
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-primary-blue mb-3"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Where We Serve
            </h2>
            <p className="text-text-secondary">
              Three offices, one mission: responsive local service across the Midwest.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 p-4 bg-light-bg rounded-lg">
                <MapPin className="w-5 h-5 text-accent-blue flex-shrink-0" />
                <span className="text-text-primary text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-primary-blue mb-3"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Meet the Team
            </h2>
            <p className="text-text-secondary">
              The people behind your technology.
            </p>
          </div>
          {/* TODO: add real team member photos and bios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamPlaceholders.map((member, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                {/* Photo placeholder */}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-5">
                  <p className="font-sora font-semibold text-text-primary">{member.name}</p>
                  <p className="text-text-secondary text-sm mt-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Work With ATG?"
        body="Schedule a free technology assessment and see how ATG can become your trusted IT partner."
      />
    </div>
  );
}
