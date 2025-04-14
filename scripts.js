

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultParagraph = document.getElementById("result");
const gamePoints = document.getElementById("wins_loses")

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

let winCount = 0;
let loseCount = 0;
let tieCount = 0;

function playGame(userChoice) {

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
        tieCount += 1;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! Computer chose ${computerChoice}.`;
        winCount += 1;
    } else {
        result = `You lose! Computer chose ${computerChoice}.`;
        loseCount += 1;
    }


    resultParagraph.textContent = result;
    gamePoints.textContent = `Wins = ${winCount}  |  Ties = ${tieCount}  |  Loses = ${loseCount}`;
}

