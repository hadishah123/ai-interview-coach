"use client";

import useProtectedRoute from "@/hooks/useProtectedRoute";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/store/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
export default function DashboardPage() {
  const router = useRouter();

  const { logout } = useAuth();
  const { loading } = useProtectedRoute();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Dashboard
              </h1>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Manage your resume reviews and interview sessions.
              </p>

              <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                Welcome back 👋
              </p>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => {
                logout();
                router.push("/login");
              }}
              className="
              inline-flex
              w-full
              md:w-auto
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-300
              bg-white
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-700
              shadow-sm
              transition
              hover:bg-slate-100
            "
            >
              🚪 Logout
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Resume Analyzer */}
            <div
              className="
              rounded-3xl
              border border-slate-200
              bg-white
              p-6 sm:p-8
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-md
            "
            >
              <div className="mb-4 text-3xl sm:text-4xl">📄</div>

              <h2 className="mb-3 text-lg font-semibold text-slate-900 sm:text-xl">
                Resume Analyzer
              </h2>

              <p className="mb-6 text-sm text-slate-500 sm:text-base">
                Upload your resume and receive AI-powered feedback on skills,
                formatting, and improvements.
              </p>

              <Link
                href="/resume"
                className="
                inline-flex
                w-full
                sm:w-auto
                items-center
                justify-center
                rounded-xl
                bg-indigo-600
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-indigo-700
              "
              >
                Analyze Resume
              </Link>
            </div>

            {/* AI Interview */}
            <div
              className="
              rounded-3xl
              border border-slate-200
              bg-white
              p-6 sm:p-8
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-md
            "
            >
              <div className="mb-4 text-3xl sm:text-4xl">🎤</div>

              <h2 className="mb-3 text-lg font-semibold text-slate-900 sm:text-xl">
                AI Interview
              </h2>

              <p className="mb-6 text-sm text-slate-500 sm:text-base">
                Generate personalized interview questions and receive detailed
                AI evaluation.
              </p>

              <Link
                href="/interview"
                className="
                inline-flex
                w-full
                sm:w-auto
                items-center
                justify-center
                rounded-xl
                bg-indigo-600
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-indigo-700
              "
              >
                Start Interview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
