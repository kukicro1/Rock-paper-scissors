let user = 0;
let computer = 0;
let rps = "";    
let whoWon = "";
let result = "";
let playerSelection;
const buttons = document.querySelectorAll('.player');
const display = document.querySelector('#result');
const replay = document.querySelector('#replay');

display.style.width = 'auto';
display.style.height = '150px';
display.setAttribute('style', 'white-space: pre;');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        game();
    }) 
});


function game() {
        playRound()
        if (user === 5){
            display.textContent = "You beat the machine. Gratz!!";
            user = 0;
            computer = 0;
        }
        else if (computer === 5){
            display.textContent = "Machine beat your. Loser!!";
            user = 0;
            computer = 0;
        }
}

replay.addEventListener('click', () => {
    replayGame();
})

function replayGame() {
    game();
}

function computerPlay(){
    let randomValue = Math.random();
    if (randomValue < 0.333) {
        rps = "rock";
        return rps;
    } 
    else if (0.334 < randomValue && randomValue < 0.666) {
        rps = "paper";
        return rps;
    }
    else {
        rps = "scissors";
        return rps;
    } 
}

function playRound() {
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        whoWon = "It's a tie.";
        user = user;
        computer = computer;
        result = `You: ${user} \nMachine: ${computer}`;
        display.textContent = `${whoWon} \n${result}`;
        return;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        whoWon = "Machine beat you. Loser. Rock is beaten by paper.";
        computer += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        display.textContent = `${whoWon} \n${result}`;
        return;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        whoWon = "Machine beat you. Loser. Scissors are beaten by rock.";
        computer += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        display.textContent = `${whoWon} \n${result}`;
        return;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        whoWon = "Machine beat you. Loser. Paper is beaten by scissors.";
        computer += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        display.textContent = `${whoWon} \n${result}`;
        return;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        whoWon = "You beat the machine. Paper beats rock.";
        user += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        display.textContent = `${whoWon} \n${result}`;
        return;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        whoWon = "You beat the machine. Rock beats scissors.";
        user += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        display.textContent = `${whoWon} \n${result}`;
        return;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        whoWon = "You beat the machine. Scissors beat paper.";
        user += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        display.textContent = `${whoWon} \n${result}`;
        return;
    }
    else {
        whoWon = "Please enter: paper, rock, or scissors."
        display.textContent = `${whoWon}`;
        return;
    }
}