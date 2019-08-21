
var randomNumber= Math.floor(Math.random() * 10) +1;

var guessCount = 0;
var correctGuess = true;
var incorrectGuess= false
var guess = prompt("Guess a number from 1 - 10")
var maxTries = 5; 



while (guess !== randomNumber ){
    var guess = prompt("Guess a number from 1 - 10");
    guessCount +=1 ; 


    if (guessCount > maxTries){
        
        document.write('You have no more tries left');  

        break
    }


    if ( guess === randomNumber){
        document.write('You guessed correctly');
        
        then($("correct").append(guessCount))
        console.log("Guesses", guess)
    }

    
}





