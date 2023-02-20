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
console.log(computerSelection);

const playerSelection = prompt('Choose between Rock Paper Scissors?');
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`world decided to make love not war`);
  } else if (
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Papper')
  ) {
    console.log(`Human win`);
  } else if (
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Papper')
  )
    console.log(`Computer win`);
  else {
    console.log(`something go terribly wrong, plz try again`);
  }
}
playRound();
