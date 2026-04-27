import type { Metadata } from "next";
import ContactPageForm from "@/components/ui/ContactPageForm";
import { MapPin, Phone, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Applied Technology Group | Fort Wayne, IN",
  description:
    "Contact ATG for managed IT, cybersecurity, VoIP, and security services across Indiana and Ohio. Three offices serving the Midwest since 1996.",
  openGraph: {
    title: "Contact Us | ATG",
    description:
      "Reach ATG's team in Fort Wayne, Indianapolis, or Lima. Schedule a free assessment today.",
  },
};

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const locations = [
  {
    city: "Fort Wayne, IN",
    note: "Headquarters",
    phone: "260-482-2844",
    tel: "2604822844",
    hours: "Mon–Fri 8:00am–5:00pm",
  },
  {
    city: "Indianapolis, IN",
    phone: "317-759-2062",
    tel: "3177592062",
    hours: "Mon–Fri 8:00am–5:00pm",
  },
  {
    city: "Lima, OH",
    phone: "419-549-5599",
    tel: "4195495599",
    hours: "Mon–Fri 8:00am–5:00pm",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Get In Touch
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Whether you&apos;re ready to get started or just have a question — we&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Two-column form + contact info */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="font-sora font-bold text-primary-blue mb-6 text-2xl">
                Send Us a Message
              </h2>
              <ContactPageForm />
            </div>

            {/* Right — Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-sora font-bold text-primary-blue mb-6 text-2xl">
                  Our Offices
                </h2>
                <div className="space-y-5">
                  {locations.map((loc) => (
                    <div key={loc.city} className="bg-white rounded-xl shadow-sm border border-border p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-2.5 bg-blue-50 rounded-lg">
                          <MapPin className="w-5 h-5 text-accent-blue" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-sora font-semibold text-text-primary">
                              {loc.city}
                            </p>
                            {loc.note && (
                              <span className="text-xs bg-blue-50 text-accent-blue px-2 py-0.5 rounded-full font-medium">
                                {loc.note}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-secondary mb-1">
                            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                            <a href={`tel:${loc.tel}`} className="hover:text-accent-blue transition-colors font-medium">
                              {loc.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-text-secondary">
                            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                            {loc.hours}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-primary-blue rounded-xl p-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-5 h-5 text-accent-blue" />
                      <span className="font-medium text-blue-200 text-sm">Toll-Free</span>
                    </div>
                    <a href="tel:18338324033" className="font-sora font-extrabold text-2xl hover:text-accent-blue transition-colors">
                      1-833-832-4033
                    </a>
                  </div>
                </div>
              </div>

              {/* Schedule CTA */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2.5 bg-blue-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Prefer to schedule directly?</p>
                    <p className="text-text-secondary text-sm mb-3">
                      Book a free network assessment on our calendar — no sales pitch, just a
                      straightforward review of your technology.
                    </p>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent-blue font-semibold text-sm hover:underline"
                    >
                      Book a Free Assessment <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
