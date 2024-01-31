import React, { useState } from 'react';
import Twilio from 'twilio';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    if (message.trim() !== '') {
      const twilioClient = new Twilio('', '');
      await twilioClient.messages.create({
        body: message,
        from: '+19045132921',
        to: '+254704022354',
      });

      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
    
  );
};

export default MessageInput;
