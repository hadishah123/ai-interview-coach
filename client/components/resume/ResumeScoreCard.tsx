type Props = {
  score: number;
};

export default function ResumeScoreCard({
  score,
}: Props) {
  const scoreColor =
    score >= 80
      ? "text-green-600"
      : score >= 60
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white">
      <h2 className="text-xl font-semibold">
        Resume Score
      </h2>

      <div
        className={`text-6xl font-bold mt-4 ${scoreColor}`}
      >
        {score}
      </div>

      <p className="text-sm text-gray-500 mt-2">
        AI-generated evaluation
      </p>
    </div>
  );
}