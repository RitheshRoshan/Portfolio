import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(60,60,120,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />

        {Array.from({ length: 120 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -4, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Horizon Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250%] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(200,200,255,0.18),transparent_80%)] blur-[110px] opacity-70" />
         <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[6px] h-[6px] rounded-full bg-white/40 blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }} />
        ))}
      </div>
      {/* Actual Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}