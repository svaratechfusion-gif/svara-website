import { Cpu, Globe, Layers, Sparkles, Network, Zap, ArrowRight, CheckCircle, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { useState } from "react";
import { Link } from "react-router";
import deepTechAIImage from "../../imports/ChatGPT_Image_Apr_28,_2026,_09_46_38_PM.png";
import simulationImage from "../../imports/ChatGPT_Image_Apr_28,_2026,_09_51_40_PM.png";
import saasStudioImage from "../../imports/ChatGPT_Image_Apr_28,_2026,_09_54_18_PM.png";
import aiOSImage from "../../imports/ChatGPT_Image_Apr_28,_2026,_09_57_32_PM.png";
import digitalEngineeringImage from "../../imports/ChatGPT_Image_Apr_28,_2026,_10_00_28_PM.png";
import growthPRImage from "../../imports/ChatGPT_Image_Apr_28,_2026,_10_04_05_PM.png";

export function Divisions() {
  const mousePosition = useMouseTracker3D();
  const { scrollYProgress } = useScroll();
  const [showDeepTechModal, setShowDeepTechModal] = useState(false);
  const [showSimulationModal, setShowSimulationModal] = useState(false);
  const [showSaaSModal, setShowSaaSModal] = useState(false);
  const [showAIOSModal, setShowAIOSModal] = useState(false);
  const [showDigitalEngineeringModal, setShowDigitalEngineeringModal] = useState(false);
  const [showGrowthPRModal, setShowGrowthPRModal] = useState(false);

  const divisions = [
    {
      id: "deep-tech-ai",
      title: "Deep Tech & AI Lab",
      tagline: "Building the intelligence that powers everything",
      icon: Cpu,
      color: "blue",
      capabilities: [
        "Foundational AI model development",
        "Computer vision and image processing",
        "Natural language understanding",
        "Reinforcement learning systems",
        "Edge AI optimization",
        "MLOps infrastructure"
      ],
      useCases: [
        "Custom AI models for enterprise needs",
        "Vision systems for manufacturing QC",
        "Autonomous drone intelligence",
        "Predictive maintenance algorithms",
        "Real-time anomaly detection"
      ],
      description: "The research engine. Where we push the boundaries of what AI can do. Every breakthrough here cascades across the entire platform."
    },
    {
      id: "simulation",
      title: "Simulation",
      tagline: "Digital twins of physical reality",
      icon: Globe,
      color: "purple",
      capabilities: [
        "Physics-based 3D modeling",
        "Real-time digital twin creation",
        "Predictive simulation engines",
        "IoT sensor integration",
        "Scenario analysis and forecasting",
        "Virtual testing environments"
      ],
      useCases: [
        "Smart city infrastructure planning",
        "Factory floor optimization",
        "Supply chain visualization",
        "Energy grid management",
        "Construction project simulation"
      ],
      description: "See the future before building it. Test every scenario. Optimize before deployment. Digital twins that learn and predict."
    },
    {
      id: "saas-studio",
      title: "SaaS Studio",
      tagline: "Vertical solutions, infinite scale",
      icon: Layers,
      color: "pink",
      capabilities: [
        "Rapid vertical SaaS development",
        "Industry-specific workflows",
        "Multi-tenant architecture",
        "API-first design",
        "White-label capabilities",
        "AI-powered automation"
      ],
      useCases: [
        "Healthcare management systems",
        "Manufacturing ERP solutions",
        "Logistics and fleet management",
        "Retail intelligence platforms",
        "Education technology suites"
      ],
      description: "We don't just build software. We build entire vertical platforms. Each one AI-native, each one learning from the ecosystem."
    },
    {
      id: "ai-os",
      title: "AI OS (Wrapper)",
      tagline: "One interface for infinite intelligence",
      icon: Sparkles,
      color: "cyan",
      capabilities: [
        "Unified AI command center",
        "Natural language interface",
        "Cross-platform orchestration",
        "Intelligent automation workflows",
        "Context-aware assistance",
        "Multi-modal interaction"
      ],
      useCases: [
        "Enterprise AI co-pilot",
        "Unified business operations dashboard",
        "Smart workspace management",
        "Automated decision support",
        "Conversational business intelligence"
      ],
      description: "The layer that brings it all together. Talk to your entire business through one intelligent interface. AI becomes your OS."
    },
    {
      id: "digital-engineering",
      title: "Digital Engineering",
      tagline: "Building tomorrow's products, today",
      icon: Network,
      color: "green",
      capabilities: [
        "Full-stack product development",
        "AI/ML integration services",
        "Cloud architecture design",
        "Mobile and web applications",
        "IoT and embedded systems",
        "Technical consulting"
      ],
      useCases: [
        "Custom enterprise applications",
        "AI product development",
        "Legacy system modernization",
        "Technical due diligence",
        "Innovation lab partnerships"
      ],
      description: "World-class engineering teams. Rapid prototyping to production deployment. Building products that leverage the full SVARA stack."
    },
    {
      id: "growth-pr-tech",
      title: "Growth & PR Tech",
      tagline: "Intelligence-powered brand building",
      icon: Zap,
      color: "orange",
      capabilities: [
        "AI-driven content generation",
        "Brand intelligence analytics",
        "Multi-channel automation",
        "Influencer network mapping",
        "Sentiment analysis at scale",
        "Campaign optimization"
      ],
      useCases: [
        "Automated PR campaigns",
        "Brand reputation monitoring",
        "Content marketing at scale",
        "Growth hacking automation",
        "Competitive intelligence"
      ],
      description: "Marketing meets machine learning. Automate growth. Amplify brand presence. Scale reach without scaling team size."
    }
  ];

  return (
    <>
    <div className="text-white" style={{ perspective: "2000px", background: "transparent" }}>
      <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          style={{
            transform: get3DTransform(mousePosition.x, mousePosition.y, 7),
            transformStyle: "preserve-3d",
          }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight text-white px-4"
            style={{
              textShadow: '0 0 30px rgba(6, 182, 212, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6)',
              filter: 'brightness(1.2) contrast(1.1)',
            }}
          >
            Six Divisions.<br />One Ecosystem.
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 px-4"
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 2px 4px rgba(0, 0, 0, 0.8)',
              filter: 'brightness(1.15)',
            }}
          >
            Each operates independently. All share the same intelligence foundation.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg text-white/80 px-4"
            style={{
              textShadow: '0 0 15px rgba(139, 92, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.7)',
              filter: 'brightness(1.1)',
            }}
          >
            This is what happens when you build companies inside an ecosystem instead of products inside a company.
          </p>
        </motion.div>
      </section>

      {divisions.map((division, index) => (
        <section
          key={division.id}
          className={`relative z-10 min-h-screen flex items-center px-4 py-24 border-t border-white/10 overflow-hidden ${
            index % 2 === 0 ? 'bg-gradient-to-br from-white/5 to-transparent' : ''
          }`}
          style={{ perspective: "1500px" }}
        >
          <motion.div
            className="relative z-10 max-w-7xl mx-auto w-full"
            initial={{ opacity: 0, y: 80, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ transform: "translateZ(40px)" }}
                className="relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={
                    index === 0 ? deepTechAIImage :
                    index === 1 ? simulationImage :
                    index === 2 ? saasStudioImage :
                    index === 3 ? aiOSImage :
                    index === 4 ? digitalEngineeringImage :
                    growthPRImage
                  }
                  alt={division.title}
                  className="size-full object-cover"
                  style={{
                    filter: 'brightness(1.1) contrast(1.2) saturate(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{ transform: "translateZ(40px)" }}
              >
                <div>
                  <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 bg-${division.color}-500/10 border border-${division.color}-500/20`}>
                    <division.icon size={24} className={`text-${division.color}-400`} />
                    <span className="text-sm uppercase tracking-wider">Division {index + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl mb-4">{division.title}</h2>
                  <p className="text-2xl text-white/60 mb-6">{division.tagline}</p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {division.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 text-white/90">Core Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {division.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <CheckCircle size={16} className={`text-${division.color}-400 flex-shrink-0 mt-0.5`} />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl mb-4 text-white/90">Use Cases</h3>
                  <div className="space-y-2">
                    {division.useCases.map((useCase) => (
                      <div
                        key={useCase}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <ArrowRight size={16} className={`text-${division.color}-400 flex-shrink-0 mt-0.5`} />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      if (division.id === "deep-tech-ai") {
                        setShowDeepTechModal(true);
                      } else if (division.id === "simulation") {
                        setShowSimulationModal(true);
                      } else if (division.id === "saas-studio") {
                        setShowSaaSModal(true);
                      } else if (division.id === "ai-os") {
                        setShowAIOSModal(true);
                      } else if (division.id === "digital-engineering") {
                        setShowDigitalEngineeringModal(true);
                      } else if (division.id === "growth-pr-tech") {
                        setShowGrowthPRModal(true);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all rounded-full text-sm font-medium group/btn"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      ))}

      <section className="relative z-10 py-24 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8">The Power of Integration</h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            These divisions don't just coexist—they compound. Vision AI from the lab powers simulation accuracy. Digital twins inform SaaS predictions. The AI OS orchestrates everything. Each division makes the others stronger.
          </p>
          <p className="text-2xl text-white mb-12">
            This is how you build an infrastructure company, not just a product company.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/partnerships"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>

    {/* Deep Tech & AI Lab Modal */}
    {showDeepTechModal && (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowDeepTechModal(false)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowDeepTechModal(false)}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="p-8 pb-6 border-b border-white/10">
            <h2 className="text-4xl mb-4 text-white">DIVISION 1 — DEEP TECH & AUTONOMOUS INTELLIGENCE LAB</h2>
            <p className="text-xl text-white/70 mb-2">Core AI Research, Perception Systems & Distributed Intelligence Infrastructure</p>
            <p className="text-lg text-cyan-400 italic">"This is where intelligence is created—not applied."</p>
          </div>

          <div className="p-8 space-y-8 text-white/90">
            <section>
              <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
              <p className="leading-relaxed mb-4">
                The global technology landscape is undergoing a fundamental transition—from software-driven systems to intelligence-driven systems. Traditional enterprises have been built on layers of software that process data, execute workflows, and enable operations. However, these systems lack the ability to perceive, reason, and act autonomously.
              </p>
              <p className="leading-relaxed mb-4">
                At the same time, advancements in artificial intelligence—particularly in computer vision, edge computing, generative AI, and autonomous systems—are redefining what technology can do. Organisations are no longer seeking tools that assist operations; they are investing in systems that can observe environments, interpret context, make decisions, and execute actions independently.
              </p>
              <p className="leading-relaxed mb-4">
                This shift is driving the emergence of a new category of infrastructure:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Systems that perceive the physical world (Vision AI, Drone AI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Systems that process data in real time at the source (Edge AI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Systems that understand and reason over information (Cognitive AI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Systems that execute tasks autonomously (AI Agents)</span>
                </li>
              </ul>
              <p className="leading-relaxed text-cyan-400">
                Most companies operate at the application layer—building solutions on top of existing technologies. Very few organisations invest in building the foundational intelligence layer itself. This creates a significant opportunity.
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Division Definition</h3>
              <p className="leading-relaxed mb-4">
                SVARA Deep Tech & Autonomous Intelligence Lab is the core research and engineering division responsible for building foundational AI systems that power the entire SVARA ecosystem.
              </p>
              <p className="leading-relaxed mb-4">
                This division is not focused on application development. It is focused on creating:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Core AI models and intelligence frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Real-time perception systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Distributed intelligence infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Autonomous execution systems</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Core Focus Areas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.1 Perception Systems — Understanding the Physical World</h4>
                  <p className="leading-relaxed mb-3">
                    Development of AI systems capable of interpreting visual and spatial data.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Computer vision models for object detection and behaviour analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Real-time video intelligence systems (Vision AI)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Aerial perception through autonomous drones (Drone AI)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.2 Distributed Intelligence Infrastructure — Real-Time Processing</h4>
                  <p className="leading-relaxed mb-3">
                    Development of systems that process data at the source.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Edge AI platforms for local inference</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Multi-modal data processing across sensors and devices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Distributed computing architectures</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.3 Cognitive Intelligence Systems — Understanding Information</h4>
                  <p className="leading-relaxed mb-3">
                    Development of AI systems that process and reason over enterprise data.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Generative AI models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Knowledge intelligence systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Context-aware reasoning frameworks</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.4 Autonomous Execution Systems — Acting on Intelligence</h4>
                  <p className="leading-relaxed mb-3">
                    Development of systems that execute tasks independently.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>AI agents for workflow execution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Multi-agent orchestration systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Autonomous decision-making frameworks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Role Within SVARA Ecosystem</h3>
              <p className="leading-relaxed mb-4">
                Division 1 functions as the foundation layer for all other SVARA divisions:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Provides core intelligence capabilities to all products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Enables real-time data processing and perception</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Powers automation, simulation, and orchestration systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Acts as the innovation engine driving future product development</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Strategic Importance</h3>
              <p className="leading-relaxed mb-4">
                SVARA Deep Tech & Autonomous Intelligence Lab represents the long-term competitive advantage of the organisation. While application-layer companies compete on features and execution, SVARA competes on infrastructure and capability.
              </p>
              <p className="leading-relaxed mb-4">
                By owning the core intelligence layer, SVARA ensures:
              </p>
              <ul className="space-y-2 ml-6 mb-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Control over critical technology components</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Ability to innovate independently of external platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Long-term scalability and adaptability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Strong differentiation in the market</span>
                </li>
              </ul>
              <p className="leading-relaxed text-lg text-cyan-400 italic">
                Intelligence starts here.
              </p>
            </section>
          </div>
        </motion.div>
      </motion.div>
    )}

    {/* Simulation / Digital Twin Modal */}
    {showSimulationModal && (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowSimulationModal(false)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowSimulationModal(false)}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="p-8 pb-6 border-b border-white/10">
            <h2 className="text-4xl mb-4 text-white">DIVISION 2 — INTERACTIVE AI & SIMULATION SYSTEMS</h2>
            <p className="text-xl text-white/70 mb-2">Digital Twin, Simulation Intelligence & Immersive Decision Environments</p>
            <p className="text-lg text-cyan-400 italic">"This is where intelligence becomes visible, testable, and predictable."</p>
          </div>

          <div className="p-8 space-y-8 text-white/90">
            <section>
              <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
              <p className="leading-relaxed mb-4">
                As enterprise systems become more complex, interconnected, and data-driven, the cost of uncertainty increases significantly. Organisations operating across manufacturing, infrastructure, logistics, energy, and urban systems face a critical challenge:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>They can measure what has happened</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>They struggle to predict what will happen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>They cannot safely test what could happen</span>
                </li>
              </ul>
              <p className="leading-relaxed mb-4">
                Traditional analytics and dashboards provide retrospective insights but lack the ability to simulate dynamic environments or evaluate future scenarios with confidence. Decision-making remains reactive, constrained by historical data and limited foresight.
              </p>
              <p className="leading-relaxed text-cyan-400">
                Digital twin technology is evolving from a visualisation tool into a core decision-making infrastructure, enabling organisations to transition from reactive operations to predictive and simulation-driven strategies.
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Division Definition</h3>
              <p className="leading-relaxed mb-4">
                SVARA Interactive AI & Simulation Systems is the division responsible for building simulation-driven intelligence environments that enable organisations to model, predict, and optimise complex systems.
              </p>
              <p className="leading-relaxed mb-4">
                The division focuses on transforming data and intelligence into interactive, real-time, and immersive environments, where users can:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Visualise system behaviour and performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Simulate scenarios and evaluate outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Understand complex relationships across systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Make decisions with higher confidence and precision</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Core Focus Areas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.1 Digital Twin Systems — Real-Time Virtual Replication</h4>
                  <p className="leading-relaxed mb-3">
                    Development of digital replicas of physical systems and environments.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Real-time synchronisation with physical assets and systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Continuous updating of system states and conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Accurate modelling of infrastructure, operations, and workflows</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.2 Simulation Intelligence — Scenario Modelling & Forecasting</h4>
                  <p className="leading-relaxed mb-3">
                    Development of advanced simulation capabilities for decision-making.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>What-if scenario modelling across operational and strategic variables</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Monte Carlo simulations for probabilistic analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Predictive modelling based on historical and real-time data</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.3 Immersive Visualisation — Interactive System Environments</h4>
                  <p className="leading-relaxed mb-3">
                    Development of intuitive, visual interfaces for complex systems.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>3D visualisation of environments and assets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Real-time rendering of system states and events</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Interactive exploration of data and processes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">2.4 Predictive Intelligence Integration</h4>
                  <p className="leading-relaxed mb-3">
                    Integration of AI models to enhance simulation and forecasting capabilities.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Predictive maintenance and failure forecasting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Performance optimisation recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Risk identification and early warning systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Role Within SVARA Ecosystem</h3>
              <p className="leading-relaxed mb-4">
                Division 2 functions as the simulation and interpretation layer within the SVARA ecosystem:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Consumes data from Vision AI, Drone AI, and Edge AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Leverages intelligence from Generative & Cognitive AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Provides predictive insights to AI Agents for execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Interfaces with SVARA ONE AI OS for unified control</span>
                </li>
              </ul>
              <p className="leading-relaxed text-cyan-400">
                This creates a closed-loop system: Perception → Intelligence → Simulation → Execution → Feedback
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Target Application Domains</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Manufacturing and industrial systems</span>
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Smart cities and urban infrastructure</span>
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Energy and utilities</span>
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Logistics and supply chain networks</span>
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Infrastructure planning and construction</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Strategic Importance</h3>
              <p className="leading-relaxed mb-4">
                SVARA Interactive AI & Simulation Systems positions the organisation as a provider of decision intelligence infrastructure, not just data or analytics. By enabling organisations to simulate and predict outcomes, SVARA reduces uncertainty in decision-making, improves operational efficiency, enables proactive risk management, and enhances collaboration.
              </p>
              <p className="leading-relaxed text-lg text-cyan-400 italic">
                See the system. Simulate the future. Decide with confidence.
              </p>
            </section>
          </div>
        </motion.div>
      </motion.div>
    )}

    {/* SaaS Studio / Unified Business Cloud Modal */}
    {showSaaSModal && (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowSaaSModal(false)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowSaaSModal(false)}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="p-8 pb-6 border-b border-white/10">
            <h2 className="text-4xl mb-4 text-white">DIVISION 3 — BUSINESS SAAS PRODUCT STUDIO</h2>
            <p className="text-xl text-white/70 mb-2">AI-Native Business Platforms, Vertical SaaS & Scalable Revenue Systems</p>
            <p className="text-lg text-cyan-400 italic">"This is where intelligence becomes a business."</p>
          </div>

          <div className="p-8 space-y-8 text-white/90">
            <section>
              <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
              <p className="leading-relaxed mb-4">
                Over the last two decades, Software-as-a-Service (SaaS) has transformed how organisations operate—digitising core business functions such as sales, operations, finance, human resources, and customer service.
              </p>
              <p className="leading-relaxed mb-4">
                However, as SaaS adoption has matured, a new set of challenges has emerged:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Enterprises rely on multiple disconnected tools across functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Data is fragmented across systems, limiting visibility and insight</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Workflows require manual coordination between platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>AI capabilities are embedded in isolated tools rather than across the organisation</span>
                </li>
              </ul>
              <p className="leading-relaxed text-cyan-400">
                This marks the transition from traditional SaaS to AI-native business systems. The opportunity lies in building platforms that are not just tools, but operational backbones for intelligent enterprises.
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Division Definition</h3>
              <p className="leading-relaxed mb-4">
                SVARA Business SaaS Product Studio is the division responsible for building AI-native business platforms and vertical SaaS products that operate as the commercial and monetisation layer of the SVARA ecosystem.
              </p>
              <p className="leading-relaxed mb-4">
                The division focuses on:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Developing integrated platforms for core business functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Creating vertical SaaS solutions for specific industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Embedding AI intelligence across all modules and workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Delivering scalable, subscription-based products</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Core Focus Areas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">3.1 Unified Business Platforms — Integrated Enterprise Systems</h4>
                  <p className="leading-relaxed mb-3">
                    Development of comprehensive platforms that consolidate core business functions.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>CRM for sales and customer intelligence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>ERP for operations and resource management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>HRMS for workforce management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>LMS for learning and development</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">3.2 Vertical SaaS Solutions — Industry-Specific Platforms</h4>
                  <p className="leading-relaxed mb-3">
                    Development of tailored SaaS products for specific industries with customised workflows, analytics, and compliance features.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">3.3 AI-Native Functionality — Intelligence Embedded Across Systems</h4>
                  <p className="leading-relaxed mb-3">
                    Integration of AI capabilities across all business modules including predictive analytics, workflow automation, and intelligent recommendations.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">3.4 Unified Data & Intelligence Layer</h4>
                  <p className="leading-relaxed mb-3">
                    Creation of a centralised data layer that powers all modules with real-time synchronisation, elimination of data silos, and cross-functional analytics.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Role Within SVARA Ecosystem</h3>
              <p className="leading-relaxed mb-4">
                Division 3 functions as the commercial and operational layer of the SVARA ecosystem:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Leverages Generative & Cognitive AI for intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Uses AI Agents for workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Operates through SVARA ONE AI OS for unified interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Integrates with Edge AI and Vision AI for real-time data inputs</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Target Application Domains</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Small and Medium Enterprises (SMEs)</span> — Unified platforms for managing operations without complexity
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Large Enterprises</span> — Integrated systems for managing complex, multi-functional operations
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">High-Growth Startups</span> — Scalable infrastructure supporting rapid expansion
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Government & Public Sector</span> — Centralised systems for managing large-scale services
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Strategic Importance</h3>
              <p className="leading-relaxed mb-4">
                SVARA Business SaaS Product Studio is the primary monetisation engine of the organisation. While other divisions build capabilities and infrastructure, this division converts those capabilities into market-ready products, scalable revenue streams, and long-term customer relationships.
              </p>
              <p className="leading-relaxed text-lg text-cyan-400 italic">
                Where intelligence scales into business.
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
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowAIOSModal(false)}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="p-8 pb-6 border-b border-white/10">
            <h2 className="text-4xl mb-4 text-white">DIVISION 4 — AI WRAPPER & ORCHESTRATION SYSTEMS</h2>
            <p className="text-xl text-white/70 mb-2">Unified Intelligence Interface, System Orchestration & Command Infrastructure</p>
            <p className="text-lg text-cyan-400 italic">"This is where systems stop being used—and start being commanded."</p>
          </div>

          <div className="p-8 space-y-8 text-white/90">
            <section>
              <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
              <p className="leading-relaxed mb-4">
                Enterprises today operate within highly fragmented technology ecosystems. Over time, organisations have adopted numerous applications across departments—ERP systems, CRM platforms, analytics tools, communication software, operational systems—each addressing specific needs.
              </p>
              <p className="leading-relaxed mb-4">
                While these tools provide functional value, they introduce systemic complexity:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Users must navigate multiple interfaces to complete a single workflow</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Data is distributed across systems, limiting unified visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Workflows require manual coordination across applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Decision-making is slowed by fragmented insights</span>
                </li>
              </ul>
              <p className="leading-relaxed text-cyan-400">
                The next evolution of enterprise systems is not additional tools or isolated AI solutions. It is the creation of a unified orchestration layer that connects all systems and data, coordinates workflows, provides a single interface, and enables execution through intent rather than navigation.
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Division Definition</h3>
              <p className="leading-relaxed mb-4">
                SVARA AI Wrapper & Orchestration Systems is the division responsible for building the unified interface and control layer across the entire SVARA ecosystem and enterprise environments.
              </p>
              <p className="leading-relaxed mb-4">
                This division focuses on:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Creating a single interaction layer for all systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Orchestrating workflows across applications and AI systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Enabling natural language-driven execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Unifying data, intelligence, and operations into one environment</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Core Focus Areas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">4.1 Unified Command Interface — Natural Language Interaction</h4>
                  <p className="leading-relaxed mb-3">
                    Development of a conversational interface that acts as the primary interaction layer.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Natural language commands for executing tasks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Querying data across multiple systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Triggering workflows and actions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">4.2 System Orchestration Engine — Workflow Coordination</h4>
                  <p className="leading-relaxed mb-3">
                    Development of an orchestration layer that coordinates workflows across systems.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Execution of multi-step processes spanning multiple applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Real-time coordination of tasks and operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Integration of AI-driven decision-making within workflows</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">4.3 Multi-Agent Coordination — Distributed Execution Control</h4>
                  <p className="leading-relaxed mb-3">
                    Integration and coordination of AI agents across workflows.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Task decomposition and allocation to specialised agents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Parallel execution across multiple agents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Central coordination and performance monitoring</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">4.4 Unified Data & Intelligence Access Layer</h4>
                  <p className="leading-relaxed mb-3">
                    Development of a central access layer for data and insights with aggregation, real-time access, and context-aware retrieval.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">4.5 Context & Memory Systems — Persistent Intelligence Layer</h4>
                  <p className="leading-relaxed mb-3">
                    Development of systems that maintain context across interactions, with memory of user preferences, context-aware responses, and learning from historical interactions.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Role Within SVARA Ecosystem</h3>
              <p className="leading-relaxed mb-4">
                Division 4 functions as the central control layer across the SVARA ecosystem:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Connects Vision AI, Drone AI, and Edge AI for real-time perception</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Leverages Generative & Cognitive AI for intelligence and reasoning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Coordinates AI Agents for execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Integrates with Digital Twin Systems for simulation and prediction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Interfaces with Unified Business Cloud for business operations</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Target Application Domains</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Enterprise Operations</span> — Unified control of workflows, systems, and data
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Executive Decision-Making</span> — Real-time access to insights and command-level interaction
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Multi-System Environments</span> — Coordination across complex technology stacks
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Government & Public Systems</span> — Centralised command and control across large-scale operations
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Strategic Importance</h3>
              <p className="leading-relaxed mb-4">
                SVARA AI Wrapper & Orchestration Systems is the interface layer that defines how users experience the entire SVARA ecosystem. Without this layer, intelligence remains fragmented across systems. With it, intelligence becomes accessible, actionable, and unified.
              </p>
              <p className="leading-relaxed text-lg text-cyan-400 italic">
                Control the system. Don't navigate it.
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
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowDigitalEngineeringModal(false)}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="p-8 pb-6 border-b border-white/10">
            <h2 className="text-4xl mb-4 text-white">DIVISION 5 — DIGITAL ENGINEERING & APPLIED AI SYSTEMS</h2>
            <p className="text-xl text-white/70 mb-2">Enterprise Transformation, Custom Systems & AI Integration Infrastructure</p>
            <p className="text-lg text-cyan-400 italic">"This is where enterprises enter the SVARA ecosystem."</p>
          </div>

          <div className="p-8 space-y-8 text-white/90">
            <section>
              <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
              <p className="leading-relaxed mb-4">
                Enterprises today operate within highly complex and often fragmented technology landscapes shaped by years of incremental adoption, legacy systems, and evolving digital requirements.
              </p>
              <p className="leading-relaxed mb-4">
                While organisations have invested significantly in software and digital tools, several structural challenges persist:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Legacy systems that are difficult to scale or integrate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Disconnected applications leading to data silos and inefficiencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Limited ability to incorporate AI into existing workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>High dependency on rigid, off-the-shelf solutions</span>
                </li>
              </ul>
              <p className="leading-relaxed text-cyan-400">
                The shift toward AI-native operations requires a different approach—one where systems are designed from the ground up to integrate seamlessly, embed intelligence, scale with business requirements, and adapt to new technologies.
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Division Definition</h3>
              <p className="leading-relaxed mb-4">
                SVARA Digital Engineering & Applied AI Systems is the division responsible for delivering custom-built technology solutions and system-level transformations for enterprises.
              </p>
              <p className="leading-relaxed mb-4">
                The division focuses on:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Designing and building tailored software systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Integrating AI capabilities into enterprise workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Connecting and modernising existing technology environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Establishing scalable infrastructure for long-term growth</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Core Focus Areas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">5.1 Custom System Development — Enterprise-Grade Applications</h4>
                  <p className="leading-relaxed mb-3">
                    Design and development of tailored software systems aligned with business requirements.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Web and mobile applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Enterprise platforms and internal systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Industry-specific solutions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">5.2 AI Integration & Applied Intelligence</h4>
                  <p className="leading-relaxed mb-3">
                    Embedding AI capabilities directly into enterprise systems and workflows.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Integration of computer vision, NLP, and predictive models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Development of custom AI solutions for specific use cases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Integration with SVARA Cognitive AI, Vision AI, and Edge AI</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">5.3 System Integration & API Architecture</h4>
                  <p className="leading-relaxed mb-3">
                    Connecting disparate systems into unified environments with API development, data synchronisation, and middleware development.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">5.4 Cloud & Infrastructure Engineering</h4>
                  <p className="leading-relaxed mb-3">
                    Design and deployment of scalable, secure infrastructure with cloud architecture, automation, and performance optimisation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">5.5 DevOps & Security Engineering</h4>
                  <p className="leading-relaxed mb-3">
                    Implementation of CI/CD pipelines, monitoring, security architecture, and system resilience.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">5.6 System Modernisation & Transformation</h4>
                  <p className="leading-relaxed mb-3">
                    Transitioning legacy systems to modern architectures with phased transformation strategies to minimise disruption.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Engineering Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10">
                  <h4 className="text-lg mb-2 text-cyan-400">Discovery & Strategic Alignment</h4>
                  <p className="text-sm text-white/80">Understanding business objectives, system landscape, and constraints</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <h4 className="text-lg mb-2 text-cyan-400">Architecture & Design</h4>
                  <p className="text-sm text-white/80">Designing scalable, modular, integrated system architectures</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <h4 className="text-lg mb-2 text-cyan-400">Development & Implementation</h4>
                  <p className="text-sm text-white/80">Building using agile methodologies and iterative delivery</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <h4 className="text-lg mb-2 text-cyan-400">Integration & Deployment</h4>
                  <p className="text-sm text-white/80">Seamless deployment within existing environments</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 md:col-span-2">
                  <h4 className="text-lg mb-2 text-cyan-400">Optimisation & Scaling</h4>
                  <p className="text-sm text-white/80">Continuous improvement, monitoring, and scaling of systems</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Role Within SVARA Ecosystem</h3>
              <p className="leading-relaxed mb-4">
                Division 5 functions as the entry and integration layer within the SVARA ecosystem:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Establishes initial engagement with enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Integrates SVARA technologies into client environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Enables adoption of Cognitive AI, Edge AI, and Vision AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Introduces AI Agents and AI OS for workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Connects to Unified Business Cloud for operational transformation</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Target Application Domains</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Enterprise Software Development</span> — Custom systems tailored to operational requirements
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">AI-Enabled Applications</span> — Applications with embedded intelligence for automation and insights
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">System Integration Projects</span> — Connecting multiple systems into unified environments
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Digital Transformation Initiatives</span> — End-to-end modernisation of enterprise technology landscapes
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Strategic Importance</h3>
              <p className="leading-relaxed mb-4">
                SVARA Digital Engineering & Applied AI Systems is critical for entering enterprise environments through high-value engagements, building trust and long-term relationships, embedding SVARA technologies within core systems, and creating pathways for adoption of platform-based products.
              </p>
              <p className="leading-relaxed text-lg text-cyan-400 italic">
                Enter through engineering. Scale through intelligence.
              </p>
            </section>
          </div>
        </motion.div>
      </motion.div>
    )}

    {/* Growth & PR Tech Modal */}
    {showGrowthPRModal && (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 pb-8 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowGrowthPRModal(false)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowGrowthPRModal(false)}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="p-8 pb-6 border-b border-white/10">
            <h2 className="text-4xl mb-4 text-white">DIVISION 6 — DIGITAL GROWTH, PR & MARKET INTELLIGENCE SYSTEMS</h2>
            <p className="text-xl text-white/70 mb-2">Demand Generation, Brand Positioning & AI-Driven Growth Infrastructure</p>
            <p className="text-lg text-cyan-400 italic">"This is where visibility becomes growth—and growth becomes dominance."</p>
          </div>

          <div className="p-8 space-y-8 text-white/90">
            <section>
              <h3 className="text-2xl mb-4 text-white">Market Context & Opportunity</h3>
              <p className="leading-relaxed mb-4">
                In the current digital landscape, attention is one of the most competitive and fragmented resources. Organisations are no longer competing solely on product quality or pricing—they are competing on visibility, perception, and sustained engagement.
              </p>
              <p className="leading-relaxed mb-4">
                Traditional marketing approaches, built around campaigns and periodic initiatives, are increasingly ineffective. They are short-lived, difficult to measure, dependent on manual execution, and reactive rather than continuously optimised.
              </p>
              <p className="leading-relaxed mb-4">
                At the same time, enterprises are investing heavily in marketing technology—yet these systems often operate independently, resulting in inconsistent messaging, limited funnel visibility, inefficient budgets, and difficulty building predictable growth models.
              </p>
              <p className="leading-relaxed text-cyan-400">
                The next evolution of growth is not campaign execution. It is the creation of integrated, intelligent growth systems that operate continuously, optimise dynamically, and align directly with business outcomes. This represents the shift from marketing to growth infrastructure.
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Division Definition</h3>
              <p className="leading-relaxed mb-4">
                SVARA Digital Growth, PR & Market Intelligence Systems is the division responsible for building end-to-end growth infrastructure that drives demand, visibility, and market expansion.
              </p>
              <p className="leading-relaxed mb-4">
                The division focuses on:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Designing structured growth systems across the entire customer journey</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Integrating content, distribution, and analytics into unified frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Leveraging AI to optimise performance and decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Managing brand positioning and market perception</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Core Focus Areas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">6.1 Growth Engineering — Full-Funnel System Architecture</h4>
                  <p className="leading-relaxed mb-3">
                    Design and implementation of structured growth systems across the customer lifecycle.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Mapping acquisition, activation, engagement, and retention funnels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Identifying bottlenecks and optimisation opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Integrating channels into a unified growth framework</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">6.2 AI-Driven Content Infrastructure — Scalable Content Systems</h4>
                  <p className="leading-relaxed mb-3">
                    Development of scalable content systems powered by AI with high-quality generation, consistent brand voice, and continuous optimisation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">6.3 Performance Marketing & Acquisition Systems</h4>
                  <p className="leading-relaxed mb-3">
                    Execution and optimisation of data-driven marketing strategies with campaign management, targeting optimisation, and closed-loop tracking.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">6.4 PR & Brand Intelligence — Reputation & Narrative Systems</h4>
                  <p className="leading-relaxed mb-3">
                    Management of brand perception and public visibility through strategic PR, media outreach, sentiment monitoring, and real-time response.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">6.5 Full-Funnel Analytics & Attribution — Growth Intelligence Layer</h4>
                  <p className="leading-relaxed mb-3">
                    Development of unified analytics systems for growth performance with journey tracking, attribution modelling, and real-time dashboards.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl mb-3 text-cyan-400">6.6 Marketing Automation & Workflow Integration</h4>
                  <p className="leading-relaxed mb-3">
                    Automation of marketing processes and integration with business systems for consistent, efficient execution.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Role Within SVARA Ecosystem</h3>
              <p className="leading-relaxed mb-4">
                Division 6 functions as the demand generation and market expansion layer:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Leverages Generative & Cognitive AI for content and messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Uses AI Agents for automation and engagement workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Integrates with Unified Business Cloud for customer and operational data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>Operates through SVARA ONE AI OS for unified control</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Target Application Domains</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">B2B Enterprises</span> — Lead generation, pipeline growth, and brand positioning
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Startups & High-Growth Companies</span> — Market entry, user acquisition, and rapid scaling
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Enterprise Brands</span> — Integrated growth systems for large-scale operations
                </li>
                <li className="p-3 bg-white/5 border-l-4 border-cyan-400">
                  <span className="font-medium">Government & Public Sector</span> — Public communication and engagement systems
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl mb-4 text-white">Strategic Importance</h3>
              <p className="leading-relaxed mb-4">
                SVARA Digital Growth & PR Tech is critical for driving visibility and demand for SVARA products and client solutions, enabling predictable and scalable growth, strengthening brand positioning in competitive markets, and aligning marketing with business outcomes.
              </p>
              <p className="leading-relaxed text-lg text-cyan-400 italic">
                Growth is engineered. Markets are built.
              </p>
            </section>
          </div>
        </motion.div>
      </motion.div>
    )}
    </>
  );
}
