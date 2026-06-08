"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { getInterview } from "@/services/interviewSessionService";
import { useRouter } from "next/navigation";

import { completeInterview } from "@/services/interviewResultService";
import { saveAnswer } from "@/services/interviewAnswerService";

type Interview = {
  questions: {
    technical?: string[];
    projects?: string[];
    behavioral?: string[];
  };
};

export default function InterviewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);
  const [interview, setInterview] = useState<Interview | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const handleNextQuestion = async () => {
  try {
    await saveAnswer(
      id,
      allQuestions[currentQuestion],
      answer
    );

    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = answer;

    setAnswers(updatedAnswers);

    if (
      currentQuestion <
      allQuestions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      setAnswer(
        updatedAnswers[
          currentQuestion + 1
        ] || ""
      );
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
    return <div className="p-10">Loading...</div>;
  }

  const handleCompleteInterview = async () => {
  try {
    setSubmitting(true);

    await saveAnswer(
      id,
      allQuestions[currentQuestion],
      answer
    );

    const result =
      await completeInterview(id);

    router.push(
      `/interview/result/${result.id}`
    );
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">AI Interview Session</h1>

      <div className="rounded-xl border p-6">
        <p className="text-sm text-gray-500 mb-2">
          Question {currentQuestion + 1} of {allQuestions.length}
        </p>

        <h2 className="text-xl font-semibold mb-6">
          {allQuestions[currentQuestion]}
        </h2>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full h-40 rounded-lg border p-4"
        />
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="rounded-lg border px-5 py-2"
          >
            Previous
          </button>

          {currentQuestion === allQuestions.length - 1 ? (
            <button
              onClick={handleCompleteInterview}
              disabled={submitting}
              className="rounded-lg bg-green-500 px-5 py-2"
            >
              {submitting ? "Evaluating..." : "Complete Interview"}
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="rounded-lg bg-white px-5 py-2 text-black"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
