import axios from "axios";

export const generateInterviewQuestions =
async (
  resumeText,
  role,
  level
) => {

  const response =
    await axios.post(
      `${process.env.AI_API_URL}/generate-interview`,
      {
        resume_text: resumeText,
        role,
        level,
      }
    );

  return response.data.questions;
};