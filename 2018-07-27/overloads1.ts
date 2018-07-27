let suits = ["potato", "tomato", "apple", "banana"];

function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number};
function pickCard(x): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x % 4);
    return {suit: suits[pickedSuit], card: x % 13};
  }
}

let myDeck = [{ suit: "apple", card: 2}, {suit: "banana", card: 55}, {suit: "tomato", card: 10}];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: "+ pickedCard2.card + " of "+ pickedCard2.suit);