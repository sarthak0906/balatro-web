
import React from 'react';

const Jokers = () => {
  return (
    <div className="jokers" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      {[1, 2, 3, 4, 5].map((j, i) => (
        <div className="card joker-card" key={i} style={{ padding: '10px', border: '1px solid black' }}>
          Joker {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Jokers;
