

const grid = document.querySelector('#grid');

const size = 15;
const rigaPerColonna = size * size;

const cells = [];

const aliens = [0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39];



for (let i = 0; i < rigaPerColonna; i++) {
    const cell = document.createElement('div');
    cell.innerText =i;
    cells.push(cell);
    grid.appendChild(cell);
    
}

function drawAlians() {

    for (let i = 0; i < aliens.length; i++) {
        cells[aliens[i]].classList.add('alien');
    }
}

function removeAliens() {
    for (let i = 0; i < aliens.length; i++) {
        cells[aliens[i]].classList.remove('alien');
    }
}

let step = 1;
let direction ='forward';

function mouveAliens() {

    let leftEdge = aliens[0] % size === 0 ;
    let rightEdge = aliens[aliens.length -1] % size === size - 1; 

    removeAliens();
    
    if(direction === 'forward' && rightEdge) {
        for(let i = 0; i < aliens.length; i++) {
            // Scalare di una riga 
            aliens[i] =  aliens[i] + size + 1;      
            // Invertire il senso di marcia
            step = -1;
            // Cambiare direzione
            direction = 'backward';
        }
    }

    if(direction === 'backward' && leftEdge) {
        for(let i = 0; i < aliens.length; i++) {
            // Scalare di una riga 
            aliens[i] =  aliens[i] + size - 1;      
            // Invertire il senso di marcia
            step = 1;
            // Cambiare direzione
            direction = 'forward';
        }
    }

    for(let i = 0; i < aliens.length; i++) {
        aliens[i] = aliens[i] + step;        
    }

    // console.log(aliens);
    drawAlians()
}
drawAlians()
// setInterval( mouveAliens, 500)



let spaceshipIdx = 217;
cells[spaceshipIdx].classList.add('spaceship');

function moveSpace(event) {

    cells[spaceshipIdx].classList.remove('spaceship');

    console.log('move',event);

    if (event.code === 'ArrowLeft') {
        spaceshipIdx--;
    } else if (event.code === 'ArrowRight'){
        spaceshipIdx++;
    }
    cells[spaceshipIdx].classList.add('spaceship');
    // if (event.code !== 'Space') return;
}

document.addEventListener('keydown', moveSpace);