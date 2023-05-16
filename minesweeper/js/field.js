// import { getItem } from "./fieldItem.js";
import { itemField } from "./fieldItem.js";
import { App } from "./app-page.js";
// const field = document.querySelector(".body__field");
// console.log(field);

export function getRandomNubers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

/* 

export function getMatrixField(width = 10, height = 10, bombs = 10) {
  const arr = [];
  for (let i = 0; i < height; i++) {
    let curr = [];
    for (let j = 0; j < width; j++) {
      const item = document.createElement("div");
      curr[j] = new itemField(false, { i, j });
    }
    arr.push(curr);
  }

  const arrayWithBobms = getBobms(arr, bombs);

  arrayWithBobms.forEach((el, x) => {
    el.forEach((el, y) => {
      if (el.content !== "b") {
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
      arr[y][x].content = "b";
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
  ].filter((item) => typeof item !== "undefined");

  count = arrayArround.reduce((acc, el, i) => {
    acc += Boolean(el.isBomb) ? 1 : 0;
    return acc;
  }, 0);
  arr[x][y].content = count;
}

export const getFinallyDomField = (array) => {
  const arr = array.forEach((item) => {
    item.forEach((itemInside) => {
      const itemDom = document.createElement("div");
      itemDom.innerHTML = itemInside.content;
      field.append(itemDom);
    });
  });

  return arr;
};

let matrixField = getMatrixField();
// getFinallyDomField(matrixField);
 */

// ----
class matrixField extends App {
  constructor() {
    super();
    this.array = [];
  }

  getBobms(arr, bombs) {
    let bombsCount = bombs;
    const matrixFieldHeight = arr.length;
    const matrixFieldWidth = arr[0].length;

    while (bombsCount) {
      const x = getRandomNubers(0, matrixFieldWidth - 1);
      const y = getRandomNubers(0, matrixFieldHeight);
      let current = arr[y][x];

      if (!current.isBomb) {
        arr[y][x].content = "b";
        arr[y][x].isBomb = true;
        bombsCount--;
      } else {
        arr[y][x].content = "";
      }
    }
  }

  getStateOfArroundItems(arr, palce) {
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

    count = arrayArround.reduce((acc, el, i) => {
      acc += Boolean(el.isBomb) ? 1 : 0;
      return acc;
    }, 0);
    if (count !== 0) {
      this.array[x][y].content = count;
    }
  }

  getMatrixField(width = 10, height = 10, bombs = 10) {
    this.getHtmlPage();
    console.log(this.field);
    for (let i = 0; i < height; i++) {
      let curr = [];
      for (let j = 0; j < width; j++) {
        const item = document.createElement("div");
        curr[j] = new itemField(false, { i, j });
        curr[j].content = "";
      }
      this.array.push(curr);
    }

    this.getBobms(this.array, bombs);

    this.array.forEach((el, x) => {
      el.forEach((el, y) => {
        if (el.content !== "b") {
          this.getStateOfArroundItems(this.array, { x, y });
        }
      });
    });
  }

  getFinallyBattlefield() {}
}

const finallyArray = new matrixField(10, 10, 3);
finallyArray.getMatrixField(10, 10, 5);
console.log(finallyArray.array);
