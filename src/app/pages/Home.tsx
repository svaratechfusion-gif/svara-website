import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { SEOHead } from "../components/SEOHead";
import { ArrowRight, Eye, Plane, Cpu, Sparkles, Box, Cloud, Building2, Factory, HeartPulse, Landmark } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { GlowButton } from "../components/GlowButton";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import heroBackgroundImage from "../../imports/Futuristic_Robotic_Hand_with_Glowing_Orb__Sci-Fi_Cyberpunk_Art.png";
import manufacturingImage from "../../imports/5f6538ee37ccd85969846722ae54bae4.jpg";
import smartCitiesImage from "../../imports/f45b51ed35aefa8f04cf73a481a8200e.jpg";
import healthcareImage from "../../imports/download.png";
import governmentImage from "../../imports/015059152b467401643b3ee46e77b49d.jpg";

interface Node {
  id: string;
  label: string;
  path: string;
  angle: number;
  distance: number;
  color: string;
}

export function Home() {
  const navigate = useNavigate();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const mousePosition = useMouseTracker3D();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const nodes: Node[] = [
    { id: "ecosystem", label: "Ecosystem", path: "/ecosystem", angle: 0, distance: 250, color: "#06b6d4" },
    { id: "products", label: "Products", path: "/products", angle: 60, distance: 250, color: "#3b82f6" },
    { id: "divisions", label: "Divisions", path: "/divisions", angle: 120, distance: 250, color: "#8b5cf6" },
    { id: "command", label: "AI OS", path: "/command-center", angle: 180, distance: 250, color: "#ec4899" },
    { id: "industries", label: "Industries", path: "/industries", angle: 240, distance: 250, color: "#f59e0b" },
    { id: "technology", label: "Technology", path: "/technology", angle: 300, distance: 250, color: "#10b981" },
  ];

  const products = [
    { name: "Vision AI", icon: Eye, delay: 0 },
    { name: "Drone AI", icon: Plane, delay: 0.5 },
    { name: "Edge AI", icon: Cpu, delay: 1 },
    { name: "Gen AI", icon: Sparkles, delay: 1.5 },
    { name: "Digital Twin", icon: Box, delay: 2 },
    { name: "AI OS", icon: Cloud, delay: 2.5 },
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory, image: manufacturingImage },
    { name: "Smart Cities", icon: Building2, image: smartCitiesImage },
    { name: "Healthcare", icon: HeartPulse, image: healthcareImage },
    { name: "Government", icon: Landmark, image: governmentImage },
  ];

  const handleNodeClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative" style={{ perspective: "2000px", background: "transparent" }}>
      <SEOHead
        title="SVARA TechFusion | AI Infrastructure & Enterprise Intelligence Platform"
        description="Building AI-powered systems for enterprises—Vision AI, Edge AI, AI Agents, Digital Twin, and AI OS. Full-stack AI infrastructure for intelligent operations."
        keywords="AI infrastructure platform, enterprise AI systems, autonomous intelligence, AI operating system, digital twin platform, edge AI, vision AI, AI agents, enterprise automation, intelligent enterprise software"
        canonicalUrl="https://www.svaratechfusion.com"
      />
      <ConnectingLinesBackground />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 py-32">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: parallaxY,
            transform: get3DTransform(mousePosition.x, mousePosition.y, 2),
          }}
        >
          <img
            src={heroBackgroundImage}
            alt=""
            className="size-full object-contain"
            style={{
              opacity: 0.6,
              filter: 'brightness(1.3) contrast(1.5) saturate(1.3)',
              imageRendering: 'crisp-edges',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </motion.div>
        {/* Cinematic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 mx-auto max-w-5xl text-center"
          style={{
            transform: get3DTransform(mousePosition.x, mousePosition.y, 5),
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-8 inline-block rounded-full bg-white/5 px-6 py-2 text-sm text-cyan-400 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              The Operating System for AI-Driven Enterprises
            </motion.div>
            <motion.h1
              className="mb-8 text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Own the Stack.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Own the Future.
              </span>
            </motion.h1>
            <motion.p
              className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg md:text-xl lg:text-2xl px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Full-stack AI infrastructure. One unified intelligence layer. Infinite possibilities.
            </motion.p>
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <GlowButton to="/ecosystem" variant="primary" glow="blue">
                Explore Ecosystem
                <ArrowRight size={20} />
              </GlowButton>
              <GlowButton to="/contact" variant="outline" glow="blue">
                Request Demo
              </GlowButton>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 2, duration: 1 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-500">Explore the System</span>
              <div className="size-6 rounded-full border-2 border-cyan-500/50">
                <motion.div
                  className="mx-auto mt-1.5 size-1.5 rounded-full bg-cyan-500"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Ecosystem Visualization */}
      <section className="relative z-10 overflow-hidden px-4 py-32">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl px-4">
              Navigate the{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Intelligence Ecosystem
              </span>
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-base sm:text-lg text-white/60 px-4">
              Click any node to explore that dimension of the SVARA platform
            </p>
          </motion.div>

          {/* 3D Pinwheel Ecosystem */}
          <div className="flex items-center justify-center px-4 py-16">
            <div className="relative w-full max-w-[700px] sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] aspect-square mx-auto">

              {/* Center Core - Circular */}
              <motion.div
                className="absolute left-1/2 top-1/2 size-24 sm:size-32 md:size-40 lg:size-48 -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
              >
                <div className="relative size-full rounded-full border-4 border-white bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_60px_rgba(6,182,212,0.6)] flex items-center justify-center">
                  <div className="absolute inset-2 rounded-full border-2 border-white/30" />
                  <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ⚡
                    </motion.div>
                    <div className="text-xs sm:text-sm md:text-base font-bold text-white">SVARA</div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Cards - Pinwheel Layout */}
              {nodes.map((node, index) => {
                const radius = 180;
                const angleRad = (node.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;
                const isHovered = hoveredNode === node.id;

                return (
                  <motion.div
                    key={node.id}
                    className="absolute left-1/2 top-1/2 cursor-pointer"
                    style={{
                      marginLeft: `${x}px`,
                      marginTop: `${y}px`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    onHoverStart={() => setHoveredNode(node.id)}
                    onHoverEnd={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(node.path)}
                    whileHover={{
                      scale: 1.15,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 12,
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Connection Line */}
                    <svg
                      className="pointer-events-none absolute left-0 top-0 w-[400px] h-[400px] overflow-visible"
                      style={{
                        zIndex: -1,
                        transform: `translate(${-200 - x}px, ${-200 - y}px)`
                      }}
                    >
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={200 + x}
                        y2={200 + y}
                        stroke={node.color}
                        strokeWidth={isHovered ? "2" : "1"}
                        opacity={isHovered ? "0.6" : "0.2"}
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </svg>

                    {/* Card */}
                    <div
                      className="w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44 rounded-xl border-2 overflow-hidden shadow-2xl -translate-x-1/2 -translate-y-1/2"
                      style={{
                        borderColor: node.color,
                        background: `linear-gradient(135deg, ${node.color}20, ${node.color}05)`,
                        backdropFilter: "blur(10px)",
                        boxShadow: isHovered ? `0 0 40px ${node.color}80` : `0 0 20px ${node.color}40`,
                      }}
                    >
                      {/* Card Content */}
                      <div className="size-full flex flex-col items-center justify-center p-4 text-center">
                        <div
                          className="size-12 sm:size-14 md:size-16 rounded-full mb-3 flex items-center justify-center"
                          style={{
                            backgroundColor: `${node.color}30`,
                            border: `2px solid ${node.color}`,
                          }}
                        >
                          <div className="size-6 sm:size-7 md:size-8 rounded-full" style={{ backgroundColor: node.color }} />
                        </div>
                        <p className="text-sm sm:text-base font-bold text-white">
                          {node.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="relative z-10 py-16 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-white/40 text-sm mb-8 uppercase tracking-wider">
            Trusted by Forward-Thinking Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <div className="text-2xl">🏭 Manufacturing</div>
            <div className="text-2xl">🏙️ Smart Cities</div>
            <div className="text-2xl">🏥 Healthcare</div>
            <div className="text-2xl">🏛️ Government</div>
            <div className="text-2xl">🏢 Enterprises</div>
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className="relative z-10 py-32 px-4" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 px-4">Intelligence Products</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 px-4">
              Purpose-built AI systems that power the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" style={{ transformStyle: "preserve-3d" }}>
            <GlassCard className="p-6 sm:p-8 md:p-10" glow="blue" hover>
              <Eye size={40} className="text-[#C0C0C0] mb-6" />
              <h3 className="text-2xl mb-4">Vision AI</h3>
              <p className="text-white/60 mb-6">
                Real-time intelligent vision systems. Cameras that think, not just record.
              </p>
              <a href="/products" className="inline-flex items-center gap-2 text-[#C0C0C0] hover:gap-3 transition-all">
                Learn more
                <ArrowRight size={16} />
              </a>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8 md:p-10" glow="blue" hover>
              <Cloud size={40} className="text-[#C0C0C0] mb-6" />
              <h3 className="text-2xl mb-4">AI OS</h3>
              <p className="text-white/60 mb-6">
                One interface for your entire business. Command using natural language.
              </p>
              <a href="/products" className="inline-flex items-center gap-2 text-[#C0C0C0] hover:gap-3 transition-all">
                Learn more
                <ArrowRight size={16} />
              </a>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8 md:p-10" glow="blue" hover>
              <Box size={40} className="text-[#C0C0C0] mb-6" />
              <h3 className="text-2xl mb-4">Digital Twin</h3>
              <p className="text-white/60 mb-6">
                Mirror reality digitally. Simulate, predict, optimize before deployment.
              </p>
              <a href="/products" className="inline-flex items-center gap-2 text-[#C0C0C0] hover:gap-3 transition-all">
                Learn more
                <ArrowRight size={16} />
              </a>
            </GlassCard>
          </div>

          <div className="text-center mt-12">
            <GlowButton to="/products" variant="outline" glow="blue">
              View All Products
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative z-10 py-32 px-4" style={{ perspective: "1500px" }}>
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 px-4">Built for Every Industry</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 px-4">
              AI infrastructure that adapts to your domain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  rotateY: 5,
                  scale: 1.05,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <industry.icon size={28} className="text-[#C0C0C0] mb-2 sm:mb-3 sm:w-8 sm:h-8" />
                  <h3 className="text-xl sm:text-2xl">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <GlowButton to="/industries" variant="outline" glow="violet">
              Explore All Industries
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C0C0C0]/10 to-transparent" />
        <div className="absolute inset-0 grid-background-animated opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight px-4">
            Ready to build your<br />
            <span className="text-gradient-blue">intelligence infrastructure?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 mb-12 px-4">
            Join enterprises and governments building the future with SVARA
          </p>
          <GlowButton to="/contact" variant="primary" glow="blue">
            <ArrowRight size={20} />
            Book Demo
          </GlowButton>
        </div>
      </section>
    </div>
  );
}
