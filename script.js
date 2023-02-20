//DOM elements:
const grid = document.querySelector("#grid");
const erase = document.querySelector("#erase");
const color = document.querySelector("#color")
const reset = document.querySelector("#reset");
const colorPicker = document.querySelector('#color-picker');
const gridSize = document.querySelector('#grid-size');
// Global variables:
const defaultSize = 16;
let mode = 'color';
let currentColor = 'black';
let currentSize = defaultSize;
// Event listeners:
reset.addEventListener('click', () => {
    currentSize = defaultSize;
    resetGrid();
})
color.addEventListener('click', ()=>{
    mode = 'color';
})
colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value;
    mode = 'color';
})
erase.addEventListener('click', ()=>{
    mode = 'erase';
})
gridSize.addEventListener('change', (e) => {
    currentSize = e.target.value;
    resetGrid();
})
// Functions
function makeGrid(size){
    for(let row = 0; row < size; row++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('row')
        grid.appendChild(gridRow);
        for(let pixel = 0; pixel < size; pixel++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseover', (e)=>{
                colorPixel(e);
            })
            gridRow.appendChild(pixel);
        }
    }
}
function colorPixel(e, color=currentColor){
    if (mode === "color"){
    e.target.style.backgroundColor = color;
} else if (mode === "erase"){
    e.target.style.backgroundColor = "#fff";
    }
}
function resetGrid(){
    grid.innerHTML = '';
    makeGrid(currentSize);
}
// Loading a default grid on page load.
window.addEventListener('DOMContentLoaded',()=>{
    makeGrid(currentSize);
})