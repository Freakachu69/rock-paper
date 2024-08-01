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

    //let humanChoice
    let computerChoice

    function playRound(humanChoice,computerChoice) {
        computerChoice = getComputerChoice()
        if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
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
  
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    rock.addEventListener("click", () => playRound("Rock",computerChoice));
    paper.addEventListener("click", () => playRound("Paper",computerChoice));
    scissors.addEventListener("click", () => playRound("Scissors",computerChoice));
    

    if (humanScore === 5) {
        console.log("You Win!")
    } 
    if (computerScore === 5) {
        console.log("Computer Wins.")
    }

    // turn those into dom methods in the results div
