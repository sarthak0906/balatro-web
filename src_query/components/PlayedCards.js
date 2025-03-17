import React, { useEffect } from "react";
import { useGameState } from "../useGameState";

const PlayedCards = () => {
  const { playedCards } = useGameState();

  useEffect(() => {
    console.log("--------------", playedCards);
  }, [playedCards]);

  return (
    <div className="played-cards">
      <h4>Played Cards</h4>
      {playedCards.map((card, i) => (
        <div className="card played" key={i}>
          Card {card}
        </div>
      ))}
    </div>
  );
};

export default PlayedCards;
