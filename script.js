const grid = document.querySelector("#grid");
const erase = document.querySelector("#erase");
const color = document.querySelector("#color")
const reset = document.querySelector("#reset");
const colorPicker = document.querySelector('#color-picker');
const pixelSlider = document.querySelector('#pixelSlider');
let mode = 'color';
let currentColor = 'black';
let gridSize = 16;
window.onload = function (){
    makeGrid(gridSize);
};
reset.addEventListener('click', () => {
    window.location.reload();
})
color.addEventListener('click', ()=>{
    mode = 'color';
})
colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value;
})
erase.addEventListener('click', ()=>{
    mode = 'erase';
})
pixelSlider.addEventListener('input', (e) =>{
    gridSize = e.target.value;
    makeGrid(gridSize);
})

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
