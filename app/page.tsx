"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
      >
        MetaSiteAI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8"
      >
        Building premium, AI-powered websites for modern businesses.
      </motion.p>

      <motion.a
        href="/contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
      >
        Get Started
      </motion.a>
    </section>
  );
}
<div className="text-red-500 font-bold">Tailwind OK</div>
