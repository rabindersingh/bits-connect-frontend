import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityGuidelines = ({ onAgree }) => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    if (agreed) {
      localStorage.setItem('guidelines_accepted', 'true');
      onAgree();
      navigate('/');
    } else {
      alert('Please check all boxes to continue');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto', minHeight: '100vh' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '10px' }}>📋 Community Guidelines</h1>
      <p style={{ color: '#CBD5E1', textAlign: 'center', marginBottom: '30px' }}>Keep BITS Connect safe & respectful for everyone</p>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '15px', padding: '25px', marginBottom: '20px', maxHeight: '70vh', overflowY: 'auto' }}>
        
        {/* Section 1 */}
        <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
          <h2 style={{ color: '#0EA5E9', marginBottom: '12px', fontSize: '1.2em' }}>🛡️ Respect & Safety</h2>
          <ul style={{ color: '#CBD5E1', marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Treat all members with respect and kindness</li>
            <li>No harassment, bullying, or hate speech</li>
            <li>Respect everyone's boundaries and privacy</li>
            <li>No discrimination based on caste, religion, gender, or sexuality</li>
            <li>Report concerning behavior immediately</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
          <h2 style={{ color: '#0EA5E9', marginBottom: '12px', fontSize: '1.2em' }}>🚫 Prohibited Content</h2>
          <ul style={{ color: '#CBD5E1', marginLeft: '20px', lineHeight: '1.8' }}>
            <li>No profanity, vulgar language, or obscene content</li>
            <li>No sexually explicit or NSFW material</li>
            <li>No violence, threats, or encouraging harm</li>
            <li>No spam, scams, or misleading information</li>
            <li>No sharing of personal/private information without consent</li>
            <li>No impersonation or fake profiles</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
          <h2 style={{ color: '#0EA5E9', marginBottom: '12px', fontSize: '1.2em' }}>💬 What We Value</h2>
          <ul style={{ color: '#CBD5E1', marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Authentic, honest conversations</li>
            <li>Supporting friends and peers</li>
            <li>Celebrating achievements & milestones</li>
            <li>Creating a safe space for everyone</li>
            <li>Respecting diverse opinions & backgrounds</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
          <h2 style={{ color: '#0EA5E9', marginBottom: '12px', fontSize: '1.2em' }}>🆘 Mental Health & Crisis</h2>
          <ul style={{ color: '#CBD5E1', marginLeft: '20px', lineHeight: '1.8' }}>
            <li>If you're struggling, reach out to a counselor</li>
            <li>Support friends who may be in distress</li>
            <li>Self-harm or suicide discussion will trigger support resources</li>
            <li>The app will connect you with professional help</li>
            <li>You are never alone - we're here for you</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
          <h2 style={{ color: '#0EA5E9', marginBottom: '12px', fontSize: '1.2em' }}>⚠️ Consequences</h2>
          <ul style={{ color: '#CBD5E1', marginLeft: '20px', lineHeight: '1.8' }}>
            <li>First violation: Warning & content removal</li>
            <li>Second violation: Temporary suspension (24-72 hours)</li>
            <li>Repeated violations: Permanent removal</li>
            <li>Severe violations: Immediate ban & notification to authorities if needed</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ color: '#0EA5E9', marginBottom: '12px', fontSize: '1.2em' }}>📞 Need Help?</h2>
          <p style={{ color: '#CBD5E1', lineHeight: '1.8', margin: '0' }}>
            Trained counselor is available for support. Struggling with something? Reach out. Our community is here to support you. Report violations to help@community.app
          </p>
        </div>
      </div>

      {/* Checkboxes */}
      <div style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid #14B8A6', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
        <h3 style={{ color: '#14B8A6', marginBottom: '15px' }}>✅ I Agree To:</h3>
        <div style={{ marginBottom: '12px' }}>
          <input 
            type="checkbox" 
            checked={agreed} 
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <span style={{ color: '#CBD5E1' }}>
            I have read and understand these community guidelines
          </span>
        </div>
        <div style={{ marginBottom: '0' }}>
          <input 
            type="checkbox" 
            checked={agreed} 
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <span style={{ color: '#CBD5E1' }}>
            I agree to follow these guidelines and respect the community
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => navigate('/login')}
          style={{ flex: 1, background: 'transparent', border: '2px solid #94A3B8', color: '#94A3B8', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
        >
          Back
        </button>
        <button 
          onClick={handleAgree}
          disabled={!agreed}
          style={{ flex: 1, background: agreed ? '#6366F1' : '#666', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', cursor: agreed ? 'pointer' : 'not-allowed', fontWeight: '600' }}
        >
          I Agree & Continue
        </button>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
