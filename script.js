window.onload = createGrid;

window.addEventListener('mouseover', function(e) {
  let element = e.target;
  if (element.classList.contains('grid-square')) {
    element.classList.add('black-background');
  }

});


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