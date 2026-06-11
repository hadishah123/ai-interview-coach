"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-50 px-6 text-center">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Giant Glow */}
      <div className="absolute left-1/2 top-0 h-43 w-43 -translate-x-1/2 rounded-full bg-linear-to-br from-indigo-500 to-violet-500/20 blur-[180px]" />

      {/* Neural Network */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1200 800"
      >
        {/* Connections */}
        <line
          x1="200"
          y1="250"
          x2="500"
          y2="400"
          stroke="#6366f1"
          strokeWidth="2"
        />
        <line
          x1="500"
          y1="400"
          x2="900"
          y2="250"
          stroke="#6366f1"
          strokeWidth="2"
        />
        <line
          x1="500"
          y1="400"
          x2="850"
          y2="550"
          stroke="#6366f1"
          strokeWidth="2"
        />
        <line
          x1="200"
          y1="250"
          x2="350"
          y2="550"
          stroke="#6366f1"
          strokeWidth="2"
        />

        {/* Nodes */}
        <circle cx="200" cy="250" r="12" fill="#6366f1" />
        <circle cx="500" cy="400" r="16" fill="#8b5cf6" />
        <circle cx="900" cy="250" r="12" fill="#6366f1" />
        <circle cx="850" cy="550" r="12" fill="#06b6d4" />
        <circle cx="350" cy="550" r="12" fill="#06b6d4" />
      </svg>

      {/* Resume Card */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [-12, -10, -12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-32 hidden w-60 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl lg:block"
      >
        <div className="space-y-3">
          <div className="h-4 w-28 rounded bg-indigo-200" />
          <div className="h-3 w-full rounded bg-slate-100" />
          <div className="h-3 w-5/6 rounded bg-slate-100" />
          <div className="h-3 w-full rounded bg-slate-100" />
          <div className="h-3 w-4/6 rounded bg-slate-100" />

          <div className="pt-4">
            <div className="mb-2 h-3 w-20 rounded bg-green-200" />
            <div className="h-2 w-full rounded bg-slate-100" />
            <div className="mt-2 h-2 w-4/5 rounded bg-slate-100" />
          </div>
        </div>
      </motion.div>

      {/* AI Chat Bubble */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-28 hidden max-w-xs rounded-3xl bg-white p-5 shadow-2xl lg:block"
      >
        <p className="text-sm font-medium text-slate-700">
          Tell me about yourself.
        </p>
      </motion.div>

      {/* AI Response Bubble */}
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-24 hidden max-w-sm rounded-3xl bg-indigo-600 p-5 text-white shadow-2xl lg:block"
      >
        <p className="text-sm">
          Strong answer. Try quantifying your achievements and highlighting
          measurable impact.
        </p>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold leading-tight text-slate-900 md:text-7xl"
        >
          Master Interviews with{" "}
          <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            AI-Powered Coaching
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-500"
        >
          Upload your resume, receive personalized AI feedback, and practice
          mock interviews tailored to your skills and experience.
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

          <button className="rounded-2xl border border-slate-300 px-7 py-4 text-slate-700 transition hover:bg-slate-100">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
