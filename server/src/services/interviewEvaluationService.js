import axios from "axios";

export const evaluateInterview =
async (
  questions,
  answers
) => {

  const response =
    await axios.post(
      `${process.env.AI_API_URL}/evaluate-interview`,
      {
        questions,
        answers,
      }
    );

  return response.data;
};