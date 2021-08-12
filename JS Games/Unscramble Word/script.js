const word = document.getElementById("word");
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const startButton = buttons[0];
const checkButton = buttons[1];
const hint = document.getElementById("hint");
const words =["hello","new","yellow","blue","jelly","javascript","java","react","flexbox","bootstrap"];
var selected;
console.log(buttons);
startButton.addEventListener("click",startGame);

function startGame()
{
    startButton.classList.toggle("hidden");
    checkButton.classList.toggle("hidden");
    input.classList.toggle("hidden");
    setWord();
}
function setWord()
{
    selected = words[Math.floor(Math.random()*words.length)];
    var shuffeled ; 
    
    do{
        shuffeled = shuffle(selected);
    }
    while(shuffeled === selected);
    word.innerHTML = shuffeled ;
   
}
function shuffle(word)
{ console.log(word);
    word = word.split("");
    console.log(word);
    for(let i =0;i<word.length;i++)
    {
        var tmp = word[i];
        var j = Math.floor(Math.random()*(i+1));
        word[i]=word[j];
        word[j]=tmp;
    }
    word = word.join("");
    console.log(word);
    return word;
}
checkButton.addEventListener("click",checkText);
input.addEventListener("keydown",(event) => {
    var code = event.code;
    console.log(code);
        if(code == "Enter")
        {
            checkText();
        }
  });

function checkText()
{
    if(input.value === selected )
    {
        startButton.classList.toggle("hidden");
        checkButton.classList.toggle("hidden");
        input.classList.toggle("hidden");
        input.value ="";
        word.innerHTML = "word";
        hint.innerHTML = "Correct";
    }
    else
    {
        hint.innerHTML = "wrong";
    }
}