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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Welcome Section */}
      <div style={{ background: 'rgba(99,102,241,0.1)', border: '2px solid #6366F1', borderRadius: '15px', padding: '30px', marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#6366F1', fontSize: '2.5em', margin: '0 0 15px 0' }}>Welcome to the Community! 🔥</h1>
        <p style={{ color: '#CBD5E1', fontSize: '1.1em', margin: '0 0 10px 0', lineHeight: '1.6' }}>
          A safe space where every voice matters. Share your thoughts, find your people, and be yourself.
        </p>
        <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0' }}>
          No judgment. No drama. Just real connections.
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid #6366F1', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
          <p style={{ color: '#0EA5E9', fontSize: '0.9em', margin: '0 0 8px 0' }}>Active Members</p>
          <p style={{ color: '#B3FF00', fontSize: '2em', fontWeight: 'bold', margin: '0' }}>1200+</p>
        </div>
        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid #6366F1', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
          <p style={{ color: '#0EA5E9', fontSize: '0.9em', margin: '0 0 8px 0' }}>Confessions Today</p>
          <p style={{ color: '#B3FF00', fontSize: '2em', fontWeight: 'bold', margin: '0' }}>42</p>
        </div>
      </div>

      {/* Feed Title */}
      <h2 style={{ color: '#fff', marginBottom: '20px', fontSize: '1.3em' }}>💬 Latest Confessions</h2>

      {/* Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {confessions.map((confession) => (
          <div key={confession.id} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '2px solid rgba(99, 102, 241, 0.15)', borderRadius: '15px', padding: '20px' }}>
            <p style={{ color: '#fff', fontSize: '1.05em', margin: '0 0 10px 0', lineHeight: '1.6' }}>"{confession.content}"</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.9em' }}>
              <span>Anonymous</span>
              <span>❤️ {confession.likes}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '15px', padding: '20px', marginTop: '30px', textAlign: 'center' }}>
        <p style={{ color: '#14B8A6', fontWeight: '600', margin: '0' }}>Have something to share?</p>
        <p style={{ color: '#CBD5E1', fontSize: '0.95em', margin: '8px 0 0 0' }}>Post a confession or find your vibe match!</p>
      </div>
    </div>
  );
};

export default HomePage;
