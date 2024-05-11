let playerwins = document.getElementById("playerwins")
let dealerwins = document.getElementById("dealerwins")



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

/// add a function to turn the strings to a number

console.log(usersCardOne)
// if (usersCardOne.inclues("ace")){

//   usersCardOne = ace()
// }

// if (usersCardOne.inclues("King")|| usersCardOne.inclues("Queen")|| usersCardOne.inclues("Jack")){

//   usersCardOne = 10
// }
// // ----------------  card two
// if (usersCardTwo.inclues("ace")){

//   usersCardTwo = ace()
// }

// if (usersCardTwo.inclues("King")|| usersCardTwo.inclues("Queen")|| usersCardTwo.inclues("Jack")){

//   usersCardTwo = 10
// }


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


    while (user < dealer && user < 22) {
      user = user + getCards() 

    }
    // console.log(`dealer wins ${theDealerWon}`)
    // console.log(`user wins ${theUserTotal}`)
}
if (dealer > user || user > 21 ) {
  theDealerWon++

}
if (dealer < user || dealer || 21) {
  theUserTotal++
}
dealerwins.innerText = theDealerWon
playerwins.innerText =theUserTotal
}


function ace() {
  if (totalValue + 11 < 22 ) {
    return 11
  }
  if (totalValue + 11 > 22 ) {
    return 1
  }
 
}