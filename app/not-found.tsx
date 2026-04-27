import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen flex items-center" style={{ backgroundColor: "#0D1117" }}>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        {/* ATG Logo placeholder */}
        <div className="mb-8">
          {/* LOGO: replace with <Image src="/images/atg-logo-white.png" width={120} height={38} alt="ATG" /> */}
          <span className="font-sora font-bold text-4xl text-white">ATG</span>
        </div>

        <div className="font-sora font-extrabold text-accent-blue mb-4"
          style={{ fontSize: "clamp(72px, 12vw, 120px)", lineHeight: 1 }}>
          404
        </div>

        <h1 className="font-sora font-bold text-white text-2xl md:text-3xl mb-4">
          Page Not Found
        </h1>
        <p className="text-blue-200 text-lg leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-blue-300 text-sm mb-2">Need immediate help?</p>
          <a
            href="tel:18338324033"
            className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-accent-blue transition-colors"
          >
            <Phone className="w-5 h-5" />
            1-833-832-4033
          </a>
        </div>
      </div>
    </div>
  );
}
