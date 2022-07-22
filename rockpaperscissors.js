function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}

function getPlayerChoice() {
    let option = prompt("Play your choice: Rock, Paper or Scissors?");
    let playerSelection = option.toLowerCase();
    return playerSelection;
}

function playGame(computerSelection, playerSelection) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win! Rock beats scissors";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "You lose! Paper beats rock";
    } else if ((playerSelection === "rock") && (computerSelection === "rock")) {
        return "Draw!";
    }
    if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return "You lose! Scissors beats paper";
    } else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        return "Draw";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win! Paper beats rock";
    }
    if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
        return "Draw";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win! Scissors beats paper";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return "You lose! Rock beats scissors";
    }
}

// console.log(computerSelection);
// console.log(playGame(computerSelection ,playerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {
        let result = playGame(computerSelection, playerSelection);
        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }
    if (playerScore>computerScore) {
        return `You won by ${playerScore-computerScore} points` 
    }
    else {
        return `You lost by ${computerScore-playerScore} points` 
    }
}

console.log(game());
