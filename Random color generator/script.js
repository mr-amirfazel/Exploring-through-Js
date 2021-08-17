const elements = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D",'E',"F"];
const body = document.querySelector("body");
const text = document.querySelector("h2");
const button = document.querySelector("button");
button.addEventListener("click",changeBGColor);

function changeColor()
{
    console.log("hi");
    let color ="#";
    for(let i=0;i<6;i++)
    {
        color+=elements[Math.floor(Math.random()*elements.length)];
    }
    body .style.backgroundColor = color;
    text.innerHTML = '';
}
function changeBGColor()
{
    button.style.display = "none";
    setInterval(changeColor,1000);
}