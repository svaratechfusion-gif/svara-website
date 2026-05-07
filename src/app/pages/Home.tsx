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

          {/* 3D Orbiting Ecosystem */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[700px] aspect-square sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1100px]">
              {/* Orbital Rings */}
              <svg className="absolute inset-0" viewBox="0 0 1000 1000">
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="500"
                  cy="500"
                  r="300"
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, rotate: 360 }}
                  transition={{
                    pathLength: { duration: 2, ease: "easeOut" },
                    rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ transformOrigin: "500px 500px" }}
                />
                <motion.circle
                  cx="500"
                  cy="500"
                  r="220"
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="1"
                  strokeDasharray="5 3"
                  opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, rotate: -360 }}
                  transition={{
                    pathLength: { duration: 2, ease: "easeOut", delay: 0.2 },
                    rotate: { duration: 80, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ transformOrigin: "500px 500px" }}
                />
              </svg>

              {/* Center Core */}
              <motion.div
                className="absolute left-1/2 top-1/2 size-40 sm:size-44 md:size-48 lg:size-52 -translate-x-1/2 -translate-y-1/2"
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
                <div className="relative size-full">
                  {/* Hexagonal Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 192 192">
                      <defs>
                        <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      <motion.polygon
                        points="96,20 166,60 166,132 96,172 26,132 26,60"
                        fill="url(#coreGradient)"
                        stroke="#06b6d4"
                        strokeWidth="3"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{
                          scale: 1,
                          rotate: [0, 360],
                        }}
                        transition={{
                          scale: { duration: 0.8, delay: 0.5 },
                          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                        }}
                        style={{ transformOrigin: "96px 96px" }}
                      />
                      <motion.polygon
                        points="96,35 151,67.5 151,124.5 96,157 41,124.5 41,67.5"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                        opacity="0.6"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: 1,
                          rotate: [-360, 0],
                        }}
                        transition={{
                          scale: { duration: 0.8, delay: 0.6 },
                          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
                        }}
                        style={{ transformOrigin: "96px 96px" }}
                      />
                    </svg>
                  </div>

                  {/* Core Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      className="mb-1 sm:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ⚡
                    </motion.div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">SVARA</div>
                    <div className="text-xs sm:text-sm text-cyan-400">CORE</div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Nodes */}
              {nodes.map((node, index) => {
                const x = Math.cos((node.angle * Math.PI) / 180) * 300;
                const y = Math.sin((node.angle * Math.PI) / 180) * 300;
                const isHovered = hoveredNode === node.id;

                return (
                  <motion.div
                    key={node.id}
                    className="absolute left-1/2 top-1/2 cursor-pointer"
                    style={{
                      x: x - 48,
                      y: y - 48,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.12 + 0.8,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    }}
                    onHoverStart={() => setHoveredNode(node.id)}
                    onHoverEnd={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(node.path)}
                    whileHover={{
                      scale: 1.15,
                      y: -15,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Connection Line */}
                    <svg
                      className="pointer-events-none absolute left-1/2 top-1/2 w-[800px] h-[800px] sm:w-[900px] sm:h-[900px] md:size-[1000px] lg:size-[1100px] -translate-x-1/2 -translate-y-1/2"
                      style={{ zIndex: -1 }}
                    >
                      <defs>
                        <linearGradient id={`lineGradient${node.id}`} x1="50%" y1="50%" x2={`${50 + (x / 10)}%`} y2={`${50 + (y / 10)}%`}>
                          <stop offset="0%" stopColor={node.color} stopOpacity="0.1" />
                          <stop offset="100%" stopColor={node.color} stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <motion.line
                        x1="500"
                        y1="500"
                        x2={500 + x}
                        y2={500 + y}
                        stroke={isHovered ? node.color : `url(#lineGradient${node.id})`}
                        strokeWidth={isHovered ? "3" : "2"}
                        opacity={isHovered ? "1" : "0.4"}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: index * 0.12 + 0.8 }}
                      />
                      {isHovered && (
                        <motion.circle
                          r="4"
                          fill={node.color}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path={`M 500 500 L ${500 + x} ${500 + y}`}
                          />
                        </motion.circle>
                      )}
                    </svg>

                    {/* Node - Hexagonal Shape */}
                    <div className="relative size-24 sm:size-28 md:size-32 lg:size-36">
                      <svg width="128" height="128" viewBox="0 0 128 128" className="absolute inset-0">
                        <defs>
                          <linearGradient id={`nodeGradient${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={node.color} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={node.color} stopOpacity="0.1" />
                          </linearGradient>
                          <filter id={`glow${node.id}`}>
                            <feGaussianBlur stdDeviation={isHovered ? "4" : "2"} result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <motion.polygon
                          points="64,10 110,37 110,91 64,118 18,91 18,37"
                          fill={`url(#nodeGradient${node.id})`}
                          stroke={node.color}
                          strokeWidth={isHovered ? "3" : "2"}
                          filter={`url(#glow${node.id})`}
                          animate={{
                            strokeWidth: isHovered ? 3 : 2,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </svg>

                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.div
                          className="rounded-lg p-1 sm:p-2"
                          style={{
                            backgroundColor: `${node.color}20`,
                          }}
                          animate={{
                            scale: isHovered ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="size-4 sm:size-6 md:size-7 lg:size-8 rounded-full" style={{ backgroundColor: node.color, opacity: 0.8 }} />
                        </motion.div>
                        <motion.div
                          className="mt-1 sm:mt-2 text-center text-xs sm:text-sm font-bold text-white"
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {node.label}
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Info Card */}
                    {isHovered && (
                      <motion.div
                        className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg sm:rounded-xl border px-2 py-1 sm:px-4 sm:py-2 text-xs backdrop-blur-lg hidden sm:block"
                        style={{
                          backgroundColor: `${node.color}10`,
                          borderColor: `${node.color}40`,
                        }}
                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25
                        }}
                      >
                        <div className="font-semibold text-white">Click to explore {node.label}</div>
                      </motion.div>
                    )}
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
