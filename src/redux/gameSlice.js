
import { createSlice } from '@reduxjs/toolkit';
import { defaultDeck } from '../default';

const initialState = {
  handSize: 8,
  round: 0,
  ante: 0,
  deck: defaultDeck,
  remainingDeck: defaultDeck,
  handCards: [],
  selectedCards: [],
  playedCards: [],
  discards: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startRound: (state, action) => {
      state.deck = state.deck.sort(() => 0.5 - Math.random());
      state.handCards = state.deck.slice(0, state.handSize);
      state.remainingDeck = state.deck.slice(state.handSize + 1);
    },
    setInitialDeck: (state, action) => {
      if (state.round == 0 && state.ante == 0){
        state.deck = action.payload;  
      }
    },
    selectCard: (state, action) => {
      const cardIndex = action.payload;
    
      // Count how many are already selected
      const selectedCount = state.handCards.filter(card => card.selectCard).length;
    
      // Prevent selecting more than 5 cards
      if (selectedCount >= 5 && !state.handCards[cardIndex].selectCard) return;
    
      let hand = state.handCards;
      hand[cardIndex].selectCard = state.handCards[cardIndex].selectCard ? !state.handCards[cardIndex].selectCard : 1;
      state.handCards = hand;
    },
    playCard: (state, action) => {
      const card = action.payload;
      state.handCards = state.handCards.filter(c => c !== card);
      state.playedCards.push(card);
    },
    discardCard: (state, action) => {
      const card = action.payload;
      state.handCards = state.handCards.filter(c => c !== card);
      state.discards += 1;
    },
    resetGame: (state) => {
      state.handCards = [1, 2, 3, 4, 5, 6, 7, 8];
      state.playedCards = [];
      state.discards = 0;
    },
  },
});

export const { playCard, discardCard, resetGame, setInitialDeck, startRound, selectCard } = gameSlice.actions;
export default gameSlice.reducer;
