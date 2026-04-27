"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, Calendar } from "lucide-react";

const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

const trustBadges = [
  "Serving the Midwest Since 1996",
  "3 Regional Offices",
  "24/7 Monitoring",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#0D1117" }}
    >
      {/* Animated dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      {/* Subtle animated grid overlay */}
      <div className="absolute inset-0 animated-grid opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-sm text-blue-200 font-medium">
              Fort Wayne&apos;s Trusted IT Partner Since 1996
            </span>
          </div>

          <h1 className="font-sora font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            Your Technology.{" "}
            <span className="text-accent-blue">Managed.</span>{" "}
            <span className="text-accent-green">Protected.</span>{" "}
            Optimized.
          </h1>

          <p className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-2xl mb-10">
            Applied Technology Group has been Fort Wayne&apos;s trusted IT partner since
            1996. We handle your technology so you can focus on growing your
            business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white font-semibold px-7 py-4 rounded-lg hover:bg-blue-700 transition-colors text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Free Assessment
            </motion.a>
            <motion.a
              href="tel:18338324033"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-4 rounded-lg hover:bg-white/20 transition-colors text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Call 1-833-832-4033
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-blue-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
