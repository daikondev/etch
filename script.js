const grid = document.querySelector("#grid");

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
function colorPixel(e){
    e.target.style.backgroundColor = 'black';
}