import json
import requests
from typing import Generator

OLLAMA_URL = "http://localhost:11434"

def get_installed_model():
    try:
        response = requests.get(f"{OLLAMA_URL}/api/tags")
        if response.status_code == 200:
            models = response.json().get("models", [])
            model_names = [m["name"] for m in models]
            
            # Prioritize fast 1B models for CPU
            for fast_model in ["llama3.2:1b", "llama3.2:1b:latest", "qwen2.5:1.5b"]:
                if fast_model in model_names:
                    return fast_model
            
            if model_names:
                return model_names[0]
    except:
        pass
    return "llama3.2:1b"  # fallback

def stream_chat_response(messages: list) -> Generator[str, None, None]:
    """
    Se comunica con la API de Ollama y devuelve un generador 
    con la respuesta en streaming.
    """
    model_name = get_installed_model()
    
    payload = {
        "model": model_name,
        "messages": messages,
        "stream": True
    }
    
    try:
        with requests.post(f"{OLLAMA_URL}/api/chat", json=payload, stream=True) as response:
            if response.status_code == 404:
                yield f"Error: Modelo '{model_name}' no encontrado o no instalado. Ejecuta 'ollama run mistral' o verifica tus modelos con 'ollama list'."
                return
            response.raise_for_status()
            for line in response.iter_lines():
                if line:
                    decoded_line = line.decode('utf-8')
                    data = json.loads(decoded_line)
                    if "message" in data and "content" in data["message"]:
                        # Yield in SSE format
                        yield data["message"]["content"]
    except Exception as e:
        yield f"Error de conexión con IA Local: {str(e)}"
