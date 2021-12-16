export const Suits = [
    { name: 'Spades',
      colour: 'black',
      symbol: '♠',
      default: true,
    }, 
    {
      name: 'Hearts',
      colour: 'red',
      symbol: '♥',
      default: true,
    },    
    {
      name: 'Diamonds',
      colour: 'red',
      symbol: '♦',
      default: true,
    },
    { name: 'Clubs',
      colour: 'black',
      symbol: '♣',
      default: true,
    },
    {
      name: 'Kings',
      colour: 'green',
      symbol: '♚',
      default: false,
    },  
    {
      name: 'Clouds',
      colour: 'blue',
      symbol: '♛',
      default: false,
    },
    {
      name: 'Rooks',
      colour: 'blue',
      symbol: '♜',
      default: false,
    },  
    {
      name: 'Bishops',
      colour: 'green',
      symbol: '♝',
      default: false,
    },
    {
      name: 'Knights',
      colour: 'yellow',
      symbol: '♞',
      default: false,
    },
    {
      name: 'Pawns',
      colour: 'yellow',
      symbol: '♟',
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
      name: 'Jester',
      symbol: 'JE',
    },
    {
      name: 'Ace',
      symbol: 'A',
    },
    {
      name: 'Two',
      symbol: '2',
    },
    {
      name: 'Three',
      symbol: '3',
    },
    {
      name: 'Four',
      symbol: '4',
    },
    {
      name: 'Five',
      symbol: '5',
    },
    {
      name: 'Six',
      symbol: '6',
    },
    {
      name: 'Seven',
      symbol: '7',
    },
    {
      name: 'Eight',
      symbol: '8',
    },
    {
      name: 'Nine',
      symbol: '9',
    },
    {
      name: 'Ten',
      symbol: '10',
    },
    {
      name: 'Jack',
      symbol: 'J',
    },
    {
      name: 'Queen',
      symbol: 'Q',
    },
    {
      name: 'King',
      symbol: 'K',
    },
    {
      name: 'Wizard',
      symbol: 'W',
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