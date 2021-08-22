var bod = document.querySelector(".buttons");
const count = document.querySelector("#lifeCount");
var buttons=[];
const words=["spain","iran","america","germany","portugal","england","russia","belgium"];
var chosen_word =words[Math.floor(Math.random()*words.length)];
var chosen_word_array = Array.from(chosen_word);
var lives = 10;
count.innerHTML = lives;
console.log(chosen_word_array);
for(let i=97;i<123;i++)
{
    let el = document.createElement("button");
    el.innerHTML = String.fromCharCode(i);
    buttons.push(el);
    bod.appendChild(el);
}

var blocks =[];
initializeBlocks(blocks);

function initializeBlocks(blocks)
{
    for(let i=0;i<chosen_word_array.length;i++)
    {
        let block = document.createElement("span");
        block.classList.add("charEnter");
        block.innerHTML=" _ ";
        blocks.push(block);
        document.querySelector("#guessBox").appendChild(block);
    }
}
for
(let i=0;i<26;i++)
{
    buttons[i].addEventListener("click",function(){
        var button = buttons[i];
        button.disabled = true;
        var value = button.innerHTML;
        if(lives>0){ 
        if(chosen_word_array.includes(value)){
            for(let i=0;i<chosen_word_array.length;i++)
            {
                if(chosen_word_array[i] == value)
                {
                    blocks[i].innerHTML = value;
                }
                
            }
            
        }
        else
        {
            lives--;
            count.innerHTML = lives
        }
    }
    else
    {
        alert("you already Lost")
    }
    checker(); 
    });
}
function gameLogic(button)
{
   
}
function checker()
{
    for(var i=0;i<blocks.length;i++)
{
    var wrd = "";
    wrd += blocks[i].innerHTML;
    return "word is:"+wrd;
}
}
