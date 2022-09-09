"use strict"

const WIDTH = 600;
const container = document.querySelector(".container");
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `calc(${WIDTH}px / 16)`;
        square.style.height = `calc(${WIDTH}px / 16)`;
        square.style.backgroundColor = "white";

        container.appendChild(square);
    }
}