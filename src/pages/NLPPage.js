import React, { useState } from 'react';
import './NLPPage.css';

const NLPPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      // Simulate chatbot response
      const botMessage = { sender: 'bot', text: `You said: ${input}` };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

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
              {msg.text}
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
