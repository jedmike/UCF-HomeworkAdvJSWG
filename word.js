// word.js
// Word constructor uses the Letter constructor
// This is used to create an object representing the current word the user is attempting to guess. 

// ==========================================================================

var Letter = require("./letter.js");

// ==========================================================================


// constructor function for a new word
var Word = function(theWord) {

    // ==========================================================================

    // .split theWord passed in as theWord into an array of letters
    // operated on by this.makeWordArray below
    this.letterArray = theWord.split('');
    // console.log(this.letterArray);

    // ==========================================================================

    // An Array of new Letter objects representing the letters of the underlying word
    this.wordArray = [];

    // a function to call to make the initial wordArray (all Letters.guessed: false)
    this.makeWordArray = function() {
        for (let i = 0; i < this.letterArray.length; i++) {
            var letterObject = new Letter(this.letterArray[i]);
            this.wordArray.push(letterObject);
        };
    };

    // // call this.makeWordArray() and console.log this.wordArray to check initial creation
    // this.makeWordArray();
    // console.log(this.wordArray);

    // ==========================================================================

    // the displayed output String, based on the current state of letter object in wordArray
    this.wordString = "";

    // a function to run the Letter.display() method and create this.wordString,
    // to determine whether to display the letter or an underscore
    this.makeWordString = function() {

        // a temporary Array to hold the whole word of output determined by Letter.display()
        var tempArray = [];

        // loop through wordArray which holds the current state of all letter objects
        for (let j = 0; j < this.wordArray.length; j++) {
            // set a variable for each letter object
            var ltr = this.wordArray[j];
            // call Letter.display() on each letter object to determine letter or _ output
            var dispLtr = ltr.display();
            // and push the determined output into the tempArray
            tempArray.push(dispLtr);
        };
        // console.log(tempArray);

        // and then convert the filled tempArray into a String called displayStr
        var displayStr = (tempArray.join(' '));
        // console.log(displayStr);

        // and make the value of this.wordString the String created by displayStr
        this.wordString = displayStr;

    };

    // call this.makeWordString() and console.log this.wordString to check initial creation
    // this.makeWordString();
    // console.log(this.wordString);

    // ==========================================================================

    // function that drives the game forward...
    // on user input, call word.checkGuess(userInput)
    this.checkGuess = function(userGuess) {

        // loop through wordArray which holds the current state of all letter objects
        for (let k = 0; k < this.wordArray.length; k++) {

            // make a variable for each letter object in the wordArray
            var chkLtr = this.wordArray[k];
            // console.log(chkLtr);

            // if the user input character matches the character property of a letter object
            if (userGuess === chkLtr.character) {
                // console.log(chkLtr.character);

                // then call the Letter.check() method and pass in the user input
                // to have it change the letter object's guessed: property from false to true    
                chkLtr.check(userGuess);
                // console.log(chkLtr);

                // then replace the current letter object with the updated letter object
                // at the same location in the wordArray
                this.wordArray[k] = chkLtr;
            }

            // console.log(this.wordArray);

        };
        // and then with wordArray updated, call the word.makeWordString() method
        // to make a new string with the guessed: true letter object characters displayed
        this.makeWordString();
    };


    // ==========================================================================

};

module.exports = Word;