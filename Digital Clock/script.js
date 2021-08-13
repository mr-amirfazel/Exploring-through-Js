const Hour = document.querySelector("#hour");
const Minute = document.querySelector("#minute");
const Second = document.querySelector("#second");
const myDate = document.querySelector("#date");
const myDay = document.querySelector("#day");

window.addEventListener("load",function (){
    this.setInterval(updateTime,1000);
});
function updateTime()
{
setClock();
setDate();
setDay();
}
function setClock()
{
    let d = new window.Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    

    Hour.innerHTML = (hours<10) ? "0"+hours : hours;
    Minute.innerHTML = (minutes<10)?"0"+minutes:minutes;
    Second.innerHTML = (seconds<10)?"0"+seconds:seconds;

}
function setDate() {
    let d = new Date();
   let date =d.getDate();
   date=(date<10) ?"0"+date:date;
   let month = d.getMonth();
   month=(month<10) ?"0"+month:month;
   let year = d.getFullYear();
   year=(year<10) ?"0"+year:year;

   myDate.innerHTML = date+"/"+month+"/"+year;

   
}
function  setDay()
{
    let d = new Date();
    let dayNumber = d.getDay() , day ="";
    switch(dayNumber)
    {
        case 0: day = "sunday";break;
        case 1: day = "Monday";break;
        case 2: day = "Tuesday";break;
        case 3: day = "Wednesday";break;
        case 4: day = "Thursday";break;
        case 5: day = "Friday";break;
        case 6: day = "Saturday";break;
    }
    myDay.innerHTML = day;
    console.log(day);
}