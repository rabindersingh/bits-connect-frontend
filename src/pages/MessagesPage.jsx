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
      <div className="message-container">
        <div className="message-header">
          <button onClick={() => setSelectedConv(null)} className="back-btn">←</button>
          <div className="header-info">
            <div className="avatar">{selectedConv.avatar}</div>
            <h2 className="header-name">{selectedConv.name}</h2>
          </div>
          <div style={{ width: '40px' }}></div>
        </div>

        <div className="messages-area">
          {convMessages.map((msg) => (
            <div key={msg.id} className={msg.isUser ? 'msg msg-user' : 'msg msg-other'}>
              <div>
                <p className="msg-text">{msg.text}</p>
                <p className="msg-time">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="input-wrapper">
          <input 
            type="text" 
            className="message-input"
            placeholder="Type message..." 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="send-btn">Send</button>
        </div>

        <style>{`
          .message-container {
            max-width: 100%;
            margin: 0;
            padding: 15px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
          }
          
          .message-header {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(99,102,241,0.15);
            border-radius: 12px;
            padding: 12px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .back-btn {
            background: transparent;
            border: none;
            color: #6366F1;
            font-size: 1.5em;
            cursor: pointer;
            padding: 5px;
            flex-shrink: 0;
          }
          
          .header-info {
            text-align: center;
            flex: 1;
          }
          
          .avatar {
            font-size: 2em;
            margin-bottom: 4px;
          }
          
          .header-name {
            color: #fff;
            margin: 0;
            font-size: clamp(0.9em, 4vw, 1.1em);
          }
          
          .messages-area {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(99,102,241,0.15);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 15px;
            min-height: 250px;
            max-height: 350px;
            overflow-y: auto;
            flex: 1;
          }
          
          .msg {
            margin-bottom: 12px;
            display: flex;
          }
          
          .msg-user {
            justify-content: flex-end;
          }
          
          .msg-other {
            justify-content: flex-start;
          }
          
          .msg > div {
            color: #fff;
            padding: 10px 12px;
            border-radius: 10px;
            max-width: 75%;
            word-wrap: break-word;
          }
          
          .msg-user > div {
            background: #6366F1;
          }
          
          .msg-other > div {
            background: rgba(99,102,241,0.2);
            color: #CBD5E1;
          }
          
          .msg-text {
            margin: 0 0 4px 0;
            font-size: clamp(0.8em, 3vw, 0.9em);
          }
          
          .msg-time {
            margin: 0;
            font-size: 0.65em;
            opacity: 0.7;
          }
          
          .input-wrapper {
            display: flex !important;
            gap: 8px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .message-input {
            flex: 1 !important;
            padding: 12px !important;
            background: rgba(255,255,255,0.05) !important;
            border: 2px solid rgba(99,102,241,0.15) !important;
            border-radius: 8px !important;
            color: #fff !important;
            font-family: Poppins !important;
            font-size: 1em !important;
            box-sizing: border-box !important;
            min-height: 45px !important;
            width: auto !important;
          }
          
          .send-btn {
            background: #6366F1 !important;
            color: #fff !important;
            border: none !important;
            padding: 12px 14px !important;
            border-radius: 8px !important;
            cursor: pointer !important;
            font-weight: 600 !important;
            font-size: 0.9em !important;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
            height: 45px !important;
            min-width: 60px !important;
          }
          
          @media (max-width: 768px) {
            .input-wrapper {
              display: flex !important;
              gap: 8px !important;
            }
            
            .message-input {
              flex: 1 !important;
              min-width: 0 !important;
            }
            
            .send-btn {
              min-width: 55px !important;
              padding: 10px 12px !important;
              font-size: 0.85em !important;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '100%', margin: '0', padding: '15px', boxSizing: 'border-box' }}>
      <h1 style={{ color: '#6366F1', textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(1.5em, 5vw, 2em)' }}>💬 Messages</h1>

      {conversations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '30px', color: '#CBD5E1' }}>
          <p>No conversations yet!</p>
        </div>
      ) : (
        <div>
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConv(conv)}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '12px', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div style={{ fontSize: '2em', flexShrink: 0 }}>{conv.avatar}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ color: '#fff', margin: '0 0 4px 0', fontSize: 'clamp(0.9em, 3vw, 1.1em)' }}>{conv.name}</h3>
                <p style={{ color: '#CBD5E1', margin: '0', fontSize: 'clamp(0.75em, 3vw, 0.85em)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{conv.lastMessage}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ color: '#94A3B8', fontSize: '0.7em', margin: '0 0 6px 0' }}>{conv.timestamp}</p>
                {conv.unread > 0 && (
                  <div style={{ background: '#6366F1', color: '#fff', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75em', fontWeight: '600' }}>
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
