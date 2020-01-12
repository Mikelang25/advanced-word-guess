var fs = require("fs");

var Letter = function(character){
    this.character = character;
    this.guessed = false; 
    
    this.showCharacter = function(){
        if(!this.guessed){
            return("_");
        }
        else if(this.guessed){
            return(this.character);
        }
    }

    this.letterCheck = function(guess){
        if(guess.toLowerCase()===this.character.toLowerCase()){
            this.guessed = true;
        }
    }
};

module.exports = Letter;