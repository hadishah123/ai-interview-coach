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

    const existing =
      await prisma.interviewAnswer.findFirst({
        where: {
          interviewId,
          question,
        },
      });

    let saved;

    if (existing) {
      saved =
        await prisma.interviewAnswer.update({
          where: {
            id: existing.id,
          },

          data: {
            answer,
          },
        });
    } else {
      saved =
        await prisma.interviewAnswer.create({
          data: {
            interviewId,
            question,
            answer,
          },
        });
    }

    return res
      .status(200)
      .json(saved);

  } catch (error) {

    console.error(
      "SAVE ANSWER ERROR:"
    );

    console.error(error);

    return res.status(500).json({
      message:
        error.message,
    });
  }
};