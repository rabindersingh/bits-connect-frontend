import React, { useState, useEffect } from 'react';

const HomePage = ({ user }) => {
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    setConfessions([
      { id: 1, content: 'I\'m scared of failing my exams 😔', likes: 42 },
      { id: 2, content: 'The food in hostel is actually fire 🔥', likes: 156 },
      { id: 3, content: 'I love campus life', likes: 89 },
    ]);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔥 Welcome back, {user.name}!</h1>
      <div style={styles.feedContainer}>
        {confessions.map((confession) => (
          <div key={confession.id} style={styles.card}>
            <p style={styles.content}>"{confession.content}"</p>
            <div style={styles.footer}>
              <span style={styles.author}>Anonymous</span>
              <span style={styles.likes}>❤️ {confession.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '600px', margin: '20px auto', padding: '20px' },
  title: { color: '#B3FF00', textAlign: 'center', marginBottom: '30px' },
  feedContainer: { display: 'flex', flexDirection: 'column', gap: '15px' },
  card: { background: 'rgba(255, 255, 255, 0.05)', border: '2px solid rgba(200, 50, 255, 0.3)', borderRadius: '15px', padding: '20px', backdropFilter: 'blur(10px)' },
  content: { color: '#fff', fontSize: '1.1em', marginBottom: '15px', lineHeight: '1.6' },
  footer: { display: 'flex', justifyContent: 'space-between', color: '#999999', fontSize: '0.9em' },
  author: { color: '#00D9FF' },
  likes: { color: '#B3FF00' },
};

export default HomePage;
