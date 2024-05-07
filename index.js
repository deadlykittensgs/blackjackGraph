const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
let theDealerWon = 0
let theUserTotal = 0

let deck = [];

// Generate the deck of cards
for (let suit of suits) {
  for (let rank of ranks) {
    deck.push(`${rank} of ${suit}`);
  }
}

// console.log(deck);


function getCards() {
    let cardShuffle = Math.floor(Math.random() * 52)  
  let result = deck[cardShuffle] 
//   console.log(result)
     return result
 }


function usersHand() {
let usersCardOne = getCards()
let usersCardTwo = getCards()
let usersTotal = usersCardOne + usersCardTwo 
console.log(usersTotal)
return usersTotal
}

function dealersHand() {
    let dealersCardOne = getCards()
let dealersCardTwo = getCards()
let dealersTotal = dealersCardOne + dealersCardTwo
console.log(dealersTotal)
return dealersTotal

}


function playGame(howManyTimes) {

    for (let index = 0; index < howManyTimes; index++) {
   
    let user = dealersHand()
    let dealer = usersHand()

    if (dealer > user) {
        theDealerWon++
      
    }
    if (dealer < user) {
        theUserTotal++
      
    }
    console.log(`dealer wins ${theDealerWon}`)
    console.log(`user wins ${theUserTotal}`)
}
}