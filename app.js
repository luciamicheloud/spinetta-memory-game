document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardsArray = [
        {
            name: 'Card0',
            img: 'images/SpinettaCardImg0.jpg',
        },
        {
            name: 'Card0',
            img: 'images/SpinettaCardImg0.jpg',
        },
        {
            name: 'Card1',
            img: 'images/SpinettaCardImg1.jpg',
        },
        {
            name: 'Card1',
            img: 'images/SpinettaCardImg1.jpg',
        },
        {
            name: 'Card2',
            img: 'images/SpinettaCardImg2.jpg',
        },
        {
            name: 'Card2',
            img: 'images/SpinettaCardImg2.jpg',
        },
        {
            name: 'Card3',
            img: 'images/SpinettaCardImg3.jpg',
        },
        {
            name: 'Card3',
            img: 'images/SpinettaCardImg3.jpg',
        },
        {
            name: 'Card4',
            img: 'images/SpinettaCardImg4.jpg',
        },
        {
            name: 'Card4',
            img: 'images/SpinettaCardImg4.jpg',
        },
        {
            name: 'Card5',
            img: 'images/SpinettaCardImg5.jpg',
        },
        {
            name: 'Card5',
            img: 'images/SpinettaCardImg5.jpg',
        },
    ]

    cardsArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //board
    function createBoard() {
        for (let i = 0; i < cardsArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]) {
            resultDisplay.textContent = 'match!'
            cards[optionOneId].setAttribute('src', 'images/ligthBrown.png')
            cards[optionTwoId].setAttribute('src', 'images/ligthBrown.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            resultDisplay.textContent = 'try again'
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardsArray.length/2) {
            alert('Congratulations! you win')
        }
    }

    //flip card
    function flipcard() {
        let cardId = this.getAtribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardsArray[cardId].img)
        if(cardsChosen.length === 2) {
                   setTimeout(checkForMatch, 500)
        }
    }
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500);
        }
      }
      

    createBoard()
})
