import { playHand } from "./gameSlice";

export const handlePlayHand = () => (dispatch, getState) => {
  const state = getState().game;

  console.log("=== Inside handlePlayHand thunk ===");
  console.log("Selected Cards:", state.selectedCards);
  console.log("Hand Cards:", state.handCards);
  console.log("Played Cards:", state.playedCards);
  console.log("Discards:", state.discards);

  // You can do calculations here too if needed
  // e.g., calculate total points, determine card patterns, etc.

  // Optionally dispatch a reducer action after this
  dispatch(playHand()); // if you still want to trigger state changes
};

export const handleScoring = () => (dispatch, getState) => {
  const state = getState().game;


}