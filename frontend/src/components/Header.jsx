import React from 'react';

export default function Header() {
  return (
    <div className="sidebar">
      <div className="avatar-container">
        <div className="avatar-glow"></div>
        <div className="avatar">✨</div>
      </div>
      
      <div className="profile-info">
        <h1 className="profile-name">Josué Ortiz</h1>
        <p className="profile-role">Software Developer</p>
        <p className="profile-desc">
          ¡Hola! Soy tu asistente IA personal impulsado por tecnología local. Pregúntame sobre proyectos, experiencia o habilidades de Josué.
        </p>
        
        <div className="badges-title">Stack Tecnológico</div>
        <div className="badges-container">
          <span className="badge">React</span>
          <span className="badge">Python</span>
          <span className="badge">FastAPI</span>
          <span className="badge">Ollama</span>
          <span className="badge">Go</span>
        </div>
      </div>
    </div>
  );
}
