import React, { useState } from 'react';
import './NLPPage.css';
import { getNLPResponse } from '../services/services/services';

const NLPPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      try {
        const botResponse = await getNLPResponse(input);
        const botMessage = { sender: 'bot', text: botResponse };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error getting NLP response:', error);
        const botMessage = { sender: 'bot', text: 'Error getting response from server.' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }

      setInput('');
    }
  };

  return (
    <div className="nlp-page">
      <h1>NLP Chatbot</h1>
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender}`}
            >
              {msg.text.result}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default NLPPage;
