import api from "@/lib/axios";

export const saveAnswer = async (
  interviewId: string,
  question: string,
  answer: string
) => {
  const response = await api.post(
    "/interview-answer/save",
    {
      interviewId,
      question,
      answer,
    }
  );

  return response.data;
};