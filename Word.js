var Letter = require("./Letter");

var Word = function(word){


    this.createWord = function(word){
        var letterBank = [];
        for(var i = 0; i<word.length;i++){
            var currentLetter = new Letter(word[i]);
            letterBank.push(currentLetter);
        }
    }

}

module.exports = Word;