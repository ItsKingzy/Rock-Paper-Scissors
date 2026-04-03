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

// Score for both human and computer
const updateHumanScore = document.querySelector("#player-scoreboard .score");
const updateComputerScore = document.querySelector("#computer-scoreboard .score");

// Hide reset button until game is over
const resetButton = document.querySelector("#reset-button");
resetButton.style.visibility = "hidden";
// When reset button is clicked
resetButton.addEventListener("click", () => {
    buttonClickAudio(false);
    resetGame();
});



// Computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        // console.log("rock");
        return "rock";
    } else if (choice === 1) {
        // console.log("paper");
        return "paper";
    } else if (choice === 2) {
        // console.log("scissors");
        return "scissors";
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
            console.log(computerChoice);
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

    // Update Score
    updateHumanScore.textContent = humanScore;
    updateComputerScore.textContent = computerScore;


    // Total Scores
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            console.log("You Won :)");
            roundResults.textContent = "You Won :D"
        } else {
            console.log("You Lost :(");
            roundResults.textContent = "You Lost ;-;"
        }

        // Show reset button
        resetButton.style.visibility = "visible";
        // Reset game if button is clicked
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
    buttonClickAudio(false);
    if (humanScore >= 5 || computerScore >= 5) {
        event.preventDefault()
    } else {
        // Start game with human choice as rock
        playGame("rock");
    }
});
// Player chooses paper
paper.addEventListener("click", (event) => {
    buttonClickAudio(false);
    if (humanScore >= 5 || computerScore >= 5) {
        event.preventDefault()
    } else {
        // Start game with human choice as paper
        playGame("paper");
    }
});
// Player chooses scissors
scissors.addEventListener("click", (event) => {
    buttonClickAudio(false);
    if (humanScore >= 5 || computerScore >= 5) {
        event.preventDefault()
    } else {
        // Start game with human choice as scissors
        playGame("scissors");
    }
});


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundResults.textContent = "";
    updateHumanScore.textContent = humanScore;
    updateComputerScore.textContent = computerScore;
    resetButton.style.visibility = "hidden";
}


// General audio feeback for button clicks
// isGithub (boolean) is the type of audio that will play (either for github link or all other types)
function buttonClickAudio(isGithub) {
    let audio;
    if (isGithub) {
        audio = new Audio("./audio/github-button.mp3");
        audio.volume = 0.20;
    } else {
        audio = new Audio("./audio/button-click.mp3");
    }
    // Play the audio
    audio.play();
}

// Button click audio for github link
const github = document.querySelector("#github");
github.addEventListener("click", () => {buttonClickAudio(true);});

// Play songs at random in the background
const music = ["Aria Math", "Beginning 2", "Haunt Muskie", "Moog City 2"];
function playMusic() {
    // Play music at random
    let musicChoice = Math.floor(Math.random() * 4);
    let musicFile = "C418-" + music.at(musicChoice).replaceAll(" ", "-") + ".mp3";
    let audio = new Audio("./audio/" + musicFile);
    audio.play();

    // Show image for the music playing
    let musicImg = document.createElement("img");
    let musicImgSrc = "C418-" + music.at(musicChoice).replaceAll(" ", "-") + ".png";
    musicImg.src = "./img/" + musicImgSrc;
    musicImg.alt = "Image of the music currently playing";
    // Add a class to the image
    musicImg.classList.add("now-playing");
    // Query the div to place the img
    let nowPlayingDiv = document.querySelector("#music-status");
    // Append the img at the start of the div
    nowPlayingDiv.prepend(musicImg);

    // Style the image
    styleMusicImg();
}

function styleMusicImg() {
    let musicImg = document.querySelector(".now-playing");
    // Add styles here
}

playMusic();