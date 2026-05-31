import axios from "axios";

export const generateInterviewQuestions =
  async (resumeText, role, level) => {

    const response =
      await axios.post(
        "http://127.0.0.1:8000/generate-interview",
        {
          resume_text: resumeText,
          role,
          level,
        }
      );

    return response.data;
  };