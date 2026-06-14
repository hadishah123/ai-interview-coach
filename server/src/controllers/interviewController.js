import { generateInterviewQuestions } from '../services/interviewService.js'

import { createInterviewSession } from '../services/interviewDbService.js'
import prisma from "../config/prisma.js";

export const getInterviewById =
  async (req, res) => {
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

      res.status(200).json(
        interview
      );
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          "Server error",
      });
    }
  };
export const generateInterview = async (req, res) => {
  try {
    const { resumeText, role, level } = req.body

    const questions = await generateInterviewQuestions(resumeText, role, level)

    const interview = await createInterviewSession({
      userId: req.userId,
      role,
      level,
      questions
    })

    res.status(200).json({
      interviewId: interview.id,

      questions
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Interview generation failed'
    })
  }
}


export const getHistory =
async (req, res) => {
  try {

    const interviews =
      await prisma.interview.findMany({
        where: {
          userId: req.userId,
        },

        include: {
          results: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    res.status(200).json(
      interviews
    );

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch history",
    });
  }
};