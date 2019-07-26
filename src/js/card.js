const Card = (function() {

  // 黑桃 > 紅心 > 方塊 > 梅花 (Spades, Hearts, Diamonds, Clubs)
  // const SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
  // const VALUE = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  
  function Card (suit, number) {
    this.suit = suit
    this.number = number
  }

  Card.prototype.getSuitValue = function() {
    let suitValue = 0;

    switch (this.suit) {
      case 'Spades':
        suitValue = 4
        break
      case 'Hearts':
        suitValue = 3
        break
      case 'Diamonds':
        suitValue = 2
        break
      case 'Clubs':
        suitValue = 1
        break
    }

    return suitValue
  }

  Card.prototype.getNumberValue = function() {
    let numberValue = 0;

    switch (this.number) {
      case 'A':
        numberValue = 1
        break
      case 'K':
        numberValue = 13
        break
      case 'Q':
        numberValue = 12
        break
      case 'J':
        numberValue = 11
        break
      default:
        numberValue = parseInt(this.number)
    }

     return numberValue
  }

  Card.prototype.toString = function() {
    return this.suit + ' ' + this.number
  }

  Card.SUITS = ['spades', 'hearts', 'diamonds', 'clubs']
  Card.VALUE = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  return Card
})()