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


//gets keyboard input, checks if key is valid, marks key
document.addEventListener('keydown', (e) => {
    let letter = e.key;
    let keyClass = document.querySelectorAll('.key')
    console.log(letter);
    for (var keyLetter of keyClass ){
        if (letter === keyLetter.textContent) {
            game.handleInteraction(keyLetter)
        }
    }
});