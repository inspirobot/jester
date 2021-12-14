export const Suits = [
    // black suits
    { name: 'Clubs',
      colour: 'black',
      symbol: '♣',
      rank: 4,
      default: true,
    },
    { name: 'Spades',
      colour: 'black',
      symbol: '♠',
      rank: 1,
      default: true,
    }, 
  
    // red suits
    {
      name: 'Diamonds',
      colour: 'red',
      symbol: '♦',
      rank: 3,
      default: true,
    },
    {
      name: 'Hearts',
      colour: 'red',
      symbol: '♥',
      rank: 4,
      default: true,
    },    
    // blue suits
    {
      name: 'Clouds',
      colour: 'blue',
      symbol: '♛',
      rank: 6,
      default: false,
    },
    {
      name: 'Rooks',
      colour: 'blue',
      symbol: '♜',
      rank: 8,
      default: false,
    },
  
    // green suits
    {
      name: 'Kings',
      colour: 'green',
      symbol: '♚',
      rank: 5,
      default: false,
    },
    {
      name: 'Bishops',
      colour: 'green',
      symbol: '♝',
      rank: 7,
      default: false,
    },
    // yellow suits
    {
      name: 'Knights',
      colour: 'yellow',
      symbol: '♞',
      rank: 9,
      default: false,
    },
    {
      name: 'Pawns',
      colour: 'yellow',
      symbol: '♟',
      rank: 10,
      default: false,
    },
    
];

  export const Scoring = [
    { 
      label: "Correct Bid",
      name: "correct-bid",
      value: 20,
    },
    {
      label: "Per Trick",
      name: "per-trick",
      value: 0,
    },
    {
      label: "Per Trick Correct Bid",
      name: "per-trick-correct-bin",
      value: 10,
    },
    {
      label: "Missed Trick Incorrect Bid",
      name: "missed-trick-incorrect-bid",
      value: -10,
    },
    {
      label: "Bonus: Other Players Missed Bid",
      name: "bonus-other-players-missed-bid",
      value: 0,
    }
  ]
  
  export const Ranks = [
    {
      name: 'Two',
      symbol: '2',
      rank: 2,
    },
    {
      name: 'Three',
      symbol: '3',
      rank: 3,
    },
    {
      name: 'Four',
      symbol: '4',
      rank: 4,
    },
    {
      name: 'Five',
      symbol: '5',
      rank: 5,
    },
    {
      name: 'Six',
      symbol: '6',
      rank: 6,
    },
    {
      name: 'Seven',
      symbol: '7',
      rank: 7,
    },
    {
      name: 'Eight',
      symbol: '8',
      rank: 8,
    },
    {
      name: 'Nine',
      symbol: '9',
      rank: 9,
    },
    {
      name: 'Ten',
      symbol: '10',
      rank: 10,
    },
    {
      name: 'Jack',
      symbol: 'J',
      rank: 11,
    },
    {
      name: 'Queen',
      symbol: 'Q',
      rank: 12,
    },
    {
      name: 'King',
      symbol: 'K',
      rank: 13,
    },
    {
      name: 'Ace',
      symbol: 'A',
      rank: 1,
    },
  ];

  export const Options = [
    { 
      name: "plus-minus-1",
      label: "Plus/Minus 1",
      default: true,
    },
    { 
      name: "hidden-bids",
      label: "Hidden Bids",
      default: false,
    },
    { 
      name: "secret-bids",
      label: "Secret Bids",
      default: false,
    },
    { 
      name: "foresight",
      label: "Foresight",
      default: false,
    },
    { 
      name: "up-down",
      label: "Up Down",
      default: false,
    },
  ];
  
  export const CardTypes = {
    Wizard: 'Wizard',
    Jester: 'Jester',
  
    // Value, aka "Regular" card (e.g. 4 of clubs, king of diamonds, etc.)
    Value: 'Value',
  
    // Special cards that I might implement for fun later
    ArchWizard: 'ArchWizard'
  };
  
  export const StandardPlayingCardRanks = Ranks;
  export const SET_OF_ROUNDS_TO_PLAY_AUTOMATIC = null;