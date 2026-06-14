"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">

          {/* Header */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-indigo-600">
                AI Interview Coach
              </p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Welcome back 👋
              </h1>

              <p className="mt-3 text-base text-slate-600">
                Continue improving your interview performance with AI-powered feedback.
              </p>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Your personal career coach is ready.
              </p>
            </div>

            <div className="hidden md:flex">
              <div className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700">
                ● AI Active Session
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Resume */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-4 text-4xl">📄</div>

              <h2 className="mb-2 text-xl font-semibold text-slate-900">
                Resume Intelligence
              </h2>

              <p className="mb-6 text-sm text-slate-600">
                Get AI feedback on your resume.
              </p>

              <Link
                href="/resume"
                className="inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Analyze My Resume →
              </Link>
            </div>

            {/* Interview */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-4 text-4xl">🎤</div>

              <h2 className="mb-2 text-xl font-semibold text-slate-900">
                Mock Interview Coach
              </h2>

              <p className="mb-6 text-sm text-slate-600">
                Practice AI interview questions.
              </p>

              <Link
                href="/interview"
                className="inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Start Mock Interview →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}