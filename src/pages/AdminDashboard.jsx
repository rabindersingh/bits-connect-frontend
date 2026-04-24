import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats] = useState({
    total: 3,
    approved: 1,
    pending: 2,
    crisis: 1,
  });

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#6366F1', marginBottom: '30px', textAlign: 'center', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>🛡️ Admin Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' }}>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '2px solid #00D9FF', borderRadius: '15px', padding: '20px', textAlign: 'center' }}>
            <h3 style={{ color: '#00D9FF', fontSize: '0.9em', marginBottom: '10px', textTransform: 'capitalize', margin: '0 0 10px 0' }}>{key}</h3>
            <p style={{ color: '#B3FF00', fontSize: 'clamp(1.5em, 5vw, 2em)', fontWeight: 'bold', margin: '0' }}>{value}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(200, 50, 255, 0.2)', borderRadius: '15px', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ color: '#00D9FF', marginBottom: '10px' }}>📋 Pending Confessions</h2>
        <p style={{ color: '#CCCCCC', marginBottom: '15px' }}>2 confessions waiting for review</p>
        <button onClick={() => navigate('/moderation')} style={{ background: '#C832FF', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Review Now →</button>
      </div>

      <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(200, 50, 255, 0.2)', borderRadius: '15px', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ color: '#00D9FF', marginBottom: '10px' }}>📢 Pending Announcements</h2>
        <p style={{ color: '#CCCCCC', marginBottom: '15px' }}>2 announcements waiting for approval</p>
        <button onClick={() => navigate('/admin/announcements')} style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Approve Now →</button>
      </div>

      <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(200, 50, 255, 0.2)', borderRadius: '15px', padding: '20px' }}>
        <h2 style={{ color: '#00D9FF', marginBottom: '10px' }}>🚨 Crisis Alerts</h2>
        <p style={{ color: '#CCCCCC', marginBottom: '15px' }}>1 high-priority alert</p>
        <button onClick={() => navigate('/moderation')} style={{ background: '#FF006E', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Handle Alert →</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
