import React, { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../supabaseClient';

const MessagesPage = ({ user }) => {
  const [selectedConv, setSelectedConv] = useState(null);
  const [conversations] = useState([
    { id: 1, name: 'Alex Kumar', avatar: '👨‍💻', userId: 1 },
    { id: 2, name: 'Jordan Patel', avatar: '🎨', userId: 2 },
    { id: 3, name: 'Casey Singh', avatar: '💼', userId: 3 }
  ]);

  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [hoveredMessageId, setHoveredMessageId] = useState(null);
  const pollingIntervalRef = useRef(null);

  const validEmojis = ['❤️', '👍', '😊', '😢', '😠', '🎉', '😴', '🤔', '🎊', '📚', '🍕', '💪'];

  const fetchMessages = useCallback(async (receiverId) => {
    try {
      const senderId = 1;
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(`and(sender_id.eq.${senderId},receiver_id.eq.${receiverId}),and(sender_id.eq.${receiverId},receiver_id.eq.${senderId})`)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(prev => ({
          ...prev,
          [receiverId]: data.map(msg => ({
            id: msg.id,
            from: msg.sender_id === senderId ? 'You' : selectedConv?.name,
            text: msg.text,
            time: new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isUser: msg.sender_id === senderId,
            emoji: msg.emoji_reaction
          }))
        }));
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }, [selectedConv?.name]);

  useEffect(() => {
    if (selectedConv) {
      // Fetch messages immediately
      fetchMessages(selectedConv.userId);
      
      // Poll every 1 second for new messages and emoji updates
      pollingIntervalRef.current = setInterval(() => {
        fetchMessages(selectedConv.userId);
      }, 1000);

      return () => {
        if (pollingIntervalRef.current) {
          clearInterval(pollingIntervalRef.current);
        }
      };
    }
  }, [selectedConv, fetchMessages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConv) return;

    try {
      const senderId = 1;
      const receiverId = selectedConv.userId;
      
      const { data, error } = await supabase
        .from('messages')
        .insert([{
          sender_id: senderId,
          receiver_id: receiverId,
          text: newMessage,
          emoji_reaction: null
        }])
        .select();

      if (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message');
      } else {
        setNewMessage('');
        // Fetch immediately after sending
        setTimeout(() => fetchMessages(receiverId), 500);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  const handleEmojiReaction = async (messageId, emoji) => {
    if (!selectedConv) return;

    try {
      const { error } = await supabase
        .from('messages')
        .update({ emoji_reaction: emoji })
        .eq('id', messageId);

      if (error) {
        console.error('Error adding emoji:', error);
      } else {
        // Fetch immediately after emoji update
        setTimeout(() => fetchMessages(selectedConv.userId), 300);
      }
    } catch (error) {
      console.error('Error adding emoji:', error);
    }
  };

  if (selectedConv) {
    const convMessages = messages[selectedConv.userId] || [];
    return (
      <div style={{ maxWidth: '100%', margin: '0', padding: '15px', minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        {/* Header */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '12px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => setSelectedConv(null)} style={{ background: 'transparent', border: 'none', color: '#6366F1', fontSize: '1.5em', cursor: 'pointer', padding: '5px' }}>←</button>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '2em', marginBottom: '4px' }}>{selectedConv.avatar}</div>
            <h2 style={{ color: '#fff', margin: '0', fontSize: 'clamp(0.9em, 4vw, 1.1em)' }}>{selectedConv.name}</h2>
          </div>
          <div style={{ width: '40px' }}></div>
        </div>

        {/* Messages Area */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '15px', marginBottom: '15px', minHeight: '250px', maxHeight: '350px', overflowY: 'auto', flex: 1 }}>
          {convMessages.length === 0 ? (
            <p style={{ color: '#CBD5E1', textAlign: 'center' }}>No messages yet. Start the conversation!</p>
          ) : (
            convMessages.map((msg) => (
              <div key={msg.id} style={{ marginBottom: '20px', display: 'flex', justifyContent: msg.isUser ? 'flex-end' : 'flex-start' }}>
                <div 
                  style={{ maxWidth: '75%' }}
                  onMouseEnter={() => setHoveredMessageId(msg.id)}
                  onMouseLeave={() => setHoveredMessageId(null)}
                >
                  {/* Message bubble */}
                  <div style={{ background: msg.isUser ? '#6366F1' : 'rgba(99,102,241,0.2)', color: msg.isUser ? '#fff' : '#CBD5E1', padding: '10px 12px', borderRadius: '10px', wordWrap: 'break-word' }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: 'clamp(0.8em, 3vw, 0.9em)' }}>{msg.text}</p>
                    <p style={{ margin: '0', fontSize: '0.65em', opacity: 0.7 }}>{msg.time}</p>
                  </div>

                  {/* Emoji reactions */}
                  {(hoveredMessageId === msg.id || msg.emoji) && (
                    <div style={{ 
                      display: 'flex', 
                      gap: '4px', 
                      flexWrap: 'wrap', 
                      marginTop: '8px',
                      padding: '8px',
                      background: 'rgba(99,102,241,0.1)',
                      borderRadius: '8px'
                    }}>
                      {validEmojis.map(emoji => (
                        <button
                          key={emoji}
                          onClick={() => handleEmojiReaction(msg.id, emoji)}
                          style={{
                            background: msg.emoji === emoji ? '#6366F1' : 'transparent',
                            border: msg.emoji === emoji ? '2px solid #fff' : '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '6px 8px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '1em',
                            transition: 'all 0.2s',
                            fontWeight: msg.emoji === emoji ? '600' : '400'
                          }}
                          title={emoji}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.emoji && (
                    <p style={{ margin: '6px 0 0 0', fontSize: '0.85em', color: '#0EA5E9' }}>Reacted: {msg.emoji}</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <div style={{ display: 'flex', gap: '8px', width: '100%', boxSizing: 'border-box' }}>
          <input 
            type="text" 
            placeholder="Message..." 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            style={{ 
              width: 'calc(100% - 70px)',
              padding: '12px', 
              background: 'rgba(255,255,255,0.05)', 
              border: '2px solid rgba(99,102,241,0.15)', 
              borderRadius: '8px', 
              color: '#fff', 
              fontFamily: 'Poppins', 
              fontSize: '1em',
              boxSizing: 'border-box'
            }}
          />
          <button 
            onClick={handleSendMessage} 
            style={{ 
              width: '62px',
              background: '#6366F1', 
              color: '#fff', 
              border: 'none', 
              padding: '12px', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontWeight: '600', 
              fontSize: '0.9em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxSizing: 'border-box'
            }}
          >
            Send
          </button>
        </div>
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
                <p style={{ color: '#CBD5E1', margin: '0', fontSize: 'clamp(0.75em, 3vw, 0.85em)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Click to chat...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
