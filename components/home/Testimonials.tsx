"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "They are always responsive to my needs and take time to get to know their customer. As a local business owner, it is great peace of mind knowing they have my back.",
    name: "Misty Stephan",
    title: "",
  },
  {
    quote:
      "Excellent company to work with. Great product knowledge, great customer service, great at training. The whole process of switching from a large national carrier could not have gone any smoother.",
    name: "John Brimner",
    title: "",
  },
  {
    quote:
      "Applied Technology Group was absolutely fantastic in helping us set up our new phone system in a timely manner. I highly recommend them.",
    name: "Mitch Meinholz",
    title: "Fort Wayne Komets",
  },
  {
    quote:
      "Our school district has been working with ATG for 10+ years. They are professional, knowledgeable, friendly, and very dependable.",
    name: "Shari Saneda",
    title: "School District",
  },
  {
    quote:
      "Everything was explained very well to me and he made sure that I understood how everything worked.",
    name: "Brooke Patterson Coe",
    title: "",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-light-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-sora font-bold text-primary-blue mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Trusted by Businesses Across the Midwest
          </h2>
          <p className="text-text-secondary text-lg">
            Real results, real relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent-blue opacity-30" />
              <p className="text-text-primary text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-text-primary text-sm">{t.name}</p>
                {t.title && (
                  <p className="text-text-secondary text-xs mt-0.5">{t.title}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
