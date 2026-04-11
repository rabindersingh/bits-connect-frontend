import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || 'Demo User',
    email: user?.email || 'demo@bits.edu',
    year: '2nd Year',
    department: 'Computer Science',
    interests: ['Coding', 'Gaming', 'Music'],
    bio: 'Love building cool stuff',
    age: 20
  });

  const [editData, setEditData] = useState(profile);
  const [newInterest, setNewInterest] = useState('');

  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
  };

  const handleAddInterest = () => {
    if (newInterest.trim()) {
      setEditData({
        ...editData,
        interests: [...editData.interests, newInterest]
      });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (idx) => {
    setEditData({
      ...editData,
      interests: editData.interests.filter((_, i) => i !== idx)
    });
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (isEditing) {
    return (
      <div style={{ maxWidth: '100%', margin: '0', padding: '15px', boxSizing: 'border-box' }}>
        <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>✏️ Edit</h1>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '15px', marginBottom: '15px' }}>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Name</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Age</label>
            <input
              type="number"
              value={editData.age}
              onChange={(e) => setEditData({ ...editData, age: parseInt(e.target.value) })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Year</label>
            <select
              value={editData.year}
              onChange={(e) => setEditData({ ...editData, year: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
            >
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Department</label>
            <select
              value={editData.department}
              onChange={(e) => setEditData({ ...editData, department: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', fontSize: '1em' }}
            >
              <option>Computer Science</option>
              <option>Design</option>
              <option>Business</option>
              <option>Electronics</option>
              <option>Mechanical</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Bio</label>
            <textarea
              value={editData.bio}
              onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', minHeight: '80px', fontSize: '1em' }}
              placeholder="Tell us about yourself..."
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Interests</label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
                placeholder="Add..."
                style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', minWidth: '150px', boxSizing: 'border-box', fontSize: '1em' }}
              />
              <button onClick={handleAddInterest} style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.85em, 3vw, 0.95em)', whiteSpace: 'nowrap' }}>Add</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {editData.interests.map((interest, idx) => (
                <div key={idx} style={{ background: 'rgba(99,102,241,0.2)', color: '#6366F1', padding: '6px 10px', borderRadius: '15px', fontSize: 'clamp(0.75em, 3vw, 0.85em)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {interest}
                  <button onClick={() => handleRemoveInterest(idx)} style={{ background: 'transparent', border: 'none', color: '#6366F1', cursor: 'pointer', fontSize: '1.2em', padding: '0', marginLeft: '4px' }}>×</button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button onClick={handleSave} style={{ flex: 1, minWidth: '120px', background: '#6366F1', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Save</button>
            <button onClick={() => setIsEditing(false)} style={{ flex: 1, minWidth: '120px', background: 'transparent', border: '2px solid #94A3B8', color: '#94A3B8', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '100%', margin: '0', padding: '15px', boxSizing: 'border-box' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>👤 Profile</h1>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '20px', textAlign: 'center', marginBottom: '15px' }}>
        <div style={{ fontSize: 'clamp(3em, 15vw, 4em)', marginBottom: '12px' }}>😊</div>
        <h2 style={{ color: '#fff', margin: '0 0 6px 0', fontSize: 'clamp(1.1em, 4vw, 1.3em)' }}>{profile.name}</h2>
        <p style={{ color: '#0EA5E9', margin: '0 0 12px 0', fontSize: 'clamp(0.9em, 3vw, 1em)' }}>{profile.age} • {profile.year}</p>
        <p style={{ color: '#CBD5E1', margin: '0 0 12px 0', fontSize: 'clamp(0.85em, 3vw, 0.95em)' }}>{profile.department}</p>
        <p style={{ color: '#CBD5E1', fontStyle: 'italic', margin: '0 0 15px 0', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>"{profile.bio}"</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '15px' }}>
          {profile.interests.map((interest, idx) => (
            <span key={idx} style={{ background: 'rgba(99,102,241,0.2)', color: '#6366F1', padding: '6px 10px', borderRadius: '15px', fontSize: 'clamp(0.75em, 3vw, 0.85em)' }}>
              {interest}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => setIsEditing(true)} style={{ flex: 1, minWidth: '120px', background: '#6366F1', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.85em, 3vw, 0.95em)' }}>✏️ Edit</button>
          <button onClick={handleLogout} style={{ flex: 1, minWidth: '120px', background: '#F43F5E', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: 'clamp(0.85em, 3vw, 0.95em)' }}>Logout</button>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', textAlign: 'center' }}>
        <div>
          <p style={{ color: '#94A3B8', margin: '0 0 6px 0', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>Matches</p>
          <p style={{ color: '#6366F1', fontSize: 'clamp(1.5em, 5vw, 1.8em)', fontWeight: '700', margin: '0' }}>3</p>
        </div>
        <div>
          <p style={{ color: '#94A3B8', margin: '0 0 6px 0', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>Messages</p>
          <p style={{ color: '#6366F1', fontSize: 'clamp(1.5em, 5vw, 1.8em)', fontWeight: '700', margin: '0' }}>5</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
