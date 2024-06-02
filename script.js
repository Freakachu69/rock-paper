let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    Math.random()

    if (Math.random() <= .333) {
        return "Rock";
    } else if (Math.random() <= .666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    input = prompt("Rock, paper, or scissors?")

    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    
    if (input == "Rock" || input == "Paper" || input == "Scissors") {
        return input;
    }
}

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        ++computerScore;
        console.log("You Lose. " + computerChoice + " beats " + humanChoice + ".");
    } else if (humanChoice === computerChoice) {
        console.log("Draw. No one wins.");
    } else if (input != "Rock" && input != "Paper" && input != "Scissors") {
        console.log("Error: Please choose rock, paper, or scissors.")
    } else {
        ++humanScore;
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
    }
    
    console.log ("You: " + humanScore + "\nComputer: " + computerScore)
}

    playRound(humanChoice, computerChoice)


    //playGame()
    //could be a loop? while humanScore != 5 || computerScore != 5