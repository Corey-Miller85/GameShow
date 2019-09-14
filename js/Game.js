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
}

