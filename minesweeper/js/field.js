// import { getItem } from "./fieldItem.js";

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

  // for (let i = 0; i < matrixField.length; i++) {
  //   for (let j = 0; j < matrixField[i].length; j++) {
  //     let isbomb = matrixField[j] == true ? true : false;
  //     const newItem = getItem(isbomb, { j, i });

  //     matrixField[i][j] = newItem;
  //   }
  // }

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

function getStateOfArroundItems(palce) {
  const { x, y } = palce;

  const item_1 = matrixField[y]?.[x - 1];
  const item_2 = matrixField[y - 1]?.[x - 1];
  const item_3 = matrixField[y - 1]?.[x];
  const item_4 = matrixField[y - 1]?.[x + 1];
  const item_5 = matrixField[y]?.[x + 1];
  const item_6 = matrixField[y + 1]?.[x + 1];
  const item_7 = matrixField[y + 1]?.[x];
  const item_8 = matrixField[y + 1]?.[x - 1];

  const arr = [item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8];
  arr.filter((item) => typeof item !== "undefined");
  const count = arr.reduce((acc, el, i) => {
    acc += el === 1 ? 1 : 0;
    return acc;
  }, 0);
  matrixField[x][y] = count;
}

console.log(getMatrixField(3, 3, 3));
console.log(getStateOfArroundItems({ x: 1, y: 1 }));
