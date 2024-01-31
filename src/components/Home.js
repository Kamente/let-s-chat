// Home.js
import React from 'react';
import './Home.css';
import Message from './Message';

const Home = () => {
  return (
    <div className='home-display'>
      <h2>Welcome to the Chat App</h2>
      <div className="chat-container">
        <Message content="Sent message goes here" type="sent" timestamp="12:34 PM" />
        <Message content="Received message goes here" type="received" timestamp="12:35 PM" />
        {/* Add more messages as needed */}
      </div>
    </div>
  );
};

export default Home;
