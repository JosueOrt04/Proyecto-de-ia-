from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import List

from knowledge_base import SYSTEM_PROMPT
from ollama_client import stream_chat_response

app = FastAPI(title="AI Portfolio Chatbot API")

# Configurar CORS para permitir que React (Vite corre en port 5173 usualmente) se conecte
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especificar el puerto exacto
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    # Agregamos el prompt de sistema al inicio
    ollama_messages = [
        {"role": "system", "content": SYSTEM_PROMPT}
    ]
    
    # Agregamos el historial de mensajes del usuario
    for msg in request.messages:
        ollama_messages.append({"role": msg.role, "content": msg.content})

    # El generador debe devolver strings formateadas para SSE o texto plano.
    # Aquí vamos a usar texto plano (chunking regular)
    def event_stream():
        for chunk in stream_chat_response(ollama_messages):
            yield chunk

    return StreamingResponse(event_stream(), media_type="text/event-stream")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
