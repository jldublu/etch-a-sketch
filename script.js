window.onload = createGrid(16);
window.addEventListener('mouseover', changeBackground);
document.querySelector('.clear-button').onclick = resetGrid;

function changeBackground(e) {
  let element = e.target;
  if (element.classList.contains('grid-square')) {
    element.classList.add('black-background');
  }
}

function createGrid(sideLength) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.style.setProperty('--grid-side', sideLength);
  const gridSize = sideLength * sideLength;
  for (let i = 0; i < gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
  }
}

function removeGrid() {
  const gridContainer = document.querySelector('.grid-container');
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function resetGrid() {
  const changedSquares = document.getElementsByClassName('black-background');
  while (changedSquares.length > 0) {
    changedSquares.item(0).classList.remove('black-background');
  }

  const sideLength = Number(prompt('Please enter a new grid size. (min:5 max:100)'));

  if (Number.isFinite(sideLength) && sideLength >= 5 && sideLength <= 100) {
    removeGrid();
    createGrid(sideLength);
  }
}