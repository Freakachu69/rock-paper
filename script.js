function playGame() {

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

    let humanChoice
    let computerChoice

    function playRound(humanChoice,computerChoice) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        if (input != "Rock" && input != "Paper" && input != "Scissors") {
            console.log("Error: Please choose rock, paper, or scissors.")
            playRound(humanChoice,computerChoice)
        } else if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
            ++computerScore;
            console.log("Ouch! " + computerChoice + " beats " + humanChoice + ".");
            console.log ("You: " + humanScore + "\nComputer: " + computerScore);
        } else if (humanChoice === computerChoice) {
            console.log("Draw.");
            console.log ("You: " + humanScore + "\nComputer: " + computerScore);
        } else {
            ++humanScore;
            console.log("Score! " + humanChoice + " beats " + computerChoice + "!");
            console.log ("You: " + humanScore + "\nComputer: " + computerScore);
        }
    }

    playRound(humanChoice,computerChoice);
    playRound(humanChoice,computerChoice);
    playRound(humanChoice,computerChoice);
    playRound(humanChoice,computerChoice);
    playRound(humanChoice,computerChoice);

    if (humanScore > computerScore) {
        console.log("You Win!")
    } else if (computerScore > humanScore) {
        console.log("Computer Wins.")
    } else {
        console.log("No one wins.")
    }
}

playGame()