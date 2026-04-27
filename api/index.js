const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Parse DATABASE_URL properly
const connectionString = process.env.DATABASE_URL;
console.log('Connecting to database...');

const pool = new Pool({
  connectionString: connectionString,
  application_name: 'bits-connect'
});

// Test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ DB Error:', err.message);
  } else {
    console.log('✅ DB Connected');
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: 'connected', message: 'BITS Connect Backend is running!' });
});

// Get messages
app.get('/api/messages/:senderId/:receiverId', (req, res) => {
  const { senderId, receiverId } = req.params;
  
  pool.query(
    'SELECT * FROM messages WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1) ORDER BY created_at ASC',
    [parseInt(senderId), parseInt(receiverId)],
    (err, result) => {
      if (err) {
        res.status(500).json({ success: false, error: err.message });
      } else {
        res.json({ success: true, messages: result.rows });
      }
    }
  );
});

// Send message
app.post('/api/messages', (req, res) => {
  const { sender_id, receiver_id, text } = req.body;

  if (!sender_id || !receiver_id || !text) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  pool.query(
    'INSERT INTO messages (sender_id, receiver_id, text) VALUES ($1, $2, $3) RETURNING *',
    [sender_id, receiver_id, text],
    (err, result) => {
      if (err) {
        res.status(500).json({ success: false, error: err.message });
      } else {
        res.json({ success: true, message: result.rows[0] });
      }
    }
  );
});

// Emoji reaction
app.put('/api/messages/:messageId/emoji', (req, res) => {
  const { messageId } = req.params;
  const { emoji } = req.body;

  const validEmojis = ['❤️', '👍', '😊', '😢', '😠', '🎉', '😴', '🤔', '🎊', '📚', '🍕', '💪'];

  if (!validEmojis.includes(emoji)) {
    return res.status(400).json({ success: false, error: 'Invalid emoji' });
  }

  pool.query(
    'UPDATE messages SET emoji_reaction = $1 WHERE id = $2 RETURNING *',
    [emoji, parseInt(messageId)],
    (err, result) => {
      if (err) {
        res.status(500).json({ success: false, error: err.message });
      } else {
        res.json({ success: true, message: result.rows[0] });
      }
    }
  );
});

// Admin endpoints
app.get('/api/admin/stats', (req, res) => {
  res.json({ success: true, stats: { total: 3, approved: 1, pending: 2, crisis: 1 } });
});

app.get('/api/admin/queue', (req, res) => {
  res.json({ success: true, data: { pending: [{ id: 1, content: 'Test' }] } });
});

app.get('/api/admin/confessions', (req, res) => {
  res.json({ success: true, confessions: [{ id: 1, content: 'Test' }] });
});

app.get('/api/admin/crisis-alerts', (req, res) => {
  res.json({ success: true, alerts: [{ id: 1, content: 'Alert' }] });
});

module.exports = app;
