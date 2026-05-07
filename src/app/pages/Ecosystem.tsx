import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { Database, Layers, Network, Brain, Shield, Zap, Eye, Cpu, Box, Cloud, Building2, Users } from "lucide-react";

interface Division {
  id: string;
  name: string;
  description: string;
  icon: typeof Brain;
  angle: number;
  distance: number;
  color: string;
  products: string[];
}

export function Ecosystem() {
  const navigate = useNavigate();
  const [hoveredDivision, setHoveredDivision] = useState<string | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [coreHovered, setCoreHovered] = useState(false);
  const mousePosition = useMouseTracker3D();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const divisions: Division[] = [
    {
      id: "1",
      name: "Deep Tech AI Lab",
      description: "Core AI/ML R&D and model development",
      icon: Brain,
      angle: 0,
      distance: 140,
      color: "#06b6d4",
      products: ["Vision AI", "Gen AI", "Custom Models"],
    },
    {
      id: "2",
      name: "Simulation Division",
      description: "Digital Twin & Training Environments",
      icon: Box,
      angle: 60,
      distance: 140,
      color: "#3b82f6",
      products: ["Digital Twin", "Virtual Scenarios", "Sim-to-Real"],
    },
    {
      id: "3",
      name: "Enterprise SaaS",
      description: "Cloud-native AI platform products",
      icon: Cloud,
      angle: 120,
      distance: 140,
      color: "#8b5cf6",
      products: ["AI OS", "Automation Suite", "Analytics"],
    },
    {
      id: "4",
      name: "Edge AI Systems",
      description: "On-device intelligence & real-time processing",
      icon: Cpu,
      angle: 180,
      distance: 140,
      color: "#ec4899",
      products: ["Edge AI", "Drone AI", "IoT Intelligence"],
    },
    {
      id: "5",
      name: "Vision Intelligence",
      description: "Computer vision & spatial AI",
      icon: Eye,
      angle: 240,
      distance: 140,
      color: "#f59e0b",
      products: ["Vision AI", "Object Detection", "Scene Analysis"],
    },
    {
      id: "6",
      name: "Gov Tech",
      description: "Large-scale government infrastructure",
      icon: Building2,
      angle: 300,
      distance: 140,
      color: "#10b981",
      products: ["Smart City OS", "Public Safety", "Infrastructure"],
    },
  ];

  const handleDivisionClick = (divisionId: string) => {
    setSelectedDivision(divisionId === selectedDivision ? null : divisionId);
  };

  return (
    <div className="relative min-h-screen text-white" style={{ perspective: "2000px", background: "transparent" }}>
      <ConnectingLinesBackground />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24">
        <motion.div
          className="mx-auto max-w-6xl"
          style={{
            transform: get3DTransform(mousePosition.x, mousePosition.y, 4),
            transformStyle: "preserve-3d",
          }}
        >
          {/* Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transform: "translateZ(50px)" }}
          >
            <h1 className="mb-6 text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl px-4">
              Not Software.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Intelligence Infrastructure.
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 px-4">
              SVARA TechFusion is an AI-first technology ecosystem designed to unify systems,
              automate operations, and embed intelligence into every layer of an organisation.
            </p>
          </motion.div>

          {/* 3D Ecosystem Visualization */}
          <div className="relative mx-auto w-full max-w-5xl">
            {/* Central SVARA Core */}
            <div className="flex justify-center mb-16">
              <motion.div
                className="size-48 sm:size-56 md:size-64 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 shadow-[0_0_100px_rgba(6,182,212,0.8)] backdrop-blur-sm">
                  <div className="absolute inset-3 rounded-full border-2 border-cyan-400/50" />
                  <div className="absolute inset-6 rounded-full border border-cyan-300/30" />
                  <div className="flex size-full flex-col items-center justify-center">
                    <div className="mb-2 text-4xl sm:text-5xl">⚡</div>
                    <div className="text-xl sm:text-2xl font-bold text-white">SVARA</div>
                    <div className="text-base sm:text-lg text-cyan-400">CORE</div>
                    <div className="text-sm text-white/50">AI Backbone</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Division Cards in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {divisions.map((division, index) => {
                const DivisionIcon = division.icon;
                return (
                  <motion.div
                    key={division.id}
                    className="p-6 rounded-xl border-2 bg-black/90 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all"
                    style={{
                      borderColor: division.color,
                      boxShadow: `0 0 30px ${division.color}40`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      boxShadow: `0 0 50px ${division.color}80`,
                    }}
                    onClick={() => handleDivisionClick(division.id)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="size-16 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: division.color }}
                      >
                        <DivisionIcon size={28} style={{ color: division.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{division.name}</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-4">{division.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-white/50">Products:</p>
                      {division.products.map((product) => (
                        <div key={product} className="flex items-center gap-2 text-sm text-white/60">
                          <div
                            className="size-2 rounded-full"
                            style={{ backgroundColor: division.color }}
                          />
                          {product}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="mt-20 text-center text-lg text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Every platform shares a common AI backbone, data layer, and control interface —
            <br />
            creating a system where each capability amplifies the next.
          </motion.p>
        </motion.div>
      </section>

      {/* Unified Intelligence Section */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24" style={{ perspective: "1500px" }}>
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 80, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="mb-12 text-center text-3xl md:text-4xl">Unified Intelligence Layer</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-cyan-500 bg-white/5 p-8">
              <p className="text-xl leading-relaxed">
                SVARA is an <span className="text-white">AI-first infrastructure company</span> that builds intelligent systems from the ground up—not as add-ons, but as the foundation.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 bg-white/5 p-8">
              <p className="text-xl leading-relaxed">
                We operate as a <span className="text-white">platform ecosystem</span>—six independent divisions sharing one unified intelligence layer, creating compounding value with every product we build.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 bg-white/5 p-8">
              <p className="text-xl leading-relaxed">
                Every solution we deploy feeds back into the platform. Every customer strengthens the network. <span className="text-white">Growth compounds</span> exponentially.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 py-24 px-4" style={{ perspective: "1500px" }}>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-3xl md:text-4xl mb-16 text-center">AI Foundation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10">
              <Brain className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl mb-4">Unified Intelligence Layer</h3>
              <p className="text-white/60">
                All products run on shared AI models, continuously learning and improving from every interaction across the ecosystem.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <Database className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl mb-4">Centralized Data Platform</h3>
              <p className="text-white/60">
                Single source of truth. No data silos. Every division contributes to and benefits from the unified data lake.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <Network className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl mb-4">Cross-Platform Intelligence</h3>
              <p className="text-white/60">
                Insights from vision AI improve simulation accuracy. Digital twin data enhances SaaS predictions. Everything connects.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <Zap className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl mb-4">Real-Time Processing</h3>
              <p className="text-white/60">
                Edge computing meets cloud intelligence. Process data at the source, sync insights globally, act instantly.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 py-24 px-4 border-t border-white/10" style={{ perspective: "1500px" }}>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-3xl md:text-4xl mb-16 text-center">Platform Architecture</h2>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
                <Layers className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl mb-2">Infrastructure Layer</h3>
                <p className="text-white/60">Cloud, edge, on-premise deployment options with unified management</p>
              </div>
              <div className="hidden md:block text-white/30">→</div>
              <div className="flex-1 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10">
                <Brain className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl mb-2">AI/ML Layer</h3>
                <p className="text-white/60">Shared models, training pipelines, and inference engines</p>
              </div>
              <div className="hidden md:block text-white/30">→</div>
              <div className="flex-1 p-8 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-white/10">
                <Zap className="text-pink-400 mb-4" size={32} />
                <h3 className="text-xl mb-2">Application Layer</h3>
                <p className="text-white/60">Six divisions delivering specialized solutions to market</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 py-24 px-4" style={{ perspective: "1500px" }}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-3xl md:text-4xl mb-12 text-center">The Philosophy</h2>

          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              Traditional companies build products in silos. Each new offering starts from scratch, rebuilds infrastructure, relearns customer patterns.
            </p>
            <p>
              <span className="text-white">SVARA operates differently.</span>
            </p>
            <p>
              We build once, deploy everywhere. Every new product inherits the collective intelligence of the platform. Every customer interaction makes the entire ecosystem smarter.
            </p>
            <p>
              This isn't just efficient. It's <span className="text-white">exponential</span>.
            </p>
            <p>
              While competitors are building their fifth product from scratch, we're deploying our fiftieth—each one more powerful than the last, built in a fraction of the time.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 py-24 px-4 border-t border-white/10" style={{ perspective: "1500px" }}>
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-3xl md:text-4xl mb-8">Experience the Ecosystem</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Explore how our six divisions work together to deliver unprecedented value
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/divisions"
              className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Explore Divisions
            </Link>
            <Link
              to="/architecture"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors"
            >
              View Architecture
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
