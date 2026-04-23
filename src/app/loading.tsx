"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-6"
      >
        {/* Brand mark */}
        <div className="flex flex-col items-center leading-none">
          <span className="font-cormorant text-4xl font-light tracking-[0.05em] text-espresso">
            Beauty<span className="font-medium">Lira</span>
          </span>
          <span className="font-dm text-[9px] tracking-[0.35em] uppercase text-warm-gray mt-1">
            Luxury Aesthetic Clinic
          </span>
        </div>

        {/* Animated line */}
        <div className="relative w-32 h-px bg-ivory-dark overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-rose-gold"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
            }}
            style={{ width: "50%" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
