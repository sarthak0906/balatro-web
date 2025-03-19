import * as _ from 'underscore';
import { createSlice } from '@reduxjs/toolkit';
import { defaultDeck } from '../default';

const initialState = {
  hands: 0,
  totalHands: 4,
  discards: 0,
  totalDiscards: 3,
  handSize: 8,
  round: 0,
  ante: 0,
  deck: defaultDeck,
  remainingDeck: defaultDeck,
  handCards: [],
  selectedCards: [],
  playedCards: [],
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
      if (state.round === 0 && state.ante === 0) {
        state.deck = action.payload;
      }
    },
    selectCard: (state, action) => {
      const cardIndex = action.payload;
      const selectedCount = state.handCards.filter((c) => c.selectCard).length;
      const card = state.handCards[cardIndex];
      if (!card.selectCard && selectedCount >= 5) return;
      card.selectCard = !card.selectCard;
      state.selectedCards = state.handCards.filter(el => el.selectCard);
    },
    playCard: (state, action) => {
      const card = action.payload;
      state.handCards = state.handCards.filter((c) => c !== card);
      state.playedCards.push(card);
    },
    discardCard: (state, action) => {
      const card = action.payload;
      state.handCards = state.handCards.filter((c) => c !== card);
      state.discards += 1;
    },
    resetGame: (state) => {
      state.handCards = [];
      state.playedCards = [];
      state.discards = 0;
    },
    sortHand: (state) => {
      state.handCards.sort((a, b) => b.Rank - a.Rank); // Or your custom logic
    },
    setDragStartIndex: (state, action) => {
      state.dragStartIndex = action.payload;
    },
    reorderHandCards: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const updated = [...state.handCards];
      const [movedCard] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, movedCard);
      state.handCards = updated;
      state.selectedCards = state.handCards.filter(el => el.selectCard);
    },
    playHand: (state) => {
      console.log("Selected Cards:", state.selectedCards);
      console.log("Hand Cards:", state.handCards);
      console.log("Played Cards:", state.playedCards);
      console.log("Discards:", state.discards);
    },
    discardHand: (state, action) => {
      let handCards = state.handCards;
      let selectedCards = state.selectedCards.map(el => el.id);
      const handCardsAfterDiscard = handCards.filter((card) => !selectedCards.includes(card.id));
      state.handCards = handCardsAfterDiscard;
      state.discards += 1;
      state.selectedCards = [];
    },
    drawHand: (state, action) => {
      const cardsInHand = state.handCards;
      const cardsToBeDrawn = state.handSize - cardsInHand.length;

      const handCards = state.remainingDeck.slice(0, cardsToBeDrawn);
      state.handCards.push(...handCards);
      state.remainingDeck = state.deck.slice(cardsToBeDrawn + 1);
    }
  },
});

export const {
  playCard,
  discardCard,
  resetGame,
  setInitialDeck,
  startRound,
  selectCard,
  sortHand,
  setDragStartIndex,
  reorderHandCards,
  playHand,
  discardHand,
  drawHand
} = gameSlice.actions;

export default gameSlice.reducer;
