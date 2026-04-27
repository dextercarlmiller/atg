import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    title: "The Future of Hybrid Work: IT Considerations for 2025 and Beyond",
    date: "March 12, 2025",
    category: "IT Strategy",
    href: "/blog",
  },
  {
    title: "Signs It's Time To Upgrade Your IT Infrastructure — Part 5",
    date: "February 28, 2025",
    category: "Infrastructure",
    href: "/blog",
  },
  {
    title: "5 Cybersecurity Threats Every Small Business Should Know",
    date: "January 15, 2025",
    category: "Cybersecurity",
    href: "/blog",
  },
];

export default function BlogPreview() {
  {/* TODO: replace with dynamic blog posts from CMS or API */}
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2
              className="font-sora font-bold text-primary-blue mb-2"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Tech Insights for Business Leaders
            </h2>
            <p className="text-text-secondary">
              IT tips, cybersecurity news, and technology guidance for Midwest businesses.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 flex items-center gap-1 text-accent-blue font-medium text-sm hover:underline"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group block bg-light-bg rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1.5 text-xs text-accent-blue font-medium mb-3">
                <Tag className="w-3 h-3" />
                {post.category}
              </div>
              <h3 className="font-sora font-semibold text-text-primary text-base leading-snug mb-3 group-hover:text-accent-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-text-secondary text-xs mb-4">{post.date}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
