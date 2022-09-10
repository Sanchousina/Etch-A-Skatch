"use strict"

const WIDTH = 550;

const container = document.querySelector(".container");
const grid = 16;

setContainerWidth(WIDTH);
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

function setContainerWidth(width){
    container.style.width = `${width}px`;
    container.style.height = `${width}px`;
}

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
    let isPressed = false;
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mousedown", () => {
            square.classList.add("color");
            isPressed = true;
        });
        square.addEventListener("mouseup", () => {
            isPressed = false;
        });
        square.addEventListener("mouseover", () => {
            if(isPressed == true){
                square.classList.add("color");
            }
        });
    });
}

// function clear(){
//     squares.forEach(square => square.classList.remove("color"));
// }


