const grid = document.querySelector('#grid'); //var of container div
//initiates a 16 x 16 grid
for (let i = 0; i < 256; i++){
  const cell = document.createElement("div");
  let r = Math.floor(Math.random() * 256) ; //random num 1-256
  let g = Math.floor(Math.random() * 256) ; //random num 1-256
  let b = Math.floor(Math.random() * 256) ; //random num 1-256
  cell.classList.add("cell"); //adds "cell" class to div
  cell.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`; //random color
  })
  grid.appendChild(cell); //adds the new cell to container div
}
