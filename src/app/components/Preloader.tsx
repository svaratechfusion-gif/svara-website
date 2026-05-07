import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Particle Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-cyan-500/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
              scale: [0, 1, 0.5],
              opacity: [0, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.02,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central Core Node */}
      <div className="relative z-10 text-center">
        <motion.div
          className="mx-auto mb-8 size-32 rounded-full border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 shadow-[0_0_50px_rgba(6,182,212,0.5)]"
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            duration: 2,
            times: [0, 0.6, 1],
            ease: "easeOut",
          }}
        >
          <div className="absolute inset-4 rounded-full border border-cyan-400/30" />
          <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-wider text-white">
            SVARA TECHFUSION
          </h1>
          <p className="mb-6 text-sm text-cyan-400">
            Initializing Intelligence Layer...
          </p>

          {/* Progress Bar */}
          <div className="mx-auto h-1 w-64 overflow-hidden rounded-full bg-gray-800">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-400">{progress}%</p>
        </motion.div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </motion.div>
  );
}
