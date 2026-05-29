"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: index % 5 === 0 ? 2 : 1,
  delay: (index % 9) * 0.35
}));

export function StarfieldBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,212,146,0.08),transparent_36rem)]" />
      {stars.map((star) => (
        <motion.span
          animate={{ opacity: [0.18, 0.95, 0.18], scale: [1, 1.7, 1] }}
          className="absolute rounded-full bg-[#f0d492]"
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size
          }}
          transition={{
            duration: 4,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[#c89b3c]/25 to-transparent" />
    </div>
  );
}
