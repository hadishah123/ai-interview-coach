import express from 'express'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'
import interviewRoutes from './routes/interviewRoutes.js'
import interviewAnswerRoutes from './routes/interviewAnswerRoutes.js'
import interviewResultRoutes from './routes/interviewResultRoutes.js'

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://ai-interview-coach-five.vercel.app",
    ],
    credentials: true,
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'AI Interview Coach API Running'
  })
})

app.use('/api/auth', authRoutes)

app.use('/api/resume', resumeRoutes)

app.use('/api/interview', interviewRoutes)

app.use('/api/interview-answer', interviewAnswerRoutes)

app.use('/api/interview-result', interviewResultRoutes)
export default app
