import { EDITIONS } from "./constant";

export const getCardBaseImage = (card, cardType = 'default') => {
  return `http://localhost:3000/assets/cards/${cardType}/${card.filename}`;
}

export const getCardEdition = (card) => {
  const edition = card?.edition ? card.edition : "BASE";
  return `http://localhost:3000/assets/editions/${EDITIONS[edition].fileName}.png`;
}