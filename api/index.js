const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock data for testing
const mockMessages = {
  "1_2": [
    { id: 1, sender_id: 1, receiver_id: 2, text: "Hey! How are you?", emoji_reaction: null, created_at: new Date() },
    { id: 2, sender_id: 2, receiver_id: 1, text: "I'm good! You?", emoji_reaction: null, created_at: new Date() }
  ],
  "1_3": [],
  "2_3": []
};

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: 'connected', message: 'BITS Connect Backend is running!' });
});

// Get messages
app.get('/api/messages/:senderId/:receiverId', (req, res) => {
  const { senderId, receiverId } = req.params;
  const key = `${senderId}_${receiverId}`;
  
  res.json({ success: true, messages: mockMessages[key] || [] });
});

// Send message
app.post('/api/messages', (req, res) => {
  const { sender_id, receiver_id, text } = req.body;

  if (!sender_id || !receiver_id || !text) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  const key = `${sender_id}_${receiver_id}`;
  if (!mockMessages[key]) {
    mockMessages[key] = [];
  }

  const newMsg = {
    id: Date.now(),
    sender_id,
    receiver_id,
    text,
    emoji_reaction: null,
    created_at: new Date()
  };

  mockMessages[key].push(newMsg);
  res.json({ success: true, message: newMsg });
});

// Emoji reaction
app.put('/api/messages/:messageId/emoji', (req, res) => {
  const { messageId } = req.params;
  const { emoji } = req.body;

  const validEmojis = ['❤️', '👍', '😊', '😢', '😠', '🎉', '😴', '🤔', '🎊', '📚', '🍕', '💪'];

  if (!validEmojis.includes(emoji)) {
    return res.status(400).json({ success: false, error: 'Invalid emoji' });
  }

  res.json({ success: true, message: { id: messageId, emoji_reaction: emoji } });
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
