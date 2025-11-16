import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    API.get('/faqs')
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error('Error fetching FAQs:', error));
  }, []);

  return (
    <div className="container" style={{ padding: '28px 0' }}>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list" style={{ marginTop: 12 }}>
        {faqs.map((faq) => (
          <div key={faq._id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}