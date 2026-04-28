"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, ShieldCheck, Puzzle } from "lucide-react";

const differentiators = [
  {
    icon: Trophy,
    title: "28+ Years of Experience",
    description:
      "In business since 1996, we've seen every IT challenge and know how to solve them.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: MapPin,
    title: "Local, Responsive Team",
    description:
      "Three offices across Indiana and Ohio. Real technicians, real relationships.",
    color: "text-accent-green",
    bg: "bg-green-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Proactive, Not Reactive",
    description:
      "We catch problems before they become outages — 24/7 monitoring keeps you covered.",
    color: "text-accent-blue",
    bg: "bg-blue-400/10",
  },
  {
    icon: Puzzle,
    title: "Complete Solutions",
    description:
      "IT, phones, security, and cybersecurity — one vendor, one relationship, one bill.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function WhyATG() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-sora font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Why Businesses Choose ATG
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            We&apos;re not just a vendor — we&apos;re your long-term technology partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className={`flex-shrink-0 inline-flex p-3 rounded-lg ${item.bg}`}>
                  <Icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
