import { Target, Zap, Layers, Brain } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { GlassCard } from "../components/GlassCard";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";

export function About() {
  const philosophies = [
    {
      icon: Brain,
      title: "AI is Infrastructure",
      description: "Not a feature. Not a tool. The foundation of everything we build."
    },
    {
      icon: Layers,
      title: "Simulation Before Execution",
      description: "Test every scenario digitally before deploying physically."
    },
    {
      icon: Zap,
      title: "Platform Reuse",
      description: "Build once, deploy everywhere. Compounding returns on engineering."
    },
    {
      icon: Target,
      title: "Category Creation",
      description: "We don't compete. We define entirely new markets."
    }
  ];

  return (
    <div className="min-h-screen">
      <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-6 py-2 glass rounded-full mb-8 text-sm text-white/70">
            About SVARA TechFusion
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight">
            <span className="text-gradient-blue">Redefining</span><br />
            Intelligence Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            SVARA isn't a software company. We're building the operating system for AI-driven enterprises—infrastructure that thinks, learns, and evolves.
          </p>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-5xl mb-8 leading-tight">
                The Mission
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                To build the world's most comprehensive AI ecosystem—where every system connects, every signal learns, and every action compounds value.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                We're not building features. We're building categories. From vision AI to autonomous agents, digital twins to unified business clouds—every product shares one intelligence layer.
              </p>
            </div>
            <GlassCard className="p-12" glow="blue" hover>
              <div className="space-y-8">
                <div>
                  <div className="text-5xl text-gradient-blue mb-2">$100B+</div>
                  <p className="text-white/60">Market Opportunity</p>
                </div>
                <div>
                  <div className="text-5xl text-gradient-blue mb-2">6</div>
                  <p className="text-white/60">Core Divisions</p>
                </div>
                <div>
                  <div className="text-5xl text-gradient-blue mb-2">∞</div>
                  <p className="text-white/60">Platform Reuse</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div>
            <h2 className="text-5xl mb-16 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophies.map((item) => (
                <GlassCard key={item.title} className="p-8" glow="blue" hover>
                  <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center mb-6 glow-blue">
                    <item.icon size={32} className="text-[#C0C0C0]" />
                  </div>
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 grid-background-animated opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl mb-8">Headquartered in Hyderabad</h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Operating from India's fastest-growing tech hub, building for global markets. From manufacturing to smart cities, healthcare to government—SVARA powers the future of intelligent operations.
          </p>
          <GlassCard className="p-12 inline-block" glow="violet">
            <div className="text-2xl mb-2">📍 Hyderabad, India</div>
            <p className="text-white/60">Building the future from the heart of innovation</p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
