'use strict';

// const playerChoise = ();
// const pcChoice = ();
// function dice() {}

let roll = Math.trunc(Math.random() * 3) + 1;
console.log(`Computer rolling dice and its choise ${roll}`);

function getComputerChoice() {
  if (roll === 1) {
    return 'Rock';
  } else if (roll === 2) {
    return 'Paper';
  } else if (roll === 3) {
    return 'Scissors';
  } else console.log(`Error dice is broken`);
}
getComputerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  // your code here!
}

('You Win! Paper loose to a Scissors');
('Draw! Paper decide to make love with another Paper');
('You Lose! Paper beats Rock');

const playerSelection = 'rock';
console.log(playRound(playerSelection, computerSelection));
