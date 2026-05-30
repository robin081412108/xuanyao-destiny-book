"use client";

import { motion, useReducedMotion } from "framer-motion";

const stars = Array.from({ length: 68 }, (_, index) => ({
  id: index,
  left: `${(index * 41 + 11) % 100}%`,
  top: `${(index * 59 + 7) % 100}%`,
  size: index % 11 === 0 ? 2 : 1,
  opacity: index % 7 === 0 ? 0.55 : 0.28,
  delay: (index % 13) * 0.4
}));

export function StarfieldBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#020202_0%,#070604_44%,#020202_100%)]" />
      <div className="absolute left-1/2 top-16 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.16)_0%,rgba(200,155,60,0.07)_28%,transparent_70%)] blur-sm" />
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(240,212,146,0.12),transparent_68%)]" />
      {stars.map((star) => (
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : { opacity: [star.opacity, star.opacity + 0.2, star.opacity], scale: [1, 1.35, 1] }
          }
          className="absolute rounded-full bg-[#f0d492]"
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity
          }}
          transition={{
            duration: 8,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[#c89b3c]/18 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.035),transparent_28rem)]" />
    </div>
  );
}
