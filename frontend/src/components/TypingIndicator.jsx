import React from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: '1.5rem',
    animation: 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  bubbleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  label: {
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
    marginLeft: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  container: {
    display: 'flex',
    gap: '6px',
    padding: '1.2rem 1.5rem',
    background: 'var(--bubble-ai)',
    borderRadius: '24px',
    borderBottomLeftRadius: '8px',
    width: 'fit-content',
    border: '1px solid var(--border-color)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--accent-blue)',
    borderRadius: '50%',
    animation: 'typingDot 1.4s infinite ease-in-out both'
  }
};

export default function TypingIndicator() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.bubbleContainer}>
        <span style={styles.label}>IA Assistant</span>
        <div style={styles.container}>
          <div style={{...styles.dot, animationDelay: '-0.32s', backgroundColor: '#6366f1'}}></div>
          <div style={{...styles.dot, animationDelay: '-0.16s', backgroundColor: '#a855f7'}}></div>
          <div style={{...styles.dot, backgroundColor: '#ec4899'}}></div>
        </div>
      </div>
    </div>
  );
}
