import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      <p className="text-gray-400 mb-10">
        Welcome back 👋
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-3">
            Resume Analyzer
          </h2>

          <p className="mb-4">
            Upload and analyze your resume.
          </p>

          <Link
            href="/resume"
            className="rounded-lg bg-white px-4 py-2 text-black"
          >
            Analyze Resume
          </Link>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-3">
            AI Interview
          </h2>

          <p className="mb-4">
            Generate a personalized interview.
          </p>

          <Link
            href="/interview"
            className="rounded-lg bg-white px-4 py-2 text-black"
          >
            Start Interview
          </Link>
        </div>
      </div>
    </div>
  );
}