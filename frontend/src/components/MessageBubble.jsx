import React from 'react';

export default function MessageBubble({ role, content }) {
  const isUser = role === 'user';
  
  const styles = {
    wrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '1.5rem',
      animation: 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    },
    bubbleContainer: {
      maxWidth: '75%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: isUser ? 'flex-end' : 'flex-start'
    },
    label: {
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      marginBottom: '0.5rem',
      marginLeft: isUser ? '0' : '0.5rem',
      marginRight: isUser ? '0.5rem' : '0',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    bubble: {
      padding: '1rem 1.5rem',
      borderRadius: '24px',
      borderBottomRightRadius: isUser ? '8px' : '24px',
      borderBottomLeftRadius: isUser ? '24px' : '8px',
      background: isUser ? 'var(--bubble-user)' : 'var(--bubble-ai)',
      color: 'var(--text-primary)',
      lineHeight: '1.6',
      fontSize: '0.95rem',
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      boxShadow: isUser ? '0 4px 15px rgba(139, 92, 246, 0.2)' : '0 4px 15px rgba(0,0,0,0.2)',
      border: isUser ? 'none' : '1px solid var(--border-color)',
      backdropFilter: isUser ? 'none' : 'blur(10px)'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.bubbleContainer}>
        <span style={styles.label}>{isUser ? 'Tú' : 'IA Assistant'}</span>
        <div style={styles.bubble}>
          {content}
        </div>
      </div>
    </div>
  );
}
