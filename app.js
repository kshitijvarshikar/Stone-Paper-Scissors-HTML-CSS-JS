let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userwin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



/*Note :- 
1) Math.random() -- means generate a random number [ex: 0.23456789]

2) Math.random() * 10 -- "* 10" means random number generate till 1 to 9 [ex1: 0.23456789, ex2: 1.23456789.....ex9: 9.23456789]

3) Math.floor(Math.random() * 10) -- "Math.floor" means after decimal number is not show [ex: "FROM 0.23654789 TO 0" its show like this]*/