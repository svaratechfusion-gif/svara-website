import { motion } from "motion/react";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { Eye, Zap, Brain, Play, Box, Layers, Building2, Wrench, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function Architecture() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      number: 1,
      title: "PERCEPTION",
      division: "Division 1",
      subtitle: "Vision AI + Drone AI",
      description: "Understands the physical world. Captures real-time data. Detects events, objects, behaviours.",
      tagline: "This is where the system sees.",
      icon: Eye,
      color: "cyan"
    },
    {
      number: 2,
      title: "EDGE PROCESSING",
      division: "Division 1",
      subtitle: "Edge AI Platform",
      description: "Processes data in real time. Eliminates latency. Enables instant decisions.",
      tagline: "This is where the system reacts.",
      icon: Zap,
      color: "blue"
    },
    {
      number: 3,
      title: "INTELLIGENCE",
      division: "Division 1",
      subtitle: "Generative & Cognitive AI",
      description: "Understands context. Generates insights. Powers decision-making.",
      tagline: "This is where the system thinks.",
      icon: Brain,
      color: "purple"
    },
    {
      number: 4,
      title: "EXECUTION",
      division: "Division 1",
      subtitle: "AI Agents",
      description: "Executes workflows. Automates operations. Coordinates actions.",
      tagline: "This is where the system acts.",
      icon: Play,
      color: "pink"
    },
    {
      number: 5,
      title: "SIMULATION",
      division: "Division 2",
      subtitle: "Digital Twin",
      description: "Predicts outcomes. Simulates scenarios. Optimises decisions.",
      tagline: "This is where the system predicts.",
      icon: Box,
      color: "amber"
    },
    {
      number: 6,
      title: "ORCHESTRATION",
      division: "Division 4",
      subtitle: "AI OS",
      description: "Connects everything. Provides unified control. Enables command-based interaction.",
      tagline: "This is where the system is controlled.",
      icon: Layers,
      color: "cyan"
    },
    {
      number: 7,
      title: "BUSINESS",
      division: "Division 3",
      subtitle: "Unified Business Cloud",
      description: "Runs operations. Manages enterprise functions. Drives revenue systems.",
      tagline: "This is where the system scales.",
      icon: Building2,
      color: "green"
    },
    {
      number: 8,
      title: "IMPLEMENTATION",
      division: "Division 5",
      subtitle: "Digital Engineering",
      description: "Builds and integrates systems. Enables enterprise adoption.",
      tagline: "This is how the system enters.",
      icon: Wrench,
      color: "blue"
    },
    {
      number: 9,
      title: "GROWTH",
      division: "Division 6",
      subtitle: "Growth & PR Tech",
      description: "Drives demand. Expands reach. Captures markets.",
      tagline: "This is how the system dominates.",
      icon: TrendingUp,
      color: "purple"
    }
  ];

  const whyItMatters = [
    "No fragmentation",
    "No disconnected tools",
    "Real-time intelligence",
    "Autonomous execution",
    "Predictive optimisation",
    "Scalable across industries"
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <ConnectingLinesBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight px-4">
              Experience the
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SVARA Ecosystem
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-12 max-w-3xl mx-auto px-4">
              Six divisions. One unified intelligence system.
              <br />
              From perception to execution—every layer is connected.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#architecture"
                className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                Explore Architecture
                <ArrowRight size={20} />
              </a>
              <a
                href="#flow"
                className="px-8 py-4 border border-white/20 hover:border-white/40 transition-colors inline-flex items-center gap-2"
              >
                View Interactive Model
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Overview */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center px-4">
            Not Products. A Unified Intelligence Stack.
          </h2>

          <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-12">
            <p>
              SVARA is not a collection of tools or services.
              It is a <span className="text-white font-semibold">vertically integrated intelligence architecture</span> where every layer feeds into the next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Real-time perception",
              "Distributed processing",
              "Cognitive intelligence",
              "Autonomous execution",
              "Predictive simulation",
              "Unified orchestration",
              "Scalable business operations",
              "Continuous market growth"
            ].map((capability, index) => (
              <motion.div
                key={capability}
                className="flex items-center gap-3 p-4 bg-white/5 border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={20} />
                <span className="text-white/80">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 9-Layer Architecture */}
      <section id="architecture" className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">The 9-Layer Architecture</h2>

          <div className="space-y-8">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.number}
                className={`relative p-8 border transition-all duration-500 ${
                  activeLayer === index
                    ? "bg-white/10 border-cyan-500/50 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onViewportEnter={() => setActiveLayer(index)}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${
                      layer.color === 'cyan' ? 'from-cyan-500/20 to-cyan-500/5' :
                      layer.color === 'blue' ? 'from-blue-500/20 to-blue-500/5' :
                      layer.color === 'purple' ? 'from-purple-500/20 to-purple-500/5' :
                      layer.color === 'pink' ? 'from-pink-500/20 to-pink-500/5' :
                      layer.color === 'amber' ? 'from-amber-500/20 to-amber-500/5' :
                      'from-green-500/20 to-green-500/5'
                    } border ${
                      layer.color === 'cyan' ? 'border-cyan-500/30' :
                      layer.color === 'blue' ? 'border-blue-500/30' :
                      layer.color === 'purple' ? 'border-purple-500/30' :
                      layer.color === 'pink' ? 'border-pink-500/30' :
                      layer.color === 'amber' ? 'border-amber-500/30' :
                      'border-green-500/30'
                    } flex items-center justify-center`}>
                      <layer.icon className={`${
                        layer.color === 'cyan' ? 'text-cyan-400' :
                        layer.color === 'blue' ? 'text-blue-400' :
                        layer.color === 'purple' ? 'text-purple-400' :
                        layer.color === 'pink' ? 'text-pink-400' :
                        layer.color === 'amber' ? 'text-amber-400' :
                        'text-green-400'
                      }`} size={28} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-white/40">LAYER {layer.number}</span>
                      <span className="text-sm text-cyan-400">{layer.division}</span>
                    </div>
                    <h3 className="text-2xl mb-2">{layer.title}</h3>
                    <p className="text-lg text-cyan-400 mb-3">{layer.subtitle}</p>
                    <p className="text-white/60 mb-4">{layer.description}</p>
                    <p className="text-white/80 italic">"{layer.tagline}"</p>
                  </div>
                </div>

                {activeLayer === index && (
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-500/30 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section id="flow" className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center px-4">
            A Closed Loop Intelligence System
          </h2>

          <div className="mb-12 p-8 bg-white/5 border border-white/10 rounded-xl">
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">Perception</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400">Processing</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400">Intelligence</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 text-pink-400">Execution</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400">Simulation</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">Orchestration</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400">Business</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400">Growth</span>
              <ArrowRight className="text-white/40" size={20} />
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 opacity-50">Loop</span>
            </div>
          </div>

          <div className="text-center space-y-4 text-lg text-white/70">
            <p className="text-xl text-white">
              Every action generates new data.
              <br />
              Every data point improves the system.
            </p>
            <p className="text-2xl text-cyan-400 font-semibold">
              This creates a continuous intelligence loop.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">How It Works in Reality</h2>

          <div className="mb-8">
            <h3 className="text-2xl mb-8 text-center text-cyan-400">Example: Smart Factory</h3>

            <div className="space-y-4">
              {[
                { step: "Vision AI detects defect", layer: "Perception" },
                { step: "Edge AI processes instantly", layer: "Edge Processing" },
                { step: "AI Agent triggers correction", layer: "Execution" },
                { step: "Digital Twin simulates adjustment", layer: "Simulation" },
                { step: "AI OS coordinates response", layer: "Orchestration" },
                { step: "Business Cloud logs impact", layer: "Business" },
                { step: "Growth system uses insights", layer: "Growth" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex items-start gap-4 p-6 bg-white/5 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-white mb-1">{item.step}</p>
                    <p className="text-sm text-white/50">{item.layer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-white">
              ONE SYSTEM. MULTIPLE LAYERS. ZERO FRAGMENTATION.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">Why This Architecture Wins</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItMatters.map((point, index) => (
              <motion.div
                key={point}
                className="p-6 bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="text-cyan-400 mx-auto mb-3" size={28} />
                <p className="text-white/80">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-8">
            This Is Not Software.
            <br />
            <span className="text-cyan-400">This Is Infrastructure.</span>
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
            SVARA is building the operating layer for intelligent enterprises.
            Every division, every product, every system—designed to work as one.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
          >
            Experience It Live
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
