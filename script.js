const grid = document.querySelector('#grid'); //var of container div

for (let i = 0; i < 256; i++){
  const cell = document.createElement("div");
  let r = Math.floor(Math.random() * 256) ; //random num 1-256
  let g = Math.floor(Math.random() * 256) ; //random num 1-256
  let b = Math.floor(Math.random() * 256) ; //random num 1-256
  cell.classList.add("cell");
  cell.innerText = `Cell ${i}`;

  cell.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    // e.target.classList.add('change');
  })

  grid.appendChild(cell);
}
