"use client";

import { motion } from "framer-motion";

export function OrbitGlyph() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[360px]">
      <motion.div
        animate={{ rotate: 360 }}
        className="absolute inset-8 rounded-full border border-[#c89b3c]/30"
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        className="absolute inset-16 rounded-full border border-[#f0d492]/25"
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      />
      <div className="absolute inset-0 rotate-45 border border-[#c89b3c]/35" />
      <div className="absolute inset-14 border border-[#f0d492]/40" />
      <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center border border-[#c89b3c]/70 bg-black/60 text-center text-xs uppercase tracking-[0.28em] text-[#f0d492]">
        BaZi
      </div>
    </div>
  );
}
