let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const cScore = document.querySelector('#comp-score');
const uScore = document.querySelector('#user-score'); 

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame = () => {
    console.log("Game is draw.");
    msg.innerText = "Game Draw.";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You win!");
        msg.innerText = "You Win";
        userScore++;
        uScore.innerText = userScore;
        msg.style.backgroundColor = "green";
    }else{
        console.log("computer win");
        msg.innerText = "You Lose";
        compScore++;
        cScore.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

const PlayGame = (UserChoice) => {
    console.log("User choice is : ", UserChoice);
    //generate comp choice.
    const compChoice = genCompChoice();
    console.log("comp choice is : ", compChoice);

    if(UserChoice === compChoice){
        //draw
        drawGame();
        
    } else {
        let userWin = true;
        //if user choice is rock & com have two option which is paper or Scissors
        if(UserChoice === 'rock' && compChoice === 'paper'){
            userWin = false;
        }
        else if(UserChoice === 'rock' && compChoice === 'scissors'){
            userWin = true;
        }
        //if user choice is paper
        else if(UserChoice === 'paper' && compChoice === 'rock'){
            userWin = true;
        }
        else if(UserChoice === 'paper' && compChoice === 'scissors'){
            userWin = false;
        }
        //if user choice is scissors
        else if(UserChoice === 'scissors' && compChoice === 'rock'){
            userWin = false;
        }
        else if(UserChoice === 'scissors' && compChoice === 'paper'){
            userWin = true;
        }
        showWinner(userWin);
    }
};

choices.forEach((c) => {
    c.addEventListener('click',() => {
        const UserChoice = c.getAttribute("id");
        PlayGame(UserChoice);
    });
});



