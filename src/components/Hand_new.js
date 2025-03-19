import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDragStartIndex, reorderHandCards, selectCard } from '../redux/gameSlice';
import { getCardBaseImage, getCardEdition } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Hand = () => {
  const dispatch = useDispatch();
  const handCards = useSelector((state) => state.game.handCards);
  const dragStartIndex = useSelector((state) => state.game.dragStartIndex);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    dispatch(setDragStartIndex(index));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, dropIndex) => {
    if (dragStartIndex == null) return;
    if (dragStartIndex !== dropIndex) {
      dispatch(reorderHandCards({ fromIndex: dragStartIndex, toIndex: dropIndex }));
    }
  };

  return (
    <div className="hand">
      <AnimatePresence initial={false}>
        {handCards.map((card, i) => {
          const middle = Math.floor(handCards.length / 2);
          const rotate = (i - middle) * 1.5;
          const translateY = Math.abs(i - middle) * 4;
          return (
            <motion.div
              key={card.id}
              className="card-wrapper"
              draggable
              onDragStart={(e) => handleDragStart(e, i)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, i)}
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
                // marginLeft: i !== 0 ? '-2%' : '0px',
                marginLeft: `${-8}px`, // Adjust for better spacing
                zIndex: card.selectCard ? 100 : i,
              }}
            >
              {/* <div
                className={`card hand-card ${card.selectCard ? 'hand-card-hover' : ''}`}
                onClick={() => dispatch(selectCard(i))}
                style={{ position: 'relative' }}
              >
                <img src={getCardBaseImage(card)} alt="Base Card" className="card-layer" />
                <img src={getCardEdition(card)} alt="Edition" className="card-layer" />
                {card.enhancementImage && (
                  <img src={card.enhancementImage} alt="Enhancement" className="card-layer" />
                )}
                {card.sealImage && (
                  <img src={card.sealImage} alt="Seal" className="card-layer" />
                )}
              </div> */}
              <div className="card hand-card" onClick={() => dispatch(selectCard(i))} style={{ position: 'relative' }}>
                {card.sealImage && <img src={card.sealImage} className="card-layer card-seal" />}
                {card.enhancementImage && <img src={card.enhancementImage} className="card-layer card-enhancement" />}
                <img src={getCardEdition(card)} className="card-layer card-edition" />
                <img src={getCardBaseImage(card)} className="card-layer card-base" />
              </div>
  
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  );
};

export default Hand;
