import React, { useState, useEffect } from 'react';

const VibeMatcher = ({ user }) => {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [showDisclaimer, setShowDisclaimer] = useState(!localStorage.getItem('vibe_accepted'));

  useEffect(() => {
    setProfiles([
      { id: 1, name: 'Alex Kumar', age: 20, year: '2nd Year', dept: 'CS', interests: ['Coding', 'Gaming'], photo: '👨‍💻' },
      { id: 2, name: 'Jordan Patel', age: 21, year: '3rd Year', dept: 'Design', interests: ['Art', 'Travel'], photo: '🎨' },
      { id: 3, name: 'Casey Singh', age: 19, year: '1st Year', dept: 'Business', interests: ['Startups'], photo: '💼' }
    ]);
  }, []);

  if (showDisclaimer) {
    return (
      <div style={{ padding: '15px', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#F43F5E', textAlign: 'center', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>⚠️ IMPORTANT</h1>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid #F43F5E', borderRadius: '12px', padding: '15px', overflowY: 'auto', maxHeight: '65vh', marginBottom: '15px' }}>
          <h2 style={{ color: '#0EA5E9', fontSize: 'clamp(1.1em, 4vw, 1.3em)', marginTop: '0' }}>Age & Legal</h2>
          <div style={{ background: 'rgba(99,102,241,0.1)', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
            <p style={{ color: '#CBD5E1', margin: '0', fontSize: 'clamp(0.85em, 3vw, 0.95em)', lineHeight: '1.5' }}><strong>1. Age:</strong> You must be 18+ to use Vibe Matcher.</p>
          </div>
          <div style={{ background: 'rgba(99,102,241,0.1)', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
            <p style={{ color: '#CBD5E1', margin: '0 0 8px 0', fontSize: 'clamp(0.85em, 3vw, 0.95em)' }}><strong>2. Personal Info:</strong> Your name, age will be visible.</p>
            <p style={{ color: '#F43F5E', fontWeight: '600', margin: '0', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>❌ YOU SHARE AT YOUR OWN RISK.</p>
          </div>
          <div style={{ background: 'rgba(99,102,241,0.1)', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
            <p style={{ color: '#CBD5E1', margin: '0 0 8px 0', fontSize: 'clamp(0.85em, 3vw, 0.95em)' }}><strong>3. Not Our Responsibility:</strong></p>
            <ul style={{ color: '#CBD5E1', margin: '0', paddingLeft: '20px', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>
              <li>We cannot prevent misuse</li>
              <li>We are NOT liable for misuse</li>
              <li>Cannot guarantee safety</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '12px', marginBottom: '12px' }}>
            <h3 style={{ color: '#14B8A6', marginTop: '0', fontSize: 'clamp(0.95em, 3vw, 1.1em)' }}>✅ I Confirm:</h3>
            <div style={{ marginBottom: '8px' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} /> <span style={{ color: '#CBD5E1', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>I am 18+</span>
            </div>
            <div style={{ marginBottom: '8px' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} /> <span style={{ color: '#CBD5E1', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>My info visible</span>
            </div>
            <div>
              <input type="checkbox" style={{ marginRight: '8px' }} /> <span style={{ color: '#CBD5E1', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>I accept risks</span>
            </div>
          </div>
          <button onClick={() => { localStorage.setItem('vibe_accepted', 'true'); setShowDisclaimer(false); }} style={{ width: '100%', padding: '12px', background: '#6366F1', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>
            I Accept
          </button>
        </div>
      </div>
    );
  }

  if (currentIndex >= profiles.length) {
    return <div style={{ textAlign: 'center', padding: '30px', color: '#6366F1' }}><h2 style={{ fontSize: 'clamp(1.2em, 4vw, 1.5em)' }}>No more profiles! Matches: {matches.length}</h2></div>;
  }

  const p = profiles[currentIndex];

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '15px' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center', fontSize: 'clamp(1.5em, 5vw, 2em)', marginBottom: '20px' }}>💫 Vibe</h1>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '15px', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: 'clamp(3em, 15vw, 5em)', marginBottom: '10px' }}>{p.photo}</div>
        <h2 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: 'clamp(1.2em, 4vw, 1.5em)' }}>{p.name}</h2>
        <p style={{ color: '#0EA5E9', margin: '0 0 12px 0', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>{p.age} • {p.year} • {p.dept}</p>
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {p.interests.map((i, idx) => <span key={idx} style={{ background: 'rgba(99,102,241,0.2)', color: '#6366F1', padding: '4px 8px', borderRadius: '12px', fontSize: 'clamp(0.7em, 2vw, 0.8em)' }}>{i}</span>)}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button style={{ flex: 1, background: 'transparent', border: '2px solid #94A3B8', color: '#94A3B8', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.9em, 3vw, 1em)' }} onClick={() => setCurrentIndex(currentIndex + 1)}>← Pass</button>
        <button style={{ flex: 1, background: '#6366F1', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.9em, 3vw, 1em)' }} onClick={() => { setMatches([...matches, p.id]); setCurrentIndex(currentIndex + 1); }}>❤️ Like</button>
      </div>
    </div>
  );
};

export default VibeMatcher;
