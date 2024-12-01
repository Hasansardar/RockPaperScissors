let gameChoice ="";
let humanScore =0;
let computerScore=0;
let computerChoice;
let showScore;
let totalRounds=0;
const btnOne = document.getElementById("rock");
const btnTwo = document.getElementById("papers");
const btnThree = document.getElementById("scissors");
const winner = document.getElementById("who-wins");
let score = document.getElementById("score");
let totalScore = document.getElementById("game-winner");





btnOne.addEventListener("click",function(){
gameChoice="rock";
computerChoice = getComputerChoice();
totalRounds+=1;
if(gameChoice===computerChoice){
    winner.textContent = "Its a draw";
} else if (gameChoice==="rock" && computerChoice === "scissors")
{
    winner.textContent = "Human wins";
    humanScore+=1;
    score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`


}else{
    winner.textContent = "Computer wins";
    computerScore+=1;
score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
}
checkWinner();


} )

btnTwo.addEventListener("click",function(){
    totalRounds+=1;
    gameChoice="papers";
    computerChoice = getComputerChoice();
    if(gameChoice===computerChoice){
        winner.textContent = "Its a draw";
    } else if (gameChoice==="papers" && computerChoice === "scissors")
    {
        winner.textContent = "Computer wins";
        computerScore+=1;
        score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`

    
    }else{
        winner.textContent = "Human wins";
        humanScore+=1;
        score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`

    }
    checkWinner();
    
    
    } )

    btnThree.addEventListener("click",function(){
        totalRounds+=1;
        gameChoice="scissors";
        computerChoice = getComputerChoice();
        if(gameChoice===computerChoice){
            winner.textContent = "Its a draw";
        } else if (gameChoice==="scissors" && computerChoice === "papers")
        {
            winner.textContent = "Human wins";
            humanScore+=1;
            score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`

        
        }else{
            winner.textContent = "Computer wins";
            computerScore+=1;
            score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`

        }
        checkWinner();
      
        
        } )
    



function getComputerChoice(){


const computerMove =["rock","papers","scissors"];

let random= Math.floor(Math.random()*computerMove.length);
return computerMove[random];

};



function checkWinner(){

    if(humanScore=== 5 && humanScore>computerScore){
        totalScore.textContent= `Human wins by ${humanScore} to ${computerScore}`
    }
    else if(computerScore=== 5 && humanScore <computerScore){
        totalScore.textContent= `Computer wins by ${computerScore} to ${humanScore}`
    }

}




