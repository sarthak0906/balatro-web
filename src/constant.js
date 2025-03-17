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
  ACE: 15,
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