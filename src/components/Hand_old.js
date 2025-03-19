
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDragStartIndex, reorderHandCards, selectCard, playCard } from '../redux/gameSlice';
import { getCardBaseImage, getCardEdition } from '../utils';

const Hand = () => {
  const handCards = useSelector(state => state.game.handCards);
  const dispatch = useDispatch();

  const handlePlay = (card) => {
    dispatch(playCard(card));
  };

  const dragStartIndex = useSelector((state) => state.game.dragStartIndex); // ✅ Correct usage

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index); // Optional, for robustness
    dispatch(setDragStartIndex(index));
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (e, dropIndex) => {
    if (dragStartIndex === null || dragStartIndex === undefined) return;
    if (dragStartIndex !== dropIndex) {
      dispatch(reorderHandCards({ fromIndex: dragStartIndex, toIndex: dropIndex }));
    }
  };

  return (
    // <div className="hand" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
    //   {handCards.map((card, i) => {
    //     const middle = Math.floor(handCards.length / 2);
    //     const rotate = (i - middle) * 2.5; // degrees, adjust spread
    //     const translateY = Math.abs(i - middle) * 4; // arc drop
    //     // return (
    //     //   <div
    //     //     key={i}
    //     //     className={className}
    //     //     style={{ 
    //     //       padding: '10px', 
    //     //       border: '1px solid blue', 
    //     //       cursor: 'pointer',
    //     //       transition: 'transform 0.3s ease', 
    //     //       marginLeft: i !== 0 ? '-2%' : '0px', // <- This causes overlap
    //     //       transform: `${card.selectCard ? 'translateY(-10px)' : `rotate(${rotate}deg) translateY(${translateY}px)`}`,
    //     //       zIndex: i,
    //     //     }}
    //     //     onClick={() => {
    //     //       // selectCard(i)
    //     //       dispatch(selectCard(i));
    //     //     }}
    //     //   >
    //     //     Card {card.Rank} {card.Suit}
    //     //   </div>
    //     // )
    //     return (
    //       <div
    //         key={i}
    //         className="card-wrapper"
    //         style={{
    //           transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
    //           zIndex: i,
    //           marginLeft: i !== 0 ? '-2%' : '0px',
    //         }}
    //       >
    //         <div
    //           key={card.id}
    //           className={`card hand-card ${card.selectCard ? 'hand-card-hover' : ''}`}
    //           onClick={() => dispatch(selectCard(i))}
    //         >
    //           <img src={getCardBaseImage(card)} alt="Base Card" className="card-layer" />
    //           <img src={getCardEdition(card)} alt="Edition" className="card-layer" />
    //           {card.enhancementImage && (
    //             <img src={card.enhancementImage} alt="Enhancement" className="card-layer" />
    //           )}
    //           {card.sealImage && (
    //             <img src={card.sealImage} alt="Seal" className="card-layer" />
    //           )}
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>

    <div className="hand">
      {handCards.map((card, i) => {
        const middle = Math.floor(handCards.length / 2);
        const rotate = (i - middle) * 2.5;
        const translateY = Math.abs(i - middle) * 4;

        return (
          <div
            key={i}
            className={`card-wrapper ${card.selectCard ? 'hand-card-hover' : ''}`}
            style={{
              transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
              // marginLeft: i !== 0 ? '-2%' : '0px',
              marginLeft: `${-8}px`, // Adjust for better spacing
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
            >
              <img src={getCardBaseImage(card)} className="card-layer" alt="Base" />
              <img src={getCardEdition(card)} className="card-layer" alt="Edition" />
              {card.enhancementImage && <img src={card.enhancementImage} className="card-layer" alt="Enhancer" />}
              {card.sealImage && <img src={card.sealImage} className="card-layer" alt="Seal" />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hand;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setDragStartIndex, reorderHandCards, selectCard } from '../redux/gameSlice';
// import { getCardBaseImage, getCardEdition } from '../utils';

// const Hand = () => {
//   const dispatch = useDispatch();
//   const handCards = useSelector((state) => state.game.handCards);
//   const dragStartIndex = useSelector((state) => state.game.dragStartIndex); // ✅ Correct usage

//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('index', index); // Optional, for robustness
//     dispatch(setDragStartIndex(index));
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault(); // Allow drop
//   };

//   const handleDrop = (e, dropIndex) => {
//     if (dragStartIndex === null || dragStartIndex === undefined) return;
//     if (dragStartIndex !== dropIndex) {
//       dispatch(reorderHandCards({ fromIndex: dragStartIndex, toIndex: dropIndex }));
//     }
//   };

//   return (
//     <div className="hand" style={{ display: 'flex', gap: '10px' }}>
//       {handCards.map((card, i) => (
//         <div
//           key={card.id}
//           className="card-wrapper"
//         >
//           <div
//             className={`card hand-card ${card.selectCard ? 'hand-card-hover' : ''}`}
//             onClick={() => dispatch(selectCard(i))}
//             style={{ position: 'relative' }}
//           >
//             <img src={getCardBaseImage(card)} alt="Base Card" className="card-layer" />
//             <img src={getCardEdition(card)} alt="Edition" className="card-layer" />
//             {card.enhancementImage && (
//               <img src={card.enhancementImage} alt="Enhancement" className="card-layer" />
//             )}
//             {card.sealImage && (
//               <img src={card.sealImage} alt="Seal" className="card-layer" />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Hand;
