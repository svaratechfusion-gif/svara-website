import { motion } from "motion/react";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { Plug, Building2, Users, Lightbulb, Rocket, Target, Globe, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export function Partnerships() {
  const partnershipTypes = [
    {
      icon: Plug,
      title: "Technology Partners",
      description: "Integrate SVARA AI into your platforms",
      benefits: ["API & SDK access", "Co-engineering support", "Technical documentation"]
    },
    {
      icon: Building2,
      title: "Enterprise Partners",
      description: "Deploy solutions across your organisation",
      benefits: ["Custom deployment", "Dedicated support", "Enterprise SLAs"]
    },
    {
      icon: Users,
      title: "Channel & Sales Partners",
      description: "Resell or distribute SVARA solutions",
      benefits: ["Revenue sharing", "Sales enablement", "Marketing support"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Partners",
      description: "Co-develop new products and solutions",
      benefits: ["Joint R&D", "Co-branding", "Go-to-market strategy"]
    }
  ];

  const offerings = [
    "AI infrastructure and platforms",
    "Custom engineering capabilities",
    "Scalable SaaS products",
    "GTM and growth support",
    "Co-branding opportunities"
  ];

  const idealPartners = [
    {
      icon: Building2,
      title: "Enterprises undergoing digital transformation"
    },
    {
      icon: Rocket,
      title: "SaaS companies seeking AI integration"
    },
    {
      icon: Users,
      title: "System integrators and consulting firms"
    },
    {
      icon: Globe,
      title: "Government and public sector bodies"
    },
    {
      icon: Zap,
      title: "Startups building in AI or deep tech"
    }
  ];

  const process = [
    { step: "1", title: "Initial Discussion", description: "Understanding your needs and objectives" },
    { step: "2", title: "Opportunity Alignment", description: "Identifying synergies and mutual value" },
    { step: "3", title: "Technical & Business Integration", description: "Setting up systems and agreements" },
    { step: "4", title: "Go-to-Market Execution", description: "Launching and scaling together" }
  ];

  const benefits = [
    "Access to deep tech AI capabilities",
    "Enterprise-ready platforms and infrastructure",
    "Co-building opportunities across industries",
    "Faster go-to-market with advanced solutions"
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
              Build With Us. Scale With Us.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Win Together.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-12 max-w-3xl mx-auto px-4">
              SVARA partners with enterprises, startups, and ecosystem leaders to build, deploy, and scale intelligent systems across industries.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                Become a Partner
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 transition-colors inline-flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With SVARA */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center px-4">
            More Than Collaboration. A Strategic Advantage.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-start gap-3 p-6 bg-white/5 border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">Partnership Types</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="p-8 bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <type.icon className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-2xl mb-3">{type.title}</h3>
                <p className="text-white/60 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering}
                className="p-6 bg-white/5 border border-white/10 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Target className="text-cyan-400 flex-shrink-0" size={20} />
                <span className="text-white/80">{offering}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Partners */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">Ideal Partners</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealPartners.map((partner, index) => (
              <motion.div
                key={partner.title}
                className="p-6 bg-white/5 border border-white/10 text-center hover:border-cyan-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <partner.icon className="text-cyan-400 mx-auto mb-4" size={32} />
                <p className="text-white/80">{partner.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">Partnership Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
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
            The Next Generation of Technology
            <br />
            <span className="text-cyan-400">Will Be Built Through Collaboration</span>
          </h2>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
          >
            Become a Partner
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
