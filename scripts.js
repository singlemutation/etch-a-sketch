
const container = document.querySelector(".container");

function makeGrid(gridSize){
    
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            container.appendChild(gridBox);
            gridBox.style.minWidth = 960 / gridSize + "px";
            gridBox.style.minHeight = 960 / gridSize + "px";
        };
    };
};

makeGrid(16);