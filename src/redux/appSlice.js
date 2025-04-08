
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameSpeed: 1,
  language: 'en',
  cardDesigns: 'default',
  colourBlindMode: 'none',
  stats: {
    bestHand: 0,
    highestRound: 1,
    HighestAnte: 0,
    // Total Played Hand Types Count
    // Most Money
    // Best Win Streak
    // Progess (Game Completion Percentage)
    // Collection Percentage (Game Collection / Codex)
    // Challanges (Challange Completion Percentage)
    // Joker Stickers (Joker Stickers Completion Percentage)
    // Win Percentage (Deck Win Percentage)
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

  }
})

export const {

} = appSlice.actions;

export default appSlice.reducer;