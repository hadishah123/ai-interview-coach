"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { generateInterview } from "@/services/interviewService";

export default function InterviewPage() {
  const router = useRouter();

  const [role, setRole] =
    useState("MERN Developer");

  const [level, setLevel] =
    useState("Intermediate");

  const [loading, setLoading] =
    useState(false);

  const handleGenerate =
    async () => {
      try {
        setLoading(true);

        const resumeText =
          localStorage.getItem(
            "resumeText"
          ) || "";

        const data =
          await generateInterview(
            resumeText,
            role,
            level
          );

        router.push(
          `/interview/${data.interviewId}`
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Generate Interview
      </h1>

      <div className="space-y-4">
        <input
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="w-full border p-3 rounded"
          placeholder="Role"
        />

        <select
          value={level}
          onChange={(e) =>
            setLevel(e.target.value)
          }
          className="w-full border p-3 rounded"
        >
          <option>
            Beginner
          </option>

          <option>
            Intermediate
          </option>

          <option>
            Advanced
          </option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded"
        >
          {loading
            ? "Generating..."
            : "Generate Interview"}
        </button>
      </div>
    </div>
  );
}