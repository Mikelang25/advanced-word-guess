var Letter = require("./Letter");
var Letter = require("./Word");
var inquirer = require("inquirer");

var wordBank = ["shoe", "string", "bob"];

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];


inquirer.prompt([

    {
        type: "list",
        name: "gamePlay",
        message: "Would you like to play Word Guess?",
        choices: ["Yes", "No"]
    },
]).then(function (user) {
    if(user.gamePlay === "Yes"){
        startGame();
    }
});



function startGame() {
    console.log(randomWord);
    requestGuess();

}


function requestGuess(){

    inquirer.prompt([

        {
            type: "input",
            name: "guess",
            message: "Please guess a letter"
        },
    ]).then(function (user) {

    });

}
