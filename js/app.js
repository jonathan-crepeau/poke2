// console.log('Fear is the mind kiler.');

let user;
let computer;

game = {
  cardLibrary: [
    {
      name: "Bulbasaur",
      damage: 60,
    },
    {
      name: "Caterpie",
      damage: 40,
    },
    {
      name: "Charmander",
      damage: 60,
    },
    {
      name: "Clefairy",
      damage: 50,
    },
    {
      name: "Jigglypuff",
      damage: 60,
    },
    {
      name: "Mankey",
      damage: 30,
    },
    {
      name: "Meowth",
      damage: 60,
    },
    {
      name: "Nidoran - female",
      damage: 60,
    },
    {
      name: "Nidoran - male",
      damage: 50,
    },
    {
      name: "Oddish",
      damage: 40,
    },
    {
      name: "Pidgey",
      damage: 50,
    },
    {
      name: "Pikachu",
      damage: 50,
    },
    {
      name: "Poliwag",
      damage: 50,
    },
    {
      name: "Psyduck",
      damage: 60,
    },
    {
      name: "Rattata",
      damage: 30,
    },
    {
      name: "Squirtle",
      damage: 60,
    },
    {
      name: "Vulpix",
      damage: 50,
    },
    {
      name: "Weedle",
      damage: 40,
    },
  ],
  availableCards: [
    {
      name: "Bulbasaur",
      damage: 60,
    },
    {
      name: "Caterpie",
      damage: 40,
    },
    {
      name: "Charmander",
      damage: 60,
    },
    {
      name: "Clefairy",
      damage: 50,
    },
    {
      name: "Jigglypuff",
      damage: 60,
    },
    {
      name: "Mankey",
      damage: 30,
    },
    {
      name: "Meowth",
      damage: 60,
    },
    {
      name: "Nidoran - female",
      damage: 60,
    },
    {
      name: "Nidoran - male",
      damage: 50,
    },
    {
      name: "Oddish",
      damage: 40,
    },
    {
      name: "Pidgey",
      damage: 50,
    },
    {
      name: "Pikachu",
      damage: 50,
    },
    {
      name: "Poliwag",
      damage: 50,
    },
    {
      name: "Psyduck",
      damage: 60,
    },
    {
      name: "Rattata",
      damage: 30,
    },
    {
      name: "Squirtle",
      damage: 60,
    },
    {
      name: "Vulpix",
      damage: 50,
    },
    {
      name: "Weedle",
      damage: 40,
    },
  ],
  usedCards: [],
  scores: [
    {
      userPoints: 0,
      computerPoints: 0,
    },
  ],
  // Human & Computer points & rounds won, respectively
  roundCount: 0,
  // dealCards()
  //
  play() {
    const promptResponse = prompt("Ready to play?").toLowerCase();
    if (promptResponse.match(/yes/)) {
      user = new Player(prompt("What is your name?"));
      computer = new Computer('The Borg');
      // console.log("This is when the game would play!");
      game.dealCards();
    } else {
      console.log("Not recognized as a response.");
      return;
    }
  },
  // NOTE - Appears I haven't used 'randomNumber' method anywhere yet.
  // randomNumber(arrayProperty){
  //   // NOTE - Arrays only as arguments.
  //   return Math.floor(Math.random() * (((arrayProperty.length - 1) - 0 + 1) + 0));
  // },
  increaseRound(){
    game.roundCount += 1;
  },
  dealCards() {
    for (let a = 0; a < 3; a++) {
      let index = Math.floor(Math.random() * ((game.availableCards.length - 1) + 0) - 0);
      let card = game.availableCards[index];
      user.dealtCards.push(card);
      game.usedCards.push(card);
      game.availableCards.splice(index, 1);
    }
    for (let b = 0; b < 3; b++) {
      let index = Math.floor(Math.random() * ((game.availableCards.length - 1) + 0) - 0);
      let card = game.availableCards[index];
      computer.dealtCards.push(card);
      game.usedCards.push(card);
      game.availableCards.splice(index, 1);
    }
    game.displayCards();
  },
  displayCards(){
    console.log(`[================ ${user.name.toUpperCase()}'S CARDS ================]`);
    for (let a = 0; a < user.dealtCards.length; a++) {
      console.log(`Card ${a + 1}: ${user.dealtCards[a].name} - ${user.dealtCards[a].damage}`);
    }
    console.log(`[================ COMPUTER'S CARDS ================]`);
    for (let b = 0; b < computer.dealtCards.length; b++) {
      console.log(`Card ${b + 1}: ${computer.dealtCards[b].name} - ${computer.dealtCards[b].damage}`);
    }
    console.log(`[================================]`);
  },
  battle(){
    let playerCardChoice = user.userCardChoice();
    let computerCard = computer.computerCardChoice();
    if (computerCard.damage > playerCardChoice.damage) {
      console.log(`The computer's Pokemon scores more damage!`);
      console.log(`[================ COMPUTER'S CARD ================]`);
      console.log(computerCard);
      console.log(`[================ ${user.name.toUpperCase()}'S CARD ================]`);
      console.log(playerCardChoice);
      game.updatePoints('computer');
    } else {
      console.log(`The player's Pokemon scores more damage!`)
      console.log(`[================ COMPUTER'S CARD ================]`);
      console.log(computerCard);
      console.log(
        `[================ ${user.name.toUpperCase()}'S CARD ================]`
      );
      console.log(playerCardChoice); // REVIEW - Used the 'find' method to return single object, not a single object within an array.
      game.updatePoints('user');
    }
  },
  updatePoints(nameOfWinner){
    if (nameOfWinner === 'user') {
      user.points += 1;
      game.scores[0].userPoints += 1;
    } else if (nameOfWinner === 'computer') {
      computer.points += 1;
      game.scores[0].computerPoints += 1;
    }
  },
  endOfRound(){
    if (game.scores[0].userPoints > game.scores[0].computerPoints) {
      user.rounds += 1;
      console.log(`[================ ROUND WINNER ================]`);
      console.log('User has won this round!');
    } else {
      computer.rounds += 1;
      console.log(`[================ ROUND WINNER ================]`);
      console.log("Computer has won this round!");
    } 
    game.scores[0].userPoints = 0;
    game.scores[0].computerPoints = 0;
    game.roundCount += 1;
    return
  },
};



class Player {
  points = 0;
  rounds = 0;
  dealtCards = [];
  usedCards = [];
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(`Hello, my name is ${this.name}.`);
  }
  userCardChoice(){
    // NOTE - future safeguard, regex to check that user input is one of the names on their dealt cards.
    for (let a = 0; a < this.dealtCards.length; a++) {
      console.log(this.dealtCards[a]);
    }
    let userInput = prompt('Enter the name of the Pokemon you would like to play:');

    let match = this.dealtCards.find(dealtCards => dealtCards.name === userInput);
    if (match) {
      // TODO - Revise, currently throws error because card is being spliced before value can be returned(?)
      for (let a = 0; a < this.dealtCards.length; a++) {
        if (match.name === this.dealtCards[a].name) {
          this.dealtCards.splice(a, 1);
        }
      }
      return match;
    } else {
      return false;
    }
  }
}



class Computer extends Player {
  constructor(name){
    super(name);
  }
  computerCardChoice(){
    let index = Math.floor(Math.random() * ((this.dealtCards.length - 1) - 0 + 1) + 0);
    let cardChoice = this.dealtCards[index];
    this.dealtCards.splice(index, 1);
    return cardChoice;
  }
}

game.play();