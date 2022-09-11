"use strict"

const WIDTH = 550;
let grid = 16;
let color = 'black';
let bg = 'white';
let eraseMode = false;
let rainbowMode = false;

const container = document.querySelector(".container");
const slider = document.querySelector(".slider__input");
const slider__label = document.querySelector(".slider__label");
const penColor = document.querySelector("#pen-color");
const bgColor = document.querySelector("#bg-color");
const eraser = document.querySelector("#btn-eraser");
const clearBtn = document.querySelector("#btn-clear");
const rainbowBtn = document.querySelector('#btn-rainbow');
const buttons = document.querySelectorAll("button");

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
    rainbowMode = false;
    color = penColor.value;
    colorSquares(color);
    eraser.classList.remove("pressed");
    rainbowBtn.classList.remove("pressed");
});

bgColor.addEventListener("input", () => {
    bg = bgColor.value;
    setContainer(bg);
});

eraser.addEventListener("click", () => {
    eraseMode = true;
    rainbowMode = false;
    colorSquares();
});

clearBtn.addEventListener("click", () => {
    squares.forEach(square => square.style.backgroundColor = "transparent");
});

rainbowBtn.addEventListener("click", () => {
    rainbowMode = true;
})

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        buttons.forEach(button => button.classList.remove("pressed"));
        if(e.target != clearBtn){
            e.target.classList.add("pressed");
        }
    })
})

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

function makeRainbowColor(){
    let red = Math.floor(Math.random()*255)+1;
    let green = Math.floor(Math.random()*255)+1;
    let blue = Math.floor(Math.random()*255)+1;
    let rainbowColor = `rgb(${red}, ${green}, ${blue})`;
    return rainbowColor;
}

function colorSquares(color){
    let isPressed = false;
    squares.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            if(eraseMode == true){
                e.target.style.backgroundColor = `transparent`;
            }
            if(rainbowMode == true){
                e.target.style.backgroundColor = makeRainbowColor();
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
                }
                if(rainbowMode == true){
                    e.target.style.backgroundColor = makeRainbowColor();
                }else{
                    e.target.style.backgroundColor = `${color}`;
                }
            }
        });
    });
}



