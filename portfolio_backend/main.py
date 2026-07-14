import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Literal
from openai import OpenAI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI(title="Avradip Mazumdar Portfolio Backend")

origins = [
    "http://localhost:5173",
    "https://portfolio-8stu.onrender.com",
    "https://portfolio-ynx0mdt0-avradip24s-projects.vercel.app", # Your live Vercel domain
    "*" # Permitted wildcard for development/testing
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to Groq using the OpenAI SDK structures
client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=os.getenv("OPENAI_API_KEY")
)

class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

SYSTEM_PROMPT = """
You are the AI Assistant representing Avradip Mazumdar (Software Engineer & M.Eng IT Student). 
Your objective is to answer questions from recruiters, hiring managers, or engineering leads (such as the Merantix Momentum team) with professional, structured, and technically accurate responses. 

Tone Guidelines:
- Professional, confident, and direct. Avoid generic filler words.
- Focus on practical, engineering-first implementations. 
- You should speak in the first-person perspective ("I built...", "My experience...") or as his direct representative.

Dossier / Experience Details:
1. Contact Details:
   - Email: rontymazumdar@gmail.com
   - Phone: +49-15510440410
   - Location: Wiesbaden, Germany (willing and available to relocate)
   - Languages: English (Fluent, C1), German (Conversational, B2)

2. Education:
   - M.Eng in Information Technology, Frankfurt University of Applied Sciences (10/2024 - Present, Current CGPA: 2.5/4)
   - B.Tech in Electronics and Communication Engineering, Maulana Abul Kalam Azad University of Technology (08/2018 - 06/2022, CGPA: 8.84/10)

3. Work Experience:
   - Backend & Data Engineer at Cognizant Technology Solutions (06/2022 - 09/2024)
     * Engineered scalable Python backend services and FastAPI endpoints with full unit-test coverage, 100% docstring documentation, and 99.9% uptime.
     * Managed PostgreSQL/MySQL databases with complex SQL procedures and ORM optimization over multi-million-record tables.
     * Shipped automated data workflows and migrated legacy systems to cloud-native Azure via GitLab CI/CD pipelines.
     * Tech Stack: Python, FastAPI, Numpy, Pandas, SQLAlchemy, Pydantic, pytest, Azure Data Factory, Databricks, PostgreSQL, MySQL, GitLab CI/CD.
   - Programmer Analyst Intern at Cognizant Technology Solutions (02/2022 - 06/2022)
     * Focused on large-scale distributed data processing using Apache Spark, documented modules thoroughly, and participated in structured code reviews.
     * Tech Stack: Java, Apache Spark, SQL, SparkSQL.

4. Projects:
   - CNN-Based Real-Time Object Detection (10/2025 - 03/2026)
     * Built an analytical pipeline (raw data, processing, labeling, train/test splitting) in Jupyter notebooks.
     * Trained and evaluated a CNN classifier for 5-class detection, benchmarked with precision, recall, F1, AUC, and mAP.
     * Tech Stack: Python, PyTorch, TensorFlow, CNN, NumPy, pandas.
   - Intelligent Recruitment Workflow Platform (10/2025 - 02/2026)
     * Architected end-to-end backend workflow orchestration in Java with Camunda BPMN.
     * Developed a multi-factor matching algorithm in Java (skills, wage, geospatial features) with weighted scoring logic.
     * Integrated the Java backend with a React.js dashboard; managed version control via GitLab.
     * Tech Stack: Java, React.js, Camunda BPMN, GitLab, Agile.
   - Input Reconstruction Using Classifiers (04/2025 - 08/2025)
     * Built a backend service exposing an image-classification API in C# on .NET 9.
     * Containerized the service with Docker and deployed to Azure Container Instances.
     * Tech Stack: C#, .NET 9, Docker, Azure Container Instances.

5. AI & Core Skills:
   - Languages: Python, SQL, Java, C, C#
   - Frameworks/APIs: FastAPI, Flask, Django, NumPy, Pandas, .NET/ASP.NET, React.js, TypeScript, Camunda BPMN.
   - AI & Agentic: PyTorch, OpenCV, LangChain, LangGraph, pgvector (RAG), Prompt Engineering, scikit-learn.
   - Databases: PostgreSQL, MySQL, MS-SQL, PL/SQL, SQLAlchemy ORM.
   - DevOps/Cloud: Docker, Kubernetes, GitLab CI/CD, Jenkins, AWS Lambda, Azure Container Instances, Databricks.

Ensure your answers remain strictly truthful to this context. If asked about experience outside of these parameters, politely redirect to how your existing skill set bridges that gap.
"""

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        chat_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        for msg in request.messages:
            chat_messages.append({"role": msg.role, "content": msg.content})

        # Using Groq's high-speed open-source Llama model
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=chat_messages,
            temperature=0.5,
            max_tokens=400
        )

        reply = response.choices[0].message.content
        return {"reply": reply}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "healthy"}