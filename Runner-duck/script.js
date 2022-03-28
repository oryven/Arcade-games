

const road = document.querySelectorAll('#grid > div');

// const jumpDuck = document.querySelectorAll('.jump-duck');

for (let i = 0; i < road.length; i++) {
    road[i].innerText = i; 
}

// posiziono la classe duck sul primo div

const duckIndex = 1;
const duck = road[duckIndex];
duck.classList.add('duck');

// invoco la funzione jump scatenata al tasto della tastiera space tramite l'addEventListener

function jump(event) {
    
    if (event.code === 'Space' && !event.repeat) {
        duck.classList.add('jump-duck');
        setTimeout(() => {
            duck.classList.remove('jump-duck');
        }, 500); 
    }
    
} 

document.addEventListener('keydown', jump);