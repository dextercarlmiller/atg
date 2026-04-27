import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Tag, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Bytes Blog | Applied Technology Group | Fort Wayne, IN",
  description:
    "IT insights, cybersecurity tips, and technology news for Midwest businesses from the ATG team.",
  openGraph: {
    title: "Tech Bytes Blog | ATG",
    description:
      "IT insights, cybersecurity tips, and technology news for Midwest businesses.",
  },
};

// TODO: connect to WordPress REST API at https://atgfw.com/wp-json/wp/v2/posts or migrate blog to Next.js MDX

const posts = [
  {
    title: "The Future of Hybrid Work: IT Considerations for 2025 and Beyond",
    date: "March 12, 2025",
    readTime: "5 min read",
    category: "IT Strategy",
    excerpt:
      "As hybrid work becomes the permanent norm, businesses need to rethink their IT infrastructure — from secure remote access to unified communications that actually work.",
    href: "/blog",
  },
  {
    title: "Signs It's Time To Upgrade Your IT Infrastructure — Part 5",
    date: "February 28, 2025",
    readTime: "4 min read",
    category: "Infrastructure",
    excerpt:
      "In the final installment of our series, we cover the financial warning signs that your aging IT is costing you more than a modern managed solution would.",
    href: "/blog",
  },
  {
    title: "Signs It's Time to Upgrade Your IT Infrastructure — Part 4",
    date: "February 14, 2025",
    readTime: "4 min read",
    category: "Infrastructure",
    excerpt:
      "Security vulnerabilities in legacy systems are often invisible until it's too late. Here's what to watch for in your network.",
    href: "/blog",
  },
  {
    title: "Upgrading Your Infrastructure — Part 3",
    date: "January 31, 2025",
    readTime: "5 min read",
    category: "Infrastructure",
    excerpt:
      "Slow performance and frequent outages are obvious signs — but there are subtler indicators that your infrastructure is holding your business back.",
    href: "/blog",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            Tech Bytes Blog
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            IT insights, cybersecurity tips, and technology news for Midwest businesses.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Placeholder image area */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-blue to-accent-blue flex items-center justify-center">
                  <span className="font-sora font-bold text-white/40 text-5xl">ATG</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-accent-blue font-medium">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="text-text-secondary text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="text-text-secondary text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-sora font-bold text-text-primary text-lg leading-snug mb-3 group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 text-center py-10 border-2 border-dashed border-border rounded-xl">
            <p className="text-text-secondary text-sm">
              More posts are on the way. Check back soon or{" "}
              <Link href="/contact" className="text-accent-blue hover:underline font-medium">
                contact us
              </Link>{" "}
              to suggest a topic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
