function computerPlay(){
    let rps = "";
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
let user = 0;
let computer = 0;

function playRound() {
    let whoWon = "";
    let result = "";
    let playerSelection = prompt().toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        whoWon = "It's a tie.";
        console.log(whoWon);
        user = user;
        computer = computer;
        result = `You: ${user} \nMachine: ${computer}`;
        console.log(result);
        return;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        whoWon = "Machine beat you. Loser. Rock is beaten by paper.";
        console.log(whoWon);
        computer += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        console.log(result);
        return;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        whoWon = "Machine beat you. Loser. Scissors are beaten by rock.";
        console.log(whoWon);
        computer += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        console.log(result);
        return;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        whoWon = "Machine beat you. Loser. Paper is beaten by scissors.";
        console.log(whoWon);
        computer += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        console.log(result);
        return;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        whoWon = "You beat the machine. Paper beats rock.";
        console.log(whoWon);
        user += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        console.log(result);
        return;
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        whoWon = "You beat the machine. Rock beats scissors.";
        console.log(whoWon);
        user += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        console.log(result);
        return;
    }
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        whoWon = "You beat the machine. Scissors beat paper.";
        console.log(whoWon);
        user += 1;
        result = `You: ${user} \nMachine: ${computer}`;
        console.log(result);
        return;
    }

    else {
        whoWon = "Please enter: paper, rock, or scissors."
        console.log(whoWon);
        return
    }
}



function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
if (user > computer){
        console.log("You beat the machine. Gratz!!")
    }
    else if (user < computer){
        console.log("Machine beat your. Loser!!")
    }
    else {
        console.log("It's a tie.")
    }
}
game();
alert("ovo je kraj")