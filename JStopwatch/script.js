const timerText = document.querySelector("p");
const start = document.getElementById("Start");
const stop = document.getElementById("Stop");
const reset = document.getElementById("Reset");
var  timer ;
var millis,sec,min;
millis = sec = min=0 ;

start.addEventListener("click",startTimer);
function startTimer()
{
    
    console.log("hi");
    timer = setInterval(updateTimer,10);
}
function updateTimer()
{
  millis =  increment(millis);
  if(millis>=100)
    {
        sec=increment(sec);
        if(sec>=60){ 
            min=increment(min);
            sec=0;
        }
        millis=0;
    }
    
    updateTimerText();
}
function increment(val)
{
    return val+1;
}
stop.addEventListener("click",function(){
    clearInterval(timer);

})
function updateTimerText()
{
    let Min,Sec,Millis;
    Millis=Min=Sec="";
    
   if(min<10)
   Min+="0"+min;
   else
   Min+=min;

 

   if(sec<10)
   Sec+="0"+sec;
   else
   Sec+=sec;

   if(millis<10)
   Millis+="0"+millis;
   else
   Millis+=millis;

   timerText.innerHTML = Min+":"+Sec+"."+Millis;
}
reset.addEventListener("click",function(){
    console.log("nigger");
    clearInterval(timer);
    min=sec=millis=0;
    updateTimerText();
})

