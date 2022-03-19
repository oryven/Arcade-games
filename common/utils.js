function showAlert(messaggio){

    const gameArea = document.querySelector('.game-area')

    const alert = `
    <div class = "game-alert">
        <div class = "alert-message">${messaggio}</div>
    </div> `;

    gameArea.innerHTML = gameArea.innerHTML + alert;
     
}