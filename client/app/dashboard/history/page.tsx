"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  getHistory,
} from "@/services/interviewService";

type InterviewResult = {
  id: string;
  score: number;
};

type Interview = {
  id: string;
  role: string;
  level: string;

  results: InterviewResult[];
};

export default function HistoryPage() {
  const [
    interviews,
    setInterviews,
  ] =
    useState<Interview[]>([]);

  useEffect(() => {
    getHistory()
      .then(setInterviews);
  }, []);

  return (
    <div className="mx-auto max-w-6xl p-8">

      <h1 className="mb-8 text-4xl font-bold">
        Interview History
      </h1>

      <div className="grid gap-5">

        {interviews.map(
          (item) => (
            <div
              key={item.id}
              className="
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
              "
            >
              <h2 className="font-bold">
                {item.role}
              </h2>

              <p>
                {item.level}
              </p>

              {item.results[0] && (
                <>
                  <p>
                    Score:
                    {" "}
                    {
                      item
                        .results[0]
                        .score
                    }
                    /100
                  </p>

                  <Link
                    href={`/interview/result/${item.results[0].id}`}
                    className="
                    text-indigo-600
                    "
                  >
                    View Result
                  </Link>
                </>
              )}

            </div>
          )
        )}

      </div>

    </div>
  );
}