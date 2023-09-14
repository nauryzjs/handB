import React, { useState } from 'react';
import FAQItem from './FAQItem';
import './FAQ.css'; // Импорт CSS

const FAQList = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq-list"> {/* Применение стиля к FAQList */}
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggleQuestion={() => toggleQuestion(index)}
        />
      ))}
    </div>
  );
};

export default FAQList;
