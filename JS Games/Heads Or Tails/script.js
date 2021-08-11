var buttons = document.querySelectorAll("button");
const tossOption = ["Heads", "Tails"];
let pScore, bScore;
pScore = bScore = 0;
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", gameLogic)
}

function gameLogic(e) {
    if (pScore <= 9 && bScore <= 9) {
        var rand = Math.floor(Math.random() * 10);
        var botChoice = tossOption[rand % 2];
        var playerChoice = e.target.innerHTML;
        var announce = document.getElementById("announce");
        console.log("bot :" + botChoice);
        console.log("player :" + e.target.innerHTML);
        if (botChoice === playerChoice) {
            pScore++;
            var text = "player";
        } else {
            bScore++;
            text = "bot";
        }
        updateScoreBoard();
        if(pScore < 10 && bScore < 10)
            announce.innerHTML = text + " scored ";
        else
        announce.innerHTML = text + " WON ";


    }
}

function updateScoreBoard() {
    let scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerHTML = "player : " + pScore + "<br/>" + "bot : " + bScore;
}