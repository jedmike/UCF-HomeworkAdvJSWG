// letter.js
// letter constructor, used by word.js (word constructor)
// constructor function for an individual letter
// stores the letter's value and  displayes it when guessed

var Letter = function(char) {

    // string value to store the underlying character for the letter
    this.character = char;

    // stores whether that letter has been guessed yet
    this.guessed = false;

    // function returns the character if it has been guessed, 
    // or a placeholdder "*" if  not guessed
    this.display = function() {
        if (this.guessed === true) {
            return this.character;
        } else {
            return "_";
        }
    };

    // Afunction that takes a character argument, checks it against the underlying character, 
    // updating the guess to true if guessed correctly
    this.check = function(userGuess) {
        if (userGuess === this.character) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
        return this.guessed;
    };

};

// export the Letter constructor function, to be used by word.js
module.exports = Letter;