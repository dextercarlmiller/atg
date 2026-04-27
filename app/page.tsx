import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyATG from "@/components/home/WhyATG";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/ui/CTABanner";
import BlogPreview from "@/components/home/BlogPreview";

export const metadata: Metadata = {
  title: "Managed IT Services | Applied Technology Group | Fort Wayne, IN",
  description:
    "ATG has provided managed IT, cybersecurity, VoIP, and security solutions to Midwest businesses since 1996. Schedule a free assessment today.",
  openGraph: {
    title: "Managed IT Services | Applied Technology Group | Fort Wayne, IN",
    description:
      "ATG has provided managed IT, cybersecurity, VoIP, and security solutions to Midwest businesses since 1996. Schedule a free assessment today.",
    url: "https://atgfw.com",
    type: "website",
  },
  alternates: {
    canonical: "https://atgfw.com",
  },
};

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <ServicesOverview />
      <WhyATG />
      <Testimonials />
      <CTABanner />
      <BlogPreview />
    </div>
  );
}
