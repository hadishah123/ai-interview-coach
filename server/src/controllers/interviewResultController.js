import prisma from '../config/prisma.js'

import { evaluateInterview } from '../services/interviewEvaluationService.js'

export const getInterviewResult = async (req, res) => {
  try {
    const result = await prisma.interviewResult.findUnique({
      where: {
        id: req.params.id
      }
    })

    if (!result) {
      return res.status(404).json({
        message: 'Result not found'
      })
    }

    res.status(200).json(result)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Server error'
    })
  }
}

export const completeInterview = async (req, res) => {
  try {
    const { interviewId } = req.body

    const interview = await prisma.interview.findUnique({
      where: {
        id: interviewId
      }
    })

    if (!interview) {
      return res.status(404).json({
        message: 'Interview not found'
      })
    }

    const answers = await prisma.interviewAnswer.findMany({
      where: {
        interviewId
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    console.log('RAW ANSWERS:')
    console.log(answers)

    const answerTexts = answers
      .map(item => item.answer)
      .filter(answer => answer && answer.trim() !== '')

    const questions = Object.values(interview.questions).flat()
    console.log('QUESTIONS:')
    console.log(questions)

    console.log('ANSWERS:')
    console.log(answerTexts)
    const result = await evaluateInterview(questions, answerTexts)

    // AI evaluation failed
    if (result.error) {
      return res.status(400).json({
        message: result.error
      })
    }

    const savedResult = await prisma.interviewResult.create({
      data: {
        interviewId,

        score: result.score || 0,

        feedback: result
      }
    })

    res.status(200).json(savedResult)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Interview evaluation failed'
    })
  }
}
