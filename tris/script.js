const cells = document.querySelectorAll('.cell');

let turn = 0;

const cellSigns = [];

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function() {

        if (cellSigns[i]) {
            return
        }
        
        turn++; 
        let sign = '';
        if (turn % 2 === 0) {
            sign = 'x'
        }else{
            sign = '0'
        }

        cell.innerText = sign;
        cellSigns[i] = sign;

        console.table(cellSigns);

        console.log(turn);

        let hasWon = checkVictory();
        console.log('hai vinto?', hasWon);

        if (hasWon) {
            showAlert(`ha vinto ${sign}`)
        } else if (turn === 9) {
            showAlert(`pareggio}`)
        } 
            
        
    })
}

function checkVictory () {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [8, 4, 0],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        console.log(combination);

        const numeroUno = combination[0];
        const numeroDue = combination[1];
        const numeroTre = combination[2];

        console.log('numeri combinazione :',  'numero', numeroUno ,'numero', numeroDue,'numero', numeroTre);

        if(cellSigns[numeroUno] && cellSigns[numeroUno] === cellSigns[numeroDue] && cellSigns[numeroDue] === cellSigns[numeroTre]){
            console.log(`Trovata combinazione vincente: ${numeroUno} ${numeroDue} ${numeroTre}`);
            return true;
        }  
    }
    return false;
}

function showAlert(messaggio){

    const gameArea = document.querySelector('.grid')

    const alert = `
    <div class"game-alert>
        <div class"alert-message>${messaggio}</div>
    </div> `;


     
}



