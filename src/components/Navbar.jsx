import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout, isAdmin }) => {
  const navigate = useNavigate();

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <button onClick={() => navigate('/')} style={styles.logo}>🔥 BITS</button>
        <ul style={styles.navLinks}>
          <li><button onClick={() => navigate('/')} style={styles.navBtn}>Home</button></li>
          <li><button onClick={() => navigate('/announcements')} style={styles.navBtn}>📢 Announcements</button></li>
          <li><button onClick={() => navigate('/vibe-matcher')} style={styles.navBtn}>Vibe</button></li>
          <li><button onClick={() => navigate('/messages')} style={styles.navBtn}>Messages</button></li>
          <li><button onClick={() => navigate('/profile')} style={styles.navBtn}>Profile</button></li>
          {isAdmin && <li><button onClick={() => navigate('/admin')} style={{...styles.navBtn, color: '#FF006E'}}>👨‍💼 Admin</button></li>}
          <li><button onClick={onLogout} style={styles.logoutBtn}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { background: 'rgba(15, 12, 41, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '2px solid rgba(200, 50, 255, 0.2)', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 1000 },
  navContent: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: '1.8em', color: '#C832FF', fontWeight: 'bold', border: 'none', background: 'transparent', cursor: 'pointer' },
  navLinks: { display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center' },
  navBtn: { background: 'transparent', color: '#CBD5E1', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '1em' },
  logoutBtn: { background: '#FF006E', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
};

export default Navbar;
