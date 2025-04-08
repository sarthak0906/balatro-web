import { EDITIONS } from "./constant";

export const getCardBaseImage = (card, cardType = 'default') => {
  return `http://localhost:3000/assets/cards/${cardType}/${card.filename}`;
}

export const getCardEdition = (card) => {
  const edition = card?.edition ? card.edition : "BASE";
  return `http://localhost:3000/assets/editions/${EDITIONS[edition].fileName}.png`;
}

export function getPokerHandType(cards, handTypes) {
  if (!cards || cards.length > 5 || !cards.length) return handTypes.NONE;

  const ranks = cards.map(card => card.Rank).sort((a, b) => a - b);
  const suits = cards.map(card => card.Suit);

  const isFlush = cards.length == 5 && suits.every(suit => suit === suits[0]);

  const rankCounts = {};
  ranks.forEach(rank => {
    rankCounts[rank] = (rankCounts[rank] || 0) + 1;
  });

  const counts = Object.values(rankCounts).sort((a, b) => b - a); // e.g., [3,2] for full house

  const isStraight = (() => {
    const uniqueRanks = [...new Set(ranks)];
    if (uniqueRanks.length !== 5) return false;

    // Normal straight
    if (uniqueRanks[4] - uniqueRanks[0] === 4) return true;

    // Special case: Ace-low straight (A-2-3-4-5)
    if (JSON.stringify(uniqueRanks) === JSON.stringify([2, 3, 4, 5, 14])) return true;

    return false;
  })();

  // Check combinations
  if (isStraight && isFlush && ranks.includes(14) && ranks.includes(10)) return handTypes.ROYAL_FLUSH;
  if (isStraight && isFlush) return handTypes.STRAIGHT_FLUSH;
  if (counts[0] === 4) return handTypes.FOUR_OF_KIND;
  if (counts[0] === 3 && counts[1] === 2) return handTypes.FULL_HOUSE;
  if (isFlush) return handTypes.FLUSH;
  if (isStraight) return handTypes.STRAIGHT;
  if (counts[0] === 3) return handTypes.THREE_OF_KIND;
  if (counts[0] === 2 && counts[1] === 2) return handTypes.TWO_PAIR;
  if (counts[0] === 2) return handTypes.PAIR;

  return handTypes.HIGH_CARD;
}
