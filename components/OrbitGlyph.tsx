"use client";

import { motion, useReducedMotion } from "framer-motion";

export function OrbitGlyph() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden"
    >
      <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.12),transparent_62%)]" />
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        className="absolute inset-4 rounded-full border border-[#c89b3c]/16"
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-[#f0d492] shadow-[0_0_18px_rgba(240,212,146,0.55)]" />
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { rotate: -360 }}
        className="absolute inset-12 rounded-full border border-[#f0d492]/20"
        transition={{ duration: 58, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute bottom-7 right-4 size-1.5 rounded-full bg-[#c89b3c] shadow-[0_0_16px_rgba(200,155,60,0.45)]" />
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        className="absolute inset-20 rounded-full border border-[#c89b3c]/24"
        transition={{ duration: 42, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute left-8 top-5 size-1.5 rounded-full bg-[#f0d492]/90 shadow-[0_0_14px_rgba(240,212,146,0.4)]" />
      </motion.div>
      <div className="absolute inset-0 rotate-45 border border-[#c89b3c]/24" />
      <div className="absolute inset-14 -rotate-12 border border-[#f0d492]/18" />
      <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-[#c89b3c]/35 to-transparent" />
      <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-[#c89b3c]/25 to-transparent" />
      <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center border border-[#c89b3c]/70 bg-[#050402]/80 text-center text-xs uppercase tracking-[0.32em] text-[#f0d492] shadow-[0_0_45px_rgba(200,155,60,0.18)]">
        BaZi
      </div>
    </div>
  );
}
