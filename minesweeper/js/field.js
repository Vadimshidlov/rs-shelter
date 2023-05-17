import { App } from './app-page.js';
import ItemField from './fieldItem.js';

export function getRandomNubers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

export class MatrixField extends App {
  constructor() {
    super();
    this.array = [];
    this.arrayBombsPlace = [];
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
        arr[y][x].content = '💣';
        arr[y][x].isBomb = true;
        this.arrayBombsPlace.push(arr[y][x]);
        bombsCount--;
      } else {
        arr[y][x].content = '';
      }
    }
    console.log(this.arrayBombsPlace);
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
    ].filter((item) => typeof item !== 'undefined');

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
        curr[j] = new ItemField(false, { i, j }, this.arrayBombsPlace);
        // curr[j].element.classList.add('field-item');
      }
      this.array.push(curr);
    }

    this.getBobms(this.array, bombs);

    this.array.forEach((el, x) => {
      el.forEach((el, y) => {
        if (el.content !== '💣') {
          this.getStateOfArroundItems(this.array, { x, y });
        }
      });
    });
  }

  getFinallyBattlefield() {
    this.getMatrixField();
    this.array.forEach((el) => {
      el.forEach((elTwo) => {
        elTwo.moveToBattlefield();
      });
    });
  }

  getContent() {}
}

const finallyArray = new MatrixField();

// finallyArray.getMatrixField();
finallyArray.getFinallyBattlefield();
console.log(finallyArray.array);

export default MatrixField;
