import { Eye, Plane, Cpu, Sparkles, GitBranch, Box, Cloud, ArrowRight, Code, TrendingUp, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { SEOHead } from "../components/SEOHead";
import { productSchemas } from "../components/StructuredData";
import { useState } from "react";
import visionAIImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_04_46_36_AM.png";
import droneAIImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_04_58_18_AM-1.png";
import edgeAIImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_05_01_20_AM.png";
import genAIImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_05_03_58_AM-1.png";
import aiAgentsImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_05_06_12_AM.png";
import digitalTwinImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_05_08_44_AM.png";
import aiOSImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_05_11_21_AM.png";
import businessCloudImage from "../../imports/ChatGPT_Image_Apr_29,_2026,_05_13_39_AM.png";
import digitalEngineeringImage from "../../imports/ChatGPT_Image_Apr_30,_2026,_06_08_22_PM.png";
import digitalGrowthImage from "../../imports/ChatGPT_Image_Apr_30,_2026,_06_12_30_PM-1.png";

export function Products() {
  const mousePosition = useMouseTracker3D();
  const { scrollYProgress } = useScroll();
  const [showGenerativeAIModal, setShowGenerativeAIModal] = useState(false);
  const [showEdgeAIModal, setShowEdgeAIModal] = useState(false);
  const [showAIAgentsModal, setShowAIAgentsModal] = useState(false);
  const [showVisionAIModal, setShowVisionAIModal] = useState(false);
  const [showDroneAIModal, setShowDroneAIModal] = useState(false);
  const [showDigitalTwinModal, setShowDigitalTwinModal] = useState(false);
  const [showAIOSModal, setShowAIOSModal] = useState(false);
  const [showBusinessCloudModal, setShowBusinessCloudModal] = useState(false);
  const [showDigitalEngineeringModal, setShowDigitalEngineeringModal] = useState(false);
  const [showDigitalGrowthModal, setShowDigitalGrowthModal] = useState(false);

  const products = [
    {
      id: "vision-ai",
      name: "Vision AI",
      tagline: "Cameras don't just record. They think.",
      icon: Eye,
      color: "blue",
      description: "Transform any camera into an intelligent sensor. Real-time object detection, classification, and behavioral analysis at the edge.",
      capabilities: ["Real-time object detection", "Facial recognition", "Anomaly detection", "Behavioral analytics", "Edge processing"],
      pricing: "Enterprise & Custom"
    },
    {
      id: "drone-ai",
      name: "Drone AI",
      tagline: "Autonomous intelligence for aerial operations",
      icon: Plane,
      color: "purple",
      description: "Autonomous flight, intelligent navigation, and real-time aerial analysis. From inspection to surveillance to delivery.",
      capabilities: ["Autonomous navigation", "Route optimization", "Object tracking", "Collision avoidance", "Swarm coordination"],
      pricing: "Per Unit + Platform"
    },
    {
      id: "edge-ai",
      name: "Edge AI",
      tagline: "Intelligence at the source",
      icon: Cpu,
      color: "pink",
      description: "Deploy AI models directly on edge devices. Process data locally, sync globally, act instantly—no cloud dependency.",
      capabilities: ["Local inference", "Model optimization", "Offline operation", "Real-time processing", "Cloud sync"],
      pricing: "Per Device + API"
    },
    {
      id: "generative-ai",
      name: "Generative AI",
      tagline: "Create, automate, innovate",
      icon: Sparkles,
      color: "cyan",
      description: "Generate content, code, designs, and insights at scale. From marketing to engineering, automate creative work.",
      capabilities: ["Content generation", "Code synthesis", "Image creation", "Data augmentation", "Workflow automation"],
      pricing: "API + Enterprise"
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      tagline: "Autonomous digital workforce",
      icon: GitBranch,
      color: "green",
      description: "Deploy intelligent agents that work independently. Handle tasks, make decisions, learn from outcomes.",
      capabilities: ["Task automation", "Decision making", "Learning systems", "Multi-agent coordination", "Human handoff"],
      pricing: "Per Agent + Usage"
    },
    {
      id: "digital-twin",
      name: "Digital Twin",
      tagline: "Mirror reality, predict the future",
      icon: Box,
      color: "orange",
      description: "Create living digital replicas of physical systems. Simulate scenarios, predict failures, optimize operations.",
      capabilities: ["3D modeling", "IoT integration", "Predictive analytics", "Scenario testing", "Real-time sync"],
      pricing: "Enterprise Custom"
    },
    {
      id: "ai-os",
      name: "AI OS",
      tagline: "Your business, one intelligent interface",
      icon: Sparkles,
      color: "indigo",
      description: "Unified operating system for all your AI capabilities. One interface to rule them all.",
      capabilities: ["Natural language control", "Cross-platform orchestration", "Workflow automation", "Context awareness", "Multi-modal interaction"],
      pricing: "Platform License"
    },
    {
      id: "business-cloud",
      name: "Unified Business Cloud",
      tagline: "All your business tools, one platform",
      icon: Cloud,
      color: "red",
      description: "ERP, CRM, HRM, operations—everything in one AI-powered cloud platform. Built for scale, designed for simplicity.",
      capabilities: ["Integrated business tools", "AI-powered insights", "Workflow automation", "Real-time analytics", "Scalable infrastructure"],
      pricing: "Per User + Modules"
    },
    {
      id: "digital-engineering",
      name: "Digital Engineering",
      tagline: "Built for your business. Scaled for your future.",
      icon: Code,
      color: "teal",
      description: "SVARA Digital Engineering delivers custom-built technology solutions with AI at the core—designed to solve real business challenges and integrate seamlessly with your systems.",
      capabilities: ["Web & mobile application development", "AI/ML integration", "API and system integration", "Cloud & infrastructure engineering", "DevOps and security"],
      pricing: "Services Engine"
    },
    {
      id: "digital-growth",
      name: "Digital Growth & PR Tech",
      tagline: "Growth is not a campaign. It's a system.",
      icon: TrendingUp,
      color: "violet",
      description: "SVARA Growth builds intelligent marketing systems that connect data, automation, and strategy—turning every interaction into measurable business outcomes.",
      capabilities: ["Growth engineering & funnel design", "AI content generation", "Performance marketing optimisation", "PR & brand intelligence", "Full-funnel analytics"],
      pricing: "Growth Engine"
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Products | Vision AI, Edge AI, AI Agents & Digital Twin | SVARA"
        description="Explore SVARA's AI product suite: Vision AI for surveillance, Edge AI for real-time processing, AI Agents for automation, Digital Twin for simulation, and AI OS for enterprise operations."
        keywords="vision AI software, computer vision platform, edge AI deployment, AI agents for business, digital twin software, AI OS platform, drone AI, generative AI, enterprise AI products"
        canonicalUrl="https://www.svaratechfusion.com/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            productSchemas.visionAI,
            productSchemas.edgeAI,
            productSchemas.aiOS,
            productSchemas.digitalTwin
          ]
        }}
      />
      <div className="bg-black text-white" style={{ perspective: "2000px" }}>
        <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24" style={{ perspective: "1500px" }}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: get3DTransform(mousePosition.x, mousePosition.y, 6),
            transformStyle: "preserve-3d",
          }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight px-4">
            Products That<br />Think Different
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 px-4">
            Every platform. Every product. AI-first from the ground up.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/50 px-4">
            Not AI features. AI infrastructure.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group border border-white/10 hover:border-white/20 transition-all overflow-hidden bg-white/5"
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
            >
              <div className="grid grid-cols-1 gap-0">
                {/* Image Section */}
                <div className="relative h-[600px] overflow-hidden bg-black">
                  {product.id === "vision-ai" ? (
                    <img
                      src={visionAIImage}
                      alt="Vision AI"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "drone-ai" ? (
                    <img
                      src={droneAIImage}
                      alt="Drone AI"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "edge-ai" ? (
                    <img
                      src={edgeAIImage}
                      alt="Edge AI"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "generative-ai" ? (
                    <img
                      src={genAIImage}
                      alt="Generative AI"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "ai-agents" ? (
                    <img
                      src={aiAgentsImage}
                      alt="AI Agents"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "digital-twin" ? (
                    <img
                      src={digitalTwinImage}
                      alt="Digital Twin"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "ai-os" ? (
                    <img
                      src={aiOSImage}
                      alt="AI OS"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "business-cloud" ? (
                    <img
                      src={businessCloudImage}
                      alt="Unified Business Cloud"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "digital-engineering" ? (
                    <img
                      src={digitalEngineeringImage}
                      alt="Digital Engineering"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : product.id === "digital-growth" ? (
                    <img
                      src={digitalGrowthImage}
                      alt="Digital Growth & PR Tech"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
                      }}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br from-${product.color}-500/20 to-${product.color}-600/10 flex items-center justify-center`}>
                      <product.icon className={`text-${product.color}-400`} size={120} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-12">
                  <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 bg-${product.color}-500/10 border border-${product.color}-500/20`}>
                    <product.icon className={`text-${product.color}-400`} size={24} />
                    <span className="text-sm uppercase tracking-wider">{product.name}</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl mb-4">{product.name}</h3>
                  <p className="text-2xl text-white/60 mb-6">{product.tagline}</p>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Key Capabilities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-start gap-2 text-sm text-white/70"
                        >
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-sm text-white/50">{product.pricing}</span>
                    <button
                      onClick={() => {
                        if (product.id === "generative-ai") {
                          setShowGenerativeAIModal(true);
                        } else if (product.id === "edge-ai") {
                          setShowEdgeAIModal(true);
                        } else if (product.id === "ai-agents") {
                          setShowAIAgentsModal(true);
                        } else if (product.id === "vision-ai") {
                          setShowVisionAIModal(true);
                        } else if (product.id === "drone-ai") {
                          setShowDroneAIModal(true);
                        } else if (product.id === "digital-twin") {
                          setShowDigitalTwinModal(true);
                        } else if (product.id === "ai-os") {
                          setShowAIOSModal(true);
                        } else if (product.id === "business-cloud") {
                          setShowBusinessCloudModal(true);
                        } else if (product.id === "digital-engineering") {
                          setShowDigitalEngineeringModal(true);
                        } else if (product.id === "digital-growth") {
                          setShowDigitalGrowthModal(true);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full text-sm font-medium group/btn"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Platform Integration</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl mb-4">∞</div>
              <h3 className="text-xl mb-2">Unified Platform</h3>
              <p className="text-white/60 text-sm">
                All products share the same AI foundation. Deploy one, leverage all.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl mb-2">Instant Intelligence</h3>
              <p className="text-white/60 text-sm">
                No training period. Products learn from the entire ecosystem from day one.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl mb-2">Composable Solutions</h3>
              <p className="text-white/60 text-sm">
                Mix and match products. Build custom solutions. Everything connects.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-white/70 mb-8">
              Not standalone products. <span className="text-white">An integrated ecosystem.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/technology"
                className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                View Technology Stack
                <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Deployment Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-lg mb-2">Cloud</h3>
              <p className="text-sm text-white/60">
                Fully managed, scalable infrastructure. Deploy in minutes.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-lg mb-2">On-Premise</h3>
              <p className="text-sm text-white/60">
                Complete control. Air-gapped deployments. Your infrastructure.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-lg mb-2">Hybrid</h3>
              <p className="text-sm text-white/60">
                Best of both worlds. Edge + cloud intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Generative AI Modal */}
      {showGenerativeAIModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowGenerativeAIModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGenerativeAIModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA GENERATIVE & COGNITIVE AI SYSTEMS</h2>
              <p className="text-xl text-white/70 mb-2">Enterprise AI, Knowledge Automation & Decision Intelligence</p>
              <p className="text-lg text-cyan-400 italic">"From managing information to activating intelligence."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Enterprise technology has historically evolved around systems of record—platforms designed to store, organise, and retrieve information. While these systems have enabled digital transformation, they have not fundamentally solved the problem of how organisations think, decide, and act on information.
                </p>
                <p className="leading-relaxed mb-4">
                  Today, enterprises generate massive volumes of structured and unstructured data across documents, communications, applications, and operational systems. Despite this abundance, a significant portion of enterprise productivity is lost in activities such as:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Searching for information across fragmented systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Interpreting and summarising documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Drafting reports, communications, and outputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Coordinating workflows across disconnected tools</span>
                  </li>
                </ul>
                <p className="leading-relaxed font-semibold text-cyan-400">
                  This shift marks the transition from digital transformation to intelligence transformation.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Generative & Cognitive AI Systems transform enterprise software from passive systems of record into active systems of intelligence.
                </p>
                <p className="leading-relaxed mb-3">The platform enables organisations to:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Understand and contextualise enterprise knowledge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Generate high-quality outputs across workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Automate reasoning-driven processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Deliver real-time insights and recommendations</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Every document, interaction, and operational dataset becomes part of a unified system that can be queried, interpreted, and acted upon in real time.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Private AI Workspace — Enterprise Knowledge Intelligence</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA provides a secure, organisation-specific AI environment trained exclusively on internal data. The system ingests documents, communications, and structured datasets to create a semantically indexed knowledge base.
                    </p>
                    <p className="leading-relaxed mb-3">Key capabilities include:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Context-aware document understanding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Natural language querying of enterprise knowledge</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Source-linked responses for traceability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Role-based access control for secure information retrieval</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">AI Process Automation — Workflow Intelligence Engine</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA extends automation beyond rule-based systems by enabling context-aware execution of workflows. Unlike traditional automation tools that rely on predefined rules, SVARA processes unstructured inputs and adapts dynamically based on context.
                    </p>
                    <p className="leading-relaxed mb-3">Capabilities include:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>End-to-end automation of document-driven workflows</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Intelligent extraction, validation, and processing of data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Dynamic handling of exceptions and edge cases</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Integration across enterprise systems for seamless execution</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Decision Intelligence — AI-Augmented Analytics</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA introduces a new approach to enterprise analytics by enabling natural language interaction with data and insights.
                    </p>
                    <p className="leading-relaxed mb-3">Users can query systems conversationally, and the platform generates:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Analytical insights based on historical data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Predictive forecasts using machine learning models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Anomaly detection for risk identification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Scenario modelling for strategic planning</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Generative Output Systems — Content & Knowledge Creation</h4>
                    <p className="leading-relaxed mb-3">
                      The platform enables high-quality generation of enterprise outputs across use cases.
                    </p>
                    <p className="leading-relaxed mb-3">Capabilities include:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Automated report generation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Drafting of business communications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Creation of structured and unstructured content</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Transformation of data into narrative insights</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Conversational Enterprise Interface — Unified Interaction Layer</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA provides a unified conversational interface that acts as the primary interaction layer for enterprise systems. Users interact through natural language, eliminating the need to navigate multiple applications.
                    </p>
                    <p className="leading-relaxed mb-3">Capabilities include:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Querying data across systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Triggering workflows and actions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Accessing insights and reports</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Managing tasks and operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Enterprise Operations</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Automating internal workflows, reporting, and decision processes</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Finance & Legal</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Document analysis, contract review, and compliance monitoring</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Customer Operations</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Support automation, communication generation, and engagement systems</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Knowledge Management</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Centralised access to enterprise knowledge and documentation</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Strategic Planning</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Data-driven insights, forecasting, and scenario modelling</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Significant reduction in time spent on knowledge-related tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Faster and more informed decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved consistency and accuracy of outputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Enhanced utilisation of enterprise data assets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduction in operational costs through automation</span>
                  </li>
                </ul>
                <p className="leading-relaxed text-cyan-400 font-semibold">
                  The platform enables organisations to transition from manual, fragmented workflows to intelligent, integrated operations.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Generative & Cognitive AI is not positioned as a standalone AI tool. It is a horizontal intelligence infrastructure layer that integrates across all enterprise systems.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Information storage → Intelligence activation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Manual processing → Automated reasoning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Fragmented tools → Unified intelligence layer</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Intelligence is not an add-on. It is the system.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Edge AI Modal */}
      {showEdgeAIModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowEdgeAIModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowEdgeAIModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA EDGE AI PLATFORM</h2>
              <p className="text-xl text-white/70 mb-2">Distributed Intelligence & Real-Time Decision Infrastructure</p>
              <p className="text-lg text-cyan-400 italic">"Process where data is created. Decide where action is needed."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Enterprise AI adoption has been largely driven by cloud-centric architectures, where data is collected, transmitted, and processed in centralised environments. Today, the majority of enterprise data is generated outside traditional data centres—across cameras, IoT sensors, industrial machines, mobile devices, and embedded systems.
                </p>
                <p className="leading-relaxed mb-4">
                  Transmitting such data to the cloud introduces multiple constraints:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Latency that delays decision-making and response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Bandwidth limitations and rising infrastructure costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Dependency on continuous network connectivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Data privacy, security, and regulatory challenges</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Edge AI represents a structural shift—moving intelligence closer to where data is generated, enabling real-time operations and reducing dependency on central infrastructure.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Edge AI Platform enables enterprises to deploy artificial intelligence directly at the edge—across devices, sensors, cameras, and industrial systems. Instead of relying on centralised cloud processing, the platform enables localised perception, decision-making, and action.
                </p>
                <p className="leading-relaxed mb-3">This architecture shifts enterprises from:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Centralised intelligence → Distributed intelligence networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Data transmission → Localised processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Delayed response → Real-time execution</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Platform Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Real-Time Edge Inference Engine</h4>
                    <p className="leading-relaxed">
                      Deploys optimised AI models directly on edge hardware, enabling inference with latency as low as 5–50 milliseconds using frameworks such as ONNX Runtime, TensorRT, and OpenVINO.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Multi-Modal Data Processing</h4>
                    <p className="leading-relaxed mb-3">
                      Processes multiple data streams simultaneously: video, IoT sensor data, audio, and machine telemetry.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Local Decision & Action Engine</h4>
                    <p className="leading-relaxed">
                      Enables immediate action at the source through triggering alarms, controlling machinery, and initiating automated workflows.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Distributed Intelligence Network</h4>
                    <p className="leading-relaxed">
                      Each edge node operates autonomously while remaining part of a coordinated network with federated learning and centralised model distribution.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Model Lifecycle Management</h4>
                    <p className="leading-relaxed">
                      Comprehensive system for remote deployment, version control, performance monitoring, and continuous model updates.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Security & Data Governance</h4>
                    <p className="leading-relaxed">
                      Enterprise-grade security with on-device processing, encrypted communication, role-based access control, and compliance features.
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Industrial & Manufacturing</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Quality inspection, safety monitoring, machine performance analysis</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Smart Cities & Infrastructure</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Traffic management, public safety monitoring, environmental sensing</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Healthcare</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Patient monitoring, medical device integration, emergency response</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Energy & Utilities</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Grid monitoring, predictive maintenance, asset optimisation</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Real-time decision-making improves response times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduced bandwidth and cloud infrastructure costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Increased system uptime through offline capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Scalable infrastructure without central compute bottlenecks</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Intelligence belongs at the edge.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* AI Agents Modal */}
      {showAIAgentsModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAIAgentsModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAIAgentsModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA AI AGENTS</h2>
              <p className="text-xl text-white/70 mb-2">Autonomous Digital Workforce & Agentic Execution Systems</p>
              <p className="text-lg text-cyan-400 italic">"From assisting tasks to executing operations."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Enterprise software has evolved significantly over the past two decades—from on-premise systems to cloud-based SaaS platforms, and more recently, to AI-assisted tools. Despite these advancements, a fundamental limitation persists: most enterprise systems still require human initiation, coordination, and execution at every step.
                </p>
                <p className="leading-relaxed mb-4">
                  At the same time, organisations are facing increasing pressure to:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Scale operations without proportional increase in workforce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improve speed and consistency of execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduce operational costs and inefficiencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Deliver continuous, real-time responsiveness across systems</span>
                  </li>
                </ul>
                <p className="leading-relaxed font-semibold text-cyan-400">
                  AI agents move beyond assistance. They enable execution.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA AI Agents is an enterprise-grade agentic platform that enables organisations to deploy autonomous digital workers capable of executing business processes end-to-end.
                </p>
                <p className="leading-relaxed mb-3">These agents are designed to:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Understand inputs from multiple sources (data, documents, systems, communication)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Plan and decompose tasks into executable steps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Interact with enterprise systems through APIs and interfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Execute actions across workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Handle exceptions and adapt dynamically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Communicate outcomes and escalate when necessary</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Unlike traditional automation tools, SVARA AI Agents operate with context awareness, reasoning capability, and continuous learning.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Task Execution Agents — End-to-End Workflow Automation</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA agents execute multi-step business processes across systems without manual intervention.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Capabilities: Processing structured and unstructured inputs, extracting and validating data, executing actions across applications, completing workflows from initiation to resolution.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Cognitive Agents — Context-Aware Decision Execution</h4>
                    <p className="leading-relaxed mb-3">
                      Cognitive agents operate in environments where decisions require interpretation, reasoning, and context awareness.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Capabilities: Analysing complex inputs, making decisions based on policies and learned patterns, handling exceptions dynamically, adapting behaviour based on context.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Customer-Facing Agents — Intelligent Interaction Systems</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA agents interact directly with customers across multiple channels.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Capabilities: Handling customer queries, managing onboarding workflows, providing personalised responses, maintaining consistency across interactions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Voice AI Agents — Natural Language Execution Layer</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA integrates advanced voice capabilities, enabling agents to interact through spoken language.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Capabilities: Real-time speech recognition and synthesis, intent understanding, voice-based task execution, multilingual interaction support.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Multi-Agent Orchestration — Distributed Execution Systems</h4>
                    <p className="leading-relaxed mb-3">
                      Complex workflows are executed through coordinated systems of multiple agents.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Capabilities: Task decomposition, parallel execution, central coordination, shared context and memory across agents.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Continuous Learning & Optimisation</h4>
                    <p className="leading-relaxed">
                      SVARA AI Agents improve performance over time through feedback loops, learning from historical execution patterns, and adapting to evolving workflows.
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Agentic System Architecture</h3>
                <p className="leading-relaxed mb-3">
                  SVARA AI Agents are built on a multi-layer agentic architecture:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Perception Layer</h5>
                    <p className="text-sm text-white/80">Ingests data from multiple sources</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Planning Layer</h5>
                    <p className="text-sm text-white/80">Breaks down tasks into execution plans</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Execution Layer</h5>
                    <p className="text-sm text-white/80">Performs actions across workflows</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Reasoning Layer</h5>
                    <p className="text-sm text-white/80">Handles variability and exceptions</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Communication Layer</h5>
                    <p className="text-sm text-white/80">Reports outcomes and escalates</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Learning Layer</h5>
                    <p className="text-sm text-white/80">Continuously improves performance</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Enterprise Operations</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Automating internal workflows, approvals, and process execution</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Customer Support & Engagement</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Handling support, onboarding, and customer interactions at scale</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Sales & Revenue Operations</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Lead qualification, follow-ups, and pipeline management</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Finance & HR</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Processing transactions, managing records, and handling compliance workflows</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">IT & Internal Systems</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Automating system operations, monitoring, and issue resolution</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>60–80% reduction in manual task execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Faster processing and turnaround times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduced operational costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved consistency and accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>24/7 operational capability without workforce constraints</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA AI Agents are not positioned as automation tools. They represent a new operational model where digital systems execute workflows independently.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Human-driven workflows → Autonomous execution systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Rule-based automation → Context-aware intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Task assistance → End-to-end execution</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Execution is the next frontier of intelligence.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Vision AI Modal */}
      {showVisionAIModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowVisionAIModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVisionAIModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA VISION AI</h2>
              <p className="text-xl text-white/70 mb-2">AI-Powered Video Intelligence & Autonomous Perception Systems</p>
              <p className="text-lg text-cyan-400 italic">"From observing environments to understanding and acting on them."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Over the last decade, video surveillance infrastructure has scaled rapidly across enterprises, cities, and industrial environments. Organisations today deploy thousands of cameras across facilities, public spaces, transportation systems, and critical infrastructure.
                </p>
                <p className="leading-relaxed mb-4">
                  Despite this scale, the underlying paradigm of surveillance has remained largely unchanged. Cameras function as passive recording devices, storing vast amounts of footage that is rarely analysed in real time. Human operators are expected to monitor multiple feeds simultaneously, leading to cognitive overload, missed incidents, and delayed response times.
                </p>
                <p className="leading-relaxed mb-4 font-semibold text-cyan-400">
                  This creates a fundamental inefficiency: Enterprises are data-rich but intelligence-poor.
                </p>
                <p className="leading-relaxed">
                  As organisations move toward autonomous operations, Vision AI is no longer a feature—it is becoming a foundational intelligence layer across safety, security, and operational systems.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Vision AI is an enterprise-grade video intelligence platform that transforms traditional camera networks into autonomous perception systems.
                </p>
                <p className="leading-relaxed mb-3">Instead of passively recording footage, SVARA Vision AI enables cameras to:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Detect objects and events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Interpret behaviour and context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Identify risks and anomalies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Trigger actions in real time</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  SVARA Vision AI is not positioned as a surveillance tool. It is designed as a perception layer for physical environments, enabling organisations to move from reactive monitoring to proactive and predictive operations.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Real-Time Object Detection & Classification</h4>
                    <p className="leading-relaxed mb-3">
                      The platform identifies and classifies objects across video streams, including:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>People, vehicles, equipment, and assets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Custom objects specific to enterprise environments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Context-aware classification based on environment and use case</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Behavioural Intelligence & Activity Recognition</h4>
                    <p className="leading-relaxed mb-3">
                      Beyond object detection, SVARA Vision AI analyses behaviour and interactions within scenes.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Intrusion detection and perimeter breaches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Loitering and suspicious activity identification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Crowd density and movement analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Aggressive or abnormal behaviour detection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Workflow and process monitoring in industrial settings</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Intelligent Alerting & Event Management</h4>
                    <p className="leading-relaxed mb-3">
                      The platform generates real-time alerts based on predefined rules, thresholds, and learned patterns.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Context-aware alert prioritisation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Reduction of false positives through multi-layer validation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Multi-channel alert delivery (dashboards, mobile, APIs)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Integration with incident management systems</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Cross-Camera Tracking & Forensic Search</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Vision AI enables tracking of entities across multiple camera feeds.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Re-identification of individuals and objects across locations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Timeline reconstruction of events</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Searchable video intelligence using natural language queries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Rapid forensic analysis for investigations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Compliance, Safety & Operational Monitoring</h4>
                    <p className="leading-relaxed mb-3">
                      The platform enforces safety and compliance standards through automated monitoring.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Personal Protective Equipment (PPE) compliance detection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Restricted zone access control</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Hazard detection in industrial environments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Process adherence and workflow validation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Predictive Risk Analysis</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Vision AI incorporates predictive intelligence by analysing patterns over time.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Identification of recurring risk patterns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Zone-based risk scoring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Early warning signals for potential incidents</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Integration with Digital Twin systems for simulation-based forecasting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Smart Cities & Public Safety</h4>
                    <p className="leading-relaxed text-white/80">Real-time surveillance, traffic monitoring, and incident detection across urban environments.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Industrial & Manufacturing</h4>
                    <p className="leading-relaxed text-white/80">Safety compliance, process monitoring, and operational efficiency tracking.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Retail & Commercial Spaces</h4>
                    <p className="leading-relaxed text-white/80">Customer behaviour analysis, loss prevention, and store optimisation.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Transportation & Infrastructure</h4>
                    <p className="leading-relaxed text-white/80">Monitoring of airports, railways, highways, and logistics networks.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Critical Infrastructure</h4>
                    <p className="leading-relaxed text-white/80">Security and monitoring of energy, utilities, and high-risk facilities.</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Significant reduction in manual monitoring requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Faster incident detection and response times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved compliance and risk management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Enhanced utilisation of existing camera infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Actionable insights from previously unused video data</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4 text-cyan-400 font-semibold">
                  The platform converts video systems from cost centres into intelligence-generating assets.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Vision AI is not positioned as a standalone surveillance solution. It is a foundational perception layer within a broader intelligent system architecture.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Passive recording → Active perception</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Human monitoring → Autonomous intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reactive response → Predictive prevention</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Perception is the first layer of intelligence.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Drone AI Modal */}
      {showDroneAIModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDroneAIModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowDroneAIModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA DRONE AI</h2>
              <p className="text-xl text-white/70 mb-2">Autonomous Aerial Intelligence & Distributed Surveillance Systems</p>
              <p className="text-lg text-cyan-400 italic">"Extend perception beyond infrastructure. Enable intelligence without boundaries."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Modern enterprises and public infrastructure systems operate across increasingly large, complex, and dynamic physical environments. Industrial facilities span hundreds of acres, smart cities extend across vast urban regions, and critical infrastructure networks require continuous monitoring at scale.
                </p>
                <p className="leading-relaxed mb-4">
                  Traditional surveillance and inspection models rely heavily on fixed infrastructure such as CCTV networks and manual inspection processes. While these systems provide baseline visibility, they are inherently constrained:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Fixed cameras create blind spots and limited coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Expanding infrastructure requires significant capital investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Manual patrols and inspections are time-consuming and inconsistent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Response to incidents is delayed due to lack of mobility</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  SVARA Drone AI addresses this shift by transforming drones into intelligent, autonomous agents integrated into a broader enterprise intelligence ecosystem.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Drone AI is an enterprise-grade autonomous aerial intelligence platform that enables drones to function as mobile perception and response units within a distributed intelligence network.
                </p>
                <p className="leading-relaxed mb-3">The platform integrates onboard AI, autonomous navigation, real-time analytics, and system orchestration to allow drones to:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Patrol environments without manual intervention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Detect and analyse objects, behaviours, and anomalies in real time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Respond dynamically to events triggered by other systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Coordinate with ground-based intelligence layers such as Vision AI and Edge AI</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Autonomous Mission Planning & Execution</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Drone AI enables fully autonomous flight operations through intelligent mission planning.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Predefined patrol routes with dynamic optimisation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Adaptive path planning based on environmental conditions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Real-time rerouting in response to obstacles or incidents</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Scheduled and event-driven mission execution</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Onboard AI Perception & Real-Time Detection</h4>
                    <p className="leading-relaxed mb-3">
                      Each drone is equipped with onboard AI models that enable real-time perception during flight.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Object detection and classification (people, vehicles, assets)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Behavioural analysis and anomaly detection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Thermal imaging and night-time surveillance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Environmental monitoring (heat signatures, movement patterns)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Event-Driven Autonomous Response</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Drone AI integrates with enterprise systems to enable event-triggered deployment.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Automatic drone dispatch upon intrusion detection from Vision AI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Rapid response to alarms in industrial or critical infrastructure environments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Dynamic rerouting based on real-time risk signals</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Multi-Drone Fleet Coordination</h4>
                    <p className="leading-relaxed mb-3">
                      The platform supports coordinated operations across multiple drones, enabling large-scale coverage.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Distributed task allocation across drone fleets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Collision avoidance and airspace management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Parallel mission execution for high-density environments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Centralised fleet monitoring and control</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Real-Time Streaming & Command Integration</h4>
                    <p className="leading-relaxed mb-3">
                      Drones stream live video and telemetry data to central command systems.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Real-time video feeds integrated with SVARA Vision AI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Centralised monitoring dashboards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Two-way communication for manual override and intervention</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Integration with SVARA ONE AI OS for command-based control</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Infrastructure Inspection & Asset Monitoring</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Drone AI enables automated inspection of physical assets and infrastructure.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Inspection of solar panels, pipelines, towers, and industrial equipment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Detection of structural anomalies and defects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Monitoring of large-scale facilities and remote assets</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Industrial & Manufacturing</h4>
                    <p className="leading-relaxed text-white/80">Perimeter monitoring, safety inspection, and facility surveillance across large industrial sites.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Smart Cities & Public Safety</h4>
                    <p className="leading-relaxed text-white/80">Urban surveillance, crowd monitoring, and rapid response to incidents.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Energy & Infrastructure</h4>
                    <p className="leading-relaxed text-white/80">Inspection of solar farms, power lines, pipelines, and remote assets.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Logistics & Warehousing</h4>
                    <p className="leading-relaxed text-white/80">Large-scale facility monitoring, asset tracking, and operational visibility.</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-cyan-400">Disaster Response & Emergency Operations</h4>
                    <p className="leading-relaxed text-white/80">Rapid situational awareness, search and rescue support, and damage assessment.</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Expanded surveillance coverage without additional fixed infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Faster incident detection and response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduced dependency on manual inspections and patrols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Lower operational costs over time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved safety and risk management</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Drone AI is not positioned as a standalone drone solution. It is a mobile intelligence layer within a larger distributed system.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Fixed infrastructure → Mobile intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Manual operation → Autonomous execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Delayed response → Real-time action</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Intelligence that moves with your environment.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Digital Twin Modal */}
      {showDigitalTwinModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDigitalTwinModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowDigitalTwinModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA DIGITAL TWIN</h2>
              <p className="text-xl text-white/70 mb-2">Simulation Intelligence, Predictive Systems & Real-Time Virtual Environments</p>
              <p className="text-lg text-cyan-400 italic">"Test before you build. Decide before you act."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Enterprises operating in physical environments—manufacturing plants, smart cities, infrastructure networks, energy systems—are constrained by the cost, risk, and complexity of real-world experimentation.
                </p>
                <p className="leading-relaxed mb-4">
                  Any change to a system carries uncertainty. Testing these changes in live environments can lead to:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Operational disruption and downtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Financial loss due to failed implementations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Safety risks in high-criticality environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Limited ability to evaluate multiple scenarios</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Digital twin technology creates dynamic, data-driven virtual representations of real-world systems, enabling organisations to simulate, analyse, and optimise operations before execution.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Twin is an enterprise-grade simulation and intelligence platform that creates real-time virtual replicas of physical systems, processes, and environments.
                </p>
                <p className="leading-relaxed mb-3">The platform integrates live data, AI analytics, and simulation engines to enable organisations to:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Monitor systems in real time through virtual representations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Simulate scenarios and evaluate outcomes before implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Predict system behaviour and identify risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Optimise performance through data-driven insights</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  The system acts as a bridge between the physical and digital worlds, enabling organisations to operate with greater precision and confidence.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Real-Time System Synchronisation</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Digital Twin continuously synchronises with physical systems using live data streams.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Integration with IoT sensors, cameras, and operational systems ensures accurate real-time representation with low-latency processing.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Scenario Simulation & What-If Modelling</h4>
                    <p className="leading-relaxed mb-3">
                      The platform enables organisations to simulate a wide range of scenarios without impacting live operations.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Testing operational changes, evaluating infrastructure modifications, running parallel scenarios for comparison, and Monte Carlo simulations for probabilistic analysis.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Predictive Intelligence & Forecasting</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Digital Twin leverages AI models to predict system behaviour and future outcomes.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Predictive maintenance, performance forecasting, early identification of failures, and continuous optimisation based on historical and real-time data.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">3D Visualisation & Immersive Environments</h4>
                    <p className="leading-relaxed mb-3">
                      The platform provides intuitive visual representations of complex systems.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Interactive 3D models, real-time visualisation of system states, layered data overlays, and immersive environments for training and collaboration.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Operational Optimisation Engine</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA Digital Twin enables continuous optimisation of systems based on data-driven insights.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Identification of inefficiencies, process improvement recommendations, resource allocation optimisation, and performance benchmarking.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Training & Simulation Environments</h4>
                    <p className="leading-relaxed mb-3">
                      The platform supports safe, controlled environments for training and scenario-based learning.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Simulation of emergency scenarios, operator training without impacting live systems, and evaluation of response strategies.
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">System Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Data Ingestion Layer</h5>
                    <p className="text-sm text-white/80">Collects real-time data from IoT devices and sensors</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Processing & Analytics</h5>
                    <p className="text-sm text-white/80">Applies AI models for analysis and prediction</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Simulation Engine</h5>
                    <p className="text-sm text-white/80">Runs scenarios, predictive models, and optimisation</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Visualisation Layer</h5>
                    <p className="text-sm text-white/80">Renders 3D environments and system representations</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Manufacturing & Industrial Operations</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Process optimisation, equipment monitoring, and production planning</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Smart Cities</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Urban planning, traffic simulation, and infrastructure management</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Energy & Utilities</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Grid optimisation, asset management, and demand forecasting</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Infrastructure & Construction</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Project planning, risk analysis, and structural simulation</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Healthcare & Emergency Systems</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Patient flow simulation, emergency response planning, and resource allocation</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduction in operational risk through pre-implementation testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved decision accuracy and confidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Optimised system performance and resource utilisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduced costs associated with trial-and-error approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Enhanced collaboration through shared visual environments</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Twin is not a visualisation tool. It is a simulation intelligence platform that enables organisations to model, predict, and optimise complex systems.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reactive analysis → Predictive intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Physical testing → Virtual simulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Uncertainty → Data-driven confidence</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  The future is not predicted. It is simulated.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* AI OS Modal */}
      {showAIOSModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAIOSModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAIOSModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA ONE AI OS</h2>
              <p className="text-xl text-white/70 mb-2">Unified Intelligence, Orchestration & Command Layer</p>
              <p className="text-lg text-cyan-400 italic">"Don't use software. Command intelligence."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Modern enterprises operate within highly fragmented technology environments. Over time, organisations have accumulated a wide range of software systems—ERP platforms, CRM tools, analytics dashboards, communication systems, operational tools—each designed to solve specific problems.
                </p>
                <p className="leading-relaxed mb-4">
                  While these systems have improved functionality within individual domains, they have introduced significant structural inefficiencies:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Data is distributed across multiple systems with limited interoperability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Workflows require manual coordination across tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Users spend significant time navigating interfaces rather than executing outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Decision-making is slowed by fragmented visibility and disconnected insights</span>
                  </li>
                </ul>
                <p className="leading-relaxed font-semibold text-cyan-400">
                  What enterprises lack is not capability, but a unified interface and orchestration layer.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA ONE AI OS is a unified intelligence and orchestration platform that enables organisations to interact with all systems, data, and workflows through a single, natural language-driven interface.
                </p>
                <p className="leading-relaxed mb-3">It functions as a central command layer that:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Connects disparate enterprise systems into a unified environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Orchestrates workflows across applications and AI systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Enables users to execute tasks through natural language commands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Aggregates insights and intelligence into a single interface</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  The platform abstracts complexity, allowing organisations to operate at the level of outcomes rather than interfaces.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Natural Language Command Interface</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA ONE AI OS enables users to interact with enterprise systems using natural language.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Executing tasks through conversational commands, querying data across systems, triggering workflows, and generating insights on demand.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Universal Integration Layer</h4>
                    <p className="leading-relaxed mb-3">
                      The platform integrates with enterprise systems through APIs, connectors, and event-driven architectures.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Integration with CRM, ERP, HRMS, analytics platforms, and custom systems with real-time synchronisation and extensibility.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Multi-Agent Orchestration Engine</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA ONE AI OS coordinates multiple AI agents to execute complex workflows.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Task decomposition, parallel execution, coordination across systems, and monitoring of agent performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Unified Intelligence Dashboard</h4>
                    <p className="leading-relaxed mb-3">
                      The platform provides a centralised interface for monitoring and controlling enterprise systems.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Real-time visibility into operations, aggregated insights, customisable views, and alerting management.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Cross-System Workflow Automation</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA ONE AI OS enables seamless execution of workflows across multiple systems.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Orchestration of processes spanning multiple applications, automated data flow, and AI-driven decision-making within workflows.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Context & Memory Layer</h4>
                    <p className="leading-relaxed mb-3">
                      The platform maintains context across interactions, workflows, and systems.
                    </p>
                    <p className="leading-relaxed text-sm text-white/80">
                      Persistent memory of user preferences, context-aware responses, continuity across sessions, and learning from historical interactions.
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">System Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Interface Layer</h5>
                    <p className="text-sm text-white/80">Natural language interface for user interaction</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Orchestration Layer</h5>
                    <p className="text-sm text-white/80">Workflow management and agent coordination</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Integration Layer</h5>
                    <p className="text-sm text-white/80">API-driven connectivity with enterprise systems</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Intelligence Layer</h5>
                    <p className="text-sm text-white/80">Integration with SVARA AI systems</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Data Layer</h5>
                    <p className="text-sm text-white/80">Aggregation and management of data across systems</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Enterprise Operations</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Centralised control and execution across business functions</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Executive Decision-Making</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Unified access to insights, analytics, and system intelligence</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Multi-System Environments</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Integration and orchestration across complex technology stacks</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Government & Public Systems</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Centralised command and control across infrastructure and services</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduction in time spent navigating multiple systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Faster execution of tasks and workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved decision-making through unified insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Increased operational efficiency across departments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Enhanced scalability of enterprise operations</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA ONE AI OS is not another application within the enterprise stack. It is the interface through which all applications are accessed and controlled.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Navigating software → Commanding outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Fragmented systems → Unified intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Manual coordination → Autonomous orchestration</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  The system that connects all systems.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Business Cloud Modal */}
      {showBusinessCloudModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowBusinessCloudModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBusinessCloudModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA UNIFIED BUSINESS CLOUD</h2>
              <p className="text-xl text-white/70 mb-2">AI-Native Business Platform & Integrated SaaS Ecosystem</p>
              <p className="text-lg text-cyan-400 italic">"One platform. Every function. Built for the AI era."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Over the past decade, enterprises have adopted a wide range of SaaS products to manage core business functions—CRM for sales, ERP for operations, HRMS for workforce management, LMS for training, and support systems for customer service.
                </p>
                <p className="leading-relaxed mb-4">
                  While these tools have improved functional efficiency, they have also introduced structural challenges:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Fragmentation of data across multiple platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Lack of interoperability between systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Redundant workflows and manual data transfer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Inconsistent insights due to siloed information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Increased cost and complexity of managing multiple vendors</span>
                  </li>
                </ul>
                <p className="leading-relaxed font-semibold text-cyan-400">
                  The next evolution is fewer, more integrated platforms with shared intelligence across all business functions.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Unified Business Cloud is an AI-powered, integrated SaaS platform that consolidates all core business functions into a single, unified operational environment.
                </p>
                <p className="leading-relaxed mb-3">The platform connects:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Sales and customer management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Operations and resource planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Human resources and workforce management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Learning and development systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Customer support and service operations</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  The platform is built on a shared data layer and unified intelligence layer, ensuring that all functions operate on the same information and insights.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Unified Data Layer — Single Source of Truth</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Real-time data synchronisation, elimination of data silos, consistent data models, and unified reporting across all business functions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">CRM — Revenue Intelligence System</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Lead and opportunity management, pipeline tracking, customer interaction tracking, AI-driven lead scoring, and sales performance analytics.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">ERP — Operational Intelligence System</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Inventory and supply chain management, procurement and vendor management, financial tracking, and resource allocation planning.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">HRMS — Workforce Intelligence System</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Employee records, performance tracking, attendance and payroll, recruitment and onboarding, workforce analytics and insights.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">LMS — Learning & Development Platform</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Training program management, course creation and delivery, performance tracking, and personalised learning recommendations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Support Desk — Customer Operations System</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Ticket management, escalation workflows, customer interaction tracking, AI agent integration, and performance analytics.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">AI-Powered Insights & Automation</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Predictive analytics across functions, automated workflow execution, intelligent recommendations, and cross-functional insights from unified data.
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">System Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Application Layer</h5>
                    <p className="text-sm text-white/80">Modular SaaS components for all business functions</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Data Layer</h5>
                    <p className="text-sm text-white/80">Centralised repository for consistent access</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Intelligence Layer</h5>
                    <p className="text-sm text-white/80">AI models for insights and automation</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Integration Layer</h5>
                    <p className="text-sm text-white/80">APIs and connectors for external systems</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Interface Layer</h5>
                    <p className="text-sm text-white/80">User interface integrated with SVARA ONE AI OS</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Small and Medium Enterprises (SMEs)</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Unified platform for managing all business operations without multiple tools</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Enterprises</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Integrated systems for large-scale operations with cross-functional intelligence</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">High-Growth Startups</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Scalable infrastructure supporting rapid growth and operational complexity</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Government & Public Sector</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Centralised systems for managing large-scale operations and services</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduction in software fragmentation and operational complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved cross-functional collaboration and visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Increased productivity through automation and AI insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Lower total cost of ownership compared to multiple SaaS tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Faster and more informed decision-making</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Unified Business Cloud is not positioned as another SaaS product. It is a consolidation layer for enterprise operations.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Fragmented tools → Unified platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Data silos → Shared intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Manual coordination → Automated workflows</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Operations powered by intelligence.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Digital Engineering Modal */}
      {showDigitalEngineeringModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDigitalEngineeringModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowDigitalEngineeringModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA DIGITAL ENGINEERING</h2>
              <p className="text-xl text-white/70 mb-2">Custom Technology, AI Integration & Enterprise System Modernisation</p>
              <p className="text-lg text-cyan-400 italic">"Built for your business. Engineered for what it becomes."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Enterprises today operate in increasingly complex technology environments shaped by legacy systems, fragmented applications, and rapidly evolving digital requirements.
                </p>
                <p className="leading-relaxed mb-4">Key challenges include:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Legacy systems that are difficult to integrate or scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Disconnected applications leading to inefficiencies and data silos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Limited ability to incorporate AI into existing infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>High dependency on vendors with rigid, non-customisable solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Increasing pressure to modernise systems while maintaining operational continuity</span>
                  </li>
                </ul>
                <p className="leading-relaxed font-semibold text-cyan-400">
                  Digital engineering is evolving into a strategic capability—where technology is designed as a long-term foundation for innovation and competitive advantage.
                </p>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Engineering delivers custom-built, AI-integrated technology solutions tailored to enterprise requirements, designed to integrate seamlessly with existing systems while enabling future scalability.
                </p>
                <p className="leading-relaxed mb-3">SVARA approaches engineering as a system-level transformation, where:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Business problems are translated into scalable technology architectures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>AI capabilities are embedded from the ground up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Systems are designed for integration, extensibility, and long-term evolution</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-6 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Custom Application Development — Enterprise-Grade Systems</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Web and mobile application development, enterprise software platforms, domain-specific solutions, and scalable architectures supporting high-performance operations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">AI & Machine Learning Integration</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Integration of computer vision, NLP, and predictive models; embedding AI-driven decision-making into workflows; development of custom AI models; integration with SVARA Cognitive AI, Vision AI, and Edge AI systems.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">System Integration & API Engineering</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Integration of legacy and modern systems, API development and management, data synchronisation across platforms, and middleware development for interoperability.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">Cloud & Infrastructure Engineering</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Cloud architecture design (public, private, hybrid), infrastructure as code and automation, scalable deployment strategies, and cost optimisation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">DevOps & Security Engineering</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      CI/CD pipeline implementation, automated testing and deployment, monitoring and performance management, and security architecture and compliance.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">System Modernisation & Transformation</h4>
                    <p className="leading-relaxed text-sm text-white/80">
                      Migration of legacy applications to modern platforms, refactoring for scalability, integration of AI capabilities into legacy environments, and phased transformation strategies.
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Engineering Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Discovery & Problem Definition</h5>
                    <p className="text-sm text-white/80">Understanding business objectives and system landscape</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Architecture & System Design</h5>
                    <p className="text-sm text-white/80">Designing scalable, modular architectures</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Development & Implementation</h5>
                    <p className="text-sm text-white/80">Building systems using agile methodologies</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Integration & Deployment</h5>
                    <p className="text-sm text-white/80">Seamless deployment into existing environments</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h5 className="text-cyan-400 font-semibold mb-2">Optimisation & Scaling</h5>
                    <p className="text-sm text-white/80">Continuous improvement and performance tuning</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Enterprise Software Development</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Custom platforms tailored to specific operational requirements</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">AI-Enabled Applications</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Applications with embedded intelligence for automation and decision-making</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">System Integration Projects</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Connecting multiple systems into unified environments</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Digital Transformation Initiatives</h4>
                    <p className="leading-relaxed text-white/80 text-sm">End-to-end modernisation of enterprise technology landscapes</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-cyan-400">Industry-Specific Solutions</h4>
                    <p className="leading-relaxed text-white/80 text-sm">Custom systems for manufacturing, healthcare, logistics, and finance</p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Accelerated digital transformation initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved system integration and operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Enhanced capability through AI integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Reduced dependency on rigid, off-the-shelf solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Scalable infrastructure supporting long-term growth</span>
                  </li>
                </ul>
              </section>

              <section className="pt-6 border-t border-white/10">
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Engineering is a strategic entry layer into enterprise transformation and long-term platform adoption.
                </p>
                <p className="leading-relaxed mb-4">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Generic software → Custom intelligence-driven systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Isolated applications → Integrated architectures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Short-term solutions → Scalable platforms</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Every system you build should make you future-ready.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Digital Growth & PR Tech Modal */}
      {showDigitalGrowthModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDigitalGrowthModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowDigitalGrowthModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-white/10">
              <h2 className="text-4xl mb-4 text-white">SVARA DIGITAL GROWTH & PR TECH</h2>
              <p className="text-xl text-white/70 mb-2">AI-Powered Growth Infrastructure, Brand Intelligence & Demand Systems</p>
              <p className="text-lg text-cyan-400 italic">"Growth is not a campaign. It is a system."</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8 text-white/90">
              <section>
                <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
                <p className="leading-relaxed mb-4">
                  Marketing has traditionally been executed through campaigns—isolated initiatives designed to drive awareness, generate leads, or promote products. While this approach has delivered incremental results, it lacks continuity, predictability, and system-level optimisation.
                </p>
                <p className="leading-relaxed mb-4">
                  Modern enterprises operate in a highly competitive and data-rich environment where:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Customer journeys span multiple channels and touchpoints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Attention is fragmented across platforms and formats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Conversion depends on consistent engagement across the entire funnel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Brand perception is shaped continuously, not episodically</span>
                  </li>
                </ul>
                <p className="leading-relaxed mb-4">
                  At the same time, organisations are investing heavily in marketing tools—advertising platforms, CRM systems, analytics dashboards, content tools—yet these systems often operate in silos, resulting in disconnected campaigns, limited visibility, inefficient spend allocation, and difficulty measuring true ROI.
                </p>
                <p className="leading-relaxed mb-4">
                  The introduction of AI into marketing has improved specific functions—such as content generation and targeting—but has not fully addressed the underlying fragmentation.
                </p>
                <p className="leading-relaxed text-cyan-400">
                  The next evolution of marketing is not more tools or campaigns. It is the creation of integrated growth systems—where data, content, distribution, and analytics are unified into a continuous, optimised engine.
                </p>
              </section>

              <section>
                <h3 className="text-2xl mb-4 text-white">Product Definition</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Growth & PR Tech is an AI-powered growth infrastructure platform that enables organisations to design, execute, and optimise end-to-end growth systems.
                </p>
                <p className="leading-relaxed mb-4">
                  The platform integrates:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Brand positioning and messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Content generation and distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Performance marketing and acquisition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Public relations and reputation management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Analytics and attribution across the entire funnel</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Instead of running isolated campaigns, SVARA builds continuous growth engines where every interaction contributes to measurable business outcomes. The system is designed to align marketing with business objectives—ensuring that growth is not reactive, but structured, predictable, and scalable.
                </p>
              </section>

              <section>
                <h3 className="text-2xl mb-4 text-white">Core Product Capabilities</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">2.1 Growth Engineering — Full-Funnel System Design</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA designs and implements structured growth systems across the entire customer journey.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Mapping of acquisition, activation, retention, and conversion funnels</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Identification of bottlenecks and optimisation opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Integration of marketing channels into a unified system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Continuous monitoring and refinement of funnel performance</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">2.2 AI-Driven Content Systems — Scalable Content Infrastructure</h4>
                    <p className="leading-relaxed mb-3">
                      Content is central to modern growth, but scaling high-quality content consistently remains a challenge. SVARA enables:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>AI-powered generation of marketing and communication content</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Consistent brand voice across channels and formats</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Rapid production of high-quality assets for campaigns and engagement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Content optimisation based on performance data</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">2.3 Performance Marketing Optimisation — Data-Driven Acquisition</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA optimises paid and organic marketing channels through data-driven strategies.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Campaign design and execution across digital platforms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Continuous optimisation of targeting, creatives, and budgets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Performance tracking and ROI measurement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Integration with CRM and analytics systems for closed-loop tracking</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">2.4 PR & Brand Intelligence — Reputation & Visibility Systems</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA integrates public relations and brand management into the growth system.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Strategic PR campaigns aligned with business objectives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Media outreach and narrative positioning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Monitoring of brand sentiment and perception</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Real-time response to market signals and events</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">2.5 Full-Funnel Analytics & Attribution — Unified Growth Intelligence</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA provides end-to-end visibility into marketing performance.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Tracking of customer journeys across multiple touchpoints</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Attribution modelling for accurate performance measurement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Real-time dashboards and reporting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Identification of high-performing channels and strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl mb-3 text-cyan-400">2.6 Marketing Automation & Workflow Integration</h4>
                    <p className="leading-relaxed mb-3">
                      SVARA automates repetitive marketing processes and integrates workflows across systems.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Automated campaign execution and management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Integration with CRM, support systems, and business platforms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Trigger-based engagement workflows</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>Alignment of marketing with sales and operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl mb-4 text-white">System Architecture</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Growth & PR Tech is built on a unified growth infrastructure architecture:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10">
                    <h4 className="text-lg mb-2 text-cyan-400">Strategy Layer</h4>
                    <p className="text-sm text-white/80">Defines positioning, messaging, and growth objectives.</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10">
                    <h4 className="text-lg mb-2 text-cyan-400">Execution Layer</h4>
                    <p className="text-sm text-white/80">Manages content, campaigns, and distribution across channels.</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10">
                    <h4 className="text-lg mb-2 text-cyan-400">Data Layer</h4>
                    <p className="text-sm text-white/80">Aggregates data from marketing platforms, CRM systems, and user interactions.</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10">
                    <h4 className="text-lg mb-2 text-cyan-400">Intelligence Layer</h4>
                    <p className="text-sm text-white/80">Applies AI models for content generation, optimisation, and predictive insights.</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 md:col-span-2">
                    <h4 className="text-lg mb-2 text-cyan-400">Integration Layer</h4>
                    <p className="text-sm text-white/80">Connects with SVARA ecosystem and external systems for seamless operation.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl mb-4 text-white">Target Applications</h3>
                <ul className="space-y-3">
                  <li className="p-4 bg-white/5 border-l-4 border-cyan-400">
                    <h4 className="text-lg mb-2 text-white">B2B Enterprises</h4>
                    <p className="text-white/80">Lead generation, brand positioning, and pipeline growth.</p>
                  </li>
                  <li className="p-4 bg-white/5 border-l-4 border-cyan-400">
                    <h4 className="text-lg mb-2 text-white">Startups & High-Growth Companies</h4>
                    <p className="text-white/80">Rapid market entry, user acquisition, and brand building.</p>
                  </li>
                  <li className="p-4 bg-white/5 border-l-4 border-cyan-400">
                    <h4 className="text-lg mb-2 text-white">Enterprise Brands</h4>
                    <p className="text-white/80">Integrated marketing systems for large-scale operations.</p>
                  </li>
                  <li className="p-4 bg-white/5 border-l-4 border-cyan-400">
                    <h4 className="text-lg mb-2 text-white">Government & Public Sector</h4>
                    <p className="text-white/80">Communication strategies and public engagement systems.</p>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl mb-4 text-white">Business Impact</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Growth & PR Tech delivers measurable improvements across acquisition, engagement, and revenue growth:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Increased lead generation and conversion rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Improved ROI on marketing spend</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Enhanced brand visibility and positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Predictable and scalable growth systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Alignment between marketing, sales, and operations</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl mb-4 text-white">Strategic Positioning</h3>
                <p className="leading-relaxed mb-4">
                  SVARA Digital Growth & PR Tech is not positioned as a marketing service. It is a growth infrastructure layer that integrates strategy, execution, and intelligence.
                </p>
                <p className="leading-relaxed mb-4">
                  As organisations move toward data-driven operations, the ability to build and manage growth systems becomes a critical capability. SVARA provides the framework to design, execute, and optimise these systems at scale.
                </p>
                <p className="leading-relaxed mb-6">
                  It shifts the paradigm from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Campaign-based marketing → Continuous growth systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Fragmented tools → Integrated infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>Unpredictable outcomes → Measurable, scalable growth</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-6 text-lg text-cyan-400 italic">
                  Growth is engineered. Not guessed.
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
