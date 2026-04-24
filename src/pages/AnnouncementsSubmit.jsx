import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnnouncementsSubmit = ({ user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'Event',
    attendees: 0
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.date) {
      alert('Please fill in all required fields!');
      return;
    }

    console.log('Announcement submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      navigate('/announcements');
    }, 2000);
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '15px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '4em', marginBottom: '20px' }}>✅</div>
        <h1 style={{ color: '#14B8A6', marginBottom: '15px', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>Announcement Submitted!</h1>
        <p style={{ color: '#CBD5E1', fontSize: 'clamp(0.9em, 3vw, 1.1em)', marginBottom: '20px' }}>
          Your announcement will be reviewed by admin and posted soon.
        </p>
        <p style={{ color: '#94A3B8', fontSize: '0.9em' }}>Redirecting to announcements...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '15px' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>📢 Post Announcement</h1>

      <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '20px' }}>
        
        {/* Title */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Birthday Celebration"
            style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your announcement..."
            style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', minHeight: '100px', fontSize: '1em' }}
          />
        </div>

        {/* Category */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
          >
            <option>Event</option>
            <option>Party</option>
            <option>Birthday</option>
            <option>Workshop</option>
            <option>Sports</option>
            <option>Study Group</option>
            <option>Club</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
          />
        </div>

        {/* Time */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
          />
        </div>

        {/* Location */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Campus Lounge"
            style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button type="submit" style={{ flex: 1, minWidth: '120px', background: '#6366F1', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>
            Submit for Review
          </button>
          <button type="button" onClick={() => navigate('/announcements')} style={{ flex: 1, minWidth: '120px', background: 'transparent', border: '2px solid #94A3B8', color: '#94A3B8', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>
            Cancel
          </button>
        </div>
      </form>

      <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '15px', marginTop: '20px', textAlign: 'center' }}>
        <p style={{ color: '#14B8A6', fontWeight: '600', margin: '0 0 8px 0' }}>📝 Note</p>
        <p style={{ color: '#CBD5E1', fontSize: '0.9em', margin: '0' }}>Your announcement will be reviewed by admin before posting to ensure it follows community guidelines.</p>
      </div>
    </div>
  );
};

export default AnnouncementsSubmit;
