import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import ContactForm from "@/components/ui/ContactForm";
import {
  Brain,
  Wrench,
  RefreshCw,
  FileText,
  MessageCircle,
  Activity,
  Shield,
  BarChart3,
  Clock,
  TrendingUp,
  Calendar,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services for Business | Applied Technology Group | Fort Wayne, IN",
  description:
    "ATG helps Midwest businesses identify, implement, and manage AI solutions — from Microsoft Copilot to custom AI workflows — that save time, reduce costs, and improve operations.",
  openGraph: {
    title: "AI Services for Business | ATG",
    description:
      "Put artificial intelligence to work for your business. ATG makes AI practical for SMBs.",
  },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const offerings = [
  {
    icon: Brain,
    title: "AI Strategy & Assessment",
    description:
      "We evaluate your business processes and identify where AI can have the biggest impact — before you spend a dollar.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: Wrench,
    title: "AI Tool Implementation",
    description:
      "From Microsoft Copilot to custom AI workflows, we handle the setup, integration, training, and rollout.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: RefreshCw,
    title: "Ongoing AI Management",
    description:
      "As AI tools evolve, we keep your implementations current, secure, and effective — so you stay ahead.",
    color: "text-accent-green",
    bg: "bg-green-50",
  },
];

const useCases = [
  {
    icon: ClipboardList,
    title: "Automate Repetitive Admin Tasks",
    description: "Eliminate manual data entry, scheduling, and routine paperwork.",
  },
  {
    icon: FileText,
    title: "Intelligent Document Processing",
    description: "AI-powered summarization, extraction, and routing of business documents.",
  },
  {
    icon: MessageCircle,
    title: "AI-Assisted Customer Communication",
    description: "Smart email drafting, chatbots, and response automation.",
  },
  {
    icon: Activity,
    title: "Predictive IT Maintenance",
    description: "Detect anomalies before they become outages — powered by machine learning.",
  },
  {
    icon: Shield,
    title: "AI-Powered Security Threat Detection",
    description: "Identify threats in real time using AI models that learn your environment.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Reporting",
    description: "Turn raw data into actionable insights with AI-driven analytics and dashboards.",
  },
];

const whyNowReasons = [
  {
    icon: TrendingUp,
    title: "Your competitors are already starting",
    body: "AI adoption among SMBs is accelerating. Early movers gain compounding advantages in efficiency and cost.",
  },
  {
    icon: Clock,
    title: "The tools are ready — and affordable",
    body: "Platforms like Microsoft Copilot and purpose-built AI tools are now priced for businesses of all sizes.",
  },
  {
    icon: CheckCircle2,
    title: "Starting small is smart",
    body: "You don't need a full AI transformation. One well-chosen automation can save hundreds of hours per year.",
  },
];

export default function AIServicesPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm text-indigo-200 font-medium">
              AI for businesses of all sizes
            </span>
          </div>
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            AI Services for Business
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed mb-8 max-w-2xl">
            Artificial intelligence isn&apos;t just for enterprise companies. ATG helps businesses of
            all sizes identify, implement, and manage AI solutions that save time, reduce costs, and
            improve operations.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-7 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Talk to an AI Specialist
          </a>
        </div>
      </section>

      {/* What ATG Offers */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              What ATG Offers
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Three service areas that take you from idea to implementation to ongoing success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow text-center">
                  <div className={`inline-flex p-4 rounded-2xl ${o.bg} mb-6`}>
                    <Icon className={`w-10 h-10 ${o.color}`} />
                  </div>
                  <h3 className="font-sora font-bold text-text-primary text-xl mb-3">{o.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{o.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-primary-blue mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Real Use Cases for Your Business
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Practical applications — no buzzwords, no hype.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <div key={u.title} className="flex gap-4 bg-light-bg rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 p-2.5 bg-indigo-50 rounded-lg h-fit">
                    <Icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-text-primary text-base mb-1.5">
                      {u.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{u.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sora font-bold text-white mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
              Why Now?
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Small and mid-size businesses that start thinking about AI today will have a
              significant advantage in two years. Here&apos;s why waiting isn&apos;t neutral — it&apos;s falling behind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyNowReasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <div className="inline-flex p-3 bg-indigo-500/20 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="font-sora font-semibold text-white text-base mb-2">{r.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{r.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm headline="Not Sure Where to Start? That's OK." />
      <CTABanner
        headline="Let's Have a Conversation About AI"
        body="Not sure where to start? That's okay. Schedule a free conversation with our AI specialists and we'll identify the highest-impact opportunities for your business."
        buttonLabel="Talk to an AI Specialist"
      />
    </div>
  );
}
