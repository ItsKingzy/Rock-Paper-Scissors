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

// Query targetScore
const targetScore = document.querySelector("#target-score");

// Results div for one round
const roundResults = document.querySelector("#round-results");

// Result of hands played
const winner = document.querySelector("#winner");

// Score for both human and computer
const updateHumanScore = document.querySelector("#player-scoreboard .score");
const updateComputerScore = document.querySelector("#computer-scoreboard .score");

// Query reset message (is winner or not)
const resetMessage = document.querySelector("#reset-message");
// Query reset button
const resetButton = document.querySelector("#reset-button");
// When reset button is clicked
resetButton.addEventListener("click", () => {
    startMusicOnClick();
    buttonClickAudio(false);
    resetGame();
});

// Button click audio for github link
const github = document.querySelector("#github");
github.addEventListener("click", () => {
    startMusicOnClick();
    buttonClickAudio(true);
});

// Mute audio
const muteButton = document.querySelector("#audio-no-mute");
const muteButtonImg = document.querySelector("#audio-no-mute img");
muteButton.addEventListener("click", () => {
    // Play button click audio
    buttonClickAudio(false);
        
    isMuted = !isMuted;

    if (isMuted) {
        muteButtonImg.src = "./img/audio-mute.png";
    } else {
        muteButtonImg.src = "./img/audio-no-mute.png";
    }

    if (currentMusicAudio) {
        currentMusicAudio.muted = isMuted;
    }
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
    const win = `* ${humanChoice} beats ${computerChoice} *`;
    const lose = `* ${computerChoice} beats ${humanChoice} *`;

    // Display player choices on screen
    const displayHumanChoice = document.querySelector("#human-choice .choice");
    displayHumanChoice.textContent = humanChoice;
    const displayComputerChoice = document.querySelector("#computer-choice .choice");
    displayComputerChoice.textContent = computerChoice;
    
    // If it's a draw
    if (humanChoice === computerChoice) {
        console.log("Draw, please play again");
        winner.textContent = "Draw, please play again";
        return
    }

    // Human chooses rock
    if (humanChoice === "rock") {
        // Win condition first
        if (computerChoice === "scissors") {
            console.log(win);
            winner.textContent = win;
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(computerChoice);
            console.log(lose);
            winner.textContent = lose;
            computerScore++;
            return
        }
    }

    // Human chooses paper
    if (humanChoice === "paper") {
        // Win condition first
        if (computerChoice === "rock") {
            console.log(win);
            winner.textContent = win;
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            winner.textContent = lose;
            computerScore++;
            return
        }
    }

    // Human chooses scissors
    if (humanChoice === "scissors") {
        // Win condition first
        if (computerChoice === "paper") {
            console.log(win);
            winner.textContent = win;
            humanScore++; 
            return
        // Lose condition second
        } else {
            console.log(lose);
            winner.textContent = lose;
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
    updateHumanScore.textContent = humanScore + "/3";
    updateComputerScore.textContent = computerScore + "/3";


    // Total Scores
    if (humanScore >= 3 || computerScore >= 3) {
        if (humanScore > computerScore) {
            console.log("You Won :)");
            resetMessage.textContent = "You Won :D"
        } else {
            console.log("You Lost :(");
            resetMessage.textContent = "You Lost ;-;"
        }
        
        // Show reset menu
        showResetMenu();
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
    startMusicOnClick();
    buttonClickAudio(false);
    if (humanScore >= 3 || computerScore >= 3) {
        event.preventDefault()
    } else {
        // Display current round results
        if (!gameInProgress) {
            showRoundResults();
        }
        // Start game with human choice as rock
        playGame("rock");
    }
});
// Player chooses paper
paper.addEventListener("click", (event) => {
    startMusicOnClick();
    buttonClickAudio(false);
    if (humanScore >= 3 || computerScore >= 3) {
        event.preventDefault()
    } else {
        // Display current round results
        if (!gameInProgress) {
            showRoundResults();
        }
        // Start game with human choice as paper
        playGame("paper");
    }
});
// Player chooses scissors
scissors.addEventListener("click", (event) => {
    startMusicOnClick();
    buttonClickAudio(false);
    if (humanScore >= 3 || computerScore >= 3) {
        event.preventDefault()
    } else {
        // Display current round results
        if (!gameInProgress) {
            showRoundResults();
        }
        // Start game with human choice as scissors
        playGame("scissors");
    }
});


function resetGame() {
    // Reset scores
    humanScore = 0;
    computerScore = 0;
    // Hide display of reset message & button
    resetMessage.style.display = "none";
    resetButton.style.display = "none";
    // Reset display of score to "0/3"
    updateHumanScore.textContent = humanScore + "/3";
    updateComputerScore.textContent = computerScore + "/3";
    // Show target-score
    targetScore.style.display = "flex";
    // Reset game in progress
    gameInProgress = false;
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

const music = ["Aria Math", "Beginning 2", "Haunt Muskie", "Moog City 2"];
let currentMusicAudio = null;
let isMuted = false;

function playMusic() {
    let musicChoice = Math.floor(Math.random() * music.length);
    let musicFile = "C418-" + music[musicChoice].replaceAll(" ", "-") + ".mp3";

    if (currentMusicAudio) {
        currentMusicAudio.pause();
        currentMusicAudio.currentTime = 0;
    }

    currentMusicAudio = new Audio("./audio/" + musicFile);

    currentMusicAudio.volume = 0.40;
    currentMusicAudio.muted = isMuted;

    currentMusicAudio.addEventListener("ended", () => {
        playMusic();
    });

    currentMusicAudio.play();

    let musicImg = document.querySelector(".now-playing");
    let musicImgSrc = "C418-" + music[musicChoice].replaceAll(" ", "-") + ".png";
    musicImg.src = "./img/" + musicImgSrc;
    musicImg.alt = "Image of the music currently playing";
}

function styleMusicImg() {
    let musicImg = document.querySelector("#music-status");
    // Add styles here
    musicImg.setAttribute("style",
        `
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
        `
    )
}

// Fix the auto play in browsers
let musicStarted = false;
function startMusicOnClick() {
    if(!musicStarted) {
        musicStarted = true;
        playMusic();
    }
}
document.addEventListener("click", startMusicOnClick, {once: true});


let gameInProgress = false;
// Hide target score, show round results
function showRoundResults() {
    // Hide target score
    targetScore.style.display = "none";

    // Show the round-results
    roundResults.style.display = "flex";

    // Update gameInProgress
    gameInProgress = true;
}


// Hide game status, show reset game
function showResetMenu() {
    // Hide round results menu
    roundResults.style.display = "none";

    // Show reset menu
    resetMessage.style.display = "flex";
    resetButton.style.display = "flex";

}