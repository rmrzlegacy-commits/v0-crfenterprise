import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "FedRAMP Compliance: A Practical Guide for Government Contractors",
      date: "May 15, 2026",
      category: "Compliance",
      excerpt: "Understanding FedRAMP requirements and how to achieve authorization for your cloud services.",
      readTime: "8 min read",
    },
    {
      title: "Zero Trust Architecture: Building Secure Government Systems",
      date: "May 10, 2026",
      category: "Security",
      excerpt: "Implementing zero trust principles in government infrastructure for maximum security.",
      readTime: "10 min read",
    },
    {
      title: "Modernizing Legacy Government Systems: Lessons Learned",
      date: "May 5, 2026",
      category: "Technology",
      excerpt: "Real-world strategies for successfully modernizing aging government applications.",
      readTime: "12 min read",
    },
    {
      title: "The Future of Government Technology: Trends to Watch",
      date: "April 28, 2026",
      category: "Industry",
      excerpt: "Emerging technologies and trends shaping the future of government IT.",
      readTime: "7 min read",
    },
    {
      title: "API-First Development for Enterprise Systems",
      date: "April 20, 2026",
      category: "Development",
      excerpt: "Why API-first design is essential for modern government applications.",
      readTime: "9 min read",
    },
    {
      title: "Kubernetes in Government: Deployment Best Practices",
      date: "April 15, 2026",
      category: "Infrastructure",
      excerpt: "Deploying and managing Kubernetes clusters in government environments.",
      readTime: "11 min read",
    },
  ];

  const categories = [
    "All Posts",
    "Compliance",
    "Security",
    "Technology",
    "Infrastructure",
    "Development",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-6">
              CRF Enterprise <span className="text-accent">Blog</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Insights, best practices, and industry news from our team of government technology experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  index === 0
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary/50 text-foreground/80 hover:bg-secondary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border-b border-accent/20 pb-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2 hover:text-accent transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-foreground/60 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {post.date}
                      </div>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Read Article <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Subscribe to our newsletter for the latest insights on government technology.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            />
            <button
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
