import React from 'react';
import { useSelector } from 'react-redux';
import './Scoreboard.css';
import { EDITIONS } from '../constant';
import { getPokerHandType } from '../utils';

const Scoreboard = () => {
  const handChip = useSelector(state => state.game.handChip);
  const handMult = useSelector(state => state.game.handMult);
  const discards = useSelector(state => state.game.discards);
  const totalDiscards = useSelector(state => state.game.totalDiscards);
  const hands = useSelector(state => state.game.hands);
  const totalHands = useSelector(state => state.game.totalHands);
  const money = useSelector(state => state.game.money);
  const ante = useSelector(state => state.game.ante);
  const round = useSelector(state => state.game.round);
  const roundScore = useSelector(state => state.game.roundScore);
  const roundGoal = useSelector(state => state.game.roundGoal);
  const roundReward = useSelector(state => state.game.roundReward);
  const currentHandType = useSelector(state => state.game.currentHandType);

  return (
    <div className="scoreboard-container">
      <div className="scoreboard-header">
        <h3>Small Blind</h3>
      </div>
      <div className="scoreboard-content">
        <img src="http://localhost:3000/assets/editions/${EDITIONS[edition].fileName}.png" alt="Small Blind Chip" className="small-blind-chip" />
        <div className="score-goal">
          <p>Score at least <span className="score">{roundGoal}</span></p>
          <p className="reward">Reward: {'$'.repeat(roundReward)}</p>
        </div>
        <div className="round-score">Round score: {roundScore}</div>
        <div className="hand-status">
          <p className="hand-rank">{currentHandType.name} <span className="level">{currentHandType.level}</span></p>
          <p className="hand-multiplier"><span className="value">{handChip}</span> x <span className="multiplier">{handMult}</span></p>
        </div>
        <div className="hand-info">
          <p>Hands <span className="hands">{totalHands - hands}</span></p>
          <p>Discards <span className="discards">{totalDiscards - discards}</span></p>
        </div>
        <div className="money">${money}</div>
        <div className="round-info">
          <p>Ante <span className="ante">{ante}/8</span></p>
          <p>Round <span className="round">{round}</span></p>
        </div>
        <button className="run-info">Run Info</button>
        <button className="options">Options</button>
      </div>
    </div>
  );
};

export default Scoreboard;
