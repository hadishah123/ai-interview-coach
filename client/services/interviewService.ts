import api from "@/lib/axios";

export const generateInterview = async (
  resumeText: string,
  role: string,
  level: string
) => {
  const response = await api.post(
    "/interview/generate",
    {
      resumeText,
      role,
      level,
    }
  );

  return response.data;
};

export const getHistory =
async () => {

  const response =
    await api.get(
      "/interview/history"
    );

  return response.data;
};