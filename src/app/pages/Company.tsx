import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import { Target, Users, Award, MapPin, ArrowRight, Calendar, Building2, Globe, Zap } from "lucide-react";
import { Link } from "react-router";
import founderImage from "../../imports/WhatsApp_Image_2026-04-22_at_14.07.19.jpeg";
import cooImage from "../../imports/86381B7E-231B-4619-BBB3-018626F01555_1_105_c.jpeg";

export function Company() {
  const values = [
    {
      icon: Target,
      title: "AI-First",
      description: "We don't add AI to products. We build products from AI."
    },
    {
      icon: Users,
      title: "Platform Thinking",
      description: "Every solution we build strengthens the entire ecosystem."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "NVIDIA-level technical depth meets startup velocity."
    }
  ];

  const milestones = [
    { date: "March 9, 2026", title: "Company Founded", description: "SVARA TechFusion incorporated" },
    { date: "Q2 2026", title: "Foundation Phase", description: "6 divisions established, core AI infrastructure deployed" },
    { date: "Q3-Q4 2026", title: "Market Entry", description: "First enterprise deployments & government partnerships" },
    { date: "2027", title: "Expansion", description: "Pan-India presence, international pilot programs" },
    { date: "2028-2030", title: "Global Scale", description: "Multi-country operations, unicorn trajectory" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <ConnectingLinesBackground />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Founded Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Calendar size={16} className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">Incorporated: 9 March 2026</span>
            </motion.div>

            <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
              Engineering the Future
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                of Intelligent Systems
              </span>
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-xl text-white/60 md:text-2xl">
              Founded on 9 March 2026, SVARA TechFusion is building the infrastructure layer
              for the next generation of AI-driven enterprises.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Building2 size={24} className="mx-auto mb-2 text-cyan-400" />
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-white/60">Divisions</div>
              </motion.div>

              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Zap size={24} className="mx-auto mb-2 text-blue-400" />
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-white/60">AI Products</div>
              </motion.div>

              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Globe size={24} className="mx-auto mb-2 text-purple-400" />
                <div className="text-3xl font-bold text-white">4</div>
                <div className="text-sm text-white/60">Industries</div>
              </motion.div>

              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <MapPin size={24} className="mx-auto mb-2 text-pink-400" />
                <div className="text-3xl font-bold text-white">1</div>
                <div className="text-sm text-white/60">HQ (Hyderabad)</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Positioning */}
      <section className="relative z-10 border-t border-white/10 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl md:text-4xl">Early-Stage. High-Ambition.</h2>

          <div className="mb-12 space-y-8">
            <div className="rounded-xl border-l-4 border-cyan-500 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xl leading-relaxed text-white/80">
                <span className="font-semibold text-white">SVARA TechFusion</span> is not a startup building a single product.
                We are building an <span className="font-semibold text-cyan-400">entire AI infrastructure company</span> from day one.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-blue-500 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xl leading-relaxed text-white/80">
                Six divisions. Ten-plus platforms. One unified AI backbone. This is the system we are deploying
                across enterprises and governments—<span className="font-semibold text-white">a preview of what's already operational.</span>
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-purple-500 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xl leading-relaxed text-white/80">
                While others build AI features, we build <span className="font-semibold text-purple-400">AI infrastructure</span>.
                This isn't the idea stage. <span className="font-semibold text-white">This system already exists—you are seeing a preview.</span>
              </p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-white/70">
            <p>
              SVARA was founded on a simple observation: <span className="text-white">India has world-class engineering talent but lacks AI infrastructure companies at scale.</span>
            </p>
            <p>
              While the West built giants like OpenAI, Anthropic, and NVIDIA, India remained a services hub. We decided to change that.
            </p>
            <p>
              We didn't want to build another product company. We wanted to build <span className="text-white">an entire AI infrastructure ecosystem</span>—one that could compete globally while serving India's unique market needs.
            </p>
            <p>
              Today, SVARA operates six divisions, deploys AI across industries from manufacturing to healthcare, and works with enterprises and governments to build the future of intelligent systems.
            </p>
            <p className="text-xl text-white">
              This is just the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="relative z-10 bg-gradient-to-b from-transparent to-white/5 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-3xl md:text-4xl">From Foundation to Global Infrastructure</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:left-1/2" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="rounded-xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm">
                      <div className="mb-2 text-sm font-semibold text-cyan-400">{milestone.date}</div>
                      <h3 className="mb-2 text-xl font-bold text-white">{milestone.title}</h3>
                      <p className="text-white/60">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 z-10 size-4 rounded-full border-4 border-black bg-cyan-500 md:left-1/2 md:-translate-x-1/2" />

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-white/5 border border-white/10 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <value.icon className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl mb-4">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="w-24 h-24 rounded-3xl overflow-hidden mb-6">
                <img src={founderImage} alt="Sindhu Varikuppala" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sindhu Varikuppala</h3>
              <p className="text-cyan-400 text-sm mb-4 font-semibold">Founder & CEO</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Sindhu Varikuppala is the Founder & CEO of Svara Techfusion, leading the company's vision, strategic direction, and business growth initiatives. With a background in Business Development and HR Management, she brings experience across operations, workforce management, client acquisition, and organizational structuring.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                She holds a B.Sc in Agriculture along with an MBA in Agribusiness Management from Vivekananda Global University, Jaipur. Her professional journey spans technology, smart home solutions, and early-stage business operations, where she has worked on building scalable systems, managing cross-functional teams, and driving execution-focused growth.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                At Svara Techfusion, Sindhu focuses on building an AI-first technology ecosystem designed to help organizations move from fragmented systems to intelligent, connected digital infrastructure.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <div className="w-24 h-24 rounded-3xl overflow-hidden mb-6">
                <img src={cooImage} alt="Prabhath Sandesh" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Prabhath Sandesh</h3>
              <p className="text-purple-400 text-sm mb-4 font-semibold">Co-Founder & Chief Operating Officer</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Prabhath Sandesh is the Co-Founder & Chief Operating Officer of Svara Techfusion, responsible for operations, execution strategy, ecosystem structuring, and business scalability. With a background in Mechatronics, Robotics, and Automation Engineering, he combines technical understanding with operational leadership to build scalable and execution-driven systems.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                At Svara Techfusion, Prabhath plays a key role in translating long-term vision into structured execution—focusing on AI ecosystems, SaaS platforms, intelligent automation, deep tech integration, and scalable digital infrastructure.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                His work centers around building connected systems that move businesses from fragmented operations to intelligent, AI-driven ecosystems designed for long-term growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-blue-400" size={24} />
              <h3 className="text-xl">Headquarters</h3>
            </div>
            <p className="text-white/60 mb-2">Hyderabad, India</p>
            <p className="text-sm text-white/50">
              Building from the heart of India's tech ecosystem, serving global markets
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Join Our Mission</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-xl mb-4">Careers</h3>
              <p className="text-white/60 mb-4">
                We're hiring world-class engineers, researchers, and builders. Help us build India's AI infrastructure.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Open Positions
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-xl mb-4">Partnerships</h3>
              <p className="text-white/60 mb-4">
                Strategic partnerships, integrations, and ecosystem collaborations welcome.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Partner With Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
