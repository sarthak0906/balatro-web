import React from "react";
import Scoreboard from "./Scoreboard";
import Jokers from "./Jokers";
import PlayedCards from "./PlayedCards";
import Hand from "./Hand";
import GameControls from "./GameControls";

const Game = () => {
  return (
    <div className="game-wrapper">
      <Scoreboard />
      <div className="game-area">
        <Jokers />
        <PlayedCards />
        <Hand />
        <GameControls />
      </div>
    </div>
  );
};

export default Game;