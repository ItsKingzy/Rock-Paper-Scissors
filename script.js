// Set array of Rock Paper Scissors
const rps = ["rock", "paper", "scissors"]
let humanScore = 0;  // Init val of humanScore
let computerScore = 0;  // Init val of computerScore

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
    // Fetch user input for the first time (Either Rock, Paper, or Scissors)
    let response = prompt("Enter either 'Rock', 'Paper', or 'Scissors'");
    response = response.toLowerCase().trim();

    // Run a while loop until user enters the correct word
    while (!rps.includes(response)) {
        response = prompt("Please enter either 'Rock', 'Paper', or 'Scissors'");
        response = response.toLowerCase().trim();
    }

    return response;
}

// Play 1 Round
function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    // Consts for prompt instead of repeating code
    const win = `You win! ${humanChoice} beats ${computerChoice}`;
    const lose = `You win! ${computerChoice} beats ${humanChoice}`;
    
    // If it's a draw
    if (humanChoice === computerChoice) {
        console.log("Draw, play again");
        return
    }

    // Human chooses rock
    if (humanChoice === "rock") {
        // Win condition first
        if (computerChoice === "scissors") {
            console.log(win);
        // Lose condition second
        } else {
            console.log(lose)
        }
    }

    // Human chooses paper
    if (humanChoice === "paper") {
        // Win condition first
        if (computerChoice === "rock") {
            console.log(win);
        // Lose condition second
        } else {
            console.log(lose);
        }
    }

    // Human chooses scissors
    if (humanChoice === "scissors") {
        // Win condition first
        if (computerChoice === "paper") {
            console.log(win);
        // Lose condition second
        } else {
            console.log(lose);
        }
    }

}