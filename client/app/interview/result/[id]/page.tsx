"use client";

import { use, useEffect, useState } from "react";
import { getInterviewResult } from "@/services/interviewResultService";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

type interviewResult = {
  score: number;
  feedback: {
    strengths?: string[];
    improvements?: string[];
    technical_feedback: string;
  };
};

export default function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [result, setResult] = useState<interviewResult | null>(null);

  useEffect(() => {
    const fetchResult = async () => {
      const data = await getInterviewResult(id);
      setResult(data);
    };

    fetchResult();
  }, [id]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm text-slate-600">
          Loading...
        </div>
      </div>
    );
  }

  const feedback = result.feedback;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
          {/* Header */}
          <div className="mb-10">
            <div className="mb-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
              ✅ Interview Complete
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Interview Results
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Here&apos;s your AI-generated interview evaluation and feedback.
            </p>
          </div>

          {/* Score Card */}
          <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <p className="mb-2 text-xs sm:text-sm font-medium uppercase tracking-wide text-slate-500">
                Overall Score
              </p>

              <div className="mb-2 text-5xl sm:text-7xl font-bold text-indigo-600">
                {result.score}
              </div>

              <div className="text-slate-500 text-sm sm:text-base">
                out of 100
              </div>

              <div className="mt-6 h-3 w-full max-w-md overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${result.score}%` }}
                />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Strengths */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl">💪</span>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Strengths
                </h2>
              </div>

              <ul className="space-y-3">
                {feedback.strengths?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 text-sm sm:text-base"
                  >
                    <span className="mt-1 text-emerald-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl">📈</span>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Areas for Improvement
                </h2>
              </div>

              <ul className="space-y-3">
                {feedback.improvements?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 text-sm sm:text-base"
                  >
                    <span className="mt-1 text-indigo-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">🧠</span>

              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                Technical Assessment
              </h2>
            </div>

            <p className="leading-7 text-sm sm:text-base text-slate-600">
              {feedback.technical_feedback}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => window.location.reload()}
              className="
              rounded-xl
              border border-slate-300
              px-6 py-3
              font-medium
              text-slate-700
              transition
              hover:bg-slate-100
            "
            >
              Review Again
            </button>

            <button
              onClick={() => (window.location.href = "/interview")}
              className="
              rounded-xl
              bg-indigo-600
              px-6 py-3
              font-medium
              text-white
              transition
              hover:bg-indigo-700
            "
            >
              Start New Interview
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
