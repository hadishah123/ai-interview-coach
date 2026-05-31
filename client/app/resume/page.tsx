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
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">AI Resume Analyzer</h1>

      <ResumeUpload onUpload={handleUpload} loading={loading} />

      {analysis && (
        <div className="mt-8 space-y-8">
          <ResumeScoreCard score={analysis.score} />

          <>
            <ResumeAnalysis data={analysis} />
            <button
              onClick={handleGenerateInterview}
              disabled={generating || loading}
              className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 disabled:bg-gray-400  transition  disabled:transition-none  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-400        "
            >
              {generating ? "Generating..." : "Generate Interview"}
            </button>{" "}
          </>
        </div>
      )}
    </main>
  );
}
