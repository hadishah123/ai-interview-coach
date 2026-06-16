import axios from "axios";

export const evaluateInterview = async (
  questions,
  answers,
  role,
  level
) => {

  const response =
    await axios.post(
      `${process.env.AI_API_URL}/evaluate-interview`,
      {
        questions,
        answers,
        role,
        level
      }
    );

  return response.data;
};