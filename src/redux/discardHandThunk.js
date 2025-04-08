import { discardHand, drawHand, sortHand } from "./gameSlice";

export const handleDiscardHand = () => (dispatch, getState) => {
  const state = getState().game;

  const selectedIds = state.selectedCards;
  if (state.discards >= state.totalDiscards) return;

  dispatch(discardHand());
  dispatch(drawHand());
  dispatch(sortHand());

  const updatedState = getState().game;
  console.log("Updated Hand Cards:", updatedState.handCards);
};