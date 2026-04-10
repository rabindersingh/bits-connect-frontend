import React, { useState, useEffect } from 'react';

const HomePage = ({ user }) => {
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    setConfessions([
      { id: 1, content: 'I\'m scared of failing my exams 😔', author: 'Anonymous', likes: 42 },
      { id: 2, content: 'The food in hostel is actually fire 🔥', author: 'Anonymous', likes: 156 },
      { id: 3, content: 'I love campus life', author: 'Anonymous', likes: 89 },
    ]);
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '15px' }}>
      {/* Welcome Section */}
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '2px solid #6366F1', borderRadius: '15px', padding: '20px', marginBottom: '25px', textAlign: 'center' }}>
        <h1 style={{ color: '#6366F1', fontSize: 'clamp(1.8em, 5vw, 2.5em)', margin: '0 0 12px 0' }}>Welcome! 🔥</h1>
        <p style={{ color: '#CBD5E1', fontSize: 'clamp(0.9em, 4vw, 1.1em)', margin: '0 0 10px 0', lineHeight: '1.5' }}>
          A safe space where every voice matters. Share your thoughts and be yourself.
        </p>
        <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0', fontSize: 'clamp(0.85em, 3vw, 1em)' }}>
          No judgment. Just real connections.
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '25px' }}>
        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid #6366F1', borderRadius: '12px', padding: '15px', textAlign: 'center' }}>
          <p style={{ color: '#0EA5E9', fontSize: '0.85em', margin: '0 0 8px 0' }}>Active</p>
          <p style={{ color: '#B3FF00', fontSize: 'clamp(1.5em, 5vw, 2em)', fontWeight: 'bold', margin: '0' }}>1200+</p>
        </div>
        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid #6366F1', borderRadius: '12px', padding: '15px', textAlign: 'center' }}>
          <p style={{ color: '#0EA5E9', fontSize: '0.85em', margin: '0 0 8px 0' }}>Today</p>
          <p style={{ color: '#B3FF00', fontSize: 'clamp(1.5em, 5vw, 2em)', fontWeight: 'bold', margin: '0' }}>42</p>
        </div>
      </div>

      {/* Feed Title */}
      <h2 style={{ color: '#fff', marginBottom: '15px', fontSize: 'clamp(1.1em, 4vw, 1.3em)' }}>💬 Latest</h2>

      {/* Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        {confessions.map((confession) => (
          <div key={confession.id} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '2px solid rgba(99, 102, 241, 0.15)', borderRadius: '12px', padding: '15px' }}>
            <p style={{ color: '#fff', fontSize: 'clamp(0.9em, 3vw, 1.05em)', margin: '0 0 10px 0', lineHeight: '1.5' }}>"{confession.content}"</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.85em' }}>
              <span>Anonymous</span>
              <span>❤️ {confession.likes}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '15px', textAlign: 'center' }}>
        <p style={{ color: '#14B8A6', fontWeight: '600', margin: '0 0 8px 0', fontSize: '0.95em' }}>Have something to share?</p>
        <p style={{ color: '#CBD5E1', fontSize: '0.85em', margin: '0' }}>Post a confession or find your vibe match!</p>
      </div>
    </div>
  );
};

export default HomePage;
