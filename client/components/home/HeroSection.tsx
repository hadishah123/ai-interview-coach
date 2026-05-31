"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f1f1f,transparent_60%)]" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl"
      >
        Master Interviews with
        <span className="bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
          {" "}AI-Powered Coaching
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8 max-w-2xl text-lg text-gray-400"
      >
        Upload your resume, receive personalized AI feedback,
        and practice mock interviews tailored to your skills
        and experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex gap-4"
      >
        <Link
  href="/resume"
  className="rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
>
  Start Free
</Link>

        <button className="rounded-2xl border border-white/10 px-7 py-4 transition hover:bg-white/5">
          Watch Demo
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;