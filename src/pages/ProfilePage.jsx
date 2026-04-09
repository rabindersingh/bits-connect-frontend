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
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '30px' }}>✏️ Edit Profile</h1>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '15px', padding: '25px' }}>
          
          {/* Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Name</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box' }}
            />
          </div>

          {/* Age */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Age</label>
            <input
              type="number"
              value={editData.age}
              onChange={(e) => setEditData({ ...editData, age: parseInt(e.target.value) })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box' }}
            />
          </div>

          {/* Year */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Year</label>
            <select
              value={editData.year}
              onChange={(e) => setEditData({ ...editData, year: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box' }}
            >
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          {/* Department */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Department</label>
            <select
              value={editData.department}
              onChange={(e) => setEditData({ ...editData, department: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box' }}
            >
              <option>Computer Science</option>
              <option>Design</option>
              <option>Business</option>
              <option>Electronics</option>
              <option>Mechanical</option>
            </select>
          </div>

          {/* Bio */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Bio</label>
            <textarea
              value={editData.bio}
              onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box', minHeight: '80px' }}
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* Interests */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#0EA5E9', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Interests</label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
                placeholder="Add interest..."
                style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins', boxSizing: 'border-box' }}
              />
              <button onClick={handleAddInterest} style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Add</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {editData.interests.map((interest, idx) => (
                <div key={idx} style={{ background: 'rgba(99,102,241,0.2)', color: '#6366F1', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {interest}
                  <button onClick={() => handleRemoveInterest(idx)} style={{ background: 'transparent', border: 'none', color: '#6366F1', cursor: 'pointer', fontSize: '1.2em', padding: '0' }}>×</button>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleSave} style={{ flex: 1, background: '#6366F1', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Save Changes</button>
            <button onClick={() => setIsEditing(false)} style={{ flex: 1, background: 'transparent', border: '2px solid #94A3B8', color: '#94A3B8', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '30px' }}>👤 My Profile</h1>

      {/* Profile Card */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '15px', padding: '25px', textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '4em', marginBottom: '15px' }}>😊</div>
        <h2 style={{ color: '#fff', margin: '0 0 5px 0' }}>{profile.name}</h2>
        <p style={{ color: '#0EA5E9', margin: '0 0 15px 0' }}>{profile.age} • {profile.year}</p>
        <p style={{ color: '#CBD5E1', margin: '0 0 15px 0' }}>{profile.department}</p>
        <p style={{ color: '#CBD5E1', fontStyle: 'italic', margin: '0 0 15px 0' }}>"{profile.bio}"</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
          {profile.interests.map((interest, idx) => (
            <span key={idx} style={{ background: 'rgba(99,102,241,0.2)', color: '#6366F1', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85em' }}>
              {interest}
            </span>
          ))}
        </div>

        <button onClick={() => setIsEditing(true)} style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', marginRight: '10px' }}>✏️ Edit Profile</button>
        <button onClick={handleLogout} style={{ background: '#F43F5E', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
      </div>

      {/* Stats */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '15px', padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'center' }}>
        <div>
          <p style={{ color: '#94A3B8', margin: '0 0 5px 0' }}>Matches</p>
          <p style={{ color: '#6366F1', fontSize: '1.8em', fontWeight: '700', margin: '0' }}>3</p>
        </div>
        <div>
          <p style={{ color: '#94A3B8', margin: '0 0 5px 0' }}>Messages</p>
          <p style={{ color: '#6366F1', fontSize: '1.8em', fontWeight: '700', margin: '0' }}>5</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
