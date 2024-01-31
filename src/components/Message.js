// Message.js
import React from 'react';
import './Message.css'; // Create this CSS file for styling

const Message = ({ content, type, timestamp }) => {
  return (
    <div className={`message ${type}`}>
      <p>{content}</p>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};

export default Message;
