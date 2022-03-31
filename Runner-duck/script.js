

const road = document.querySelectorAll('#grid > div');
let score = document.querySelector('#score');

// for (let i = 0; i < road.length; i++) {
//     road[i].innerText = i; 
// }

// posiziono la classe duck sul primo div

const duckIndex = 1;
const duck = road[duckIndex];
duck.classList.add('duck');

let gameScore = 0;
let speedGame = 150;


// posiziono la classe relativa alla pinta dentro il div num 9 con la funzione addPlant 

function addPlant() {
    let indexPlant = road.length - 1;
    road[indexPlant].classList.add('plant');    

    // sposto la classe plant ad ogni secondo
    let setIntPlant = setInterval(function() {

        // stampo il punteggio nel dom

        gameScore++;
        score.innerText = gameScore;

        // incremento la velocità ogni volta che il numnero relativo allo score è divisibile per 50
        if (gameScore % 50 === 0) {
            speedGame = speedGame - 20;
        }

        road[indexPlant].classList.remove('plant');
        indexPlant-- ;
    
        if(indexPlant < 0) {
            clearInterval(setIntPlant);
            // richiamo la funzione addPlant dentro se stessa
            addPlant();
            return;
        }

        if (duckIndex === indexPlant && !duck.classList.contains('jump-duck')) {
            duck.classList.remove('duck');
            duck.classList.add('plant');
            showAlert('CRASH!');
            clearInterval(setIntPlant);
            return;
        }
        road[indexPlant].classList.add('plant');
    }, speedGame);
}

addPlant();

// invoco la funzione jump scatenata al rilascio del tasto della tastiera space tramite l'addEventListener

function jump(event) {
    console.log(event);
    if (event.code === 'Space' && !event.repeat) {
        duck.classList.add('jump-duck');
        setTimeout(() => {
            duck.classList.remove('jump-duck');
        }, 500); 
    } 
} 

document.addEventListener('keydown', jump);