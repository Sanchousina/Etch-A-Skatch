"use strict"

const WIDTH = 550;
const container = document.querySelector(".container");
container.style.width = `${WIDTH}px`;
container.style.height = `${WIDTH}px`;

// const grid = +prompt("Squares per side?", "1");
const grid = 16;

for(let i = 0; i < grid; i++){
    for(let j = 0; j < grid; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `calc(${WIDTH}px / ${grid})`;
        square.style.height = `calc(${WIDTH}px / ${grid})`;

        container.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.classList.add("color");
    })
});