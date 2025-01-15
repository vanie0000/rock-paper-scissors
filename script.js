let humanScore = 0;
        let computerScore = 0;
        function getComputerChoice() {
            let result
            let value = Math.floor(Math.random() * 3) //picks one of three values, 0 1 and 2
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
        function getHumanChoice() {
            let choice
            let value = parseInt(prompt("enter a number among 0, 1 and 2, where 0 is rock, 1 is paper and 2 is scissors: "))
            if (value === 0) {
                choice = "rock"
            }
            else if (value === 1) {
                choice = "paper"
            }
            else {
                choice = "scissors"
            }
            return choice;
        }
        function playRound(humanChoice, computerChoice) {
            // your code here!
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

        function playGame() {
            let rounds = 0;
            while (rounds < 5) {
                let humanSelection = getHumanChoice();
                let computerSelection = getComputerChoice();

                let result = playRound(humanSelection, computerSelection);

                console.log(`Round ${rounds + 1}: ${result}`);
                console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
                rounds++;
            }
            console.log("\nFinal Scores:");
            console.log(`You: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
            if (humanScore > computerScore) {
                console.log("Congratulations! You won the game!");
            } 
            else if (computerScore > humanScore) {
                console.log("Game Over! Computer wins!");
            } 
            else {
                console.log("It's a tie game!");
            }
        }
        playGame()