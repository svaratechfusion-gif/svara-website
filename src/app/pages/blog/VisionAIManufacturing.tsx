import { SEOHead } from "../../components/SEOHead";
import { generateBlogArticleSchema } from "../../components/StructuredData";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Eye, Zap, TrendingUp } from "lucide-react";

export function VisionAIManufacturing() {
  const articleSchema = generateBlogArticleSchema({
    title: "Vision AI in Manufacturing: Real-Time Quality Control at Scale",
    description: "Discover how Vision AI is transforming manufacturing with real-time defect detection, automated quality control, and process optimization at scale.",
    author: "SVARA TechFusion",
    datePublished: "2026-04-12",
    category: "Vision AI",
    url: "https://www.svaratechfusion.com/blog/vision-ai-manufacturing-quality-control",
    image: "https://www.svaratechfusion.com/blog/images/vision-ai-manufacturing.jpg"
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <SEOHead
        title="Vision AI for Manufacturing | Real-Time Quality Control & Defect Detection"
        description="Discover how Vision AI is transforming manufacturing with real-time defect detection, automated quality control, and process optimization at scale."
        keywords="vision AI manufacturing, computer vision quality control, AI defect detection, industrial AI systems, real-time manufacturing AI"
        canonicalUrl="https://www.svaratechfusion.com/blog/vision-ai-manufacturing-quality-control"
        jsonLd={articleSchema}
      />

      {/* Article Header */}
      <div className="relative border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <Link to="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:gap-3 transition-all mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="inline-block px-3 py-1 bg-green-400/10 border border-green-400/20 text-green-400 text-sm mb-6">
            Vision AI
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Vision AI in Manufacturing: Real-Time Quality Control at Scale
          </h1>

          <div className="flex items-center gap-6 text-white/60 text-sm">
            <span>April 12, 2026</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">The Shift from Inspection to Intelligence</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Quality control has historically been a reactive process in manufacturing: products are produced, samples are inspected, and defects are identified post-production. This approach introduces inherent inefficiencies—delayed detection, material waste, human error, and limited scalability.
          </p>
          <div className="p-8 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 mb-6">
            <p className="text-xl sm:text-2xl text-white leading-relaxed">
              Vision AI introduces a fundamental shift: <strong className="text-green-400">from post-production inspection to real-time, continuous quality intelligence</strong>
            </p>
          </div>
        </section>

        {/* What is Vision AI */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">What is Vision AI in Manufacturing?</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Vision AI refers to the use of computer vision systems powered by machine learning models to analyse visual data—images and video—in real time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-green-500/10 to-transparent border border-green-400/20 flex items-start gap-3">
              <Eye className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-white mb-1">Monitor production lines continuously</p>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 flex items-start gap-3">
              <Zap className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-white mb-1">Detect defects and anomalies instantly</p>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/20 flex items-start gap-3">
              <TrendingUp className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-white mb-1">Classify products based on quality</p>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/20 flex items-start gap-3">
              <Eye className="text-purple-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-white mb-1">Trigger automated responses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Limitations of Traditional Systems */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">Limitations of Traditional Quality Control</h2>

          <div className="space-y-6">
            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl mb-3 text-orange-400">1. Human Inspection Constraints</h3>
              <ul className="space-y-2 text-white/60">
                <li>• Prone to fatigue and inconsistency</li>
                <li>• Cannot scale with high-speed production</li>
                <li>• Struggles with micro-level defects</li>
              </ul>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl mb-3 text-orange-400">2. Rule-Based Machine Vision</h3>
              <p className="text-white/70 mb-3">Traditional systems rely on predefined thresholds and fixed image-processing rules.</p>
              <p className="text-orange-400/80 text-sm">
                <strong>Limitation:</strong> They fail when lighting conditions change, product variations exist, or defects are non-uniform.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl mb-3 text-orange-400">3. Sampling-Based Quality Checks</h3>
              <p className="text-white/70 mb-3">Most systems inspect only a subset of products, creating undetected defects, quality variability, and increased risk.</p>
            </div>
          </div>
        </section>

        {/* How Vision AI Systems Work */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">How Vision AI Systems Work</h2>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-400">
              <h3 className="text-xl mb-3 text-blue-400">1. Data Acquisition Layer</h3>
              <p className="text-white/70">High-resolution cameras, multi-angle imaging systems, and infrared/thermal sensors capture continuous visual data from production lines.</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-400">
              <h3 className="text-xl mb-3 text-cyan-400">2. Edge Processing Layer</h3>
              <p className="text-white/70 mb-3">Data is processed locally using Edge AI systems to ensure:</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="p-3 bg-cyan-500/10 text-sm text-center">Real-time inference</div>
                <div className="p-3 bg-cyan-500/10 text-sm text-center">Low latency</div>
                <div className="p-3 bg-cyan-500/10 text-sm text-center">Immediate decisions</div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-400">
              <h3 className="text-xl mb-3 text-purple-400">3. Model Layer (AI Vision Models)</h3>
              <p className="text-white/70 mb-3">Models are trained to detect defects, classify products, and identify anomalies using techniques like:</p>
              <ul className="space-y-2 text-white/60">
                <li>• Convolutional Neural Networks (CNNs)</li>
                <li>• Deep learning-based object detection</li>
                <li>• Image segmentation models</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-400">
              <h3 className="text-xl mb-3 text-green-400">4. Decision & Feedback Layer</h3>
              <p className="text-white/70">Outputs trigger alerts, workflow automation, and line adjustments. The system continuously improves through data collection, model retraining, and performance optimisation.</p>
            </div>
          </div>
        </section>

        {/* Real-Time Quality Control */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">Real-Time Quality Control: The Key Advantage</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-lg mb-3 text-orange-400">Traditional Workflow</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Production → Inspection → Detection → Action</p>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-400/20">
              <h3 className="text-lg mb-3 text-green-400">Vision AI Workflow</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Production → Detection → Immediate Action</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20">
            <p className="text-lg text-white/90 mb-3"><strong>Impact:</strong></p>
            <ul className="space-y-2 text-white/70">
              <li>• Defects are identified instantly</li>
              <li>• Faulty products are removed in real time</li>
              <li>• Production parameters can be adjusted dynamically</li>
            </ul>
          </div>
        </section>

        {/* Key Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">Key Use Cases in Manufacturing</h2>

          <div className="grid gap-4">
            <div className="p-6 bg-gradient-to-r from-green-500/10 to-transparent border border-green-400/20">
              <h3 className="text-lg mb-2 text-green-400">Defect Detection</h3>
              <p className="text-white/60 text-sm">Surface defects (scratches, cracks), structural anomalies, assembly errors</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-400/20">
              <h3 className="text-lg mb-2 text-cyan-400">Product Classification</h3>
              <p className="text-white/60 text-sm">Sort products based on quality, categorise variations, ensure compliance</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-400/20">
              <h3 className="text-lg mb-2 text-blue-400">Assembly Verification</h3>
              <p className="text-white/60 text-sm">Verify correct component placement, alignment, completeness</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/20">
              <h3 className="text-lg mb-2 text-purple-400">Process Optimization</h3>
              <p className="text-white/60 text-sm">Identify inefficiencies, optimise production speed, improve yield</p>
            </div>
          </div>
        </section>

        {/* Quantifiable Impact */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">Quantifiable Impact</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-400/20 text-center">
              <div className="text-3xl text-green-400 mb-2">↓</div>
              <h3 className="text-lg mb-2 text-green-400">Defect Rates</h3>
              <p className="text-white/60 text-sm">Continuous inspection ensures fewer defective products</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 text-center">
              <div className="text-3xl text-cyan-400 mb-2">↑</div>
              <h3 className="text-lg mb-2 text-cyan-400">Throughput</h3>
              <p className="text-white/60 text-sm">Automated inspection removes bottlenecks</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/20 text-center">
              <div className="text-3xl text-blue-400 mb-2">↓</div>
              <h3 className="text-lg mb-2 text-blue-400">Operational Costs</h3>
              <p className="text-white/60 text-sm">Less manual labour, reduced waste</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/20 text-center">
              <div className="text-3xl text-purple-400 mb-2">↑</div>
              <h3 className="text-lg mb-2 text-purple-400">Consistency</h3>
              <p className="text-white/60 text-sm">Uniform inspection standards</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20 text-center">
              <div className="text-3xl text-orange-400 mb-2">⚡</div>
              <h3 className="text-lg mb-2 text-orange-400">Faster Feedback</h3>
              <p className="text-white/60 text-sm">Immediate detection enables rapid correction</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl mb-6">Conclusion</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Vision AI represents a fundamental shift in manufacturing operations, moving quality control from manual to automated, delayed to real-time, and reactive to predictive.
          </p>
          <div className="p-8 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-blue-500/20 border border-green-400/30">
            <p className="text-2xl sm:text-3xl text-white leading-relaxed">
              The question is no longer <em>"Can we automate inspection?"</em> It is: <strong className="text-green-400">How intelligently can we control quality at scale?</strong>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl mb-4">Explore SVARA Vision AI</h2>
            <p className="text-white/70 mb-8">
              Enable real-time quality intelligence and scalable manufacturing automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-400 hover:to-cyan-400 transition-all inline-flex items-center justify-center gap-2"
              >
                View Products
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-white/20 hover:border-green-400/50 hover:bg-white/5 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
