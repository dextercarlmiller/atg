"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  Shield,
  Users,
  Phone,
  Camera,
  Brain,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    name: "Managed IT Services",
    description: "Proactive monitoring, help desk, and full network management.",
    href: "/managed-it",
    color: "text-accent-blue",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    description: "From firewall to SOC — layered protection that keeps threats out.",
    href: "/cybersecurity",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Users,
    name: "Co-Managed IT",
    description: "We partner with your in-house IT team to extend your capabilities.",
    href: "/co-managed-it",
    color: "text-accent-green",
    bg: "bg-green-50",
  },
  {
    icon: Phone,
    name: "VoIP & Phone Systems",
    description: "Modern unified communications for offices of any size.",
    href: "/voip",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Camera,
    name: "Security & Surveillance",
    description: "Access control, cameras, and 24/7 alarm monitoring.",
    href: "/security-surveillance",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Brain,
    name: "AI Services",
    description: "Put artificial intelligence to work for your business operations.",
    href: "/ai-services",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-sora font-bold text-primary-blue mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Everything Your Business Needs, Under One Roof
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From day-to-day IT support to cybersecurity and AI — ATG covers the full technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <div className={`inline-flex p-3 rounded-lg ${service.bg} mb-4`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-text-primary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
