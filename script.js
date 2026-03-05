// console.log("Hello world");

// Set array of Rock Paper Scissors
const rps = ["Rock", "Paper", "Scissors"]

// Computer choice
function getComputerChoice() {
    let choice = Math.round(Math.random() * 3);
//     if (choice === 1) {
//         console.log("rock");
//     } else if (choice === 2) {
//         console.log("paper");
//     } else if (choice === 3) {
//         console.log("scissors");
//     }

    return choice;
}

// Human choice
function getHumanChoice() {
    // Fetch user input (Either Rock, Paper, or Scissors)
    let response = prompt("Enter either 'Rock', 'Paper', or 'Scissors'");
    response = response.toLowerCase().trim();

    return response;
}

