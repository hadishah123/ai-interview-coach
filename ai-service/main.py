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


class ResumeRequest(BaseModel):
    resume_text: str


@app.get("/")
def root():
    return {
        "message": "AI Service Running"
    }


@app.post("/analyze-resume")
async def analyze_resume(data: ResumeRequest):
    try:
        prompt = f"""
            You are an expert ATS Resume Reviewer.

            Analyze the resume and return ONLY valid JSON.

            Rules:
            - Score must be an INTEGER from 0 to 100.
            - 0 = very poor resume.
            - 100 = exceptional resume.
            - Use only information present in the resume.
            - Do NOT invent skills or weaknesses.
            - Do NOT list a skill as missing if it already exists in the resume.
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

        # Remove markdown if model wraps JSON
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
            "raw_response": analysis if 'analysis' in locals() else None
        }

    except Exception as e:
        print("GROQ ERROR:")
        traceback.print_exc()

        return {
            "error": str(e)
        }