import api from "@/lib/axios";

export const uploadResume = async (
  formData: FormData
) => {
  const response =
    await api.post(
      "/resume/upload",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return response.data;
};