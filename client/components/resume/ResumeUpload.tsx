"use client";

import { useState } from "react";

type Props = {
  onUpload: (file: File) => void;
  loading: boolean;
};

export default function ResumeUpload({
  onUpload,
  loading,
}: Props) {
  const [fileName, setFileName] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    onUpload(file);
  };

  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleChange}
        disabled={loading}
      />

      {fileName && (
        <p className="mt-3 text-sm text-gray-600">
          Selected: {fileName}
        </p>
      )}

      {loading && (
        <p className="mt-3">
          Analyzing resume...
        </p>
      )}
    </div>
  );
}