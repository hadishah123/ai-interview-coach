from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq

import os
import json
import traceback

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app = FastAPI()


# ==========================
# Request Models
# ==========================

class ResumeRequest(BaseModel):
    resume_text: str


class InterviewRequest(BaseModel):
    resume_text: str
    role: str
    level: str


# ==========================
# Root Route
# ==========================

@app.get("/")
def root():
    return {
        "message": "AI Interview Coach API is running"
    }


# ==========================
# Generate Interview
# ==========================

@app.post("/generate-interview")
async def generate_interview(data: InterviewRequest):
    try:
        prompt = f"""
You are a senior technical interviewer.

Candidate Resume:
{data.resume_text}

Target Role:
{data.role}

Experience Level:
{data.level}

Generate:

10 technical questions
3 project-based questions
2 behavioral questions

Return ONLY valid JSON.

Format:

{{
  "technical": [],
  "projects": [],
  "behavioral": []
}}
"""

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            temperature=0.7
        )

        result = (
            response
            .choices[0]
            .message
            .content
        )

        # Safety cleanup in case model returns markdown
        result = (
            result.replace("```json", "")
            .replace("```", "")
            .strip()
        )

        questions = json.loads(result)

        return questions

    except json.JSONDecodeError:
        return {
            "error": "Model returned invalid JSON",
            "raw_response": result if "result" in locals() else None
        }

    except Exception as e:
        print("INTERVIEW GENERATION ERROR:")
        traceback.print_exc()

        return {
            "error": str(e)
        }

# ==========================
# Resume Analysis
# ==========================

@app.post("/analyze-resume")
async def analyze_resume(data: ResumeRequest):
    try:
        prompt = f"""
        You are an expert ATS Resume Reviewer.

        Analyze the resume and return ONLY valid JSON.

        Rules:
        - Score must be an INTEGER from 0 to 100.
        - Use only information present in the resume.
        - Do NOT invent skills or weaknesses.
        - Do NOT list a skill as missing if it already exists.
        - Provide realistic job role recommendations.

        Return JSON in exactly this format:

        {{
            "score": 0,
            "strengths": [],
            "weaknesses": [],
            "missing_skills": [],
            "improvements": [],
            "job_roles": []
        }}

        Resume:

        {data.resume_text}
        """

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        analysis = response.choices[0].message.content

        analysis = (
            analysis.replace("```json", "")
            .replace("```", "")
            .strip()
        )

        analysis_json = json.loads(analysis)

        return {
            "analysis": analysis_json
        }

    except json.JSONDecodeError:
        return {
            "error": "Model returned invalid JSON",
            "raw_response": analysis if "analysis" in locals() else None
        }

    except Exception as e:
        print("GROQ ERROR:")
        traceback.print_exc()

        return {
            "error": str(e)
        }