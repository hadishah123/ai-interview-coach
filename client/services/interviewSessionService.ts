import api from "@/lib/axios";

export const getInterview =
  async (id: string) => {
    const response =
      await api.get(
        `/interview/${id}`
      );

    return response.data;
  };