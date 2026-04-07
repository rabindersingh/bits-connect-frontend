import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (email && password) {
        const userData = { email, name: email.split('@')[0] };
        onLogin(userData);
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>🔥 BITS</h1>
        <p style={styles.subtitle}>where the vibes hit different</p>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="your@bits.edu" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
          </div>
          <button type="submit" style={styles.button} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
        <div style={styles.demoSection}>
          <p style={styles.demoText}>✨ Try demo login:</p>
          <button type="button" style={styles.demoButton} onClick={() => { setEmail('demo@bits.edu'); setPassword('demo123'); }}>Demo User</button>
          <button type="button" style={styles.demoButton} onClick={() => { setEmail('admin@bits.edu'); setPassword('admin123'); }}>Admin Access</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
  box: { width: '100%', maxWidth: '450px', background: 'rgba(255, 255, 255, 0.05)', border: '2px solid rgba(200, 50, 255, 0.3)', borderRadius: '20px', padding: '40px 30px', backdropFilter: 'blur(10px)' },
  title: { fontSize: '2.5em', color: '#C832FF', textAlign: 'center', margin: '0 0 10px 0' },
  subtitle: { color: '#B3FF00', textAlign: 'center', margin: '0 0 30px 0' },
  error: { background: 'rgba(255, 0, 110, 0.1)', border: '2px solid #FF006E', color: '#FF006E', padding: '12px 15px', borderRadius: '8px', marginBottom: '15px' },
  formGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', color: '#00D9FF', fontWeight: '600' },
  button: { width: '100%', padding: '14px', background: 'linear-gradient(135deg, #C832FF, #a020d0)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1.1em', fontWeight: '700', cursor: 'pointer', marginBottom: '15px' },
  demoSection: { marginTop: '25px', paddingTop: '25px', borderTop: '1px solid rgba(200, 50, 255, 0.2)' },
  demoText: { fontSize: '0.85em', color: '#999999', marginBottom: '10px' },
  demoButton: { width: '100%', padding: '10px', background: 'transparent', border: '2px solid #00D9FF', color: '#00D9FF', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px', fontWeight: '600' },
};

export default LoginPage;
