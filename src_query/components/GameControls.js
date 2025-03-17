import React from "react";
import { useGameState } from "../useGameState";

const GameControls = () => {
  const { resetGame } = useGameState();

  return (
    <div className="game-controls">
      <button className="btn play">Play Hand</button>
      <button className="btn sort">Sort Hand</button>
      <button className="btn discard" disabled>Discard</button>
      <button className="btn reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default GameControls;
