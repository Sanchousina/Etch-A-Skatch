"use strict"

const WIDTH = 550;
let grid = 16;
let color = 'black';
let bg = 'white';
let eraseMode = false;

const container = document.querySelector(".container");
const slider = document.querySelector(".slider__input");
const slider__label = document.querySelector(".slider__label");
const penColor = document.querySelector("#pen-color");
const bgColor = document.querySelector("#bg-color");
const eraser = document.querySelector("#btn-eraser");
const clearBtn = document.querySelector("#btn-clear");

setContainer(bg);
makeGrid(grid);
const squares = document.querySelectorAll(".square");

colorSquares(color);
setSliderLabel();


slider.addEventListener("input", () => {
    setSliderLabel();
    grid = slider.value;
    makeGrid(grid);
    colorSquares(color);
});

penColor.addEventListener("input", () => {
    eraseMode = false;
    color = penColor.value;
    colorSquares(color);
    eraser.classList.remove("pressed");
});

bgColor.addEventListener("input", () => {
    bg = bgColor.value;
    setContainer(bg);
});

eraser.addEventListener("click", () => {
    eraseMode = true;
    eraser.classList.add("pressed");
});

clearBtn.addEventListener("click", () => {
    squares.forEach(square => square.style.backgroundColor = "transparent");
});

function setSliderLabel(){
    slider__label.textContent = slider.value;
}

function setContainer(color){
    container.style.width = `${WIDTH}px`;
    container.style.height = `${WIDTH}px`;
    container.style.backgroundColor = `${color}`;
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
    squares.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            if(eraseMode == true){
                e.target.style.backgroundColor = `transparent`;
            }else{
                e.target.style.backgroundColor = `${color}`;
            }
            isPressed = true;
        });
        square.addEventListener("mouseup", () => {
            isPressed = false;
        });
        square.addEventListener("mouseover", (e) => {
            if(isPressed == true){
                if(eraseMode == true){
                    e.target.style.backgroundColor = `transparent`;
                }else{
                    e.target.style.backgroundColor = `${color}`;
                }
            }
        });
    });
}



