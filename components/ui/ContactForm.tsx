"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  headline?: string;
}

export default function ContactForm({
  headline = "Ready to Get Started?",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // TODO: connect form to backend API or email service (e.g., Resend, Formspree)
    console.log("Form submitted:", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 bg-light-bg">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-sora font-bold text-3xl md:text-4xl text-primary-blue text-center mb-10">
          {headline}
        </h2>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <CheckCircle className="w-16 h-16 text-accent-green" />
            <p className="font-sora font-semibold text-xl text-text-primary">
              Thanks! We&apos;ll be back in touch within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-white"
                  placeholder="Jane Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                  })}
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-white"
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-white"
                  placeholder="(260) 555-0100"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  {...register("company")}
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-white"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-white resize-none"
                placeholder="Tell us about your technology needs..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-blue text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
