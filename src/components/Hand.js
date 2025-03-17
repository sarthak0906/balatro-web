
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playCard, selectCard } from '../redux/gameSlice';

const Hand = () => {
  const handCards = useSelector(state => state.game.handCards);
  const dispatch = useDispatch();

  const handlePlay = (card) => {
    dispatch(playCard(card));
  };

  useEffect(() => {
    console.log(handCards);
  })

  return (
    <div className="hand" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      {handCards.sort((a, b) => b.Rank - a.Rank).map((card, i) => {
        const middle = Math.floor(handCards.length / 2);
        const rotate = (i - middle) * 2.5; // degrees, adjust spread
        const translateY = Math.abs(i - middle) * 4; // arc drop
        // return (
        //   <div
        //     key={i}
        //     className={className}
        //     style={{ 
        //       padding: '10px', 
        //       border: '1px solid blue', 
        //       cursor: 'pointer',
        //       transition: 'transform 0.3s ease', 
        //       marginLeft: i !== 0 ? '-2%' : '0px', // <- This causes overlap
        //       transform: `${card.selectCard ? 'translateY(-10px)' : `rotate(${rotate}deg) translateY(${translateY}px)`}`,
        //       zIndex: i,
        //     }}
        //     onClick={() => {
        //       console.log(i);
        //       // selectCard(i)
        //       dispatch(selectCard(i));
        //     }}
        //   >
        //     Card {card.Rank} {card.Suit}
        //   </div>
        // )
        return (
          <div
            key={i}
            className="card-wrapper"
            style={{
              transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
              zIndex: i,
              marginLeft: i !== 0 ? '-2%' : '0px',
            }}
          >
            <div
              className={`card hand-card ${card.selectCard ? 'hand-card-hover' : ''}`}
              onClick={() => dispatch(selectCard(i))}
            >
              Card {card.Rank} {card.Suit}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hand;
