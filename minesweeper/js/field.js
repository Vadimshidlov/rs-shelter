let matrixField = [];

function getRandomNubers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getMatrixField(width = 10, height = 10, bombs = 10) {
  for (let i = 0; i < height; i++) {
    let curr = [];
    for (let j = 0; j < width; j++) {
      curr[j] = 0;
    }
    matrixField.push(curr);
  }

  getBobms(bombs);

  return matrixField;
}

function getBobms(bombs) {
  let bombsCount = bombs;
  const matrixFieldHeight = matrixField.length;
  const matrixFieldWidth = matrixField[0].length;

  while (bombsCount) {
    const x = getRandomNubers(0, matrixFieldWidth - 1);
    const y = getRandomNubers(0, matrixFieldHeight);
    let current = matrixField[y][x];

    if (!current) {
      matrixField[y][x] = 1;
      bombsCount--;
    }
  }
}

console.log(getMatrixField(5, 3, 5));
