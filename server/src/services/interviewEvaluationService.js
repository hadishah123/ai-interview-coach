import axios from "axios";

export const evaluateInterview =
  async (
    questions,
    answers
  ) => {

    const response =
      await axios.post(
        "http://127.0.0.1:8000/evaluate-interview",
        {
          questions,
          answers,
        }
      );

    return response.data;
  };