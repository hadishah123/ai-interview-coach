import api from "@/lib/axios";

export const completeInterview =
  async (interviewId: string) => {
    const response =
      await api.post(
        "/interview-result/complete",
        {
          interviewId,
        }
      );

    return response.data;
  };

export const getInterviewResult =
  async (id: string) => {
    const response =
      await api.get(
        `/interview-result/${id}`
      );

    return response.data;
  };