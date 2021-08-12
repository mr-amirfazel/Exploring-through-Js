const word = document.getElementById("word");
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const startButton = buttons[0];
const checkButton = buttons[1];
const words =["hello","new","yellow","blue","jelly","javascript","java","react","flexbox","bootstrap"];
console.log(buttons);
startButton.addEventListener("click",startGame);

function startGame()
{
    startButton.classList.toggle("hidden");
    checkButton.classList.toggle("hidden");
    input.classList.toggle("hidden");
}