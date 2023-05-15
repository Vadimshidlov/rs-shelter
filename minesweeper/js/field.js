// import { getItem } from "./fieldItem.js";

function getRandomNubers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getMatrixField(width = 10, height = 10, bombs = 10) {
  const arr = [];
  for (let i = 0; i < height; i++) {
    let curr = [];
    for (let j = 0; j < width; j++) {
      curr[j] = 0;
    }
    arr.push(curr);
  }

  const arrayWithBobms = getBobms(arr, bombs);
  console.log(arrayWithBobms);

  // for (let i = 0; i < matrixField.length; i++) {
  //   for (let j = 0; j < matrixField[i].length; j++) {
  //     let isbomb = matrixField[j] == true ? true : false;
  //     const newItem = getItem(isbomb, { j, i });

  //     matrixField[i][j] = newItem;
  //   }
  // }

  arrayWithBobms.forEach((el, x) => {
    el.forEach((el, y) => {
      if (el !== "b") {
        getStateOfArroundItems(arrayWithBobms, { x, y });
      }
    });
  });

  return arrayWithBobms;
}

function getBobms(arr, bombs) {
  const arrayWithBobms = arr;
  let bombsCount = bombs;
  const matrixFieldHeight = arr.length;
  const matrixFieldWidth = arr[0].length;

  while (bombsCount) {
    const x = getRandomNubers(0, matrixFieldWidth - 1);
    const y = getRandomNubers(0, matrixFieldHeight);
    let current = arr[y][x];

    if (!current) {
      arr[y][x] = "b";
      bombsCount--;
    }
  }

  return arrayWithBobms;
}

function getStateOfArroundItems(arr, palce) {
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
  ].filter((item) => typeof item !== "undefined");
  // console.log(arrayArround);

  count = arrayArround.reduce((acc, el, i) => {
    acc += el === "b" ? 1 : 0;
    return acc;
  }, 0);
  arr[x][y] = count;
}

let matrixField = getMatrixField(10, 10, 8);
console.log(matrixField);

// console.log(getStateOfArroundItems({ x: 1, y: 1 }));
// console.log(matrixField);
