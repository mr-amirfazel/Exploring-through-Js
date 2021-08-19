const container = document.getElementById("colorboxes");
const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", 'E', "F"];
const boxes = [];

function randomColorGenerator() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += elements[Math.floor(Math.random() * elements.length)];
    }
    return color;
}



for (let i = 0; i < 6; i++) {
    var el = document.createElement("div");
    el.classList.add("color-box");
    var randcolor = randomColorGenerator();


    el.style.backgroundColor = randcolor;
    console.log(window.getComputedStyle(el).backgroundColor);
    container.appendChild(el);
    boxes.push(el);
}
var ind = Math.floor(Math.random() * 6);

var colour = boxes[ind].style.backgroundColor;
console.log(ind);
document.getElementById("hint").innerHTML = colour;
console.log(colour);


for (let i = 0; i < 6; i++) {
    boxes[i].addEventListener("click", function () {
        
        if (window.getComputedStyle(boxes[i]).backgroundColor === colour) {
           alert("you won");
           location.reload()

        } else {
            boxes[i].style.backgroundColor = "transparent";
            console.log("not right");
        }
    })
}