import React, { useState } from 'react';

const MessagesPage = ({ user }) => {
  const [selectedConv, setSelectedConv] = useState(null);
  const [conversations] = useState([
    { id: 1, name: 'Alex Kumar', lastMessage: 'Hey! How are you?', timestamp: '2 mins ago', unread: 2, avatar: '👨‍💻' },
    { id: 2, name: 'Jordan Patel', lastMessage: 'That sounds fun!', timestamp: '1 hour ago', unread: 0, avatar: '🎨' },
    { id: 3, name: 'Casey Singh', lastMessage: 'Let me know when you are free', timestamp: '3 hours ago', unread: 1, avatar: '💼' }
  ]);

  const [messages] = useState({
    1: [
      { id: 1, from: 'Alex Kumar', text: 'Hey! How are you?', time: '2:30 PM', isUser: false },
      { id: 2, from: 'You', text: 'I\'m good! How about you?', time: '2:31 PM', isUser: true },
      { id: 3, from: 'Alex Kumar', text: 'Great! Wanna grab coffee?', time: '2:32 PM', isUser: false }
    ],
    2: [
      { id: 1, from: 'Jordan Patel', text: 'Did you watch the new movie?', time: '1:15 PM', isUser: false },
      { id: 2, from: 'You', text: 'Not yet! Is it good?', time: '1:16 PM', isUser: true },
      { id: 3, from: 'Jordan Patel', text: 'That sounds fun!', time: '1:20 PM', isUser: false }
    ],
    3: [
      { id: 1, from: 'Casey Singh', text: 'Wanna study together?', time: '10:00 AM', isUser: false },
      { id: 2, from: 'You', text: 'Sure! When?', time: '10:05 AM', isUser: true },
      { id: 3, from: 'Casey Singh', text: 'Let me know when you are free', time: '10:10 AM', isUser: false }
    ]
  });

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  if (selectedConv) {
    const convMessages = messages[selectedConv.id] || [];
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', minHeight: '100vh' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => setSelectedConv(null)} style={{ background: 'transparent', border: 'none', color: '#6366F1', fontSize: '1.2em', cursor: 'pointer' }}>← Back</button>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2em', marginBottom: '5px' }}>{selectedConv.avatar}</div>
            <h2 style={{ color: '#fff', margin: '0', fontSize: '1.2em' }}>{selectedConv.name}</h2>
          </div>
          <div style={{ width: '30px' }}></div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '20px', marginBottom: '20px', minHeight: '400px', maxHeight: '500px', overflowY: 'auto' }}>
          {convMessages.map((msg) => (
            <div key={msg.id} style={{ marginBottom: '15px', display: 'flex', justifyContent: msg.isUser ? 'flex-end' : 'flex-start' }}>
              <div style={{ background: msg.isUser ? '#6366F1' : 'rgba(99,102,241,0.2)', color: msg.isUser ? '#fff' : '#CBD5E1', padding: '10px 15px', borderRadius: '12px', maxWidth: '70%', wordWrap: 'break-word' }}>
                <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}>{msg.text}</p>
                <p style={{ margin: '0', fontSize: '0.75em', opacity: 0.7 }}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            style={{ flex: 1, padding: '12px 15px', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(99,102,241,0.15)', borderRadius: '8px', color: '#fff', fontFamily: 'Poppins' }}
          />
          <button onClick={handleSendMessage} style={{ background: '#6366F1', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Send</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '30px' }}>💬 Messages</h1>

      {conversations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#CBD5E1' }}>
          <p>No conversations yet. Match with someone to start chatting!</p>
        </div>
      ) : (
        <div>
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConv(conv)}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '15px', marginBottom: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px' }}
            >
              <div style={{ fontSize: '2.5em' }}>{conv.avatar}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#fff', margin: '0 0 5px 0' }}>{conv.name}</h3>
                <p style={{ color: '#CBD5E1', margin: '0', fontSize: '0.9em' }}>{conv.lastMessage}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#94A3B8', fontSize: '0.85em', margin: '0 0 8px 0' }}>{conv.timestamp}</p>
                {conv.unread > 0 && (
                  <div style={{ background: '#6366F1', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85em', fontWeight: '600' }}>
                    {conv.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
