"use client";

import { useState } from "react";

import ResumeUpload from "@/components/resume/ResumeUpload";
import ResumeScoreCard from "@/components/resume/ResumeScoreCard";
import ResumeAnalysis from "@/components/resume/ResumeAnalysis";

import { uploadResume } from "@/services/resumeService";
import { ResumeAnalysisData } from "@/types/resume";
import { useRouter } from "next/navigation";

import { generateInterview } from "@/services/interviewService";

export default function ResumePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState<ResumeAnalysisData | null>(null);

  const [generating, setGenerating] = useState(false);

  const handleGenerateInterview = async () => {
    try {
      setGenerating(true);

      const resumeText = localStorage.getItem("resumeText");
      if (!resumeText) return;

      const data = await generateInterview(
        resumeText,
        "MERN Developer",
        "Intermediate",
      );

      router.push(`/interview/${data.interviewId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setGenerating(false);
    }
  };
  const handleUpload = async (file: File) => {
    try {
      setLoading(true);

      const data = await uploadResume(file);

      console.log("Analysis:", data.analysis);
      setAnalysis(data.analysis);
      localStorage.setItem("resumeText", data.extractedText);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <main className="min-h-screen bg-slate-50">
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
          📄 AI Resume Analyzer
        </div>

        <h1 className="text-4xl font-bold text-slate-900">
          Resume Analysis
        </h1>

        <p className="mt-2 text-slate-500">
          Upload your resume and receive AI-powered feedback on skills,
          formatting, ATS readiness, and improvement opportunities.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <ResumeUpload
          onUpload={handleUpload}
          loading={loading}
        />
      </div>

      {analysis && (
        <div className="mt-8 space-y-8">
          <ResumeScoreCard score={analysis.score} />

          <ResumeAnalysis data={analysis} />

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Ready for an Interview?
                </h2>

                <p className="mt-2 text-slate-500">
                  Generate a personalized interview based on your resume
                  and start practicing immediately.
                </p>
              </div>

              <button
                onClick={handleGenerateInterview}
                disabled={generating || loading}
                className="
                rounded-2xl
                bg-indigo-600
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-indigo-700
                disabled:cursor-not-allowed
                disabled:opacity-50
                "
              >
                {generating
                  ? "Generating Interview..."
                  : "Generate Interview"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </main>
);
}
