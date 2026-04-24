import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnnouncementsPage = ({ user }) => {
  const navigate = useNavigate();
  const [announcements] = useState([
    {
      id: 1,
      title: '🎉 Welcome Party - This Friday!',
      description: 'Join us for an amazing welcome party at the campus lounge. Free food, music, and great people!',
      date: 'Friday, April 18',
      time: '7:00 PM',
      location: 'Campus Lounge',
      attendees: 156,
      category: 'Party',
      status: 'approved'
    },
    {
      id: 2,
      title: '🎨 Design Workshop - Next Week',
      description: 'Learn UI/UX design basics with industry experts. Limited seats available!',
      date: 'Monday, April 21',
      time: '3:00 PM',
      location: 'Design Studio',
      attendees: 45,
      category: 'Workshop',
      status: 'approved'
    },
    {
      id: 3,
      title: '⚽ Sports Day - Sign Up Now!',
      description: 'Cricket, basketball, badminton and more. Form your teams and compete!',
      date: 'Saturday, April 19',
      time: '9:00 AM',
      location: 'Sports Ground',
      attendees: 89,
      category: 'Sports',
      status: 'approved'
    }
  ]);

  const getCategoryColor = (category) => {
    const colors = {
      Party: '#FF006E',
      Workshop: '#6366F1',
      Sports: '#14B8A6',
      Event: '#F59E0B',
      Birthday: '#EC4899',
      'Study Group': '#0EA5E9',
      Club: '#8B5CF6',
      Other: '#6B7280'
    };
    return colors[category] || '#6366F1';
  };

  return (
    <div style={{ maxWidth: '100%', margin: '0', padding: '15px', boxSizing: 'border-box' }}>
      {/* Header with Submit Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <h1 style={{ color: '#6366F1', fontSize: 'clamp(1.5em, 5vw, 2.5em)', margin: '0' }}>📢 Announcements</h1>
        <button 
          onClick={() => navigate('/announcements/submit')}
          style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.85em, 3vw, 1em)', whiteSpace: 'nowrap' }}
        >
          + Post Event
        </button>
      </div>

      <p style={{ color: '#CBD5E1', margin: '0 0 20px 0', fontSize: 'clamp(0.85em, 3vw, 1em)' }}>Stay updated with campus events and activities</p>

      {/* Announcements List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: `2px solid ${getCategoryColor(announcement.category)}`,
              borderRadius: '12px',
              padding: '15px',
              cursor: 'pointer',
            }}
          >
            {/* Category Badge */}
            <div style={{ display: 'inline-block', marginBottom: '10px' }}>
              <span style={{
                background: `${getCategoryColor(announcement.category)}33`,
                color: getCategoryColor(announcement.category),
                padding: '4px 10px',
                borderRadius: '15px',
                fontSize: 'clamp(0.7em, 2vw, 0.85em)',
                fontWeight: '600'
              }}>
                {announcement.category}
              </span>
            </div>

            {/* Title */}
            <h2 style={{ color: '#fff', fontSize: 'clamp(1em, 4vw, 1.2em)', margin: '0 0 8px 0', lineHeight: '1.3' }}>
              {announcement.title}
            </h2>

            {/* Description */}
            <p style={{ color: '#CBD5E1', margin: '0 0 12px 0', lineHeight: '1.5', fontSize: 'clamp(0.85em, 3vw, 0.95em)' }}>
              {announcement.description}
            </p>

            {/* Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
              <div>
                <p style={{ color: '#94A3B8', fontSize: 'clamp(0.75em, 2vw, 0.8em)', margin: '0 0 4px 0' }}>📅 Date</p>
                <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>{announcement.date}</p>
              </div>
              <div>
                <p style={{ color: '#94A3B8', fontSize: 'clamp(0.75em, 2vw, 0.8em)', margin: '0 0 4px 0' }}>📍 Location</p>
                <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>{announcement.location}</p>
              </div>
            </div>

            {/* Attendees */}
            <div style={{ color: '#B3FF00', fontWeight: '600', fontSize: 'clamp(0.8em, 3vw, 0.9em)', marginBottom: '10px' }}>
              👥 {announcement.attendees} interested
            </div>

            {/* Action Button */}
            <button style={{
              width: '100%',
              background: getCategoryColor(announcement.category),
              color: '#fff',
              border: 'none',
              padding: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: 'clamp(0.85em, 3vw, 0.95em)'
            }}>
              Show Interest
            </button>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '15px', marginTop: '20px', textAlign: 'center' }}>
        <p style={{ color: '#14B8A6', fontWeight: '600', margin: '0 0 8px 0' }}>📢 Have an event to share?</p>
        <p style={{ color: '#CBD5E1', fontSize: '0.9em', margin: '0' }}>Click "Post Event" above to create an announcement!</p>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
