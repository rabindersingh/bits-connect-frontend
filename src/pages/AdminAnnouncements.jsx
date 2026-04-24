import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAnnouncements = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState([
    {
      id: 1,
      title: 'Birthday Celebration - Rahul',
      description: 'Join us for Rahul\'s birthday party! Games, food, and fun!',
      date: '2026-04-25',
      time: '6:00 PM',
      location: 'Room 305',
      category: 'Birthday',
      submittedBy: 'Anonymous',
      submittedAt: '2 hours ago'
    },
    {
      id: 2,
      title: 'Coding Marathon',
      description: '24-hour coding challenge. Win prizes!',
      date: '2026-04-26',
      time: '10:00 AM',
      location: 'Lab A',
      category: 'Event',
      submittedBy: 'Anonymous',
      submittedAt: '1 hour ago'
    }
  ]);

  const [approved, setApproved] = useState([]);

  const handleApprove = (id) => {
    const announcement = pending.find(a => a.id === id);
    setPending(pending.filter(a => a.id !== id));
    setApproved([...approved, { ...announcement, approvedAt: new Date().toLocaleString() }]);
    alert('✅ Announcement approved and posted!');
  };

  const handleReject = (id) => {
    setPending(pending.filter(a => a.id !== id));
    alert('❌ Announcement rejected');
  };

  const getCategoryColor = (category) => {
    const colors = {
      Party: '#FF006E',
      Birthday: '#EC4899',
      Event: '#F59E0B',
      Workshop: '#6366F1',
      Sports: '#14B8A6',
      'Study Group': '#0EA5E9',
      Club: '#8B5CF6',
      Other: '#6B7280'
    };
    return colors[category] || '#6366F1';
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '15px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
        <h1 style={{ color: '#6366F1', margin: '0', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>🛡️ Approve Announcements</h1>
        <button onClick={() => navigate('/admin')} style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>← Back</button>
      </div>

      {/* Pending Tab */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#fff', marginBottom: '15px', fontSize: 'clamp(1.2em, 4vw, 1.5em)' }}>📋 Pending ({pending.length})</h2>

        {pending.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px', color: '#CBD5E1' }}>
            <p>✅ All announcements reviewed!</p>
          </div>
        ) : (
          pending.map(announcement => (
            <div key={announcement.id} style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '20px', marginBottom: '15px' }}>
              {/* Category Badge */}
              <div style={{ display: 'inline-block', marginBottom: '12px' }}>
                <span style={{ background: `${getCategoryColor(announcement.category)}33`, color: getCategoryColor(announcement.category), padding: '4px 10px', borderRadius: '15px', fontSize: '0.85em', fontWeight: '600' }}>
                  {announcement.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: 'clamp(1.05em, 3vw, 1.2em)' }}>{announcement.title}</h3>

              {/* Description */}
              <p style={{ color: '#CBD5E1', margin: '0 0 15px 0', lineHeight: '1.6' }}>{announcement.description}</p>

              {/* Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
                <div>
                  <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 5px 0' }}>📅 Date & Time</p>
                  <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0' }}>{announcement.date} at {announcement.time}</p>
                </div>
                <div>
                  <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 5px 0' }}>📍 Location</p>
                  <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0' }}>{announcement.location}</p>
                </div>
              </div>

              {/* Meta */}
              <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 15px 0' }}>Submitted {announcement.submittedAt} by {announcement.submittedBy}</p>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => handleApprove(announcement.id)} style={{ flex: 1, minWidth: '120px', background: '#14B8A6', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
                  ✅ Approve
                </button>
                <button onClick={() => handleReject(announcement.id)} style={{ flex: 1, minWidth: '120px', background: '#F43F5E', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
                  ❌ Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Approved Tab */}
      {approved.length > 0 && (
        <div>
          <h2 style={{ color: '#fff', marginBottom: '15px', fontSize: 'clamp(1.2em, 4vw, 1.5em)' }}>✅ Approved ({approved.length})</h2>

          {approved.map(announcement => (
            <div key={announcement.id} style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '15px', marginBottom: '10px' }}>
              <h4 style={{ color: '#14B8A6', margin: '0 0 8px 0' }}>{announcement.title}</h4>
              <p style={{ color: '#CBD5E1', margin: '0', fontSize: '0.9em' }}>Approved {announcement.approvedAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAnnouncements;
