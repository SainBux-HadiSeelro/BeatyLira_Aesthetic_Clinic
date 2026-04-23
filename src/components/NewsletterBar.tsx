"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-rose-gold py-5">
      <div className="container-lira">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-3"
            >
              <CheckCircle size={16} className="text-ivory" />
              <p className="font-dm text-xs tracking-[0.2em] uppercase text-ivory">
                Thank you — you&apos;re on the list
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              {/* Label */}
              <p className="font-cormorant text-lg italic text-ivory/90 shrink-0 hidden sm:block">
                Join the BeautyLira Circle — exclusive offers &amp; insights
              </p>
              <p className="font-cormorant text-base italic text-ivory/90 sm:hidden text-center">
                Join our exclusive circle
              </p>

              {/* Input + button */}
              <div className="flex w-full sm:w-auto items-center gap-0 max-w-md sm:max-w-xs lg:max-w-sm w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white/15 border border-white/30 text-ivory placeholder:text-white/50 font-dm text-xs tracking-wider px-4 py-3 outline-none focus:border-white/70 transition-colors duration-200 min-w-0"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-espresso text-ivory font-dm text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-espresso-light transition-colors duration-300 shrink-0 disabled:opacity-50"
                >
                  {loading ? "..." : <ArrowRight size={14} />}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
