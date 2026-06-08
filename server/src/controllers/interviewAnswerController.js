import prisma from "../config/prisma.js";

export const saveAnswer = async (
  req,
  res
) => {
  try {
    const {
      interviewId,
      question,
      answer,
    } = req.body;

    const saved =
      await prisma.interviewAnswer.create({
        data: {
          interviewId,
          question,
          answer,
        },
      });

    res.status(201).json(saved);
  } catch (error) {
  console.error("SAVE ANSWER ERROR:");
  console.error(error);

  res.status(500).json({
    message: error.message,
  });
}
};