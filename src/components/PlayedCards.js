
import React from 'react';
import { useSelector } from 'react-redux';

const PlayedCards = () => {
  const playedCards = useSelector(state => state.game.playedCards);

  return (
    <div className="played-cards" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <h4>Played Cards:</h4>
      {playedCards.map((card, i) => (
        <div key={i} className="card played" style={{ padding: '10px', border: '1px solid green' }}>
          Card {card.Rank}
        </div>
      ))}
    </div>
  );
};

export default PlayedCards;
