"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { generateInterview } from "@/services/interviewService";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
export default function InterviewPage() {
  const router = useRouter();

  const [role, setRole] = useState("MERN Developer");
  const [level, setLevel] = useState("Intermediate");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const resumeText = localStorage.getItem("resumeText") || "";

      const data = await generateInterview(
        resumeText,
        role,
        level
      );

      router.push(`/interview/${data.interviewId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs sm:text-sm font-medium text-indigo-600">
            🎤 AI Interview Generator
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Generate Interview
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Create a personalized interview based on your target role and experience level.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">

          <div className="space-y-6">

            {/* Role Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Target Role
              </label>

              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. MERN Developer"
                className="
                  w-full
                  rounded-2xl
                  border border-slate-300
                  px-4 py-3
                  text-sm sm:text-base
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-4 focus:ring-indigo-100
                "
              />
            </div>

            {/* Level Select */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Experience Level
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="
                  w-full
                  rounded-2xl
                  border border-slate-300
                  px-4 py-3
                  text-sm sm:text-base
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-4 focus:ring-indigo-100
                "
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Info Box */}
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
              <p className="text-xs sm:text-sm text-indigo-700 leading-relaxed">
                💡 Your uploaded resume will be used to generate personalized technical,
                project-based, and behavioral interview questions.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="
                flex w-full items-center justify-center
                rounded-2xl bg-indigo-600
                px-6 py-4
                text-sm sm:text-base
                font-semibold text-white
                transition
                hover:bg-indigo-700
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {loading ? "Generating Interview..." : "Generate Interview"}
            </button>

          </div>
        </div>

      </div>
    </div>
    </ProtectedRoute>
  );
}