const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time')
const cells = document.querySelectorAll('.cell');

let score = 0;

let time = 30

scoreDisplay.innerText = score ;

timeDisplay.innerText = time;



//  ogni 800 millisecondi viene richiamata la funzione randomBug che prima "pulisce" l'array poi aggiunge casualmente la classe bug

function randomBug() {

    remuveBug();

    // ottengo un numero casuale per cambiare la posizione della classe bug nel dom

    let numberRandom = Math.floor( Math.random() * cells.length);

    const cell = cells[ numberRandom ];

    cell.classList.add('bug');

    // if (score === 9) {
    //     showAlert('hai vinto');
    // }
}

setInterval(randomBug, 800);

function remuveBug() {
    for (let i = 0; i < cells.length; i++) {
        const cellToClean = cells[i];
        cellToClean.classList.remove('bug');
    }
}

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    
    cell.addEventListener('click', function() {

        if (cell.classList.contains('bug')) {
            score++;
            scoreDisplay.innerText = score;
            cell.classList.remove('bug');
            cell.classList.add('splat');
        }
    }) 
}