// Set array of Rock Paper Scissors
const rps = ["rock", "paper", "scissors"]
let humanScore = 0;  // Init val of humanScore
let computerScore = 0;  // Init val of computerScore

// Query buttons div
const buttons = document.querySelector("#buttons");
// Querying Rock Button
const rock = document.querySelector("#rock");   
// Querying Paper Button
const paper = document.querySelector("#paper");
// Querying Scissors Button
const scissors = document.querySelector("#scissors");

// Query scoreboard div
const scoreboard = document.querySelector("#scoreboard");

// Results div for one round
const roundResults = document.querySelector("#round-results");

// Hide reset button until game is over
const resetButton = document.querySelector("#reset-button");
resetButton.style.visibility = "hidden";



// Computer choice
function getComputerChoice() {
    let choice = Math.round(Math.random() * 3);

    if (choice === 1) {
        // console.log("rock");
        return "rock"
    } else if (choice === 2) {
        // console.log("paper");
        return "paper"
    } else if (choice === 3) {
        // console.log("scissors");
        return "scissors"
    }
}



// Human choice
function getHumanChoice() {
    // Run a do-while loop until user enters the correct word
    do {
        // Fetch user input for the first time (Either Rock, Paper, or Scissors)
        response = prompt("Please enter either 'Rock', 'Paper', or 'Scissors'");
        response = response.toLowerCase().trim();
    } while (!rps.includes(response));

    return response;
}



// Play a Round
function playRound(humanChoice, computerChoice) {
    // Consts for prompt instead of repeating code
    const win = `You win! ${humanChoice} beats ${computerChoice}`;
    const lose = `You lose! ${computerChoice} beats ${humanChoice}`;
    
    // If it's a draw
    if (humanChoice === computerChoice) {
        console.log("Draw, please play again");
        roundResults.textContent = "Draw, please play again";
        return
    }

    // Human chooses rock
    if (humanChoice === "rock") {
        // Win condition first
        if (computerChoice === "scissors") {
            console.log(win);
            roundResults.textContent = win;
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            roundResults.textContent = lose;
            computerScore++;
            return
        }
    }

    // Human chooses paper
    if (humanChoice === "paper") {
        // Win condition first
        if (computerChoice === "rock") {
            console.log(win);
            roundResults.textContent = win;
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            roundResults.textContent = lose;
            computerScore++;
            return
        }
    }

    // Human chooses scissors
    if (humanChoice === "scissors") {
        // Win condition first
        if (computerChoice === "paper") {
            console.log(win);
            roundResults.textContent = win;
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            roundResults.textContent = lose;
            computerScore++;
            return
        }
    }
}



// Update the scoreboard of the game
function updateScoreDisplay() {
    // Current Scores (concole)
    console.log("Current Scores:");
    console.log("\t- Your Score: " + humanScore);
    console.log("\t- Computer Score: " + computerScore);
    console.log("\n");

    // Current Score update
    const updateHumanScore = document.querySelector("#player-scoreboard .score");
    updateHumanScore.textContent = humanScore;
    const updateComputerScore = document.querySelector("#computer-scoreboard .score");
    updateComputerScore.textContent = computerScore;


    // Total Scores
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            console.log("You Won :)");
            roundResults.textContent = "You Won :D"
            resetButton.style.visibility = "visible";
            // Add a Play again button + play again function
        } else {
            console.log("You Lost :(");
            roundResults.textContent = "You Lost ;-;"
            resetButton.style.visibility = "visible";
            // Add a Play again button + play again function
        }
    }
}



// Play game
function playGame(humanChoice) {
    // Fetch computer choice
    const computerChoice = getComputerChoice();

    // Play a round
    playRound(humanChoice, computerChoice);

    // Update the current score
    updateScoreDisplay();
}



// Player chooses rock
rock.addEventListener("click", (event) => {
    if (humanScore >= 5 || computerScore >= 5) {
        event.preventDefault()
    } else {
        // Start game with human choice as rock
        playGame("rock");
    }
});
// Player chooses paper
paper.addEventListener("click", (event) => {
    if (humanScore >= 5 || computerScore >= 5) {
        event.preventDefault()
    } else {
        // Start game with human choice as paper
        playGame("paper");
    }
});
// Player chooses scissors
scissors.addEventListener("click", (event) => {
    if (humanScore >= 5 || computerScore >= 5) {
        event.preventDefault()
    } else {
        // Start game with human choice as scissors
        playGame("scissors");
    }
});
