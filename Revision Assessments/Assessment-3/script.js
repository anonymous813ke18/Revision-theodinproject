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

function getHumanChoice () {
    let choice = prompt("Please enter you choice (Rock, Paper, or Scissors).");
    return choice;
}

function playRound (humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        console.log(`It's a tie!!`);
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        console.log(`Computer wins this round!`);
        console.log(`Computer Choice: ${computerChoice} Computer Score: ${computerScore}`);
        console.log(`Your Choice: ${humanChoice} Your Score: ${humanScore}`);
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        console.log(`Computer wins this round!`);
        console.log(`Computer Choice: ${computerChoice} Computer Score: ${computerScore}`);
        console.log(`Your Choice: ${humanChoice} Your Score: ${humanScore}`);
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        console.log(`Computer wins this round!`);
        console.log(`Computer Choice: ${computerChoice} Computer Score: ${computerScore}`);
        console.log(`Your Choice: ${humanChoice} Your Score: ${humanScore}`);
    } else {
        humanScore++;
        console.log(`Human wins this round!`);
        console.log(`Your Choice: ${humanChoice} Your Score: ${humanScore}`);
        console.log(`Computer Choice: ${computerChoice} Computer Score: ${computerScore}`);
    }
}

function playGame () {
    let humanChoice, computerChoice;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (computerScore > humanScore) {
        console.log('Computer wins the Game!');
    } else if (computerScore < humanScore) {
        console.log('Human wins the Game!');
    } else {
        console.log('The game is a tie!')
    }
}

playGame();