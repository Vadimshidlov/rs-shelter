import { App } from "./app-page.js";
import ItemField from "./fieldItem.js";

export function getRandomNubers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

export class MatrixField extends App {
  constructor() {
    super();
    this.array = [];
    this.arrayBombsPlace = [];
    this.firstClickPlace = {};
    this.arrayWithoutContent = [];
    window.addEventListener("click", (e) => {
      if (this.array.includes(e.target.element) && this.clicks === 0) {
        console.log("FIRST CLICK");
      }
    });
  }

  getBobms(arr, bombs) {
    let bombsCount = bombs;
    const matrixFieldHeight = arr.length;
    const matrixFieldWidth = arr[0].length;

    while (bombsCount) {
      const x = getRandomNubers(0, matrixFieldWidth - 1);
      const y = getRandomNubers(0, matrixFieldHeight);
      if (x !== this.firstClickPlace.i && y !== this.firstClickPlace.j) {
        let current = arr[y][x];
        if (!current.isBomb) {
          arr[y][x].content = "💣";
          arr[y][x].isBomb = true;
          this.arrayBombsPlace.push(arr[y][x]);
          bombsCount--;
        } else {
          arr[y][x].content = "";
        }
      }
    }
    console.log(this.arrayBombsPlace, `BOBMS`);
  }

  getStateOfArroundItems(arr, palce) {
    const { x, y } = palce;
    const { firstX, firstY } = this.firstClickPlace;
    if (x !== firstX && y !== firstY) {
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
  }

  getMatrixField(width = 10, height = 10, bombs = 10) {
    this.getHtmlPage();
    const battleField = document.querySelector(".body__field");

    // this.element = item;
    console.log(this.field);
    for (let i = 0; i < height; i++) {
      let curr = [];
      let curWitoutContent = [];

      for (let j = 0; j < width; j++) {
        curr[j] = new ItemField(false, { i, j }, this.arrayBombsPlace);
        // curr[j].element.classList.add('field-item');
        const item = document.createElement("div");
        item.classList.add("field-item");
        item.dataset.place = { i, j };
        item.dataset.placeX = i;
        item.dataset.placeY = j;
        curWitoutContent[j] = item;
        battleField.append(item);
        item.addEventListener("click", (e) => {
          if (this.clicks === 0) {
            console.log("FIRST CLICK");
            item.classList.add("field-item__active");
            item.dataset.opened = true;
            this.firstClickPlace = e.target.dataset.place;
            this.clicks++;
            this.getBobms(this.array, bombs);
            this.array.forEach((el, x) => {
              el.forEach((el, y) => {
                if (el.content !== "💣") {
                  this.getStateOfArroundItems(this.array, { x, y });
                }
              });
            });
            this.getFinally();
          } else {
            if (e.target.dataset.content === "💣") {
              this.getAllBobms();
              return;
            }

            if (e.target.dataset.content === "") {
              this.getItemNeighborsData(
                e.target.dataset.placeX,
                e.target.dataset.placeY
              );
            }

            e.target.innerHTML = e.target.dataset.content;
            e.target.classList.add("field-item__active");
            e.target.dataset.opened = true;

            console.log(this.arrayWithoutContent);
          }
        });
      }
      this.array.push(curr);
      this.arrayWithoutContent.push(curWitoutContent);
    }

    // this.getBobms(this.array, bombs);

    // this.array.forEach((el, x) => {
    //   el.forEach((el, y) => {
    //     if (el.content !== '💣') {
    //       this.getStateOfArroundItems(this.array, { x, y });
    //     }
    //   });
    // });
    console.log(this.array, `from matrixfield`);
    console.log(this.arrayWithoutContent, `from matrixfield without`);
  }

  getFieldItemContent() {
    this.innerHTML = this.dataset.content;
  }

  getItemNeighborsData(placeX, placeY) {
    const y = placeY;
    const x = placeX;
    console.log(placeX, placeY);

    const item_1 = this.arrayWithoutContent[x]?.[y - 1];
    const item_2 = this.arrayWithoutContent[x - 1]?.[y - 1];
    const item_3 = this.arrayWithoutContent[x - 1]?.[y];
    const item_4 = this.arrayWithoutContent[x - 1]?.[y + 1];
    const item_5 = this.arrayWithoutContent[x]?.[y + 1];
    const item_6 = this.arrayWithoutContent[x + 1]?.[y + 1];
    const item_7 = this.arrayWithoutContent[x + 1]?.[y];
    const item_8 = this.arrayWithoutContent[x + 1]?.[y - 1];

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
    console.log(arrayArround, `FROM getItemNeighborsData`);

    arrayArround.forEach((item) => {
      if (item.dataset.content !== "💣" && item.dataset.opened !== true) {
        const place = item.dataset.place;
        console.log(`FROM EMPTY`);
        item.innerHTML = item.dataset.content;
        item.classList.add("field-item__active");
        this.getItemNeighborsData(item.dataset.placeX, item.dataset.placeX);
      }
    });
  }

  getFinally() {
    this.array.forEach((el, i) => {
      el.forEach((el, j) => {
        el.setItemContent(this.arrayWithoutContent[i][j]);
      });
    });
  }

  /* getFinallyBattlefield() {
    this.getMatrixField();
    this.array.forEach((el) => {
      el.forEach((elTwo) => {
        elTwo.moveToBattlefield();
      });
    });
  } */

  getAllBobms() {
    /* console.log("ALL BOMBS");
    this.arrayBombsPlace.forEach((item) => {
      const itemX = item.place.i;
      const itemY = item.place.j;
      this.arrayWithoutContent[itemX][itemY].innerHTML =
        this.arrayWithoutContent[itemX][itemY].dataset.content;
      this.arrayWithoutContent[itemX][itemY].classList.add(
        "field-item__active"
      );
    }); */
    console.log(this.arrayWithoutContent);
    this.arrayWithoutContent.forEach((el) => {
      el.forEach((el) => {
        el.innerHTML = el.dataset.content;
        el.classList.add("field-item__active");
      });
    });
    // item.innerHTML = item.dataset.content;
    //     item.classList.add("field-item__active");
  }
}

const finallyArray = new MatrixField();

finallyArray.getMatrixField();
// finallyArray.getFinallyBattlefield();
console.log(finallyArray.array);

export default MatrixField;
