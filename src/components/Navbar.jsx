import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout, isAdmin }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <button onClick={() => navigate('/')} style={styles.logo}>🔥 BITS</button>
        
        {/* Hamburger Menu - Mobile Only */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Nav Links - Desktop */}
        <ul style={{...styles.navLinks, display: window.innerWidth > 768 ? 'flex' : 'none'}}>
          <li><button onClick={() => navigate('/')} style={styles.navBtn}>Home</button></li>
          <li><button onClick={() => navigate('/announcements')} style={styles.navBtn}>📢</button></li>
          <li><button onClick={() => navigate('/vibe-matcher')} style={styles.navBtn}>Vibe</button></li>
          <li><button onClick={() => navigate('/messages')} style={styles.navBtn}>💬</button></li>
          <li><button onClick={() => navigate('/profile')} style={styles.navBtn}>Profile</button></li>
          {isAdmin && <li><button onClick={() => navigate('/admin')} style={{...styles.navBtn, color: '#FF006E'}}>Admin</button></li>}
          <li><button onClick={onLogout} style={styles.logoutBtn}>Logout</button></li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && window.innerWidth <= 768 && (
          <div style={styles.mobileMenu}>
            <button onClick={() => { navigate('/'); setMenuOpen(false); }} style={styles.mobileBtn}>Home</button>
            <button onClick={() => { navigate('/announcements'); setMenuOpen(false); }} style={styles.mobileBtn}>📢 Announcements</button>
            <button onClick={() => { navigate('/vibe-matcher'); setMenuOpen(false); }} style={styles.mobileBtn}>Vibe</button>
            <button onClick={() => { navigate('/messages'); setMenuOpen(false); }} style={styles.mobileBtn}>💬 Messages</button>
            <button onClick={() => { navigate('/profile'); setMenuOpen(false); }} style={styles.mobileBtn}>Profile</button>
            {isAdmin && <button onClick={() => { navigate('/admin'); setMenuOpen(false); }} style={styles.mobileBtn}>Admin</button>}
            <button onClick={onLogout} style={{...styles.mobileBtn, background: '#FF006E'}}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: { background: 'rgba(15, 12, 41, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '2px solid rgba(200, 50, 255, 0.2)', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 1000 },
  navContent: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' },
  logo: { fontSize: '1.5em', color: '#C832FF', fontWeight: 'bold', border: 'none', background: 'transparent', cursor: 'pointer' },
  navLinks: { listStyle: 'none', gap: '15px', alignItems: 'center', margin: 0, padding: 0 },
  navBtn: { background: 'transparent', color: '#CBD5E1', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '0.95em' },
  hamburger: { display: window.innerWidth > 768 ? 'none' : 'block', background: 'transparent', color: '#CBD5E1', border: 'none', fontSize: '1.5em', cursor: 'pointer' },
  mobileMenu: { position: 'absolute', top: '60px', right: '20px', background: 'rgba(15, 12, 41, 0.95)', border: '2px solid #6366F1', borderRadius: '12px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '200px', zIndex: 999 },
  mobileBtn: { background: 'transparent', color: '#CBD5E1', border: 'none', cursor: 'pointer', fontWeight: '600', padding: '10px', textAlign: 'left', borderRadius: '8px', fontSize: '0.95em' },
  logoutBtn: { background: '#FF006E', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
};

export default Navbar;
