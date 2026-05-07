import { motion } from "motion/react";
import { useState } from "react";
import { ConnectingLinesBackground } from "../components/ConnectingLinesBackground";
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Eye,
  Cpu,
  Database,
} from "lucide-react";

export function CommandCenter() {
  const [commandMode, setCommandMode] = useState(false);

  const metrics = [
    { label: "Active Systems", value: "247", change: "+12%", icon: Activity, color: "#06b6d4" },
    { label: "AI Models Running", value: "32", change: "+5", icon: Cpu, color: "#3b82f6" },
    { label: "Data Processed", value: "8.4TB", change: "+18%", icon: Database, color: "#8b5cf6" },
    { label: "Vision Cameras", value: "1,243", change: "+23", icon: Eye, color: "#ec4899" },
  ];

  const alerts = [
    { id: 1, type: "success", message: "Automation pipeline completed", time: "2m ago" },
    { id: 2, type: "warning", message: "High CPU usage detected", time: "5m ago" },
    { id: 3, type: "info", message: "Model training in progress", time: "12m ago" },
    { id: 4, type: "success", message: "Vision AI deployment successful", time: "18m ago" },
  ];

  const chartData = [
    { time: "00:00", value: 45 },
    { time: "04:00", value: 62 },
    { time: "08:00", value: 78 },
    { time: "12:00", value: 85 },
    { time: "16:00", value: 92 },
    { time: "20:00", value: 88 },
    { time: "24:00", value: 95 },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <ConnectingLinesBackground />

      {/* Command Mode Overlay */}
      {commandMode && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-600/20" />
          <div className="absolute inset-0 border-4 border-cyan-500/30 shadow-[inset_0_0_100px_rgba(6,182,212,0.3)]" />
        </motion.div>
      )}

      <div className="relative z-10 px-4 py-24">
        {/* Header */}
        <motion.div
          className="mx-auto mb-12 max-w-7xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
            Don't Use Software.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Command Intelligence.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/60">
            SVARA's AI Operating System transforms business interaction from dashboards and menus
            into natural, intelligent command.
          </p>

          {/* Command Mode Toggle */}
          <motion.button
            className={`inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold transition-all ${
              commandMode
                ? "border-2 border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                : "border-2 border-white/20 bg-white/5 text-white hover:bg-white/10"
            }`}
            onClick={() => setCommandMode(!commandMode)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={20} />
            {commandMode ? "Command Mode Active" : "Enter Command Mode"}
          </motion.button>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="mx-auto max-w-7xl">
          {/* Metrics Grid */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className={`rounded-xl border bg-black/60 p-6 backdrop-blur-sm transition-all ${
                    commandMode
                      ? "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                      : "border-white/10"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="rounded-lg p-2"
                      style={{
                        backgroundColor: `${metric.color}20`,
                      }}
                    >
                      <MetricIcon size={24} style={{ color: metric.color }} />
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: metric.color }}
                    >
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-sm text-white/60">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Activity Chart */}
            <motion.div
              className={`col-span-2 rounded-xl border bg-black/60 p-6 backdrop-blur-sm ${
                commandMode
                  ? "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  : "border-white/10"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">System Performance</h2>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp size={16} className="text-green-400" />
                  <span className="text-green-400">+24% this week</span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-64">
                <svg className="size-full" viewBox="0 0 700 200">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 50}
                      x2="700"
                      y2={i * 50}
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Area */}
                  <motion.path
                    d={`M 0 ${200 - chartData[0].value * 2} ${chartData
                      .map((d, i) => `L ${(i * 700) / 6} ${200 - d.value * 2}`)
                      .join(" ")} L 700 200 L 0 200 Z`}
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />

                  {/* Line */}
                  <motion.path
                    d={`M 0 ${200 - chartData[0].value * 2} ${chartData
                      .map((d, i) => `L ${(i * 700) / 6} ${200 - d.value * 2}`)
                      .join(" ")}`}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.7, duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* Data Points */}
                  {chartData.map((d, i) => (
                    <motion.circle
                      key={i}
                      cx={(i * 700) / 6}
                      cy={200 - d.value * 2}
                      r="4"
                      fill="#06b6d4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                    />
                  ))}
                </svg>
              </div>

              {/* Time Labels */}
              <div className="mt-4 flex justify-between text-xs text-white/40">
                {chartData.map((d) => (
                  <span key={d.time}>{d.time}</span>
                ))}
              </div>
            </motion.div>

            {/* Alerts Panel */}
            <motion.div
              className={`rounded-xl border bg-black/60 p-6 backdrop-blur-sm ${
                commandMode
                  ? "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  : "border-white/10"
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Live Alerts</h2>
                <motion.div
                  className="size-2 rounded-full bg-green-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    className="rounded-lg border border-white/10 bg-white/5 p-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  >
                    <div className="mb-2 flex items-start gap-3">
                      {alert.type === "success" && (
                        <CheckCircle2 size={18} className="text-green-400" />
                      )}
                      {alert.type === "warning" && (
                        <AlertTriangle size={18} className="text-yellow-400" />
                      )}
                      {alert.type === "info" && (
                        <Activity size={18} className="text-blue-400" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-white">{alert.message}</p>
                        <p className="mt-1 text-xs text-white/40">{alert.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Command Interface Hint */}
          {commandMode && (
            <motion.div
              className="mt-8 rounded-xl border-2 border-cyan-500/50 bg-cyan-500/10 p-8 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Zap size={32} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Command Mode Active</h3>
              <p className="text-white/70">
                In production, this interface responds to natural language commands, API calls, and automated triggers.
                <br />
                <span className="text-cyan-400">Your entire business, controllable through intelligence.</span>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
