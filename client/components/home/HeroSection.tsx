"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-slate-50 px-6 text-center overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold leading-tight text-slate-900 md:text-7xl"
        >
          Master Interviews with{" "}
          <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            AI-Powered Coaching
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-500"
        >
          Upload your resume, receive personalized AI feedback, and practice mock
          interviews tailored to your skills and experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/dashboard"
            className="rounded-2xl bg-indigo-600 px-7 py-4 font-semibold text-white transition hover:bg-indigo-700"
          >
            Start Free
          </Link>

          <button className="rounded-2xl border border-slate-300 px-7 py-4 text-slate-700 hover:bg-slate-100 transition">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;