type Props = {
  score: number;
};

export default function ResumeScoreCard({ score }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Resume Score</h2>

          <p className="mt-1 text-sm text-slate-500">
            AI-generated evaluation of your resume quality
          </p>
        </div>

        <div
          className={`
          text-4xl font-bold
          ${
            score >= 80
              ? "text-emerald-600"
              : score >= 60
                ? "text-amber-500"
                : "text-red-500"
          }
        `}
        >
          {score}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`
          h-full rounded-full transition-all duration-500
          ${
            score >= 80
              ? "bg-emerald-500"
              : score >= 60
                ? "bg-amber-500"
                : "bg-red-500"
          }
        `}
          style={{ width: `${score}%` }}
        />
      </div>

      {/* Label */}
      <div className="mt-3 flex justify-between text-xs text-slate-500">
        <span>Poor</span>
        <span>Average</span>
        <span>Excellent</span>
      </div>
    </div>
  );
}
