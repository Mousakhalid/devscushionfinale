// components/Checklist.js
import React from 'react';

const Checklist = () => {
  const items = [
    "User insights-driven design, informed by comprehensive research",
    "Rigorous assumption and user testing for precise design",
    "Creating and implementing a cohesive, organized design system",
    "Efficient resource use and allocation with ROI-driven design",
    "Consistent, regular, and transparent communication"
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', fontSize: '1rem', lineHeight: '1.6' }}>
      {items.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <div
            style={{
              width: '1.25rem',
              height: '1.25rem',
              borderRadius: '50%',
              border: '2px solid #A27BEB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.5rem'
            }}
          >
            <span style={{ color: '#A27BEB', fontSize: '1rem' }}>✔</span>
          </div>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
