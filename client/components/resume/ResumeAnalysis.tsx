type Props = {
  data: {
    score: number;
    strengths: string[];
    weaknesses: string[];
    missing_skills: string[];
    improvements: string[];
    job_roles: string[];
  };
};

export default function ResumeAnalysis({
  data,
}: Props) {
  return (
  <div className="space-y-6">

    {/* Top Grid */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Strengths */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          💪 Strengths
        </h3>

        {data.strengths.length > 0 ? (
          <div className="space-y-2">
            {data.strengths.map((item, index) => (
              <p
                key={`strength-${index}`}
                className="flex items-start gap-2 text-slate-700"
              >
                <span className="text-emerald-500">✓</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">No strengths found</p>
        )}
      </div>

      {/* Weaknesses */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          ⚠️ Weaknesses
        </h3>

        {data.weaknesses.length > 0 ? (
          <div className="space-y-2">
            {data.weaknesses.map((item, index) => (
              <p
                key={`weakness-${index}`}
                className="flex items-start gap-2 text-slate-700"
              >
                <span className="text-amber-500">•</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">No weaknesses found</p>
        )}
      </div>
    </div>

    {/* Middle Grid */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Missing Skills */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          🧠 Missing Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.missing_skills.length > 0 ? (
            data.missing_skills.map((skill, index) => (
              <span
                key={`skill-${index}`}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-slate-500">No missing skills</p>
          )}
        </div>
      </div>

      {/* Recommended Roles */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          🎯 Recommended Roles
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.job_roles.length > 0 ? (
            data.job_roles.map((role, index) => (
              <span
                key={`role-${index}`}
                className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
              >
                {role}
              </span>
            ))
          ) : (
            <p className="text-slate-500">No recommendations</p>
          )}
        </div>
      </div>
    </div>

    {/* Improvements (Full width) */}
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        🚀 Improvements
      </h3>

      {data.improvements.length > 0 ? (
        <div className="space-y-2">
          {data.improvements.map((item, index) => (
            <p
              key={`improvement-${index}`}
              className="flex items-start gap-2 text-slate-700"
            >
              <span className="text-indigo-500">→</span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No improvements suggested</p>
      )}
    </div>

  </div>
);
}