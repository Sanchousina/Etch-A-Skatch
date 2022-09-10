"use strict"

const WIDTH = 550;
const container = document.querySelector(".container");
container.style.width = `${WIDTH}px`;
container.style.height = `${WIDTH}px`;
const grid = 16;
makeGrid(grid);
colorSquares();

const slider = document.querySelector(".slider__input");
const slider__label = document.querySelector(".slider__label");

slider__label.textContent = slider.value;

slider.addEventListener("input", () => {
    slider__label.textContent = slider.value;
    makeGrid(slider.value);
    colorSquares();
});

function makeGrid(grid){
    container.innerHTML = "";
    for(let i = 0; i < grid; i++){
        for(let j = 0; j < grid; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `calc(${WIDTH}px / ${grid})`;
            square.style.height = `calc(${WIDTH}px / ${grid})`;
    
            container.appendChild(square);
        }
    }
}

function colorSquares(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("color");
        })
    });
}

// function clear(){
//     squares.forEach(square => square.classList.remove("color"));
// }


