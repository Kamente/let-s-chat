import React, { useState } from 'react';
import './Home.css';
import Message from './Message';
import MessageInput from './MessageInput';

const Home = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (content) => {
    const newMessage = {
      content,
      type: 'sent',
      timestamp: getCurrentTimestamp(),
    };
    setMessages([...messages, newMessage]);
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  return (
    <div className="home-display">
      <h2>Welcome to the Chat App</h2>
      <div className="chat-container">
        <div className="messages-received">
          {messages.map((msg, index) => (
            <Message key={index} {...msg} />
          ))}
        </div>
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default Home;
