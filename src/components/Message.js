import React from 'react';
import './Message.css'; 

const Message = ({ content, type, timestamp }) => {
  return (
    <div className={`message ${type}`}>
      <p>{content}</p>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};

export default Message;
