// components/Checklist.js
import React from 'react';

const Ours = () => {
  const items = [
    "A full-stack product development team managing the entire product lifecycle",
    "Product development driven by measurable goals and KPIs",
    "A wholehearted commitment to building scalable software",
    "Strategic development focused on achieving the highest ROI quickly",
    "Adherence to the highest and most sustainable standards for technical execution"
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

export default Ours;
