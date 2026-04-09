import React, { useState, useEffect } from 'react';

const VibeMatcher = ({ user }) => {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [showDisclaimer, setShowDisclaimer] = useState(!localStorage.getItem('vibe_accepted'));

  useEffect(() => {
    setProfiles([
      { id: 1, name: 'Alex Kumar', age: 20, year: '2nd Year', dept: 'CS', interests: ['Coding', 'Gaming', 'Music'], photo: '👨‍💻' },
      { id: 2, name: 'Jordan Patel', age: 21, year: '3rd Year', dept: 'Design', interests: ['Art', 'Travel'], photo: '🎨' },
      { id: 3, name: 'Casey Singh', age: 19, year: '1st Year', dept: 'Business', interests: ['Startups', 'Reading'], photo: '💼' }
    ]);
  }, []);

  if (showDisclaimer) {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#F43F5E', textAlign: 'center' }}>⚠️ IMPORTANT</h1>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid #F43F5E', borderRadius: '15px', padding: '20px', overflowY: 'auto', maxHeight: '60vh' }}>
          <h2 style={{ color: '#0EA5E9' }}>Age & Legal Agreement</h2>
          <div style={{ background: 'rgba(99,102,241,0.1)', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
            <p style={{ color: '#CBD5E1' }}><strong>1. Age:</strong> You must be 18+ to use Vibe Matcher.</p>
          </div>
          <div style={{ background: 'rgba(99,102,241,0.1)', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
            <p style={{ color: '#CBD5E1' }}><strong>2. Personal Info:</strong> Your name, age, year, department will be visible to other users.</p>
            <p style={{ color: '#F43F5E', fontWeight: '600' }}>❌ YOU SHARE AT YOUR OWN RISK.</p>
          </div>
          <div style={{ background: 'rgba(99,102,241,0.1)', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
            <p style={{ color: '#CBD5E1' }}><strong>3. NOT Our Responsibility:</strong></p>
            <ul style={{ color: '#CBD5E1', marginLeft: '20px' }}>
              <li>We cannot prevent misuse of your info</li>
              <li>We are NOT liable if someone misuses your data</li>
              <li>We cannot guarantee complete safety</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '20px', marginBottom: '15px' }}>
            <h3 style={{ color: '#14B8A6', marginBottom: '15px' }}>✅ I Confirm:</h3>
            <div>
              <div style={{ marginBottom: '10px' }}>
                <input type="checkbox" style={{ marginRight: '10px' }} /> <span style={{ color: '#CBD5E1' }}>I am 18+</span>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="checkbox" style={{ marginRight: '10px' }} /> <span style={{ color: '#CBD5E1' }}>My info will be visible</span>
              </div>
              <div>
                <input type="checkbox" style={{ marginRight: '10px' }} /> <span style={{ color: '#CBD5E1' }}>I accept the risks</span>
              </div>
            </div>
          </div>
          <button onClick={() => { localStorage.setItem('vibe_accepted', 'true'); setShowDisclaimer(false); }} style={{ width: '100%', padding: '12px', background: '#6366F1', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>
            I Understand & Accept
          </button>
        </div>
      </div>
    );
  }

  if (currentIndex >= profiles.length) {
    return <div style={{ textAlign: 'center', padding: '40px' }}><h2 style={{ color: '#6366F1' }}>No more profiles! Matches: {matches.length}</h2></div>;
  }

  const p = profiles[currentIndex];

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center' }}>💫 Vibe Matcher</h1>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '15px', padding: '25px', textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '5em', marginBottom: '10px' }}>{p.photo}</div>
        <h2 style={{ color: '#fff', margin: '0 0 5px 0' }}>{p.name}</h2>
        <p style={{ color: '#0EA5E9', margin: '0 0 10px 0' }}>{p.age} • {p.year} • {p.dept}</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {p.interests.map((i, idx) => <span key={idx} style={{ background: 'rgba(99,102,241,0.2)', color: '#6366F1', padding: '4px 10px', borderRadius: '15px', fontSize: '0.8em' }}>{i}</span>)}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button style={{ background: 'transparent', border: '2px solid #94A3B8', color: '#94A3B8', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setCurrentIndex(currentIndex + 1)}>← Pass</button>
        <button style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => { setMatches([...matches, p.id]); setCurrentIndex(currentIndex + 1); }}>❤️ Like</button>
      </div>
    </div>
  );
};

export default VibeMatcher;
