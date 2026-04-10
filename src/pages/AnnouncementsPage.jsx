import React, { useState } from 'react';

const AnnouncementsPage = ({ user }) => {
  const [announcements] = useState([
    {
      id: 1,
      title: '🎉 Welcome Party - This Friday!',
      description: 'Join us for an amazing welcome party at the campus lounge. Free food, music, and great people!',
      date: 'Friday, April 18',
      time: '7:00 PM',
      location: 'Campus Lounge',
      attendees: 156,
      category: 'Party'
    },
    {
      id: 2,
      title: '🎨 Design Workshop - Next Week',
      description: 'Learn UI/UX design basics with industry experts. Limited seats available!',
      date: 'Monday, April 21',
      time: '3:00 PM',
      location: 'Design Studio',
      attendees: 45,
      category: 'Workshop'
    },
    {
      id: 3,
      title: '⚽ Sports Day - Sign Up Now!',
      description: 'Cricket, basketball, badminton and more. Form your teams and compete!',
      date: 'Saturday, April 19',
      time: '9:00 AM',
      location: 'Sports Ground',
      attendees: 89,
      category: 'Sports'
    },
    {
      id: 4,
      title: '🎤 Open Mic Night - This Saturday',
      description: 'Share your talent! Poetry, music, comedy - all welcome. No experience needed!',
      date: 'Saturday, April 19',
      time: '8:00 PM',
      location: 'Auditorium',
      attendees: 203,
      category: 'Event'
    },
    {
      id: 5,
      title: '📚 Study Group Formation',
      description: 'Form study groups for different subjects. Connect with peers and ace exams!',
      date: 'Every day',
      time: 'Anytime',
      location: 'Library & Common Areas',
      attendees: 312,
      category: 'Academic'
    }
  ]);

  const getCategoryColor = (category) => {
    const colors = {
      Party: '#FF006E',
      Workshop: '#6366F1',
      Sports: '#14B8A6',
      Event: '#F59E0B',
      Academic: '#0EA5E9'
    };
    return colors[category] || '#6366F1';
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#6366F1', fontSize: '2.5em', margin: '0 0 10px 0' }}>📢 Announcements</h1>
        <p style={{ color: '#CBD5E1', margin: '0', fontSize: '1em' }}>Stay updated with campus events and activities</p>
      </div>

      {/* Announcements List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: `2px solid ${getCategoryColor(announcement.category)}`,
              borderRadius: '15px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Category Badge */}
            <div style={{ display: 'inline-block', marginBottom: '12px' }}>
              <span style={{
                background: `${getCategoryColor(announcement.category)}33`,
                color: getCategoryColor(announcement.category),
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '0.85em',
                fontWeight: '600'
              }}>
                {announcement.category}
              </span>
            </div>

            {/* Title */}
            <h2 style={{ color: '#fff', fontSize: '1.3em', margin: '0 0 10px 0' }}>
              {announcement.title}
            </h2>

            {/* Description */}
            <p style={{ color: '#CBD5E1', margin: '0 0 15px 0', lineHeight: '1.6' }}>
              {announcement.description}
            </p>

            {/* Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
              <div>
                <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 5px 0' }}>📅 Date & Time</p>
                <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0' }}>{announcement.date} • {announcement.time}</p>
              </div>
              <div>
                <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 5px 0' }}>📍 Location</p>
                <p style={{ color: '#0EA5E9', fontWeight: '600', margin: '0' }}>{announcement.location}</p>
              </div>
            </div>

            {/* Attendees */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#B3FF00', fontWeight: '600' }}>
              <span>👥 {announcement.attendees} interested</span>
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
              marginTop: '15px'
            }}>
              Show Interest
            </button>
          </div>
        ))}
      </div>

      {/* Empty State Message */}
      <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '15px', padding: '20px', marginTop: '30px', textAlign: 'center' }}>
        <p style={{ color: '#14B8A6', fontWeight: '600', margin: '0 0 8px 0' }}>Miss an event?</p>
        <p style={{ color: '#CBD5E1', fontSize: '0.95em', margin: '0' }}>Check back regularly for new announcements and don't miss out on the action!</p>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
