
const images = require.context('../assets', false, /\.(png)$/);
const FaceCards = ['Jack', 'Queen', 'King', 'Wizard', 'Jester' ];

export const Suits = [
    { name: 'Spades',
      colour: '#222',
      symbol: '♠',
      default: true,
      facecards: []
    }, 
    {
      name: 'Hearts',
      colour: '#a00',
      symbol: '♥',
      default: true,
      facecards: []
    },    
    {
      name: 'Diamonds',
      colour: '#a00',
      symbol: '♦',
      default: true,
      facecards: []
    },
    { name: 'Clubs',
      colour: '#222',
      symbol: '♣',
      default: true,
      facecards: []
    },
    {
      name: 'Kings',
      colour: 'green',
      symbol: '♚',
      default: false,
      facecards: []
    },  
    {
      name: 'Queens',
      colour: 'blue',
      symbol: '♛',
      default: false,
      facecards: []
    },
    {
      name: 'Rooks',
      colour: 'blue',
      symbol: '♜',
      default: false,
      facecards: []
    },  
    {
      name: 'Bishops',
      colour: 'green',
      symbol: '♝',
      default: false,
      facecards: []
    },
    {
      name: 'Knights',
      colour: '#FEF23F',
      symbol: '♞',
      default: false,
      facecards: []
    },
    {
      name: 'Pawns',
      colour: 'yellow',
      symbol: '♟',
      default: false,
      facecards: []
    },
];

for (const suit of Suits) {
  for (const face of FaceCards) {
    try {
//      console.log(suit.name, face, images(`./${face}${suit.name}.png`).default);
      suit.facecards.push(images(`./${face}${suit.name}.png`).default);
    } catch(err) {
    }
  }
};

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

  // https://sashamaps.net/docs/resources/20-colors/
  export const PlayerColours = [
    '#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4', '#469990', '#dcbeff', '#9A6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9'  
  ];
  
  export const StandardPlayingCardRanks = Ranks;
  export const SET_OF_ROUNDS_TO_PLAY_AUTOMATIC = null;