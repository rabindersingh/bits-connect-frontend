import React from 'react';

const AdminDashboard = () => {
  const stats = { total: 3, approved: 1, pending: 2, crisis: 1 };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛡️ Admin Dashboard</h1>
      <div style={styles.statsGrid}>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} style={styles.statCard}>
            <h3 style={styles.statLabel}>{key}</h3>
            <p style={styles.statValue}>{value}</p>
          </div>
        ))}
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📋 Pending Confessions</h2>
        <p style={styles.text}>2 confessions waiting for review</p>
        <button style={styles.button}>Review Now →</button>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🚨 Crisis Alerts</h2>
        <p style={styles.text}>1 high-priority alert</p>
        <button style={{...styles.button, background: '#FF006E'}}>Handle Alert →</button>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '20px' },
  title: { color: '#C832FF', marginBottom: '30px', textAlign: 'center' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' },
  statCard: { background: 'rgba(255, 255, 255, 0.05)', border: '2px solid #00D9FF', borderRadius: '15px', padding: '20px', textAlign: 'center' },
  statLabel: { color: '#00D9FF', fontSize: '0.9em', marginBottom: '10px', textTransform: 'capitalize' },
  statValue: { color: '#B3FF00', fontSize: '2.5em', fontWeight: 'bold', margin: '0' },
  section: { background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(200, 50, 255, 0.2)', borderRadius: '15px', padding: '20px', marginBottom: '20px' },
  sectionTitle: { color: '#00D9FF', marginBottom: '10px' },
  text: { color: '#CCCCCC', marginBottom: '15px' },
  button: { background: '#C832FF', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1em' },
};

export default AdminDashboard;
