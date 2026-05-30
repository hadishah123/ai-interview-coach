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

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">
            Strengths
          </h3>

          {data.strengths.length > 0 ? (
            data.strengths.map(
              (item, index) => (
                <p
                  key={`strength-${index}`}
                  className="mb-2"
                >
                  ✅ {item}
                </p>
              )
            )
          ) : (
            <p>No strengths found</p>
          )}
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">
            Weaknesses
          </h3>

          {data.weaknesses.length > 0 ? (
            data.weaknesses.map(
              (item, index) => (
                <p
                  key={`weakness-${index}`}
                  className="mb-2"
                >
                  ⚠️ {item}
                </p>
              )
            )
          ) : (
            <p>No weaknesses found</p>
          )}
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {data.missing_skills.map(
              (skill, index) => (
                <span
                  key={`skill-${index}`}
                  className="border rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">
            Recommended Roles
          </h3>

          <div className="flex flex-wrap gap-2">
            {data.job_roles.map(
              (role, index) => (
                <span
                  key={`role-${index}`}
                  className="border rounded-full px-3 py-1"
                >
                  {role}
                </span>
              )
            )}
          </div>
        </div>

      </div>

      <div className="border rounded-xl p-5">
        <h3 className="font-bold mb-4">
          Improvements
        </h3>

        {data.improvements.map(
          (item, index) => (
            <p
              key={`improvement-${index}`}
              className="mb-2"
            >
              🚀 {item}
            </p>
          )
        )}
      </div>

    </div>
  );
}