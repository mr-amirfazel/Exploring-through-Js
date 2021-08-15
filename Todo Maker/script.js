const addButton = document.querySelector("#add");
const item = document.querySelector("input");
const list = document.querySelector("ul");

addButton.addEventListener("click", addToList);

function addToList() {
    if (item.value !== "") {
        let el = document.createElement("li");
        el.innerHTML = item.value;
        let removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.innerHTML =  '\u2715';
        el.appendChild(removeButton);
        list.appendChild(el);
        item.value="";
        el.addEventListener("click",(e)=>{
            e.target.style.textDecoration = "line-through";
        });
        removeButton.addEventListener("click", (e)=>{
            e.target.parentElement.style.display = "none";
        })
    }
    else
    {
        alert("fill the input first")
    }
}