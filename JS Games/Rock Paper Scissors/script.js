const rock = document.querySelector("img[alt = rock]");
const paper = document.querySelector("img[alt = paper]");
const scissors = document.querySelector("img[alt = scissors]");
const compScore = document.getElementById("compScore");
const playerScore = document.getElementById("PlayerScore");
const winner = document.getElementById("state");
const actions = ['R','P','S'];
var state;
var states = ["Draw","Comp won","You Won"];
var comp_score,player_score;
comp_score=player_score=0;
rock.addEventListener("click",function(){
let compTurn = compMove();
if(compTurn == 'R')
{
state = 0;
}
else if(compTurn =='P')
{
    state = 1;
}
else
{
 state = 2;
}
console.log(compTurn);
updateScores();
report();
});


paper.addEventListener("click",function(){
    let compTurn = compMove();
if(compTurn == 'R')
{
state = 2;
}
else if(compTurn =='P')
{
    state = 0;
}
else
{
 state = 1;
}
console.log(compTurn);
updateScores();
report();

});
scissors.addEventListener("click",function(){
    let compTurn = compMove();
    if(compTurn == 'R')
    {
    state = 1;
    }
    else if(compTurn =='P')
    {
        state = 2;
    }
    else
    {
     state = 0;
    }
    console.log(compTurn);
    updateScores();
    report();
})


function compMove()
{
    return actions[Math.floor(Math.random()*actions.length)];
}

function report()
{
    winner.innerHTML = states[state];
}
function updateScores()
{
    if(state == 1)
    {
        comp_score++;
    }
    else if(state==2)
    {
        player_score++;
    }

    compScore.innerHTML = "computer points:"+comp_score;
    console.log(comp_score);
    playerScore.innerHTML ="player points:"+player_score;
    console.log(player_score);
}