
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortHand } from '../redux/gameSlice';
import { handlePlayHand } from '../redux/playHandThunk';
import { handleDiscardHand } from '../redux/discardHandThunk';

const GameControls = () => {
  const discards = useSelector(state => state.game.discards);
  const totalDiscards = useSelector(state => state.game.totalDiscards);
  const dispatch = useDispatch();

  return (
    <div className="game-controls" style={{ display: 'flex', gap: '10px' }}>
      <button className="btn play" onClick={() => dispatch(handlePlayHand())}>Play Hand</button>
      <button className="btn sort" onClick={() => dispatch(sortHand())}>Sort Hand</button>
      <button className="btn discard" disabled={discards >= totalDiscards ? true : false} onClick={() => dispatch(handleDiscardHand())}>Discard</button>
    </div>
  );
};

export default GameControls;
