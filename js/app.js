/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});


document.getElementById('qwerty').addEventListener('click',(e) => {
    const target = e.target;
    if (target.classList.value === 'key') {
        game.handleInteraction(target);
    }
});