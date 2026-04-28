import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  TicketCheck,
  Printer,
  Phone,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Support | Applied Technology Group | Fort Wayne, IN",
  description:
    "ATG client support resources: remote support, ticket portal, fax portal, and emergency contact information.",
  openGraph: {
    title: "Client Support | ATG",
    description: "Access ATG remote support, ticket portal, and contact information.",
    url: "https://atgfw.com/support",
    type: "website",
  },
  alternates: { canonical: "https://atgfw.com/support" },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const portals = [
  {
    icon: Monitor,
    title: "Remote Support",
    description:
      "Click here if directed by an ATG technician for remote assistance. Your technician will guide you through the connection process.",
    href: "https://support.atgfw.com",
    cta: "Launch Remote Support",
    color: "text-accent-blue",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: TicketCheck,
    title: "Client Ticket Portal",
    description:
      "Submit and track support tickets. Requires credentials — call our office to set up an account.",
    href: "https://atgfw.myportallogin.com/",
    cta: "Open Ticket Portal",
    color: "text-accent-green",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: Printer,
    title: "Fax Portal",
    description:
      "Access your digital fax inbox. Send and receive faxes from any device with your business number.",
    href: "https://portal.fax.atgfw.com/",
    cta: "Open Fax Portal",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Client Support
          </h1>
          <p className="text-blue-200 text-xl max-w-xl mx-auto">
            Access ATG&apos;s support resources and portals. Need immediate help? Call{" "}
            <a href="tel:18338324033" className="text-white font-bold hover:text-accent-blue transition-colors">
              1-833-832-4033
            </a>
          </p>
        </div>
      </section>

      {/* Portal Cards */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sora font-bold text-primary-blue text-center mb-12"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
            Client Portals & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portals.map((portal) => {
              const Icon = portal.icon;
              return (
                <div key={portal.title} className={`bg-white rounded-xl shadow-md border ${portal.border} p-6 hover:shadow-xl transition-shadow flex flex-col`}>
                  <div className={`inline-flex p-3 rounded-lg ${portal.bg} mb-5`}>
                    <Icon className={`w-7 h-7 ${portal.color}`} />
                  </div>
                  <h3 className="font-sora font-bold text-text-primary text-lg mb-2">{portal.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
                    {portal.description}
                  </p>
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-semibold text-sm ${portal.color} hover:underline`}
                  >
                    {portal.cta} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <div className="inline-flex p-4 bg-red-100 rounded-full mb-5">
              <Phone className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="font-sora font-bold text-text-primary text-2xl mb-3">
              Need Immediate Help?
            </h2>
            <a
              href="tel:18338324033"
              className="font-sora font-extrabold text-3xl text-red-600 hover:text-red-700 transition-colors block mb-3"
            >
              1-833-832-4033
            </a>
            <div className="flex items-center justify-center gap-2 text-text-secondary text-sm">
              <Clock className="w-4 h-4" />
              Monday – Friday, 8:00am – 5:00pm
            </div>
          </div>
        </div>
      </section>

      {/* Not a Client Yet */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sora font-bold text-primary-blue mb-4"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
            Not Yet an ATG Client?
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Not yet an ATG client but need help with your technology? Let&apos;s talk. We&apos;d love
            to learn about your business and see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule a Free Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-blue text-primary-blue font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
