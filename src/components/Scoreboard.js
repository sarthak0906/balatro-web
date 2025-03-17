
import React from 'react';
import { useSelector } from 'react-redux';

const Scoreboard = () => {
  const discards = useSelector(state => state.game.discards);

  return (
    <div className="scoreboard" style={{ width: '250px', padding: '20px' }}>
      <h3>The Goad</h3>
      <p>All Spade cards are debuffed</p>
      <p>Score at least <strong>18,000</strong></p>
      <p>Round Score: 7,236</p>
      <p>Flush lvl.1</p>
      <p>Hands: 1</p>
      <p>Discards: {discards}</p>
      <p>$32</p>
      <p>Round: 11</p>
    </div>
  );
};

export default Scoreboard;
