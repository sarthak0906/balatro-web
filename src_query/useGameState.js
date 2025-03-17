import { useQueryClient, useMutation } from "@tanstack/react-query";

const HAND_KEY = "handCards";
const PLAYED_KEY = "playedCards";

const initialHand = [1, 2, 3, 4, 5, 6, 7, 8];
const initialPlayed = [];

export const useGameState = () => {
  const client = useQueryClient();

  const handCards = client.getQueryData(HAND_KEY) ?? initialHand;
  const playedCards = client.getQueryData(PLAYED_KEY) ?? initialPlayed;

  const moveCardMutation = useMutation({
    mutationFn: (cardIndex) => {
      const card = handCards[cardIndex];
      const newHand = handCards.filter((_, i) => i !== cardIndex);
      const newPlayed = [...playedCards, card];
      client.setQueryData(HAND_KEY, newHand);
      client.setQueryData(PLAYED_KEY, newPlayed);
      console.log(client.getQueryData(PLAYED_KEY));
      return { hand: newHand, played: newPlayed };
    },
  });

  const resetMutation = useMutation(() => {
    client.setQueryData(HAND_KEY, initialHand);
    client.setQueryData(PLAYED_KEY, []);
  });

  return {
    handCards,
    playedCards,
    moveCard: moveCardMutation.mutate,
    resetGame: resetMutation.mutate,
  };
};
