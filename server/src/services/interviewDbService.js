import prisma from "../config/prisma.js";

export const createInterviewSession =
  async ({
    userId,
    role,
    level,
    questions,
  }) => {

    const interview =
      await prisma.interview.create({
        data: {
          userId,
          role,
          level,
          questions,
        },
      });

    return interview;
  };