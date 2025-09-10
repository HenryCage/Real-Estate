import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book an apartment?",
      answer: "You can book by contacting us directly via phone, email, or through our website contact form."
    },
    {
      question: "Where is your office located?",
      answer: "We are located at 53 Ikota shopping complex, Victoria Garden City, Lagos, Nigeria."
    },
    {
      question: "Do you offer international services?",
      answer: "Yes, we also operate in the US with our head office located in Dover, Delaware."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit/debit cards, and other secure payment methods."
    },
    {
      question: "What does Real Housing specialises in?",
      answer: "Real Housing is a renowned real estate development company that specializes in building high-quality homes and investment properties in Lagos and Lekki. Our expertise lies in curating unique and luxurious housing solutions."
    }
  ];

  const toggleFAQ = (index) => {
    // Only one open at a time
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            
            <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>{faq.answer}</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
