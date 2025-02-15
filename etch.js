let container = document.querySelector("#container");
let gridSize = 16;
let height = [];
let length = [];
let blockSize = 960 / gridSize;
blockSize = blockSize.toString() + "px";
let clear = document.querySelector("#reset");

function colorChange(div){
    if(div.style.backgroundColor == "black"){
        div.style.backgroundColor = "white";
    }else {
        div.style.backgroundColor = "black";
    }
}

for(let i = 0; i < gridSize; i++){
    height.push(document.createElement("div"));
    height[i].style.display = "flex";
    container.appendChild(height[i]);
    
    for(let j = 0; j < gridSize; j++){
        let div = document.createElement("div");
        div.classList.add("block");
        div.style.width = blockSize;
        div.style.height = blockSize;
        div.addEventListener("mouseover", () => colorChange(div));
        height[i].appendChild(div);
    }
}