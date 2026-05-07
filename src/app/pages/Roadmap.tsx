import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { CheckCircle, Circle, ArrowRight, Rocket, Target, TrendingUp, Users, Zap, Globe } from "lucide-react";

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 0",
      period: "2026 Q1",
      status: "completed",
      title: "Company Formation",
      description: "Foundation Established",
      milestones: [
        "Company incorporated (March 9, 2026)",
        "Core vision, ecosystem architecture, and master blueprint defined",
        "Initial product concepts identified (Vision AI, AI Helpdesk, CRM SaaS)",
        "Brand identity and positioning established",
        "Early technical architecture planning initiated"
      ],
      goal: "Company formation complete"
    },
    {
      phase: "Phase 1",
      period: "2026 Q2–Q3",
      status: "in-progress",
      title: "Foundation & MVP Build",
      description: "From Concept → Working Systems",
      milestones: [
        "Build core founding team (AI, engineering, product)",
        "Develop MVPs: CRM SaaS (initial version), AI Helpdesk",
        "Set up core infrastructure: Cloud environment, Backend architecture, Initial AI pipelines",
        "Begin Digital Engineering services: Web/app development, Automation solutions"
      ],
      goal: "2–3 working MVPs, First pilot clients, Initial revenue generation"
    },
    {
      phase: "Phase 2",
      period: "2026 Q4 – 2027 Q1",
      status: "planned",
      title: "Early Market Entry",
      description: "From MVP → Market Validation",
      milestones: [
        "Launch initial SaaS platforms (CRM, AI Helpdesk)",
        "Acquire first 5–10 paying clients",
        "Deliver enterprise pilot projects",
        "Introduce: AI agents (basic automation workflows), Early analytics dashboards",
        "Strengthen engineering + sales teams"
      ],
      goal: "Product-market validation, Early revenue streams, Case studies & proof of execution"
    },
    {
      phase: "Phase 3",
      period: "2027 Q2–Q4",
      status: "planned",
      title: "Ecosystem Build",
      description: "From Products → Integrated System",
      milestones: [
        "Expand SaaS suite: ERP, HRM, LMS, AI Agent Builder",
        "Develop AI Wrapper (Alpha): Unified control layer, Cross-platform integration",
        "Launch Vision AI (v1)",
        "Start building Simulation capabilities (early stage)"
      ],
      goal: "Multi-product ecosystem, Strong integration between platforms, 20–50 enterprise + SME clients"
    },
    {
      phase: "Phase 4",
      period: "2028",
      status: "planned",
      title: "Intelligence Layer",
      description: "From Systems → Intelligence",
      milestones: [
        "Deploy: AI agents across CRM/ERP, Predictive analytics systems, Generative AI workspace",
        "Launch: Vision AI at scale, Edge AI deployments",
        "Strengthen: MLOps infrastructure, Model pipelines"
      ],
      goal: "AI becomes core value driver, Transition from software → intelligence"
    },
    {
      phase: "Phase 5",
      period: "2029",
      status: "planned",
      title: "Advanced Ecosystem Expansion",
      description: "From Intelligence → Predictive Systems",
      milestones: [
        "Launch: Digital Twin platform, Simulation environments, AI training simulators",
        "Enter: Government & smart city projects, Industrial AI deployments"
      ],
      goal: "Full ecosystem loop activated, Entry into large-scale deployments"
    },
    {
      phase: "Phase 6",
      period: "2030",
      status: "planned",
      title: "AI Operating System",
      description: "From Ecosystem → Operating System",
      milestones: [
        "Launch AI Wrapper & Orchestration Platform (Full Version)",
        "Enable: Natural language control of systems, Cross-platform automation"
      ],
      goal: "SVARA becomes: AI Operating System for enterprises"
    },
    {
      phase: "Phase 7",
      period: "2031+",
      status: "planned",
      title: "Global Scale",
      description: "From Company → Infrastructure Player",
      milestones: [
        "Expand globally (SEA → Middle East → Europe)",
        "Scale SaaS + licensing model",
        "Large government deployments"
      ],
      goal: "Category leadership, Infrastructure-level positioning"
    }
  ];

  const growthMetrics = {
    nearTerm: {
      title: "Near-Term (12–18 Months)",
      metrics: [
        { label: "Products", value: "2–4 MVPs" },
        { label: "Clients", value: "5–20" },
        { label: "Revenue", value: "Initial services + SaaS pilots" },
        { label: "Team Size", value: "10–25" }
      ]
    },
    midTerm: {
      title: "Mid-Term (2–3 Years)",
      metrics: [
        { label: "Products", value: "6–10 platforms" },
        { label: "Clients", value: "50–150" },
        { label: "Revenue", value: "Strong SaaS + enterprise mix" },
        { label: "Team Size", value: "50–80" }
      ]
    },
    longTerm: {
      title: "Long-Term (5+ Years)",
      metrics: [
        { label: "Products", value: "Full ecosystem" },
        { label: "Clients", value: "1000+" },
        { label: "Revenue", value: "Multi-stream (SaaS + AI + Govt)" },
        { label: "Position", value: "Category-defining company" }
      ]
    }
  };

  const priorities = [
    {
      icon: Zap,
      title: "Product Velocity",
      description: "Focus on MVP → validation → iteration. Launch 1–2 core products first (not 10)",
      color: "#06b6d4"
    },
    {
      icon: Globe,
      title: "Market Expansion",
      description: "Start with: SMEs, Early enterprise pilots. Then scale gradually",
      color: "#3b82f6"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "First hires: AI Engineer, Full-stack Developer, Product Lead. Build small, high-performance team",
      color: "#8b5cf6"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <ConnectingLinesBackground />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-cyan-400">Realistic Strategic Roadmap</span>
            </motion.div>

            <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
              From Foundation to
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Global Infrastructure
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-white/60 md:text-2xl">
              Founded in 2026, SVARA TechFusion is building an AI-powered technology ecosystem designed to become the operating system for next-generation enterprises.
            </p>
            <p className="text-lg font-semibold text-cyan-400">
              We are early — but we are building a massive system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-3xl md:text-4xl">Strategic Timeline</h2>

          <div className="relative space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:left-1/2" />

            {/* Phases */}
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`rounded-xl border p-6 backdrop-blur-sm ${
                      phase.status === "completed"
                        ? "border-green-500/30 bg-green-500/10"
                        : phase.status === "in-progress"
                        ? "border-cyan-500/30 bg-cyan-500/10"
                        : "border-white/10 bg-black/60"
                    }`}
                  >
                    {/* Header */}
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="mb-1 text-sm font-bold text-cyan-400">{phase.phase}</div>
                        <div className="text-xs text-white/50">{phase.period}</div>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                          phase.status === "completed"
                            ? "border border-green-500/30 bg-green-500/20 text-green-400"
                            : phase.status === "in-progress"
                            ? "border border-cyan-500/30 bg-cyan-500/20 text-cyan-400"
                            : "border border-white/20 bg-white/5 text-white/50"
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-bold text-white">{phase.title}</h3>
                    <p className="mb-4 text-sm font-semibold text-cyan-400">{phase.description}</p>

                    {/* Milestones */}
                    <ul className="mb-4 space-y-2">
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                          <ArrowRight size={16} className="mt-0.5 shrink-0 text-cyan-500" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Goal */}
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                        Goal
                      </div>
                      <div className="text-sm text-white">{phase.goal}</div>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div
                  className={`absolute left-8 z-10 flex size-6 items-center justify-center rounded-full border-4 border-black md:left-1/2 md:-translate-x-1/2 ${
                    phase.status === "completed"
                      ? "bg-green-500"
                      : phase.status === "in-progress"
                      ? "animate-pulse bg-cyan-500"
                      : "bg-white/30"
                  }`}
                >
                  {phase.status === "completed" && <CheckCircle size={16} className="text-black" />}
                </div>

                {/* Spacer */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="relative z-10 bg-gradient-to-b from-transparent to-white/5 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl md:text-4xl">Realistic Growth Metrics</h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Near-Term */}
            <motion.div
              className="rounded-xl border border-cyan-500/30 bg-black/60 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Target size={32} className="mb-4 text-cyan-400" />
              <h3 className="mb-6 text-xl font-bold text-white">{growthMetrics.nearTerm.title}</h3>
              <div className="space-y-4">
                {growthMetrics.nearTerm.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/60">{metric.label}</span>
                    <span className="font-semibold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mid-Term */}
            <motion.div
              className="rounded-xl border border-blue-500/30 bg-black/60 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TrendingUp size={32} className="mb-4 text-blue-400" />
              <h3 className="mb-6 text-xl font-bold text-white">{growthMetrics.midTerm.title}</h3>
              <div className="space-y-4">
                {growthMetrics.midTerm.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/60">{metric.label}</span>
                    <span className="font-semibold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Long-Term */}
            <motion.div
              className="rounded-xl border border-purple-500/30 bg-black/60 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Rocket size={32} className="mb-4 text-purple-400" />
              <h3 className="mb-6 text-xl font-bold text-white">{growthMetrics.longTerm.title}</h3>
              <div className="space-y-4">
                {growthMetrics.longTerm.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/60">{metric.label}</span>
                    <span className="font-semibold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl md:text-4xl">Strategic Priorities</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
            Aligned to Reality
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {priorities.map((priority, index) => {
              const Icon = priority.icon;
              return (
                <motion.div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/60 p-8 backdrop-blur-sm transition-all hover:border-cyan-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="mb-4 inline-flex rounded-lg p-3"
                    style={{ backgroundColor: `${priority.color}20` }}
                  >
                    <Icon size={28} style={{ color: priority.color }} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{priority.title}</h3>
                  <p className="text-white/60">{priority.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 bg-gradient-to-b from-transparent to-white/5 px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl md:text-4xl">Join the Journey</h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-white/60">
            We're building India's AI infrastructure. Be part of the story.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/70"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            <a
              href="/company"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition-all hover:scale-105 hover:bg-cyan-500/10"
            >
              About SVARA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
