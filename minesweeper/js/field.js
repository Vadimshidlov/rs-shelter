// import { getItem } from "./fieldItem.js";
import { itemField } from './fieldItem.js';
const field = document.querySelector('.body__field');
console.log(field);

export function getRandomNubers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const stateOfItem = {
  HIDDEN: 'hidden',
  BOMB: 'bomb',
  NUMBER: 'number',
  FLAGGED: 'flagged',
};

export function getMatrixField(width = 10, height = 10, bombs = 10) {
  const arr = [];
  for (let i = 0; i < height; i++) {
    let curr = [];
    for (let j = 0; j < width; j++) {
      const item = document.createElement('div');
      curr[j] = new itemField(false, { i, j });
    }
    arr.push(curr);
  }

  const arrayWithBobms = getBobms(arr, bombs);

  arrayWithBobms.forEach((el, x) => {
    el.forEach((el, y) => {
      if (el.content !== 'b') {
        getStateOfArroundItems(arrayWithBobms, { x, y });
      }
    });
  });

  return arrayWithBobms;
}

export function getBobms(arr, bombs) {
  const arrayWithBobms = arr;
  console.log(arr);
  let bombsCount = bombs;
  const matrixFieldHeight = arr.length;
  const matrixFieldWidth = arr[0].length;

  while (bombsCount) {
    const x = getRandomNubers(0, matrixFieldWidth - 1);
    const y = getRandomNubers(0, matrixFieldHeight);
    let current = arr[y][x];

    if (!current.isBomb) {
      arr[y][x].content = 'b';
      arr[y][x].isBomb = true;
      bombsCount--;
    } else {
      arr[y][x].content = 0;
    }
  }

  return arrayWithBobms;
}

export function getStateOfArroundItems(arr, palce) {
  const { x, y } = palce;
  let count = 0;

  const item_1 = arr[x]?.[y - 1];
  const item_2 = arr[x - 1]?.[y - 1];
  const item_3 = arr[x - 1]?.[y];
  const item_4 = arr[x - 1]?.[y + 1];
  const item_5 = arr[x]?.[y + 1];
  const item_6 = arr[x + 1]?.[y + 1];
  const item_7 = arr[x + 1]?.[y];
  const item_8 = arr[x + 1]?.[y - 1];

  const arrayArround = [
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
    item_6,
    item_7,
    item_8,
  ].filter((item) => typeof item !== 'undefined');
  // console.log(arrayArround);

  count = arrayArround.reduce((acc, el, i) => {
    acc += Boolean(el.isBomb) ? 1 : 0;
    return acc;
  }, 0);
  arr[x][y].content = count;
}

export const getFinallyDomField = (array) => {
  const arr = array.forEach((item) => {
    item.forEach((itemInside) => {
      const itemDom = document.createElement('div');
      itemDom.innerHTML = itemInside.content;
      field.append(itemDom);
    });
  });

  return arr;
};

let matrixField = getMatrixField();
getFinallyDomField(matrixField);

// console.log(getStateOfArroundItems({ x: 1, y: 1 }));
// console.log(matrixField);

/* 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    0, 0, 0, 1, 1, 2, 1, 1, 0, 0
    0, 0, 0, 1, 'b', 2, 'b', 1, 0, 0
    2, 2, 2, 2, 2, 2, 1, 1, 0, 0
    'b', 'b', 2, 'b', 1, 0, 0, 0, 0, 0
    3, 3, 2, 2, 3, 2, 1, 0, 0, 0
    'b', 1, 0, 2, 'b', 'b', 1, 0, 0, 0
    1, 1, 0, 2, 'b', 3, 1, 0, 0, 0
    0, 0, 0, 1, 1, 2, 1, 1, 0, 0
    0, 0,   0, 0, 0, 1, 'b', 1, 0, 0
*/
