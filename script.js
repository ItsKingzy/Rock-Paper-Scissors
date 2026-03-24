// Set array of Rock Paper Scissors
const rps = ["rock", "paper", "scissors"]
let humanScore = 0;  // Init val of humanScore
let computerScore = 0;  // Init val of computerScore

// Access the body of HTML file
const body = document.querySelector("body");

// Adding Rock Button
const rock = document.createElement("button");
rock.textContent = "Rock";
body.appendChild(rock);    

// Adding Paper button
const paper = document.createElement("button");
paper.textContent = "Paper";
body.appendChild(paper);

// Adding Scissors button
const scissors = document.createElement("button");
scissors.textContent = "Scissors";
body.appendChild(scissors);



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
        return
    }

    // Human chooses rock
    if (humanChoice === "rock") {
        // Win condition first
        if (computerChoice === "scissors") {
            console.log(win);
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            computerScore++;
            return
        }
    }

    // Human chooses paper
    if (humanChoice === "paper") {
        // Win condition first
        if (computerChoice === "rock") {
            console.log(win);
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            computerScore++;
            return
        }
    }

    // Human chooses scissors
    if (humanChoice === "scissors") {
        // Win condition first
        if (computerChoice === "paper") {
            console.log(win);
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            computerScore++;
            return
        }
    }
}



// Play game
function playGame() {
    while ((humanScore < 5) && (computerScore < 5)) {
        // Fetch computer choice
        const computerChoice = getComputerChoice();

        // Player chooses rock
        rock.addEventListener("click", () => {
            playRound("rock", computerChoice)
        });
        // Player chooses paper
        paper.addEventListener("click", () => {
            playRound("paper", computerChoice)
        });
        // Player chooses scissors
        scissors.addEventListener("click", () => {
            playRound("scissors", computerChoice)
        });

        // Current Scores
        console.log("Current Scores:");
        console.log("\t- Your Score: " + humanScore);
        console.log("\t- Computer Score: " + computerScore);
        console.log("\n");

        // Total Scores
        if (humanScore > computerScore) {
            console.log("You Won :)");
        } else {
            console.log("You Lost :(");
        }
    }
}


function 


// Start Game
playGame();