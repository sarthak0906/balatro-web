
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { discardCard, resetGame } from '../redux/gameSlice';

const GameControls = () => {
  const handCards = useSelector(state => state.game.handCards);
  const dispatch = useDispatch();

  const handleDiscard = () => {
    if (handCards.length > 0) dispatch(discardCard(handCards[0]));
  };

  return (
    <div className="game-controls" style={{ display: 'flex', gap: '10px' }}>
      <button className="btn play">Play Hand</button>
      <button className="btn sort">Sort Hand</button>
      <button className="btn discard" onClick={handleDiscard}>Discard</button>
    </div>
  );
};

export default GameControls;
