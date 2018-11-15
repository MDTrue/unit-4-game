// set initial variables
var gameRandom
var buttonRandomOne
var buttonRandomTwo
var buttonRandomThree
var buttonRandomFour
var buttonRandomArr = []
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
    var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    ranNums = []
    j = 0
    i = nums.length
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
    }
    console.log(ranNums)
    buttonRandomOne = parseInt(ranNums[0])
    buttonRandomTwo = parseInt(ranNums[1])
    buttonRandomThree = parseInt(ranNums[2])
    buttonRandomFour = parseInt(ranNums[3])
    // function getRandomNum(num) {
        // getRandomNum(buttonRandomOne) ---my original method but it allowed duplicate values
        // buttonRandomOne = Math.floor(Math.random() * (12) + 1);
    // }

    console.log(buttonRandomOne) 
    console.log(buttonRandomTwo)  
    console.log(buttonRandomThree)
    console.log(buttonRandomFour)
    //these are checks
}



//run the function

genGameRandom()


// on click function for buttons and pass into user total
$("#red").on("click", function () {
    // document.getElementById("red").addEventListener("click", function(){---how to write it in javascript
    playerScore = playerScore + buttonRandomOne;
    console.log(playerScore)
    $("#user-total").html(playerScore);
    // document.getElementById("user-total").innerHTML = playerScore;-----javascript with no jquery
    getScore();

})
$("#blue").on("click", function () {
    playerScore = playerScore + buttonRandomTwo;
    console.log(playerScore)
    $("#user-total").html(playerScore);
    getScore();

})
$("#yellow").on("click", function () {
    playerScore = playerScore + buttonRandomThree;
    console.log(playerScore)
    $("#user-total").html(playerScore);
    getScore();

})
$("#green").on("click", function () {
    playerScore = playerScore + buttonRandomFour;
    console.log(playerScore)
    $("#user-total").html(playerScore);
    getScore();
    ;

})

document.getElementById("user-total").innerHTML = playerScore;
// checks
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
//this is code added by my tutor that I wound up not using, my own code was much cleaner
//but I left it in as reference
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