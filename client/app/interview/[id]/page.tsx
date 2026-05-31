"use client";

import {
  useEffect,
  useState,
} from "react";
import { use } from "react";
import {
  getInterview,
} from "@/services/interviewSessionService";

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
  const [interview, setInterview] =
    useState<Interview | null>(null);

  useEffect(() => {
    const fetchInterview =
      async () => {
        try {
          const data =
            await getInterview(
              id
            );

          setInterview(data);
        } catch (error) {
          console.log(error);
        }
      };

    fetchInterview();
  }, [id]);

  if (!interview) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        AI Interview Session
      </h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Technical Questions
          </h2>

          {interview.questions.technical?.map(
            (
              question: string,
              index: number
            ) => (
              <div
                key={index}
                className="mb-3 rounded-lg border p-4"
              >
                {question}
              </div>
            )
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Project Questions
          </h2>

          {interview.questions.projects?.map(
            (
              question: string,
              index: number
            ) => (
              <div
                key={index}
                className="mb-3 rounded-lg border p-4"
              >
                {question}
              </div>
            )
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Behavioral Questions
          </h2>

          {interview.questions.behavioral?.map(
            (
              question: string,
              index: number
            ) => (
              <div
                key={index}
                className="mb-3 rounded-lg border p-4"
              >
                {question}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}