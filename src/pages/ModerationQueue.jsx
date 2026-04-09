import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModerationQueue = () => {
  const navigate = useNavigate();
  const [confessions, setConfessions] = useState([
    { id: 1, content: 'I\'m scared of failing exams', timestamp: '2 mins ago', status: 'pending' },
    { id: 2, content: 'Feeling overwhelmed with work', timestamp: '15 mins ago', status: 'pending' },
    { id: 3, content: 'I have a crush on someone', timestamp: '1 hour ago', status: 'pending' }
  ]);

  const [crisisAlerts, setCrisisAlerts] = useState([
    { id: 1, content: 'Feeling really depressed', timestamp: '30 mins ago', status: 'pending' }
  ]);

  const [tab, setTab] = useState('confessions');

  const handleApprove = (id) => {
    setConfessions(confessions.map(c => c.id === id ? { ...c, status: 'approved' } : c));
    alert('✅ Approved!');
  };

  const handleReject = (id) => {
    setConfessions(confessions.filter(c => c.id !== id));
    alert('❌ Rejected');
  };

  const handleResolveCrisis = (id) => {
    setCrisisAlerts(crisisAlerts.map(c => c.id === id ? { ...c, status: 'resolved' } : c));
    alert('✅ Resources sent!');
  };

  const pending = confessions.filter(c => c.status === 'pending');
  const crisisP = crisisAlerts.filter(c => c.status === 'pending');

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#6366F1', margin: '0' }}>🛡️ Moderation</h1>
        <button onClick={() => navigate('/admin')} style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>← Back</button>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setTab('confessions')} style={{ background: tab === 'confessions' ? '#6366F1' : 'transparent', color: '#fff', border: '2px solid #6366F1', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          Confessions ({pending.length})
        </button>
        <button onClick={() => setTab('crisis')} style={{ background: tab === 'crisis' ? '#F43F5E' : 'transparent', color: '#fff', border: '2px solid #F43F5E', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          Crisis ({crisisP.length})
        </button>
      </div>

      {tab === 'confessions' && (
        <div>
          {pending.length === 0 ? <p style={{ color: '#CBD5E1', textAlign: 'center' }}>✅ All reviewed!</p> : (
            pending.map(c => (
              <div key={c.id} style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '20px', marginBottom: '15px' }}>
                <p style={{ color: '#fff', margin: '0 0 10px 0' }}>{c.content}</p>
                <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 15px 0' }}>{c.timestamp}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => handleApprove(c.id)} style={{ flex: 1, background: '#14B8A6', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>✅ Approve</button>
                  <button onClick={() => handleReject(c.id)} style={{ flex: 1, background: '#F43F5E', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>❌ Reject</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {tab === 'crisis' && (
        <div>
          {crisisP.length === 0 ? <p style={{ color: '#CBD5E1', textAlign: 'center' }}>✅ All handled!</p> : (
            crisisP.map(a => (
              <div key={a.id} style={{ background: 'rgba(244,63,94,0.1)', border: '2px solid #F43F5E', borderRadius: '12px', padding: '20px', marginBottom: '15px' }}>
                <p style={{ color: '#fff', margin: '0 0 10px 0' }}>🚨 {a.content}</p>
                <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 15px 0' }}>{a.timestamp}</p>
                <button onClick={() => handleResolveCrisis(a.id)} style={{ width: '100%', background: '#14B8A6', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>✅ Resolved & Resources Sent</button>
              </div>
            ))
          )}
        </div>
      )}

      <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '20px', marginTop: '30px', color: '#CBD5E1', fontSize: '0.9em' }}>
        <p><strong>Crisis Hotlines:</strong></p>
        <p>AASRA: 9820466726 | iCall: 9152987821</p>
      </div>
    </div>
  );
};

export default ModerationQueue;
