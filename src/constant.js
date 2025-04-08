export const BLINDS = {
  SMALL_BLIND: 1,
  BIG_BLIND: 2,
  BOSS_BLIND: 3
}

export const STAKES = {
  WHITE: {
    blinds: [100, 300, 800, 2000, 5000, 11000, 20000, 35000, 50000, 110000, 560000, 7200000, 300000000, 47000000000, 2.9e13, 7.7e16, 8.6e20, 4.2e25, 9.2e30, 9.2e36, 4.3e43, 9.7e50, 1.0e59, 5.8e67, 1.6e77, 2.4e87, 1.9e98, 8.4e109, 2.0e122, 2.7e135, 2.1e149, 9.9e163, 2.7e179],
    rewards: {
      SMALL_BLIND: 3,
      BIG_BLIND: 4
    }
  }
}

export const BOSS_BLINDS = {
  HOOK: {
    name: "The Hook",
    trigger: () => {

    },
    baseMultiplier: 2,
    reward: 5
  }
}

export const SUITS = {
  CLUB: "Club",
  SPADE: "Spade",
  HEART: "Heart",
  DIAMOND: "Diamond"
} 

export const RANKS = {
  ACE: 14,
  KING: 13,
  QUEEN: 12,
  JACK: 11,
  TEN: 10,
  NINE: 9,
  EIGHT: 8,
  SEVEN: 7,
  SIX: 6,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
  TWO: 2
}

export const HAND_TYPES = {
  NONE: {
    base_chips: 0,
    base_mult: 0,
    name: "",
    level: 0
  },
  HIGH_CARD: {
    base_chips: 5,
    base_mult: 1,
    name: "High Card",
    level: 1
  },
  PAIR: {
    base_chips: 10,
    base_mult: 2,
    name: "Pair",
    level: 1
  },
  TWO_PAIR: {
    base_chips: 20,
    base_mult: 2,
    name: "Two Pair",
    level: 1
  },
  THREE_OF_KIND: {
    base_chips: 30,
    base_mult: 3,
    name: "Three of a Kind",
    level: 1
  },
  STRAIGHT: {
    base_chips: 30,
    base_mult: 4,
    name: "Straight",
    level: 1
  },
  FLUSH: {
    base_chips: 35,
    base_mult: 4,
    name: "Flush",
    level: 1
  },
  FULL_HOUSE: {
    base_chips: 40,
    base_mult: 4,
    name: "Full House",
    level: 1
  },
  FOUR_OF_KIND: {
    base_chips: 60,
    base_mult: 7,
    name: "Four of a Kind",
    level: 1
  },
  STRAIGHT_FLUSH: {
    base_chips: 100,
    base_mult: 8,
    name: "Straight Flush",
    level: 1
  },
  ROYAL_FLUSH: {
    base_chips: 100,
    base_mult: 8,
    name: "Royal Flush",
    level: 1
  },
  FIVE_OF_KIND: {
    base_chips: 120,
    base_mult: 12,
    name: "Five of a Kind",
    level: 1
  },
  FLUSH_HOUSE: {
    base_chips: 140,
    base_mult: 14,
    name: "Flush House",
    level: 1
  },
  FLUSH_FIVE: {
    base_chips: 160,
    base_mult: 16,
    name: "Flush Five",
    level: 1
  }
};


export const EDITIONS = {
  BASE: {
    fileName: "base",
    trigger: () => {

    },
  },
  BONUS: {
    fileName: "bonus",
    trigger: () => {

    },
  },
  GLASS: {
    fileName: "glass",
    trigger: () => {

    },
  },
  GOLD: {
    fileName: "gold",
    trigger: () => {

    },
  },
  LUCKY: {
    fileName: "lucky",
    trigger: () => {

    },
  },
  MULT: {
    fileName: "mult",
    trigger: () => {

    },
  },
  STEEL: {
    fileName: "steel",
    trigger: () => {

    },
  },
  STONE: {
    fileName: "stone",
    trigger: () => {

    },
  },
  WILD: {
    fileName: "wild",
    trigger: () => {

    },
  },
}