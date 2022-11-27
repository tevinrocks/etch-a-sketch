const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++){
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = `Cell ${i}`;

  cell.addEventListener('mouseover', e => {
    e.target.classList.add('change');
  })

  grid.appendChild(cell);
}
