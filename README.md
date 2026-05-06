#AI Portfolio Chatbot

> Asistente IA personal que corre 100% local con Ollama + Mistral 7B.
> Demuestra habilidades Full Stack: React • Python • FastAPI • Ollama.

**Sin APIs externas** | ⚡ **Respuestas en streaming** | **UI Premium**

Este proyecto es un chatbot conversacional que se alimenta de mis datos profesionales y puede responder preguntas sobre mí, mi formación, experiencia y tecnologías, como si fuera yo.

---

## Tecnologías

### Frontend
- **React + Vite**: Para una interfaz rápida y un desarrollo ágil.
- **CSS Vanilla**: Estilos personalizados, modo oscuro premium, sin depender de librerías extra.
- **Fetch API**: Lectura de streams de texto en tiempo real.

### Backend
- **Python 3.11 + FastAPI**: Servidor ligero y extremadamente rápido.
- **Ollama**: Orquestador local de Modelos de Lenguaje.
- **Mistral 7B**: Modelo de código abierto optimizado para velocidad y precisión (corre en CPU).

---

## Instalación y Uso

### 1. Prerrequisitos
- Tener [Python 3.11+](https://www.python.org/) instalado.
- Tener [Node.js](https://nodejs.org/) instalado.
- Tener [Ollama](https://ollama.ai/) instalado y corriendo en tu máquina.
- Descargar el modelo Mistral:
  ```bash
  ollama run mistral
  ```

### 2. Levantar el Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```
*(El backend correrá en http://localhost:8000)*

### 3. Levantar el Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
*(El frontend correrá en http://localhost:5173)*

---

## Funcionamiento

1. El usuario envía un mensaje a través del Frontend de React.
2. FastAPI recibe la petición y pre-conecta un contexto de sistema detallando quién soy.
3. FastAPI envía esto a la API de Ollama y devuelve una respuesta *en streaming*.
4. El Frontend lee el stream chunk por chunk, logrando un efecto visual dinámico (letra por letra).

---

**Creado por Josué Ortiz.**
