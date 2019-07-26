(function (p) {
  function freeCellGame () {
    let shuffleDeckCards = []

    init()

    function init () {
      const poker = new Poker()
      deal(poker.shuffle())
      // startTimer()
    }
    
    function deal (deckCards) {
      // let totalCol = currentCol = lastCol = shuffleCol = 0
      let shuffleCol = -1
      const isFill = function () {
        if (shuffleCol < 4) {
          return shuffleDeckCards[shuffleCol].length >= 7
        } else {
          return shuffleDeckCards[shuffleCol].length >= 6
        }
      }
      deckCards.forEach((card) => {
        // currentCol = totalCol

        do {
          shuffleCol = Math.floor(Math.random() * 8)

          if (!shuffleDeckCards[shuffleCol]) {
            shuffleDeckCards[shuffleCol] = []
          }
        } while (isFill())
        
        shuffleDeckCards[shuffleCol].push(card)
        // if (!shuffleDeckCards[currentCol]) {
        //   shuffleDeckCards[currentCol] = []
        // }

        // if (currentCol === lastCol && isFill()) {
        //   shuffleDeckCards[currentCol].push(card)
        // } else {
        //   lastCol = currentCol
        //   totalCol++
        // }
      })

      renderCards()
    }

    function renderCards () {
      const decksContainer = document.getElementById('tableauPiles')
      shuffleDeckCards.forEach((deck, deckIndex) => {
        console.log(deckIndex)
        const deckContainer = document.querySelectorAll('.free-cell__tableau-pile')[deckIndex]
        console.log(deckContainer)
        deck.forEach((card, cardIndex) => {
          const cardEle = document.createElement('div')
          cardEle.classList.add('free-cell__cell', 'card')
          cardEle.dataset.cardSuit = card.suit
          cardEle.dataset.cardNumber = card.number
          cardEle.draggable = true
          cardEle.innerHTML = `
            <img src='./src/assets/images/${card.suit}_${card.number}.png' />
          `

          setTimeout(() => {
            cardEle.style.top = cardIndex * 50 + 'px'
            cardEle.style.opacity = '1'
          }, deckIndex * cardIndex * 30)

          deckContainer.appendChild(cardEle)
        })

        // decksContainer.appendChild(deckContainer)
      })
    }

    // function startTimer () {
      
    // }
  }

  freeCellGame()

})(Poker)
