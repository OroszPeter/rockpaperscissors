// Game elements
const playerChoiceElement = document.getElementById("jatekos");
const computerChoiceElement = document.getElementById("bot");
const resultElement = document.getElementById("eredmeny");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

// Game state
let playerScore = 0;
let computerScore = 0;
let canPlay = true;

// Choice images (FontAwesome icons)
const choiceIcons = {
    "Kő": '<i class="fas fa-hand-rock"></i>',
    "Papír": '<i class="fas fa-hand-paper"></i>',
    "Olló": '<i class="fas fa-hand-scissors"></i>'
};

// Function to generate computer choice
function getComputerChoice() {
    const choices = ["Kő", "Papír", "Olló"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    
    if (
        (playerChoice === "Kő" && computerChoice === "Olló") ||
        (playerChoice === "Papír" && computerChoice === "Kő") ||
        (playerChoice === "Olló" && computerChoice === "Papír")
    ) {
        return "win";
    }
    
    return "lose";
}

// Function to update score
function updateScore(result) {
    if (result === "win") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

// Function to display result with animation
function displayResult(result, playerChoice, computerChoice) {
    // Reset classes
    playerChoiceElement.className = 'choice player-choice';
    computerChoiceElement.className = 'choice computer-choice';
    resultElement.className = 'result';
    
    // Update choice displays with icons
    playerChoiceElement.querySelector('.choice-image').innerHTML = choiceIcons[playerChoice];
    computerChoiceElement.querySelector('.choice-image').innerHTML = choiceIcons[computerChoice];
    
    // Apply animations based on result
    if (result === "win") {
        resultElement.textContent = "Győzelem!";
        resultElement.classList.add('fade-in');
        playerChoiceElement.classList.add('win');
        computerChoiceElement.classList.add('lose');
    } else if (result === "lose") {
        resultElement.textContent = "Vesztettél!";
        resultElement.classList.add('fade-in');
        playerChoiceElement.classList.add('lose');
        computerChoiceElement.classList.add('win');
    } else {
        resultElement.textContent = "Döntetlen!";
        resultElement.classList.add('fade-in');
        playerChoiceElement.classList.add('draw');
        computerChoiceElement.classList.add('draw');
    }
    
    // Add shake animation to both choices
    playerChoiceElement.classList.add('shake');
    computerChoiceElement.classList.add('shake');
    
    // Update score
    updateScore(result);
    
    // Allow playing again after animations
    setTimeout(() => {
        canPlay = true;
        
        // Reset shake animation class to be able to apply it again in the next round
        playerChoiceElement.classList.remove('shake');
        computerChoiceElement.classList.remove('shake');
    }, 1000);
}

// Function to handle player choice
function handleChoice(playerChoice) {
    if (!canPlay) return;
    
    canPlay = false;
    
    // Animation for starting the game
    resultElement.textContent = "...";
    playerChoiceElement.querySelector('.choice-image').innerHTML = choiceIcons[playerChoice];
    computerChoiceElement.querySelector('.choice-image').innerHTML = '';
    
    // Simulate computer thinking
    setTimeout(() => {
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result, playerChoice, computerChoice);
    }, 600);
}

// Player choice functions
function k() {
    handleChoice("Kő");
}

function p() {
    handleChoice("Papír");
}

function o() {
    handleChoice("Olló");
}

// Reset game
function ujra() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = "0";
    computerScoreElement.textContent = "0";
    
    playerChoiceElement.className = 'choice player-choice';
    computerChoiceElement.className = 'choice computer-choice';
    resultElement.className = 'result';
    
    playerChoiceElement.querySelector('.choice-image').innerHTML = '';
    computerChoiceElement.querySelector('.choice-image').innerHTML = '';
    resultElement.textContent = "Válassz egy lehetőséget";
    
    canPlay = true;
}