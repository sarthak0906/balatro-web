import { useDraggable } from '@dnd-kit/core';
import { getCardBaseImage, getCardEdition } from '../utils';

const DraggableCard = ({ card, index }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    zIndex: transform ? 999 : index,
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div
        className={`card hand-card ${card.selectCard ? 'hand-card-hover' : ''}`}
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
      </div>
    </div>
  );
};

export default DraggableCard;