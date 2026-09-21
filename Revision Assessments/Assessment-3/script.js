const buttons = document.querySelectorAll('button');
const scoreDisplay = document.querySelector(".score-display");
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener ('click', () => {
        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
        // alert('listener added')
    })
})
let humanScore=0, computerScore=0;

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// function getHumanChoice () {
//     let choice = prompt("Please enter you choice (Rock, Paper, or Scissors).");
//     return choice;
// }

function playRound (humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        scoreDisplay.textContent = "It's a tie"
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        scoreDisplay.innerText = '';
        scoreDisplay.innerText = `Computer wins this round!\nComputer Choice: ${computerChoice} Computer Score: ${computerScore}\nYour Choice: ${humanChoice} Your Score: ${humanScore}`;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        scoreDisplay.innerText = '';
        scoreDisplay.innerText = `Computer wins this round!\nComputer Choice: ${computerChoice} Computer Score: ${computerScore}\nYour Choice: ${humanChoice} Your Score: ${humanScore}`;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        scoreDisplay.innerText = '';
        scoreDisplay.innerText = `Computer wins this round!\nComputer Choice: ${computerChoice} Computer Score: ${computerScore}\nYour Choice: ${humanChoice} Your Score: ${humanScore}`;
    } else {
        humanScore++;
        scoreDisplay.innerText = '';
        scoreDisplay.innerText = `Human wins this round!\nYour Choice: ${humanChoice} Your Score: ${humanScore}\nComputer Choice: ${computerChoice} Computer Score: ${computerScore}`;
    }

    if (computerScore == 5) {
        scoreDisplay.innerText = 'Computer is the winner!'
        buttons.forEach ((button) => button.disabled = true)
    } else if (humanScore == 5) {
        scoreDisplay.innerText = 'Human is the winner!'
        buttons.forEach ((button) => button.disabled = true)
    }
}

// function playGame () {
//     let humanChoice, computerChoice;

//     for (let i = 0; i < 5; i++) {
//         humanChoice = getHumanChoice().toLowerCase();
//         computerChoice = getComputerChoice();

//         playRound(humanChoice, computerChoice);
//     }

//     if (computerScore > humanScore) {
//         console.log('Computer wins the Game!');
//     } else if (computerScore < humanScore) {
//         console.log('Human wins the Game!');
//     } else {
//         console.log('The game is a tie!')
//     }
// }

// playGame();