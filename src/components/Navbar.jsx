import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout, isAdmin }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <Link to="/" style={styles.logo}>🔥 BITS</Link>
        <ul style={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vibe-matcher">Vibe</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {isAdmin && <li><Link to="/admin" style={styles.adminLink}>👨‍💼 Admin</Link></li>}
          <li><button onClick={onLogout} style={styles.logoutBtn}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { background: 'rgba(15, 12, 41, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '2px solid rgba(200, 50, 255, 0.2)', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 1000 },
  navContent: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: '1.8em', color: '#C832FF', fontWeight: 'bold', textDecoration: 'none' },
  navLinks: { display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center' },
  adminLink: { color: '#FF006E' },
  logoutBtn: { background: '#FF006E', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
};

export default Navbar;
