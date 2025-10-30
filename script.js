/* Game will be played over the console */

/* global variables for game tracking */
humanScore = 0;
computerScore = 0;

/* Gets computer choice */
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0){
        return 'rock';
    } else if (randomNum == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

/* gets user choice */
function getHumanChoice() {
    const userInput = prompt('Enter your choice: ', 'Rock, Paper, or Scissors');
    return userInput;
};


/* One round of play */
function playRound(humanChoice, computerChoice) {
    /* making choice case insesitive */
    humanChoice = humanChoice.toLowerCase();
    /* if else code based outcome of choices */
    if (computerChoice == 'rock' && humanChoice == 'scissors') {
        computerScore += 1;
        console.log(`Sorry, you lose! Rock beats scissors. Human:${humanScore} Computer:${computerScore}`);
    } else if (computerChoice == 'paper' && humanChoice == 'rock'){
        computerScore += 1;
        console.log(`Sorry, you lose! Paper covers Rock. Human:${humanScore} Computer:${computerScore}`);
    } else if (computerChoice == 'scissors' && humanChoice == 'paper'){
        computerScore += 1;
        console.log(`Sorry, you lose! Scissors cuts paper. Human:${humanScore} Computer:${computerScore}`);
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore += 1;
        console.log(`You win! Rock beats Scissors! Human:${humanScore} Computer:${computerScore}`);
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore += 1;
        console.log(`You win! Paper covers Rock! Human:${humanScore} Computer:${computerScore}`);
    } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore += 1;
        console.log(`You win! Scissors cuts Paper! Human:${humanScore} Computer:${computerScore}`);
    } else {
        console.log(`It's a tie! Try again. Human:${humanScore} Computer:${computerScore}`)
    };
};

/* Looping through round to play 5 rounds */
function playGame() {
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    };
};

playGame();

