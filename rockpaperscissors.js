function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

var compScore = 0;
var playerScore = 0; 
var button1 = document.querySelector('.button-1');
var button2 = document.querySelector('.button-2');
var button3 = document.querySelector('.button-3');

const checkForWinner = (compScore, playerScore) => {
    if (compScore===5) {
        const p = document.createElement('p');
        p.classList.add('player-won');
        document.querySelector('.winner-display').append(p);
        p.innerText = 'Computer Wins!';
        button1.setAttribute('disabled', true)
        button2.setAttribute('disabled', true)
        button3.setAttribute('disabled', true)
    } else if (playerScore===5) {
        const p = document.createElement('p');
        p.classList.add('player-won');
        document.querySelector('.winner-display').append(p);
        p.innerText = 'You Win!';
        button1.setAttribute('disabled', true)
        button2.setAttribute('disabled', true)
        button3.setAttribute('disabled', true)
    }
}

button1.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(computerSelection, playerSelection);
    checkForWinner(compScore, playerScore);
});

button2.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(computerSelection, playerSelection);
    checkForWinner(compScore, playerScore);
});

button3.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(computerSelection, playerSelection);
    checkForWinner(compScore, playerScore);
});

function playRound(computerSelection, playerSelection) {
    var display = document.querySelector('.display');
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        display.innerText = "You win! Rock beats scissors";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        compScore++;
        display.innerText = 'You lose! Paper beats rock';
    } else if ((playerSelection === "rock") && (computerSelection === "rock")) {
        display.innerText = "Draw!";
    }
    if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        compScore++;
        display.innerText = "You lose! Scissors beats paper";
    } else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        display.innerText = "Draw";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        display.innerText = "You win! Paper beats rock";
    }
    if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
        display.innerText = "Draw";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        display.innerText = "You win! Scissors beats paper";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        compScore++;
        display.innerText = "You lose! Rock beats scissors";
    }
}


