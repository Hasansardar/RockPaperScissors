console.log("Hello World! and Welcome to the Rock Paper Scissors Game");



let humanScore =0;
let computerScore=0;


playGame();


// first step is to take the user input if they write rock paper or scissors
//const userChoice = getHumanChoice();
//console.log(userChoice);
//console.log(getHumanChoice());
//console.log(getComputerChoice());



function getComputerChoice(){
// computer choice will return a random string either rock paper or scissors
// three strings should be stored in an array
// so lets create an object named computer move
// now use random math function to generate a random string between these three
// Math random method use a random integer from 0 to 1
// Math floor will convert the integer to round off value

const computerMove =["rock","paper","scissor"];

let random= Math.floor(Math.random()*computerMove.length);
return computerMove[random];

};


function getHumanChoice(){

    const humanMove = ["rock", "paper", "scissor" ];

    let ask = prompt("Please enter Rock, Paper, or Scissor").toLowerCase();

while(!humanMove.includes(ask)){

    alert("invalid, please enter a valid choice");
    ask = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();

    
}
return ask;

};

function playRound(humanChoice, computerChoice) { // function has two parameters that will expect two variables 
    
    if (humanChoice==="rock" && computerChoice==="rock"){
        console.log("Rock vs Rock, it's a draw");
    }   
    else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        console.log(" Paper vs rock, Human wins!!!");
    }  
    
    else if (humanChoice==="scissor" && computerChoice==="rock"){
        computerScore++;
        console.log(" scissor, vs rock Computer wins!!!");
    }  
    
    
   else if (humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;

        console.log(" rock vs paper, Computer wins");
    }   
 else if (humanChoice==="paper" && computerChoice==="paper"){
        console.log("paper vs paper, it's a draw");
    }  
    
   else if (humanChoice==="scissor" && computerChoice==="paper"){
        humanScore++;
        console.log("scissor vs paper,Human wins!!!");
    }  

    else if (humanChoice==="rock" && computerChoice==="scissor"){
        humanScore++;

        console.log(" rock vs scissor,human wins");
    }   
    else if (humanChoice==="paper" && computerChoice==="scissor"){
        computerScore++;

        console.log("paper vs scissor computer wins!!");
    }  
    
    else if (humanChoice==="scissor" && computerChoice==="scissor"){
        console.log(" scissor vs scissor it's a draw!!");
    }  

    else {

        console.log("invalid!!");
    }



  }
  
  
  function playGame() { // the playround function will be called in playgame function. and playgame function will be called it will 
    // the playround function 5 times
    
    
   
    for ( let i=0;i<5;i++){
  playRound(getHumanChoice(),getComputerChoice());
   
    }
    if (humanScore > computerScore)
    {
        console.log("human wins by",humanScore,computerScore);
    }
    else 
    console.log("computer wins by",humanScore,computerScore);
}
