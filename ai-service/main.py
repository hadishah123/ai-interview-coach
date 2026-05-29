from fastapi import FastAPI
from pydantic import BaseModel

from dotenv import load_dotenv

from groq import Groq

import os

load_dotenv()

client = Groq(
    api_key=os.getenv(
        "GROQ_API_KEY"
    )
)

app = FastAPI()


class ResumeRequest(BaseModel):
    resume_text: str


@app.get("/")
def root():
    return {
        "message":
        "AI Service Running"
    }


@app.post("/analyze-resume")
async def analyze_resume(
    data: ResumeRequest
):
    try:
        prompt = f"""
You are an expert AI resume reviewer.

Analyze this resume and provide:

1. Resume score out of 100
2. Strengths
3. Weaknesses
4. Missing skills
5. Suggested improvements
6. Best suited job roles

Resume:
{data.resume_text}
"""

        response = (
            client.chat.completions.create(
                model=
                "llama-3.1-8b-instant",

                messages=[
                    {
                        "role":
                        "user",

                        "content":
                        prompt
                    }
                ]
            )
        )

        analysis = (
            response
            .choices[0]
            .message
            .content
        )

        return {
            "analysis":
            analysis
        }

    except Exception as e:
        import traceback

        print(
            "GROQ ERROR:"
        )

        traceback.print_exc()

        return {
            "error":
            str(e)
        }