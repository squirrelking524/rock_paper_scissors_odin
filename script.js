/* Game will be played over the console */

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

