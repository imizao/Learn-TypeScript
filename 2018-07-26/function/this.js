var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], cards: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickerCard = cardPicker();
console.log("card: " + pickerCard.cards + " of " + pickerCard.suit);
