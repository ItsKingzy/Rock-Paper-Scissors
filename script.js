// console.log("Hello world");

function getComputerChoice() {
    let choice = Math.round(Math.random() * 3);
    if (choice === 1) {
        console.log("rock");
    } else if (choice === 2) {
        console.log("paper");
    } else if (choice === 3) {
        console.log("scissors");
    }
}

getComputerChoice();