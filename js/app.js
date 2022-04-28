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
  // Human & Computer points & rounds won, respectively
  // Round #'s overall
  // dealCards()
  //
  play() {
    const promptResponse = prompt("Ready to play?").toLowerCase();
    if (promptResponse.match(/yes/)) {
      user = new Player(prompt("What is your name?"));
      computer = new Player('The Borg');
      console.log("This is when the game would play!");
    } else {
      console.log("Not recognized as a response.");
    }
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
  playCard(){
    // (A) If possible, have same method of playing cards for both users and computer players.
    // (B) If not possible, should Player class have a default method that fits the computer player, so that only the Human class needs a method defition for a playCard where they are prompted to select which pokemon to choose? Or have no playCard() method defined on the Player class, only on the Human and Computer classes that extend Player?
  }
}

// game.play();
// game.dealCards();
// console.log(user);
// console.log('--------------------');
// console.log(game);
// console.log("--------------------");
// console.log(computer);