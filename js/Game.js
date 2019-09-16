/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    
    /**
 * Creates phrases for use in game
 * @return {array} An array of phrases that could be used in the game
 */

    createPhrases() {
        let phraseArray = [];
        phraseArray.push(new Phrase('Eat My Shorts'));
        phraseArray.push(new Phrase('Be excellent to each other'));
        phraseArray.push(new Phrase('welcome to the desert of the real'));
        phraseArray.push(new Phrase('I know kung fu'));
        phraseArray.push(new Phrase('I love the smell of napalm in the morning'));
        return phraseArray;
    }

    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * 5);
       return this.phrases[randomIndex];
    }

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        let phrase = new Phrase(this.getRandomPhrase().phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    }
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button){
        console.log(button);
    }
           
 /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        const listItems = document.querySelectorAll('li');
        for (let listItem of listItems) {
            if (listItem.className === `hide letter ${listItem.textContent}`) {
                return false;
            } else {
                return true;
            }
        }
    }

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

    removeLife() {
       const heartsSection = document.querySelectorAll('img');
       for (let heart of heartsSection) {
            if (heart.src.includes('/images/lostHeart.png')) {
               continue;
            } 
            if (heart.src.includes('/images/liveHeart.png')) {
                heart.src = 'images/lostHeart.png';
                this.missed += 1;
                break;
            }
        }
        if (this.missed >= 5) {
            this.gameOver();
        }
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

    gameOver() {
        const overlay = document.querySelector('#overlay');
        let message = overlay.querySelector('h1');
        overlay.style.display = '';
        if (this.checkForWin()) {
            overlay.classList.remove('start');
            overlay.classList.add('win');
            message.textContent = "Congrats! You Win!";

        } else {
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            message.textContent = "Sorry, better luck next time!";
        }
    }
}

