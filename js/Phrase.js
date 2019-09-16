/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let phraseText = this.phrase;
    
        const listItem = document.createElement('li');
        const unorderedList = document.querySelector('#phrase ul');
        for (let char of phraseText) {
            if (char === " ") {
                const listItem = document.createElement('li');

                listItem.className = 'space'
                listItem.textContent = ' '
                unorderedList.appendChild(listItem)
            } else {
                const listItem = document.createElement('li');
                listItem.className = `hide letter ${char}`;
                listItem.textContent = char;
                unorderedList.appendChild(listItem)
            }
        }
    }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/

    showMatchedLetter(letter) {

        const div = document.querySelectorAll('#phrase ul li');
        for (let item of div) {
            if (item.textContent === letter) {
                item.classList.remove('hide');
                item.classList.add('show');
            }
        }
    }
 }

