// Rock-Paper-Score

const choices = ['Rock', 'Paper', 'Scissor'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let player_Score = 0;
let computer_Score = 0;

function playGame(playerChoice) {
    let result = "";
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        switch (playerChoice) {
            case 'Rock':
                result = (computerChoice === 'Scissor') ? 'YOU WON!' : 'YOU LOSE!';
                break;
            case 'Paper':
                result = (computerChoice === 'Rock') ? 'YOU WON!' : 'YOU LOSE!';
                break;
            case 'Scissor':
                result = (computerChoice === 'Paper') ? 'YOU WON!' : 'YOU LOSE!';
                break;
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText');

    switch (result) {
        case 'YOU WON!':
            resultDisplay.classList.add('greenText');
            player_Score++;
            playerScore.textContent = player_Score;
            break;
        case 'YOU LOSE!':
            resultDisplay.classList.add('redText');
            computer_Score++;
            computerScore.textContent = computer_Score;
            break;
    }
}
