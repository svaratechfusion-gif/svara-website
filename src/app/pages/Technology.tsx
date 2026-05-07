import { Code, Database, Cloud, Shield, Zap, Cpu, Server, Network } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMouseTracker3D, get3DTransform } from "../components/MouseTracker3D";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";

export function Technology() {
  const stack = [
    {
      category: "AI & Machine Learning",
      icon: Cpu,
      color: "blue",
      technologies: ["TensorFlow", "PyTorch", "ONNX", "Custom Models", "AutoML", "MLOps Pipeline"]
    },
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      color: "purple",
      technologies: ["Kubernetes", "Docker", "AWS/Azure/GCP", "Terraform", "Multi-cloud", "Edge Computing"]
    },
    {
      category: "Data Platform",
      icon: Database,
      color: "pink",
      technologies: ["Real-time Streaming", "Data Lakes", "Time Series DB", "Vector DB", "Graph DB", "Data Pipeline"]
    },
    {
      category: "Backend Systems",
      icon: Server,
      color: "cyan",
      technologies: ["Microservices", "Event-driven", "GraphQL/REST", "Message Queues", "API Gateway", "Service Mesh"]
    },
    {
      category: "Security",
      icon: Shield,
      color: "green",
      technologies: ["Zero Trust", "Encryption", "IAM", "Compliance", "Audit Logs", "Threat Detection"]
    },
    {
      category: "Edge Computing",
      icon: Zap,
      color: "orange",
      technologies: ["Edge Inference", "IoT Gateway", "Offline-first", "5G Integration", "Local Processing", "Sync"]
    }
  ];

  return (
    <div className="bg-black text-white">
      <ConnectingLinesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight px-4">
            Built on<br />Deep Tech
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 px-4">
            NVIDIA-level infrastructure. Enterprise-grade reliability. Research-backed innovation.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center px-4">Technology Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stack.map((item) => (
              <div
                key={item.category}
                className="p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center`}>
                    <item.icon className={`text-${item.color}-400`} size={24} />
                  </div>
                  <h3 className="text-xl">{item.category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {item.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 bg-white/5 border border-white/10 text-sm text-white/70"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center px-4">Infrastructure Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <Code className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-lg mb-2">API-First</h3>
              <p className="text-sm text-white/60">
                Everything accessible through clean, versioned APIs
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <Network className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-lg mb-2">Distributed</h3>
              <p className="text-sm text-white/60">
                Globally distributed, locally optimized
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <Shield className="mx-auto mb-4 text-pink-400" size={32} />
              <h3 className="text-lg mb-2">Secure by Default</h3>
              <p className="text-sm text-white/60">
                Enterprise security from the ground up
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <Zap className="mx-auto mb-4 text-cyan-400" size={32} />
              <h3 className="text-lg mb-2">Real-Time</h3>
              <p className="text-sm text-white/60">
                Millisecond latency, instant insights
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">AI/ML Infrastructure</h2>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
              <h3 className="text-xl mb-3">Model Development</h3>
              <p className="text-white/60">
                Custom model architectures, transfer learning, continuous training pipelines, automated hyperparameter optimization
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10">
              <h3 className="text-xl mb-3">Model Deployment</h3>
              <p className="text-white/60">
                Edge deployment, model compression, quantization, A/B testing, canary releases, rollback capabilities
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-white/10">
              <h3 className="text-xl mb-3">Model Monitoring</h3>
              <p className="text-white/60">
                Real-time performance tracking, drift detection, automated retraining, explainability tools, audit trails
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8">Built for Scale</h2>
          <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto">
            Infrastructure that grows with you. From startup to enterprise to nation-scale deployments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">99.99%</div>
              <p className="text-white/60">Uptime SLA</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">&lt;10ms</div>
              <p className="text-white/60">Average Latency</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">∞</div>
              <p className="text-white/60">Horizontal Scale</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
