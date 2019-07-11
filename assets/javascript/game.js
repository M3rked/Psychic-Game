
var randomNumber= getRandomNumber(100);

var guess;


var guessCount = 0;
var correctGuess = true;





function getRandomNumber(upper){
    var  num =Math.floor(Math.random() * 100) +1; 
    console.log(num);
    return num; 
    
}
while(true){
    guess = prompt("Guess a number from 1 - 100");
    guessCount +=1;



if (parseInt(guess) == randomNumber) {
    correctGuess = true;

    document.write ("you guessed correctly");
    break; 
}

else {document.write("you guessed wrong")
    break;
}  

}

document.write('<h1> you guessed correctly</h1>')
document.write('you took' + guessCount); 




