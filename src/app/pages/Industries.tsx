import { Building2, Factory, TruckIcon, ShoppingCart, GraduationCap, HeartPulse, Landmark, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";

export function Industries() {
  const industries = [
    {
      name: "Manufacturing",
      icon: Factory,
      color: "blue",
      description: "Smart factories, predictive maintenance, quality control automation, supply chain optimization",
      entryPoints: ["Vision AI for QC", "Digital Twin simulation", "Predictive analytics"]
    },
    {
      name: "Logistics & Supply Chain",
      icon: TruckIcon,
      color: "purple",
      description: "Fleet management, route optimization, warehouse automation, demand forecasting",
      entryPoints: ["Fleet tracking SaaS", "Warehouse digital twins", "Demand prediction AI"]
    },
    {
      name: "Retail & E-commerce",
      icon: ShoppingCart,
      color: "pink",
      description: "Customer intelligence, inventory optimization, personalized marketing, smart stores",
      entryPoints: ["Customer analytics", "Inventory AI", "Marketing automation"]
    },
    {
      name: "Healthcare",
      icon: HeartPulse,
      color: "cyan",
      description: "Hospital management, patient monitoring, medical imaging AI, predictive diagnostics",
      entryPoints: ["Hospital ERP", "Medical vision AI", "Patient analytics"]
    },
    {
      name: "Education",
      icon: GraduationCap,
      color: "green",
      description: "Learning management, student analytics, personalized learning paths, administrative automation",
      entryPoints: ["EdTech platforms", "Student intelligence", "Admin automation"]
    },
    {
      name: "Real Estate & Construction",
      icon: Building2,
      color: "orange",
      description: "Project simulation, site monitoring, building automation, property management",
      entryPoints: ["Construction simulation", "Site monitoring drones", "Building AI"]
    },
    {
      name: "Government & Smart Cities",
      icon: Landmark,
      color: "indigo",
      description: "Urban planning, public safety, infrastructure monitoring, citizen services",
      entryPoints: ["City digital twins", "Infrastructure monitoring", "Public service AI"]
    },
    {
      name: "Enterprise (Horizontal)",
      icon: Building2,
      color: "red",
      description: "Any business needing AI infrastructure, automation, intelligent operations",
      entryPoints: ["AI OS platform", "Business Cloud", "Custom solutions"]
    }
  ];

  return (
    <div className="text-white" style={{ background: "transparent" }}>
      <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight px-4">
            Every Industry.<br />One Platform.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 px-4">
            From SME to enterprise to nation-scale. SVARA adapts to your market.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-${industry.color}-500/10 border border-${industry.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <industry.icon className={`text-${industry.color}-400`} size={28} />
                  </div>
                  <h3 className="text-2xl">{industry.name}</h3>
                </div>

                <p className="text-white/60 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-white/50 mb-3">Entry Points</h4>
                  <div className="space-y-2">
                    {industry.entryPoints.map((entry) => (
                      <div key={entry} className="flex items-center gap-2 text-sm text-white/70">
                        <ArrowRight size={14} className={`text-${industry.color}-400`} />
                        {entry}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">Adoption Pathways</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">SME</div>
              <h3 className="text-xl mb-4 text-white/90">Start Small, Scale Fast</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>• Single product deployment</li>
                <li>• SaaS pricing model</li>
                <li>• Quick setup, minimal training</li>
                <li>• Expand as you grow</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">Enterprise</div>
              <h3 className="text-xl mb-4 text-white/90">Full Platform Integration</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>• Multi-product deployment</li>
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
                <li>• On-premise options</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">Government</div>
              <h3 className="text-xl mb-4 text-white/90">Nation-Scale Infrastructure</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>• Complete ecosystem deployment</li>
                <li>• Sovereign infrastructure</li>
                <li>• Custom compliance</li>
                <li>• Long-term partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-white/60 mb-12">
            Let's discuss how SVARA can power your next generation of operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </a>
            <a
              href="/products"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
