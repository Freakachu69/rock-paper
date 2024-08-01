    let humanScore = 0
    let computerScore = 0

    function getComputerChoice() {
        let random = Math.floor(Math.random() * 3)

        if (random === 0) {
            return "Rock";
        } else if (random === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    let computerChoice

    function playRound(humanChoice,computerChoice) {
        computerChoice = getComputerChoice()
        if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
            ++computerScore;
            result.textContent = " Ouch! " + computerChoice + " beats " + humanChoice + ".";
            score.textContent = "You: " + humanScore + "\nComputer: " + computerScore;
        } else if (humanChoice === computerChoice) {
            result.textContent = " Draw.";
            score.textContent = "You: " + humanScore + "\nComputer: " + computerScore;
        } else {
            ++humanScore;
            result.textContent = " Score! " + humanChoice + " beats " + computerChoice + "!";
            score.textContent = "You: " + humanScore + "\nComputer: " + computerScore;
        }
        
        if (humanScore === 5) {
            winner.textContent = "YOU WIN!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            winner.textContent = "COMPUTER WINS.";
            humanScore = 0;
            computerScore = 0;
        } else {
            winner.textContent = "";
        }
    }

    const result = document.querySelector('#result');
    const score = document.querySelector('#score');
    const winner = document.querySelector('#winner');
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    rock.addEventListener("click", () => playRound("Rock",computerChoice));
    paper.addEventListener("click", () => playRound("Paper",computerChoice));
    scissors.addEventListener("click", () => playRound("Scissors",computerChoice));
    
