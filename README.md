# AI Interview Coach

An AI-powered platform that helps users improve resumes and practice personalized mock interviews using advanced AI.

---

## Features

- AI Resume Analysis
- ATS Resume Scoring
- Personalized Interview Questions
- Real-Time Mock Interviews
- Interview Feedback & Scoring
- Resume History Tracking
- Authentication System
- Voice Interview Simulation (Planned)

---

## Tech Stack

### Frontend
- Next.js
- Tailwind CSS
- Framer Motion
- shadcn/ui

### Backend
- Node.js
- Express.js

### AI Service
- FastAPI
- OpenAI API

### Database
- PostgreSQL

---

## Project Structure

```txt
ai-interview-coach/
│
├── client/       # Frontend (Next.js)
├── server/       # Backend API (Express)
├── ai-service/   # AI Microservice (FastAPI)
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/hadishah123/ai-interview-coach.git
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

### AI Service Setup

```bash
cd ai-service

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt
```

---

## Environment Variables

Create `.env` files inside:

- `server/`
- `ai-service/`

Example:

```env
PORT=5000
JWT_SECRET=your_secret
DATABASE_URL=your_database_url
OPENAI_API_KEY=your_api_key
```

---

## Current Status

🚧 Under Development

---

## Future Improvements

- Voice AI Interviews
- AI Career Roadmaps
- Webcam Emotion Analysis
- Company-Specific Interview Prep
- Real-Time AI Coaching

---

## Author

Built by Hadi Shah