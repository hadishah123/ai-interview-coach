"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { getInterview } from "@/services/interviewSessionService";
import { useRouter } from "next/navigation";

import { completeInterview } from "@/services/interviewResultService";
import { saveAnswer } from "@/services/interviewAnswerService";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

type Question = {
  question: string;
  topic: string;
};

type Interview = {
  questions: {
    technical?: Question[];
    projects?: Question[];
    behavioral?: Question[];
  };
};

export default function InterviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [interview, setInterview] = useState<Interview | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleNextQuestion = async () => {
    try {
      await saveAnswer(id, allQuestions[currentQuestion].question, answer);

      setAnswers((prev) => {
        const copy = [...prev];

        copy[currentQuestion] = answer;

        return copy;
      });

      if (currentQuestion < allQuestions.length - 1) {
        const next = answers[currentQuestion + 1] || "";

        setCurrentQuestion((prev) => prev + 1);

        setAnswer(next);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion(currentQuestion - 1);
    setAnswer(answers[currentQuestion - 1] || "");
  };

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const data = await getInterview(id);
        setInterview(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInterview();
  }, [id]);

  const allQuestions = interview
    ? [
        ...(interview.questions.technical || []),
        ...(interview.questions.projects || []),
        ...(interview.questions.behavioral || []),
      ]
    : [];

  if (!interview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-600 shadow-sm">
          Loading...
        </div>
      </div>
    );
  }

  const handleCompleteInterview = async () => {
    try {
      setSubmitting(true);

      if (answer.trim()) {
        await saveAnswer(id, allQuestions[currentQuestion].question, answer);
      }

      const result = await completeInterview(id);

      router.push(`/interview/result/${result.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
              🎤 AI Interview
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Interview Session
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Answer each question carefully. Your responses will be evaluated
              by AI.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {/* Progress */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Question {currentQuestion + 1} of {allQuestions.length}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Progress through your interview session
                </p>
              </div>

              <div className="w-full md:w-52">
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / allQuestions.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-relaxed">
                {allQuestions[currentQuestion].question}
              </h2>
            </div>

            {/* Answer */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Your Answer
              </label>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write your answer..."
                className="h-48 sm:h-56 w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="
                rounded-xl
                border
                border-slate-300
                px-5 py-3
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
              >
                Previous
              </button>

              {currentQuestion === allQuestions.length - 1 ? (
                <button
                  onClick={handleCompleteInterview}
                  disabled={submitting}
                  className="
                  rounded-xl
                  bg-emerald-600
                  px-6 py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-emerald-700
                  disabled:opacity-70
                "
                >
                  {submitting ? "Evaluating..." : "Complete Interview"}
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
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
                  Next Question
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
