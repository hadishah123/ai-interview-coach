# AI Interview Coach

An AI-powered interview preparation platform that helps users improve resumes, practice interviews, receive feedback, and track career growth.

---

## Features

### Resume Analyzer

- Upload PDF resumes
- Extract resume text automatically
- AI-powered resume evaluation
- Resume score generation
- Strengths detection
- Weakness identification
- Missing skills suggestions
- Career role recommendations

### Authentication

- JWT Authentication
- User Registration
- User Login
- Protected Routes

### AI Service

- FastAPI AI Microservice
- Groq LLM Integration
- Resume Analysis Engine

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

## Current Progress

### ✅ Completed

- Authentication System
- PostgreSQL Setup
- Prisma Models
- Resume Upload API
- PDF Parsing
- AI Resume Analysis
- Resume Analysis UI

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