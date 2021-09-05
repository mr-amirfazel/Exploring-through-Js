const searchBar = document.getElementById("searchfield");
const form = document.querySelector("form");
const searchButton = document.querySelectorAll("input")[1];
console.log(searchButton);

searchButton.addEventListener("click",(e)=>{
    e.preventDefault;
    let searchText = searchBar.value;
    if(searchText.length == 0){
        alert("fail");
        return false;
    }
        
    else
    {
        window.location ="https://www.google.com/search?q="+searchText;
    }
})
