import { generateInterviewQuestions } from "../services/interviewService.js";

import { createInterviewSession } from "../services/interviewDbService.js";

import prisma from "../config/prisma.js";

export const getInterviewById = async (
  req,
  res
) => {
  try {
    const interview =
      await prisma.interview.findUnique({
        where: {
          id: req.params.id,
        },
      });

    if (!interview) {
      return res.status(404).json({
        message:
          "Interview not found",
      });
    }

    return res
      .status(200)
      .json(interview);

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message:
        "Server error",
    });
  }
};

export const generateInterview =
async (
  req,
  res
) => {
  try {

    const {
      resumeText,
      role,
      level,
    } = req.body;

    const aiResponse =
      await generateInterviewQuestions(
        resumeText,
        role,
        level
      );

    console.log(
      "AI RESPONSE:",
      aiResponse
    );

    const questions =
      aiResponse?.questions ||
      aiResponse?.interview_questions ||
      aiResponse?.data ||
      [];

    if (
      !questions ||
      questions.length === 0
    ) {
      return res
        .status(400)
        .json({
          message:
            "No interview questions generated",
        });
    }

    console.log(
      "QUESTIONS:",
      questions
    );

    const interview =
      await createInterviewSession({
        userId:
          req.userId,

        role,

        level,

        questions,
      });

    return res.status(200).json({
      interviewId:
        interview.id,

      questions,
    });

  } catch (error) {

    console.log(
      "INTERVIEW ERROR:"
    );

    console.log(
      error?.response?.data ||
      error.message
    );

    return res.status(500).json({
      message:
        "Interview generation failed",
    });
  }
};

export const getHistory =
async (
  req,
  res
) => {
  try {

    const interviews =
      await prisma.interview.findMany({
        where: {
          userId:
            req.userId,
        },

        include: {
          results: true,
        },

        orderBy: {
          createdAt:
            "desc",
        },
      });

    return res
      .status(200)
      .json(interviews);

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message:
        "Failed to fetch history",
    });
  }
};