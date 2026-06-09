"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
type Props = {
  onUpload: (file: File) => void;
  loading: boolean;
};

export default function ResumeUpload({
  onUpload,
  loading,
}: Props) {
  const [fileName, setFileName] = useState("");
  const [showArrow, setShowArrow] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    onUpload(file);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ProtectedRoute>
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <h2 className="text-lg font-semibold text-slate-900">
        Upload Resume
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Upload your resume in PDF format to get AI-powered analysis.
      </p>

      {/* Upload Box */}
      <div className="mt-6">
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center transition hover:border-indigo-400 hover:bg-indigo-50">

          <input
            type="file"
            accept=".pdf"
            onChange={handleChange}
            disabled={loading}
            className="hidden"
          />

          <div className="text-4xl">📄</div>

          <p className="mt-3 text-sm font-medium text-slate-700">
            Click to upload or drag & drop
          </p>

          <p className="mt-1 text-xs text-slate-500">
            PDF only (max recommended size: 5MB)
          </p>
        </label>

        {/* Selected file */}
        {fileName && (
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
            <span className="font-medium text-slate-900">Selected:</span>{" "}
            {fileName}
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="mt-4 flex items-center gap-2 text-sm text-indigo-600">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
            Analyzing resume...
          </div>
        )}
      </div>

      {/* Floating scroll hint arrow */}
      {!loading && fileName && showArrow && (
        <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md">
            <svg
              className="h-5 w-5 text-indigo-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      )}

    </div>
    </ProtectedRoute>
  );
}