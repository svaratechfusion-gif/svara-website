import { motion } from "motion/react";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { SEOHead } from "../components/SEOHead";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Enterprise AI: Why Infrastructure Matters More Than Models",
      excerpt: "Most companies focus on AI models. We explain why AI infrastructure is the real competitive advantage and how SVARA is building the operating system for intelligent enterprises.",
      category: "AI Infrastructure",
      date: "April 28, 2026",
      readTime: "8 min read",
      slug: "future-enterprise-ai-infrastructure",
      featured: true
    },
    {
      id: 2,
      title: "Edge AI vs Cloud AI: When to Process Locally and When to Send to the Cloud",
      excerpt: "Understanding the trade-offs between edge and cloud AI processing. Real-world use cases, latency considerations, and deployment strategies for enterprise systems.",
      category: "Edge AI",
      date: "April 25, 2026",
      readTime: "6 min read",
      slug: "edge-ai-vs-cloud-ai"
    },
    {
      id: 3,
      title: "How AI Agents Are Transforming Business Workflows",
      excerpt: "From simple automation to autonomous decision-making. Explore how AI agents are replacing repetitive tasks and augmenting human intelligence in modern enterprises.",
      category: "AI Agents",
      date: "April 22, 2026",
      readTime: "10 min read",
      slug: "ai-agents-transforming-workflows"
    },
    {
      id: 4,
      title: "Digital Twin Technology: Simulating Reality Before Building It",
      excerpt: "How digital twins enable predictive analytics, scenario testing, and optimization. Case studies from manufacturing, smart cities, and infrastructure planning.",
      category: "Digital Twin",
      date: "April 18, 2026",
      readTime: "7 min read",
      slug: "digital-twin-technology-guide"
    },
    {
      id: 5,
      title: "Building AI-First Organizations: A Practical Framework",
      excerpt: "Moving beyond AI projects to AI-native operations. Strategic principles, organizational changes, and technology stack decisions for AI-driven enterprises.",
      category: "Strategy",
      date: "April 15, 2026",
      readTime: "12 min read",
      slug: "building-ai-first-organizations"
    },
    {
      id: 6,
      title: "Vision AI in Manufacturing: Real-Time Quality Control at Scale",
      excerpt: "How computer vision is revolutionizing quality assurance, defect detection, and process optimization in modern manufacturing facilities.",
      category: "Vision AI",
      date: "April 12, 2026",
      readTime: "9 min read",
      slug: "vision-ai-manufacturing-quality-control"
    },
    {
      id: 7,
      title: "The Rise of Autonomous Systems in Smart Cities",
      excerpt: "From traffic management to public safety. Exploring how autonomous AI systems are making cities more efficient, sustainable, and livable.",
      category: "Smart Cities",
      date: "April 8, 2026",
      readTime: "11 min read",
      slug: "autonomous-systems-smart-cities"
    },
    {
      id: 8,
      title: "AI OS: The Next Evolution in Enterprise Software",
      excerpt: "Why traditional enterprise software is being replaced by unified AI operating systems. Natural language interfaces, cross-platform orchestration, and the future of work.",
      category: "AI OS",
      date: "April 5, 2026",
      readTime: "8 min read",
      slug: "ai-os-enterprise-software-evolution"
    }
  ];

  const categories = [
    "All Posts",
    "AI Infrastructure",
    "Edge AI",
    "AI Agents",
    "Digital Twin",
    "Vision AI",
    "Strategy",
    "Smart Cities"
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <SEOHead
        title="Blog | AI Insights & Industry Trends | SVARA TechFusion"
        description="Explore AI infrastructure, edge computing, digital twins, autonomous systems, and enterprise AI strategies. Expert insights from SVARA TechFusion."
        keywords="AI blog, enterprise AI insights, AI infrastructure articles, edge AI tutorials, digital twin case studies, AI trends, autonomous systems blog"
        canonicalUrl="https://www.svaratechfusion.com/blog"
      />
      <ConnectingLinesBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight px-4">
              Insights on
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI & Intelligence Infrastructure
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-12 max-w-3xl mx-auto px-4">
              Deep dives into AI systems, enterprise automation, and the future of intelligent operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 px-4 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all rounded-full"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative z-10 px-4 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-8 px-4">Featured Article</h2>
          <Link to="/blog/enterprise-ai-infrastructure">
            <motion.div
              className="p-8 sm:p-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  AI Infrastructure
                </span>
                <div className="flex items-center gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    April 28, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    8 min read
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 group-hover:text-cyan-400 transition-colors">
                The Future of Enterprise AI: Why Infrastructure Matters More Than Models
              </h3>
              <p className="text-white/60 mb-6 text-base sm:text-lg leading-relaxed">
                For the past few years, AI conversations have been dominated by models—bigger, smarter, faster. But while most companies focus on improving models, a fundamental shift is happening: infrastructure. In enterprise environments, success isn't about having the best model—it's about how well you can operationalize intelligence across your organization.
              </p>
              <div className="inline-flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight size={20} />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="relative z-10 px-4 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-12 px-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => {
              const CardContent = (
                <motion.div
                  key={post.id}
                  className="p-6 bg-white/5 border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={14} className="text-cyan-400" />
                    <span className="text-xs text-cyan-400">{post.category}</span>
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-cyan-400 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );

              // Map slugs to routes
              const slugToRoute: Record<string, string> = {
                "edge-ai-vs-cloud-ai": "/blog/edge-vs-cloud-ai",
                "ai-agents-transforming-workflows": "/blog/ai-agents-transforming-workflows",
                "digital-twin-technology-guide": "/blog/digital-twin-technology-guide",
                "building-ai-first-organizations": "/blog/building-ai-first-organizations",
                "vision-ai-manufacturing-quality-control": "/blog/vision-ai-manufacturing-quality-control",
                "autonomous-systems-smart-cities": "/blog/autonomous-systems-smart-cities",
                "ai-os-enterprise-software-evolution": "/blog/ai-os-enterprise-software-evolution"
              };

              // Wrap article cards with Link if route exists
              if (post.slug && slugToRoute[post.slug]) {
                return (
                  <Link key={post.id} to={slugToRoute[post.slug]} className="block">
                    {CardContent}
                  </Link>
                );
              }

              return CardContent;
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 px-4 py-24 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 px-4">Stay Updated</h2>
          <p className="text-white/60 mb-8 px-4">
            Get the latest insights on AI infrastructure, enterprise systems, and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors text-white placeholder-white/40"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#C0C0C0] to-[#E5E7EB] hover:from-[#D1D5DB] hover:to-[#F3F4F6] transition-all text-black font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
