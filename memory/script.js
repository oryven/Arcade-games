const grid = document.getElementById('grid')

const cards = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];

const deck = [ ...cards, ...cards];

// array di servizio 

let pick = [];

deck.sort(function () {
    return 0.5 - Math.random();
});

console.log(deck);

for (let i = 0; i < deck.length; i++) {
    const card = document.createElement('div')
    const cardName = deck[i];

    card.setAttribute('data-name', cardName)
    card.classList.add('card-memory')

    grid.appendChild(card)

    card.addEventListener('click', cardTurned)
};

function cardTurned (event) {
    const cardClicked = event.target;
    // console.log(cardClicked);

    // if per bloccare la funzione se contiene la classe turned

    if (cardClicked.classList.contains('turned')) {
        return ;
    }

    cardClicked.classList.add( cardClicked.getAttribute( 'data-name'), 'turned');

    pick.push(cardClicked);

    if (pick.length === 2) {
        checkCard();
    }
}

// funzione per comparare le 2 card presenti dell'array pick

function checkCard() {
    const card1 = pick[0];
    const card2 = pick[1];

    console.log(card1, card2);

    const nomeCard1 = card1.getAttribute('data-name');
    const nomeCard2 = card2.getAttribute('data-name');

    if (nomeCard1 === nomeCard2) {
        console.log('hai trovato 2 carte uguali');
        checkWin();

    } else {
        setTimeout(function(){
            card1.classList.remove(nomeCard1, 'turned');
            card2.classList.remove(nomeCard2, 'turned');
        },1000);
       
    }

    pick = [];
}

function checkWin() {
    const cardTurned =document.querySelectorAll('.turned');
    if (cardTurned.length === deck.length ) {
        showAlert('hai vinto!');
    }
}