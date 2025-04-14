
// Get references to the buttons and result paragraph
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultParagraph = document.getElementById("result");

// Add click event listeners to the buttons
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

// Function to play the game based on user's choice
function playGame(userChoice) {
    // Generate the computer's choice (rock, paper, or scissors)
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! Computer chose ${computerChoice}.`;
    } else {
        result = `You lose! Computer chose ${computerChoice}.`;
    }

    // Display the result
    resultParagraph.textContent = result;
}
