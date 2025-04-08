
// import React from 'react';
// import { useSelector } from 'react-redux';

// const PlayedCards = () => {
//   const playedCards = useSelector(state => state.game.playedCards);

//   return (
//     <div className="played-cards" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
//       <h4>Played Cards:</h4>
//       {playedCards.map((card, i) => (
//         <div key={i} className="card played" style={{ padding: '10px', border: '1px solid green' }}>
//           Card {card.Rank}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlayedCards;

import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import "./PlayedCards.css";
import { getCardEdition, getCardBaseImage } from '../utils';

const PlayedCards = () => {
  const playedCards = useSelector(state => state.game.playedCards);

  return (
    <div className="played-cards">
      <AnimatePresence>
        {playedCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div
              className={`card hand-card ${card.selectCard ? 'hand-card-hover' : ''}`}
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
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PlayedCards;
