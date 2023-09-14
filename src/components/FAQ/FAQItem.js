import React from 'react';
import './FAQ.css'; // Импорт CSS

const FAQItem = ({ question, answer, isOpen, toggleQuestion }) => {
  return (
    <div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={toggleQuestion}
    >
      <h2>{question}</h2>
      <div className="faq-answer">{answer}</div>
    </div>
  );
};

export default FAQItem;
