import React from "react";
import { useGameState } from "../useGameState";

const Hand = () => {
  const { handCards, moveCard } = useGameState();

  return (
    <div className="hand">
      {handCards.map((card, i) => (
        <div className="card hand-card" key={i} onClick={() => moveCard(i)}>
          Card {card}
        </div>
      ))}
    </div>
  );
};

export default Hand;
