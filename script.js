// console.log("Hello world");

// Set array of Rock Paper Scissors
const rps = ["rock", "paper", "scissors"]

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

let humanScore = 0;  // Init val of humanScore
let computerScore = 0;  // Init val of computerScore

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    // Human chose rock
    if (humanChoice === computerChoice) {
        console.log("Draw, play again");
        return
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log();
        } else
    }

}