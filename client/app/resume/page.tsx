"use client";

import { useState } from "react";

import ResumeUpload from "@/components/resume/ResumeUpload";
import ResumeScoreCard from "@/components/resume/ResumeScoreCard";
import ResumeAnalysis from "@/components/resume/ResumeAnalysis";

import { uploadResume } from "@/services/resumeService";
import { ResumeAnalysisData } from "@/types/resume";

export default function ResumePage() {
  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState<ResumeAnalysisData | null>(null);

  const handleUpload = async (
    file: File
  ) => {
    try {
      setLoading(true);

      const data =
        await uploadResume(file);

      setAnalysis(
        data.analysis
      );
    console.log("Analysis:", analysis);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI Resume Analyzer
      </h1>

      <ResumeUpload
        onUpload={handleUpload}
        loading={loading}
      />

      {analysis && (
        <div className="mt-8 space-y-8">

          <ResumeScoreCard
            score={
              analysis.score
            }
          />

          <ResumeAnalysis
            data={analysis}
          />

        </div>
      )}

    </main>
  );
}