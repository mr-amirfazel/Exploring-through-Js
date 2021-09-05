let stars = document.querySelectorAll(".star");

for(var i=0;i<stars.length;i++)
{
   
      stars[i].addEventListener("click",function()
      {
        //   stars[i].classList.toggle("hovered");
          console.log(stars[i]);
      })
    
}