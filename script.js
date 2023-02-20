const playerScore = 0;
const computerScore = 0;
const winner = '';

function getComputerChoice() {
  let roll = Math.floor(Math.random() * 3);
  switch (roll) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

function getUserChoice() {
  let playerSelection = prompt('Choose between: Rock/ Paper / Scissors?');
  console.log(playerSelection);
  return playerSelection;
}

function getWinner(playerSelection, computerSelection) {
  if (
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Papper')
  ) {
    console.log(
      `You win!😎 Your choice  ${playerSelection} beat computer choice ${computerSelection}`
    );
  } else if (
    (computerSelection === 'Paper' && playerSelection === 'Rock') ||
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Papper')
  ) {
    console.log(
      `You lose 😥 Computer choice ${computerSelection} beats your choice ${playerSelection}`
    );
  } else if (playerSelection === computerSelection) {
    console.log(`Draw 🤗`);
  }
}

function playRound() {
  let a = getUserChoice();
  let b = getComputerChoice();

  getWinner(a, b);
}
playRound();
