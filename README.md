# AI Interview Coach

An AI-powered interview preparation platform that helps users improve resumes, practice interviews, receive feedback, and track career growth.

---

## 🚀 Features

### Authentication
- User Signup/Login
- JWT Authentication
- Protected API Routes

### Resume Analyzer
- Upload PDF Resume
- Extract Resume Text
- AI-Powered Resume Analysis
- Resume Score
- Strengths & Weaknesses Detection
- Missing Skills Suggestions
- Recommended Job Roles

### AI Interview Generator
- Generate Questions From Resume
- Technical Questions
- Behavioral Questions
- Project-Based Questions
- Role-Specific Interview Sessions

### Database
- PostgreSQL
- Prisma ORM
- Interview Session Persistence

---

## Tech Stack

### Frontend

- Next.js 16
- TypeScript
- Tailwind CSS
- Axios
- Context API

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT

### AI Service

- FastAPI
- Python
- Groq API

---

## Project Structure

```text
ai-interview-coach/
│
├── client/
├── server/
├── ai-service/
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/hadishah123/ai-interview-coach.git

cd ai-interview-coach
```

---

### Frontend

```bash
cd client

npm install

npm run dev
```

---

### Backend

```bash
cd server

npm install

npm run dev
```

---

### AI Service

```bash
cd ai-service

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
```

---

## Environment Variables

### Server

```env
PORT=

DATABASE_URL=

JWT_SECRET=
```

### AI Service

```env
GROQ_API_KEY=
```

---

## Features Implemented

### Authentication
- JWT Authentication
- Signup & Login
- Protected Routes

### AI Resume Analyzer
- PDF Upload
- Resume Parsing
- AI Analysis
- Resume Score
- Strengths & Weaknesses Detection
- Missing Skills Detection
- Job Role Recommendations

### AI Interview Generator
- Generates Technical Questions
- Generates Project-Based Questions
- Generates Behavioral Questions
- Stores Interview Sessions in PostgreSQL
- Dynamic Interview Session Routing

### Database
- PostgreSQL (Supabase)
- Prisma ORM

### 🚀 Upcoming

- Interview Session Generator
- AI Interview Questions
- Voice Interviews
- AI Feedback System
- Interview History
- Dashboard Analytics
- Admin Panel

---

## Author

**Abdul Hadi**  
MERN Stack Developer

GitHub: https://github.com/hadishah123