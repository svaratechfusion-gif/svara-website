import { motion } from "motion/react";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { Brain, Zap, Box, Layers, Target, Users, Award, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export function Careers() {
  const workAreas = [
    {
      icon: Brain,
      title: "AI Systems & Intelligence",
      description: "Vision AI, Edge AI, Cognitive Systems"
    },
    {
      icon: Zap,
      title: "Autonomous Execution",
      description: "AI Agents, workflow systems"
    },
    {
      icon: Box,
      title: "Simulation & Digital Twin",
      description: "Real-time environments and predictive systems"
    },
    {
      icon: Layers,
      title: "AI OS & Platforms",
      description: "Orchestration and unified intelligence layers"
    }
  ];

  const principles = [
    "Ownership over tasks",
    "Systems thinking over shortcuts",
    "Speed with clarity",
    "Depth over noise",
    "Zero bureaucracy mindset"
  ];

  const openRoles = [
    {
      title: "AI Engineer (Vision / NLP)",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time"
    },
    {
      title: "Full Stack Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time"
    },
    {
      title: "3D / WebGL Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time"
    },
    {
      title: "Product Designer (Figma + Motion)",
      department: "Design",
      location: "Hyderabad, India",
      type: "Full-time"
    },
    {
      title: "Growth Engineer",
      department: "Growth",
      location: "Hyderabad, India",
      type: "Full-time"
    },
    {
      title: "Sales / GTM Lead",
      department: "Business",
      location: "Hyderabad, India",
      type: "Full-time"
    }
  ];

  const hiringSteps = [
    { step: "1", title: "Application Review", description: "We review your background and experience" },
    { step: "2", title: "Technical / Strategic Discussion", description: "Deep dive into your skills and approach" },
    { step: "3", title: "Final Founder Interaction", description: "Meet the founding team" },
    { step: "4", title: "Offer", description: "Welcome to SVARA" }
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
              Build the Systems That Will
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Define the Future
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-12 max-w-3xl mx-auto px-4">
              At SVARA TechFusion, we are not building features—we are building intelligence infrastructure.
              Join us in shaping AI, autonomy, and the next generation of enterprise systems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#open-roles"
                className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                View Open Roles
                <ArrowRight size={20} />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 transition-colors inline-flex items-center gap-2"
              >
                Work With Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why SVARA */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center px-4">
            Not a Job. A Front Row Seat to the Future.
          </h2>

          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              SVARA operates at the intersection of deep technology, AI systems, and enterprise transformation.
            </p>
            <p className="text-xl text-white">You will work on:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <span>Real-world AI deployments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <span>Autonomous systems and distributed intelligence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <span>Enterprise-scale platforms used across industries</span>
              </li>
            </ul>
            <p className="text-xl text-white pt-4">
              This is a place for builders who want to create systems, not just code features.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Work On */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">What You'll Work On</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="p-8 bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <area.icon className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl mb-3">{area.title}</h3>
                <p className="text-white/60">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Principles */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">How We Build</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                className="p-6 bg-white/5 border border-white/10 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white/80">{principle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">Open Roles</h2>

          <div className="grid grid-cols-1 gap-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                className="p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-white/60">
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1">
                        📍 {role.location}
                      </span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border border-white/20 hover:border-white/40 transition-colors inline-flex items-center gap-2 group-hover:bg-white/5"
                  >
                    Apply
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">Hiring Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {hiringSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl font-bold text-cyan-400">
                  {item.step}
                </div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 px-4">
            If You Want to Build the Future—
            <br />
            <span className="text-cyan-400">This Is Where You Start</span>
          </h2>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
