let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

// function inputRange(){
//     let range = parseInt(document.getElementById("range").value);
//     console.log(range);
// }
let rangeVar = 0;
let answer1 = 0;

function rangeButton(){
   rangeVar=  document.getElementById("range").value;
   document.getElementById("userNum").innerHTML = `Choose your range (0 - ${rangeVar} )`
   answer1 =  Math.floor(Math.random() * (rangeVar)) +1;
//    console.log(answer1);
}



let numberOfGuess = 0;
let triedNumbers = [];

function play(){
    let user_guess = parseInt(document.getElementById("guess").value);
    
    // console.log({user_guess})
    if (user_guess < 1 || user_guess > rangeVar){
        alert( "Please choose a number between your range");
    }  else { 
        triedNumbers.push(user_guess)
        numberOfGuess ++;  

        if (user_guess < answer1){
            message1.textContent = "Your Guess is too low."
            message2.textContent = "Number of guesses:" + numberOfGuess;
            message3.textContent = "Numbers Guessed" + triedNumbers ;
        }
        else if (user_guess > answer1){
            message1.textContent = "Your Guess is too high."
            message2.textContent = "Number of guesses:" + numberOfGuess;
            message3.textContent = "Numbers Guessed" + triedNumbers ;
        }
        else if (user_guess == answer1){
            message1.textContent = "YOU GOT IT!"
            message2.textContent = "The Number was " + answer1;
            message3.textContent = "You guessed it in " + numberOfGuess + " guesses" ;
            // document.getElementById("my-btn").disabled= true;
        // } else if (user_guess <= 0){
        //     message1.textContent = "Choose a higher number"
        //     message2.textContent = " ";
        //     message3.textContent = " " ;
        }else {
            alert("Please type a number not letters");
    }
}
}

//  document.getElementById("my-btn").onclick = play;

// let answer2 = Math.floor(Math.random)*50 +1;
// let answer3 = Math.floor(Math.random)*100 +1;