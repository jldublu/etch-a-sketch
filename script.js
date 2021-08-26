/*
  Creates a 16 x 16 grid
*/
function createGrid() {
  const gridContainer = document.querySelector('.grid-container');
  const gridSize = 16 * 16;
  for (let i = 0; i < gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
  }
}

window.onload = createGrid;