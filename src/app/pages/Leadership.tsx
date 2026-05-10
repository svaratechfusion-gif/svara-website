import { Target, Users, Award, Lightbulb } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { GlassCard } from "../components/GlassCard";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { Link } from "react-router";
import founderImage from "../../imports/WhatsApp_Image_2026-04-22_at_14.07.19.jpeg";
import cooImage from "../../imports/86381B7E-231B-4619-BBB3-018626F01555_1_105_c.jpeg";

export function Leadership() {
  const principles = [
    {
      icon: Target,
      title: "Think in Systems",
      description: "Not products. Not features. Entire ecosystems that compound value."
    },
    {
      icon: Lightbulb,
      title: "Build for 10 Years",
      description: "Short-term wins fade. Infrastructure investments compound forever."
    },
    {
      icon: Users,
      title: "Platform Over Product",
      description: "One great platform beats ten great products every time."
    },
    {
      icon: Award,
      title: "Excellence is Default",
      description: "NVIDIA-level engineering. Apple-level design. Tesla-level ambition."
    }
  ];

  return (
    <div className="min-h-screen">
      <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 glass rounded-full mb-8 text-sm text-white/70">
            Leadership
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight leading-tight">
            Building<br />
            <span className="text-gradient-blue">Category-Defining</span><br />
            Infrastructure
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
            Led by technologists who understand that the future isn't built with incremental improvements—it's built with foundational infrastructure that changes everything.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">Our Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8" glow="blue">
              <div className="w-32 h-32 rounded-3xl glass-strong mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src={founderImage} alt="Sindhu Varikuppala" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">Sindhu Varikuppala</h2>
              <p className="text-cyan-400 text-sm mb-4 font-semibold text-center">Founder & CEO</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Sindhu Varikuppala is the Founder & CEO of Svara Techfusion, leading the company's vision, strategic direction, and business growth initiatives. With a background in Business Development and HR Management, she brings experience across operations, workforce management, client acquisition, and organizational structuring.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                She holds a B.Sc in Agriculture along with an MBA in Agribusiness Management from Vivekananda Global University, Jaipur. Her professional journey spans technology, smart home solutions, and early-stage business operations, where she has worked on building scalable systems, managing cross-functional teams, and driving execution-focused growth.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                At Svara Techfusion, Sindhu focuses on building an AI-first technology ecosystem designed to help organizations move from fragmented systems to intelligent, connected digital infrastructure.
              </p>
            </GlassCard>

            <GlassCard className="p-8" glow="purple">
              <div className="w-32 h-32 rounded-3xl glass-strong mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src={cooImage} alt="Prabhath Sandesh" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">Prabhath Sandesh</h2>
              <p className="text-purple-400 text-sm mb-4 font-semibold text-center">Co-Founder & Chief Operating Officer</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Prabhath Sandesh is the Co-Founder & Chief Operating Officer of Svara Techfusion, responsible for operations, execution strategy, ecosystem structuring, and business scalability. With a background in Mechatronics, Robotics, and Automation Engineering, he combines technical understanding with operational leadership to build scalable and execution-driven systems.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                At Svara Techfusion, Prabhath plays a key role in translating long-term vision into structured execution—focusing on AI ecosystems, SaaS platforms, intelligent automation, deep tech integration, and scalable digital infrastructure.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                His work centers around building connected systems that move businesses from fragmented operations to intelligent, AI-driven ecosystems designed for long-term growth and innovation.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-center px-4">The Vision</h2>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed mb-8 px-4">
              "We're not building software. We're building the operating system for AI-driven enterprises."
            </p>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed px-4">
              SVARA was founded on a simple insight: India has world-class engineering talent, but lacks AI infrastructure companies at scale. We decided to change that—not by competing in existing categories, but by creating entirely new ones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            <GlassCard className="p-10" glow="violet" hover>
              <h3 className="text-2xl mb-4">The Problem We Saw</h3>
              <p className="text-white/60 leading-relaxed">
                Every enterprise was building AI capabilities from scratch. Duplicating infrastructure. Reinventing the wheel. Wasting millions on fragmented solutions that didn't talk to each other.
              </p>
            </GlassCard>
            <GlassCard className="p-10" glow="violet" hover>
              <h3 className="text-2xl mb-4">The Solution We Built</h3>
              <p className="text-white/60 leading-relaxed">
                A unified AI ecosystem where every product shares one intelligence layer. Build once, deploy everywhere. Compound returns on engineering. Network effects at every level.
              </p>
            </GlassCard>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-16 text-center px-4">Leadership Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle) => (
                <GlassCard key={principle.title} className="p-10" glow="blue" hover>
                  <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center mb-6 glow-blue">
                    <principle.icon size={32} className="text-[#C0C0C0]" />
                  </div>
                  <h3 className="text-2xl mb-4">{principle.title}</h3>
                  <p className="text-white/60 leading-relaxed">{principle.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4">
        <div className="absolute inset-0 grid-background-animated opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl mb-8">Advisory Board</h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Backed by advisors with deep expertise in AI research, infrastructure scaling, and enterprise go-to-market strategy.
          </p>
          <GlassCard className="p-10">
            <p className="text-white/60">
              Our advisory board includes veterans from leading AI labs, infrastructure companies, and enterprise software giants—bringing decades of experience in building category-defining platforms.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-8">Join the Mission</h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            We're hiring world-class engineers, researchers, and builders to help us define the future of AI infrastructure.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C0C0C0] to-[#E5E7EB] hover:from-[#D1D5DB] hover:to-[#F3F4F6] transition-all rounded-full text-lg font-medium hover-glow-blue text-black"
          >
            Explore Careers
          </Link>
        </div>
      </section>
    </div>
  );
}
