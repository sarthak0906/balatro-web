
import React from 'react';

const Consumables = () => {
  return (
    <div className="consumables" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      {[1, 2].map((j, i) => (
        <div className="card consumables-card" key={i} style={{ padding: '10px', border: '1px solid black' }}>
          Consumable {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Consumables;
