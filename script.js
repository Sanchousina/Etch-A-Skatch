"use strict"

const WIDTH = 550;
let grid = 16;
let color = 'black';

const container = document.querySelector(".container");
const slider = document.querySelector(".slider__input");
const slider__label = document.querySelector(".slider__label");
const penColor = document.querySelector("#pen-color");

setContainerWidth(WIDTH);
makeGrid(grid);
colorSquares(color);
setSliderLabel();

slider.addEventListener("input", () => {
    setSliderLabel();
    grid = slider.value;
    makeGrid(grid);
    colorSquares(color);
});

penColor.addEventListener("input", () => {
    color = penColor.value;
    colorSquares(color);
})

function setSliderLabel(){
    slider__label.textContent = slider.value;
}

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

function colorSquares(color){
    let isPressed = false;
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            e.target.style.backgroundColor = `${color}`;
            //square.classList.add("colored");
            isPressed = true;
        });
        square.addEventListener("mouseup", () => {
            isPressed = false;
        });
        square.addEventListener("mouseover", (e) => {
            if(isPressed == true){
                e.target.style.backgroundColor = `${color}`;
                //square.classList.add("colored");
            }
        });
    });
}

// function clear(){
//     squares.forEach(square => square.classList.remove("color"));
// }


