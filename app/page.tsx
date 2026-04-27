import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyATG from "@/components/home/WhyATG";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/ui/CTABanner";
import BlogPreview from "@/components/home/BlogPreview";

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
