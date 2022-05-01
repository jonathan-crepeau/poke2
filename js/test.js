const pokemon = [
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
  ];

// function checkForMatch(string) {
//   for (let a = 0 ; a < pokemon.length; a++) {
//     if (string == pokemon[a].name) {
//       return pokemon[a];
//     }
//   }
// }

// SECTION - Array.prototype.filter()

// ex: wantedVendors = vendors.filter(vendor => vendor('name'] === 'wanted);

// function returnPokemonMatch(array, pokemonName) {
//   for (let a = 0; a < array.length; a++) {
//     let cardMatch = array.filter(array => array[a].name == pokemonName);
//     return cardMatch
//   }
// }

// console.log(returnPokemonMatch("Charmader"));

let userInput = "Charmander";
let cardMatch = pokemon.filter(pokemon => pokemon.name === userInput);
console.log(cardMatch);

// userCardChoice
  // print all card names
  // promot user for name of pokemon to select 'userInput'
  // filter
  // if cardlength > 0, return cardMatch
  // else return console.log('no match)
