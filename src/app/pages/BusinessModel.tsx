import { DollarSign, TrendingUp, Network, Zap, Shield, Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { GlassCard } from "../components/GlassCard";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";

export function BusinessModel() {
  const revenueStreams = [
    {
      icon: DollarSign,
      title: "SaaS Subscriptions",
      description: "Recurring revenue from vertical SaaS platforms across industries",
      growth: "Predictable MRR"
    },
    {
      icon: Network,
      title: "Platform Licensing",
      description: "Enterprise licenses for AI OS and Unified Business Cloud",
      growth: "High LTV"
    },
    {
      icon: Zap,
      title: "Usage-Based API",
      description: "Pay-per-call for Vision AI, Edge AI, and intelligent services",
      growth: "Scales with usage"
    },
    {
      icon: TrendingUp,
      title: "Services & Integration",
      description: "Digital Engineering, custom development, consulting",
      growth: "Project-based"
    }
  ];

  const moats = [
    {
      icon: Layers,
      title: "Platform Lock-in",
      description: "Once adopted, switching costs are exponentially high"
    },
    {
      icon: Shield,
      title: "Data Network Effects",
      description: "More customers = better AI = stronger product"
    },
    {
      icon: Brain,
      title: "Compounding Technology",
      description: "Every new product leverages existing infrastructure"
    }
  ];

  return (
    <div className="min-h-screen">
      <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight">
            <span className="text-gradient-blue">Built</span> for<br />
            Exponential Growth
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Four revenue streams. Platform reuse economics. Network effects at every layer.
          </p>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center">Revenue Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {revenueStreams.map((stream) => (
              <GlassCard key={stream.title} className="p-10" glow="blue" hover>
                <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center mb-6 glow-blue">
                  <stream.icon size={32} className="text-[#C0C0C0]" />
                </div>
                <h3 className="text-2xl mb-3">{stream.title}</h3>
                <p className="text-white/60 mb-4 leading-relaxed">{stream.description}</p>
                <div className="inline-block px-4 py-2 glass-strong rounded-full text-sm text-[#C0C0C0]">
                  {stream.growth}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 grid-background-animated opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl mb-16 text-center">Platform Reuse Economics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GlassCard className="p-8" glow="violet" hover>
              <h3 className="text-3xl mb-4 text-gradient-blue">Build Once</h3>
              <p className="text-white/60 leading-relaxed">
                Every new product leverages existing platform. Development costs drop exponentially.
              </p>
            </GlassCard>
            <GlassCard className="p-8" glow="violet" hover>
              <h3 className="text-3xl mb-4 text-gradient-blue">Deploy Everywhere</h3>
              <p className="text-white/60 leading-relaxed">
                Shared infrastructure means near-zero marginal cost for new deployments.
              </p>
            </GlassCard>
            <GlassCard className="p-8" glow="violet" hover>
              <h3 className="text-3xl mb-4 text-gradient-blue">Compound Returns</h3>
              <p className="text-white/60 leading-relaxed">
                Each customer makes the entire ecosystem smarter and more valuable.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center">Growth Metrics (2028 Target)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <GlassCard className="p-8 text-center" glow="blue">
              <div className="text-5xl text-gradient-blue mb-3">$500M</div>
              <p className="text-white/60">Annual Revenue</p>
            </GlassCard>
            <GlassCard className="p-8 text-center" glow="blue">
              <div className="text-5xl text-gradient-blue mb-3">10,000+</div>
              <p className="text-white/60">Enterprise Customers</p>
            </GlassCard>
            <GlassCard className="p-8 text-center" glow="blue">
              <div className="text-5xl text-gradient-blue mb-3">50+</div>
              <p className="text-white/60">Products Deployed</p>
            </GlassCard>
            <GlassCard className="p-8 text-center" glow="blue">
              <div className="text-5xl text-gradient-blue mb-3">5</div>
              <p className="text-white/60">Countries</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-[#C0C0C0]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center">Competitive Moats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moats.map((moat) => (
              <GlassCard key={moat.title} className="p-10 text-center" glow="cyan" hover>
                <div className="w-20 h-20 rounded-full glass-strong flex items-center justify-center mx-auto mb-6 glow-cyan">
                  <moat.icon size={36} className="text-[#4DD4FF]" />
                </div>
                <h3 className="text-2xl mb-4">{moat.title}</h3>
                <p className="text-white/60 leading-relaxed">{moat.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Brain = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);
