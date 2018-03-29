// first we need to declare all of our variables
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesSoFar = 0;
console.log("js hooked up");
// the app randomly picks a letter
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// the user has to guess which letter the app chose
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("the user guess is: " + userGuess);
    

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("the computer guess is: " + computerGuess);

    if (userGuess != computerGuess){
        guessesLeft--;
        guessesSoFar++;
        losses++;
        alert("wrong")
    }

    if (userGuess == computerGuess){
        wins++;
        alert("win")
        guessesLeft = 15;
        guessesSoFar = 0;
    }

    if (guessesLeft == 0){
        alert("GAME OVER");
    document.location.reload();
    }

    // update wins on the page
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
    document.querySelector("#guesses-so-far").innerHTML = guessesSoFar;
};


