const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time')
const cells = document.querySelectorAll('.cell');
var x = document.getElementById("myAudio"); 

let score = 0;

let time = 30;

scoreDisplay.innerText = score ;

timeDisplay.innerText = time;



//  ogni 800 millisecondi viene richiamata la funzione randomBug che prima "pulisce" l'array poi aggiunge casualmente la classe bug

let bugPosition = setInterval(randomBug, 800);

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

// ciclo tutta l'array per rimuovere la classe bug

function remuveBug() {
    for (let i = 0; i < cells.length; i++) {
        const cellToClean = cells[i];
        cellToClean.classList.remove('bug');
    }
}

// ciclio tutta l'array per rendere scatenare un evento al clik di ogni cella

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    
    cell.addEventListener('click', function() {

        if (cell.classList.contains('bug')) {
            score++;
            scoreDisplay.innerText = score;

            cell.onclick = playAudio();

            cell.classList.remove('bug');
            cell.classList.add('splat');

            setTimeout(function() {
                cell.classList.remove('splat');
            },500)
        }
    }) 
}

/* ogni secondo decremento il valore iniziale di time, quando arriva a zero interrompi il setInterval e il movimento casuale del bug, elimino tutte le classi bug e richiamo la funzione showAlert
*/

const timer = setInterval(countDown, 1000);

function countDown() {
    time--;
    timeDisplay.innerText = time;
    if (time === 0) {
        clearInterval(timer);
        clearInterval(bugPosition);
        remuveBug();
        showAlert(`Punteggio ${score}`);
    }
}


