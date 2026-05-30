import axios from "axios";

export const uploadResume =
  async (file: File) => {
    const formData =
      new FormData();

    formData.append(
      "resume",
      file
    );

    const response =
      await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

    return response.data;
  };