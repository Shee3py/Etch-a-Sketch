let container = document.querySelector("#container");
let gridSize = 16;
let height = [];
let length = [];
let blockSize = num.toString(960 / gridSize) + "px";

for(let i = 0; i < gridSize; i++){
    height.push(document.createElement("div"));
    height[i].style.display = "flex";
    container.appendChild(height[i]);
    
    for(let j = 0; j < gridSize; j++){
        let div = document.createElement("div");
        div.classList.add("block");
        div.style.width = blockSize;
        div.style.height = blockSize;
        height[i].appendChild(div);
    }
}