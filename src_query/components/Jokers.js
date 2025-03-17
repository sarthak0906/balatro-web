import React from "react";

const Jokers = () => {
  return (
    <div className="jokers">
      {[1, 2, 3, 4, 5].map((j, i) => (
        <div className="card joker-card" key={i}>
          Joker {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Jokers;