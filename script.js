let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result
    let value = Math.floor(Math.random() * 3) 
    if (value === 0) {
        result = "rock"
    }
    else if (value === 1) {
        result = "paper"
    }
    else {
        result = "scissors"
    }
    return result;
}



function playRound(humanChoice, computerChoice) {
    let str = humanChoice.toLowerCase();
    if (str === computerChoice) {
        return `it's a tie`;
    }
    if (str === "rock" && computerChoice === "paper" || str === "scissors" && computerChoice === "rock" || str === "paper" && computerChoice === "scissors") {
        computerScore++;
        return `you lose! ${computerChoice} beats ${str}`;
    }
    else {
        humanScore++;
        return `you win! ${str} beats ${computerChoice}`;
    }
}

const resultsDiv = document.getElementById('results');

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    const result = playRound('rock', computerSelection);

    resultsDiv.innerHTML = `<p>${result}</p>`;
    resultsDiv.innerHTML += `<p>Current score - You: ${humanScore}, Computer: ${computerScore}</p>`;

    if (humanScore === 5) {
        resultsDiv.innerHTML += `<p>Congratulations! You won the game!</p>`;
    }
    else if (computerScore === 5) {
        resultsDiv.innerHTML += `<p>Game Over! Computer wins!</p>`;
    }
});

document.getElementById('paper').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    const result = playRound('paper', computerSelection);

    resultsDiv.innerHTML = `<p>${result}</p>`;
    resultsDiv.innerHTML += `<p>Current score - You: ${humanScore}, Computer: ${computerScore}</p>`;

    if (humanScore === 5) {
        resultsDiv.innerHTML += `<p>Congratulations! You won the game!</p>`;
    }
    else if (computerScore === 5) {
        resultsDiv.innerHTML += `<p>Game Over! Computer wins!</p>`;
    }
});

document.getElementById('scissors').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    const result = playRound('scissors', computerSelection);

    resultsDiv.innerHTML = `<p>${result}</p>`;
    resultsDiv.innerHTML += `<p>Current score - You: ${humanScore}, Computer: ${computerScore}</p>`;

    if (humanScore === 5) {
        resultsDiv.innerHTML += `<p>Congratulations! You won the game!</p>`;
    }
    else if (computerScore === 5) {
        resultsDiv.innerHTML += `<p>Game Over! Computer wins!</p>`;
    }
});
