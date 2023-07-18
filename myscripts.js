const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const PlayerScore = document.getElementById("pscore");
const ComputerScore = document.getElementById("cscore");
const winner = document.getElementById("gameOver");
const tryAgain = document.getElementById("tryAgain");
const threshold = 5;

PlayerScore.textContent = 0;
ComputerScore.textContent = 0;

rock.addEventListener('click', e => {
    if ((parseInt(ComputerScore.textContent) >= threshold) || (parseInt(PlayerScore.textContent) >= threshold)){
        return;
    }
    const message = playRound('rock', getComputerChoice());
    result.textContent = message;
    checkScore();
});

paper.addEventListener('click', e => {
    if ((parseInt(ComputerScore.textContent) >= threshold) || (parseInt(PlayerScore.textContent) >= threshold)){
        return;
    }
    const message = playRound('paper', getComputerChoice());
    result.textContent = message;
    checkScore();

});

scissors.addEventListener('click', e => {
    if ((parseInt(ComputerScore.textContent) >= threshold) || (parseInt(PlayerScore.textContent) >= threshold)){
        return;
    }
    const message = playRound('scissors', getComputerChoice());
    result.textContent = message;
    checkScore();

});

tryAgain.addEventListener('click', e =>{
    location.reload();
});

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        return "rock"
    }
    if (x == 2) {
        return "paper"
    }
    if (x == 3) {
        return "scissors"
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Draw!"
    }
    else if (playerSelection == "rock"){
        let x = (computerSelection == 'paper') ? "You Lose! Computer Chose Paper!": "You Won! Computer Chose Scissors!"; 
        if (x == "You Lose! Computer Chose Paper!"){
            ComputerScore.textContent = parseInt(ComputerScore.textContent) + 1;
        }
        else {
            PlayerScore.textContent = parseInt(PlayerScore.textContent) + 1;

        }
        return x;  
    }
    else if (playerSelection == 'paper'){
        let x = (computerSelection == 'scissors') ? "You Lose! Computer Chose Scissors!" : "You Won! Computer Chose Rock!";
        if (x == "You Lose! Computer Chose Scissors!"){
            ComputerScore.textContent = parseInt(ComputerScore.textContent) + 1;
        }
        else {
            PlayerScore.textContent = parseInt(PlayerScore.textContent) + 1;
        }
        return x;
    }
    else if (playerSelection == 'scissors'){
        let x =  (computerSelection == 'rock') ? "You Lose! Computer Chose Rock!" : "You Won! Computer Chose Paper!";
        if (x == "You Lose! Computer Chose Rock!"){
            ComputerScore.textContent = parseInt(ComputerScore.textContent) + 1;
        }
        else {
            PlayerScore.textContent = parseInt(PlayerScore.textContent) + 1;
        }
        return x;
    }
}

function checkScore(){
    if (parseInt(ComputerScore.textContent) == 5){
        winner.textContent = "Game Over, Computer Won!";
        console.log("Game Over, Computer Won!");
    }
    else if (parseInt(PlayerScore.textContent) == 5){
        winner.textContent = "Game Over, Humanity Won!";
        console.log("Game Over, Humanity Won!")

    }
}




