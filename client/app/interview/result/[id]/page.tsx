"use client";

import { use, useEffect, useState } from "react";

import { getInterviewResult } from "@/services/interviewResultService";

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
  params: Promise<{
    id: string;
  }>;
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
    return <div className="p-10">Loading...</div>;
  }

  const feedback = result.feedback;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">Interview Result</h1>

      <div className="rounded-xl border p-6 mb-6">
        <h2 className="text-3xl font-bold">Score: {result.score}/100</h2>
      </div>

      <div className="rounded-xl border p-6 mb-6">
        <h3 className="font-bold mb-4">Strengths</h3>

        {feedback.strengths?.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </div>

      <div className="rounded-xl border p-6 mb-6">
        <h3 className="font-bold mb-4">Improvements</h3>

        {feedback.improvements?.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="font-bold mb-4">Technical Feedback</h3>

        <p>{feedback.technical_feedback}</p>
      </div>
    </div>
  );
}
