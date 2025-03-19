import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDragStartIndex, reorderHandCards, selectCard, playCard } from '../redux/gameSlice';
import { getCardBaseImage, getCardEdition } from '../utils';


const Hand = () => {
  const handCards = useSelector(state => state.game.handCards);
  const dragStartIndex = useSelector(state => state.game.dragStartIndex);
  const dispatch = useDispatch();

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    dispatch(setDragStartIndex(index));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, dropIndex) => {
    if (dragStartIndex === null || dragStartIndex === undefined) return;
    if (dragStartIndex !== dropIndex) {
      dispatch(reorderHandCards({ fromIndex: dragStartIndex, toIndex: dropIndex }));
    }
  };

  return (
    <div className="hand">
      {handCards.map((card, i) => {
        const middle = Math.floor(handCards.length / 2);
        const rotate = (i - middle) * 2.5;
        const translateY = Math.abs(i - middle) * 4;

        return (
          <div
            key={card.id}
            className={`card-wrapper ${card.selectCard ? 'hand-card-hover' : ''}`}
            style={{
              transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
              marginLeft: `${-8}px`,
              zIndex: card.selectCard ? 100 : i,
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, i)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, i)}
          >
            <div
              className={`card hand-card ${card.selectCard ? 'hand-card-hover' : ''}`}
              onClick={() => dispatch(selectCard(i))}
              style={{ position: 'relative' }}
            >
              {/* Render in proper layer order — base card on top */}
              {card.sealImage && (
                <img src={card.sealImage} alt="Seal" className="card-layer card-seal" />
              )}
              {card.enhancementImage && (
                <img src={card.enhancementImage} alt="Enhancement" className="card-layer card-enhancement" />
              )}
              <img src={getCardEdition(card)} alt="Edition" className="card-layer card-edition" />
              <img src={getCardBaseImage(card)} alt="Base" className="card-layer card-base" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hand;
