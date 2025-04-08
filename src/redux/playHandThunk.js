import { getPokerHandType } from "../utils";
import { drawHand, playHand, sortHand, updateRoundScore } from "./gameSlice";

// export const handlePlayHand = () => (dispatch, getState) => {
//   const state = getState().game;

//   console.log("------------", state.selectedCards);
//   // You can do calculations here too if needed
//   // e.g., calculate total points, determine card patterns, etc.

//   const {chips, mult} = handleScoring(state.selectedCards, state.handTypes);

//   console.log("CHIPSSS = ", chips);
//   console.log("MULTTTT = ", mult);
//   dispatch(updateRoundScore(chips * mult));

//   dispatch(playHand()); // if you still want to trigger state changes
//   dispatch(drawHand());
//   dispatch(sortHand());
// };

export const handlePlayHand = () => async (dispatch, getState) => {
  const state = getState().game;
  const playedCards = state.selectedCards;

  const { chips, mult } = handleScoring(playedCards, state.handTypes);
  const scoreToAdd = chips * mult;

  dispatch(playHand());

  // Animate each card with a delay for scoring
  for (let i = 0; i < playedCards.length; i++) {
    const card = playedCards[i];

    await new Promise(resolve => setTimeout(resolve, 400)); // 400ms delay per card

    dispatch(updateRoundScore(card.Chips || 0)); // update per card
  }

  // Add base hand score
  dispatch(updateRoundScore(scoreToAdd));

  dispatch(drawHand());
  dispatch(sortHand());
};


export const handleScoring = (playedCards, handTypes) => {
  // Trigger Jokers

  console.log(playedCards, handTypes);
  const handScore = getPokerHandType(playedCards, handTypes);
  console.log("handScore = ", handScore);

  let chips = handScore.base_chips;
  let mult  = handScore.base_mult ;

  // Trigger Jokers
  // Trigger Blind Functions

  playedCards.forEach(card => {
    // Trigger Blind Functions
    // Trigger Joker Functions

    chips += card.Chips;
  });

  return {
    chips,
    mult
  };
}