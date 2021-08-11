var box;
function MyFunc()
{
    box= document.getElementById('box1');
    console.log(box1);
    mainFunction(box1);
   
}
function MyFunc1()
{
    box= document.getElementById('box2');
    console.log(box2);
    mainFunction(box2);
}
function MyFunc2()
{
    box= document.getElementById('box3');
    console.log(box3);
    mainFunction(box3);
   
}
function MyFunc3()
{
    box= document.getElementById('box4');
    console.log(box4);
    mainFunction(box4);
}
function mainFunction(box)
{
     var color =getComputedStyle(box).color;
     var backgroundColor = getComputedStyle(box).backgroundColor;

    if(backgroundColor == "rgb(0, 0, 0)"  )
    {
        console.log("11");
        box.style.backgroundColor="rgb(42, 148, 121)";
         box.style.color ="rgb(0, 0, 0)";
         console.log("1");
         box.innerHTML ="click me";
        
    }
    
     else if(backgroundColor == "rgb(42, 148, 121)" && color =="rgb(0, 0, 0)")
        
    {
            box.style.backgroundColor="rgb(0, 0, 0)";
            box.style.color ="rgb(255,255,255)";
            console.log("2");
            box.innerHTML ="unClick me";
    }
    updateCount();
}
function updateCount()
    {
        var count=0 ;
        var textNode = document.getElementById('counter');
        var blocks = document.querySelectorAll('div>p');
        for(var i =0;i<blocks.length;i++)
        {
            if(getComputedStyle(blocks[i]).backgroundColor == "rgb(0, 0, 0)")
                count++;
        }
        if(count==4)
        alert("congradulations");
        if(count>0)
         textNode.innerHTML ="the number of clicked blocks is : "+count;
         else
         textNode.innerHTML ="no blocks  clicked";
        
    }