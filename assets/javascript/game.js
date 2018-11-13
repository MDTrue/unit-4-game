// set initial variables
var gameRandom
var buttonRandomOne
var buttonRandomTwo
var buttonRandomThree
var buttonRandomFour
var buttonRandomArr =[]
var playerScore = 0
var numberWins = 0
var numberLoses = 0
var userMessage = "good luck"

//generate random value for target score  between 19- 120
//generate random values for crystal buttons  between 1-12   stretch = one should always be 1 so that the game is winable

function genGameRandom() {
    gameRandom = Math.floor((Math.random() * 100) + 19);
    playerScore = 0
    document.getElementById("random-number").innerHTML = gameRandom;
    document.getElementById("user-total").innerHTML = playerScore;
    document.getElementById("message").innerHTML = userMessage;
    buttonRandomOne = Math.floor(Math.random() * (12) + 1);
    console.log(buttonRandomOne)
    buttonRandomTwo = Math.floor(Math.random() * (12) + 1);
    console.log(buttonRandomTwo)
    buttonRandomThree = Math.floor(Math.random() * (12) + 1);
    console.log(buttonRandomThree)
    buttonRandomFour = Math.floor(Math.random() * (12) + 1);
    console.log(buttonRandomFour)
}



//run the function

genGameRandom()


// on click function for buttons and pass into user total
$("#red").on("click", function () {
    // document.getElementById("red").addEventListener("click", function(){---how to write it in javascript
    playerScore = playerScore + buttonRandomOne;
    console.log(playerScore)
    //  $("#user-total").html(playerscore);
    document.getElementById("user-total").innerHTML = playerScore;
    getScore();

})
$("#blue").on("click", function () {
    playerScore = playerScore + buttonRandomTwo;
    console.log(playerScore)
    document.getElementById("user-total").innerHTML = playerScore;
    getScore();

})
$("#yellow").on("click", function () {
    playerScore = playerScore + buttonRandomThree;
    console.log(playerScore)
    document.getElementById("user-total").innerHTML = playerScore;
    getScore();

})
$("#green").on("click", function () {
    playerScore = playerScore + buttonRandomFour;
    console.log(playerScore)
    document.getElementById("user-total").innerHTML = playerScore;
    getScore();
    ;

})

document.getElementById("user-total").innerHTML = playerScore;
// function checkScore(curPlayerScore){
//     console.log("this is the player Score " +playerScore)
//     console.log("this is the target score "+gameRandom)


function getScore() {


    if (playerScore === gameRandom) {
        //     // alert("you win")
        console.log("you win")
        numberWins++;
        userMessage = "you win";
        document.getElementById("message").innerHTML = userMessage;
        document.getElementById("win-total").innerHTML = numberWins;
        genGameRandom()

    }
    else if (playerScore > gameRandom) {
        numberLoses++;
        userMessage = "you lose";
        document.getElementById("message").innerHTML = userMessage;
        document.getElementById("loss-total").innerHTML = numberLoses;
        genGameRandom()
    }
}

// function reset(){
//     gameRandom = Math.floor((Math.random() * 100) + 19);
//     document.getElementById("random-number").innerHTML = gameRandom;
//     playerScore = 0

// }

// if(curPlayerScore>gameRandom){
//     reset()
//     numberLoses++;
//     lossMessage = "you lose";
//     document.getElementById("message").innerHTML = lossMessage;
//     document.getElementById("loss-total").innerHTML = numberLoses;

// }

// else if (curPlayerScore === gameRandom){
//     reset()
//     // alert("you win")
//     console.log("youre getting in the checkscore")
//     numberWins++;
//     userMessage = "you win";
//     document.getElementById("message").innerHTML = userMessage;
//     document.getElementById("win-total").innerHTML = numberWins;


// } 

// else{
//     console.log("your score is less than the target score")
//     playerScore = playerScore + buttonRandomOne;
// }

// else{
//     // alert("you lose")
//     numberLoses++;
//     lossMessage = "you lose";
//     document.getElementById("message").innerHTML = userMessage;
//     document.getElementById("loss-total").innerHTML = numberLoses;   
// }
// }

// function reset(){
//     gameRandom = Math.floor((Math.random() * 100) + 19);
//     document.getElementById("random-number").innerHTML = gameRandom;
//     playerScore = 0
//     document.getElementById("user-total").innerHTML = playerScore;

// }

// document.getElementById("win-total").innerHTML = numberWins;

// document.getElementById("loss-total").innerHTML = numberLoses;