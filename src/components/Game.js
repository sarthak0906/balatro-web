
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Scoreboard from './Scoreboard';
import Jokers from './Jokers';
import PlayedCards from './PlayedCards';
import Hand from './Hand';
import GameControls from './GameControls';
import { setInitialDeck, startRound } from "../redux/gameSlice";
import Consumables from './Consumables';

const Game = ({initialDeck}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialDeck && initialDeck.length > 0) {
      dispatch(setInitialDeck(initialDeck));
      dispatch(startRound());
    }
  }, [dispatch, initialDeck]);

  return (
    <div className="game-wrapper" style={{ display: 'flex' }}>
      <Scoreboard />
      <div className="game-area" style={{ flex: 1, padding: '20px' }}>
        <div className="top-row">
          <Jokers />
          <Consumables />
        </div>
        <PlayedCards />
        <Hand />
        <GameControls />
      </div>
    </div>
  );
};

export default Game;
