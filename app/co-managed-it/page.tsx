import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import ContactForm from "@/components/ui/ContactForm";
import {
  Clock,
  Shield,
  FileCheck,
  Cloud,
  Activity,
  BarChart3,
  CheckCircle2,
  XCircle,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Co-Managed IT Services | Applied Technology Group | Fort Wayne, IN",
  description:
    "ATG's co-managed IT services partner with your existing IT team — filling skill gaps, providing after-hours coverage, and scaling your capabilities without replacing what works.",
  openGraph: {
    title: "Co-Managed IT Services | ATG",
    description:
      "Already have an IT person? ATG works alongside your team — filling gaps, providing backup, and extending your capabilities.",
  },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const painPoints = [
  "Your IT person is overwhelmed and can't keep up",
  "You need specialist skills (cybersecurity, compliance) your team doesn't have",
  "After-hours and weekend coverage is a gap",
  "Your IT team needs a vacation too",
  "You want a second set of eyes on your security posture",
];

const atgAnswers = [
  "We fill the gaps — covering what your team can't",
  "Specialized expertise on demand — cybersecurity, compliance, cloud",
  "24/7 monitoring and after-hours support",
  "Backup coverage so your team can take time off",
  "Collaborative, not competitive — we support your IT staff, not replace them",
];

const services = [
  {
    icon: Clock,
    title: "After-Hours & Weekend Help Desk",
    description: "Extend your coverage beyond business hours without hiring additional staff.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Specialist Support",
    description: "Access ATG's security team for firewall management, SOC, and incident response.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit Assistance",
    description: "HIPAA, CMMC, and other framework support that most IT generalists don't have.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Projects",
    description: "Migrations, deployments, and complex projects handled by ATG specialists.",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring & Alerting",
    description: "Continuous monitoring means problems get caught even when your team is offline.",
  },
  {
    icon: BarChart3,
    title: "Strategic IT Planning (vCIO)",
    description: "Virtual CIO support — budget planning, roadmaps, and technology strategy.",
  },
];

const steps = [
  {
    number: "01",
    title: "Assessment",
    body: "We learn your environment and your team's strengths — and where the gaps are.",
  },
  {
    number: "02",
    title: "Plan",
    body: "We define the scope of our partnership so each team knows their responsibilities.",
  },
  {
    number: "03",
    title: "Partner",
    body: "We work alongside your team, seamlessly — your clients see one unified IT operation.",
  },
];

export default function CoManagedITPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm text-blue-200 font-medium">Built for businesses with existing IT staff</span>
          </div>
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Co-Managed IT Services
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed mb-8 max-w-2xl">
            Already have an IT person or team? We work alongside you — filling skill gaps,
            providing backup, and scaling your capabilities without replacing what&apos;s already
            working.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-7 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Partnership Conversation
          </a>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Who This Is For
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Co-managed IT is the right fit when your internal team is stretched thin.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pain Points */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <h3 className="font-sora font-semibold text-red-700 text-lg mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                The Challenges You Face
              </h3>
              <ul className="space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-text-primary text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 border border-red-200 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* ATG Answers */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
              <h3 className="font-sora font-semibold text-green-700 text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                ATG&apos;s Answer
              </h3>
              <ul className="space-y-4">
                {atgAnswers.map((answer) => (
                  <li key={answer} className="flex items-start gap-3 text-text-primary text-sm">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-accent-green mt-0.5" />
                    {answer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              What We Provide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-light-bg rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="inline-flex p-3 rounded-lg bg-blue-50 mb-4">
                    <Icon className="w-6 h-6 text-accent-blue" />
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

      {/* How It Works */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-white mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              How It Works
            </h2>
            <p className="text-blue-200 text-lg">Getting started is simple.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-blue text-white font-sora font-extrabold text-xl mb-5">
                  {step.number}
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm headline="Let's Talk About Partnership" />
      <CTABanner
        headline="Your Team + ATG = Complete Coverage"
        body="Schedule a conversation to see how co-managed IT can extend your team's capabilities without adding headcount."
      />
    </div>
  );
}
