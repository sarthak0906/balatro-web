import { discardHand, drawHand } from "./gameSlice";

export const handleDiscardHand = () => (dispatch, getState) => {
  const state = getState().game;

  const selectedIds = state.selectedCards;
  if (state.discards >= state.totalDiscards) return;

  dispatch(discardHand());
  dispatch(drawHand());

  const updatedState = getState().game;
  console.log("Updated Hand Cards:", updatedState.handCards);
};