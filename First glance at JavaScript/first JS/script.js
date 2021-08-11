function MyFunc()
{
   var txt = document.getElementById("input").value;
   var txt2 = document.getElementById("demo");
   alert("hello dear "+txt);
   txt2.innerHTML ="you must have "+txt.length+" chars in yo name";

}