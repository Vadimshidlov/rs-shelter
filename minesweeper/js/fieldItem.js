// import MatrixField from './field.js';
import { getApp } from './app-page.js';
import {
  DATA,
  getMatrixField,
  getRandomNubers,
  matrixArray,
  showAllItems,
  firstClickIsBomb,
  getFinallyBattlefield,
  clicksCount, incrementClickCount,
} from './field.js';

class ItemField {
  constructor(isBomb, placeX, placeY, bombsArray) {
    this.isBomb = isBomb;
    this.bombsArray = bombsArray;
    this.placeX = placeX;
    this.placeY = placeY;
    this.content = '';
    this.element = document.createElement('div');
  }

  /*getItemContent() {
    if (this.element.dataset.opened || this.element.dataset.content === '💣') {
      return;
    }

    console.log(`getItemContent`);
    /!*if (this.element.dataset.content === '💣') {
      DATA.clicksCount += 1;
      showAllItems();
      console.log('YOU ARE LOOOOSE! ;))');
      return;
    }*!/
    if (this.element.dataset.content === '') {
      const arr = this.getNeighborsOfItem(matrixArray, 1, 1);
      console.log(arr, `arr`);
      this.element.innerHTML = this.element.dataset.content;
      this.element.dataset.opened = true;
      this.element.classList.add('field-item__active');
      arr.forEach(item => {
        item.getItemContent()
      })
      /!*this.openItemsArround(
        matrixArray,
        this.element.dataset.placeX,
        this.element.dataset.placeY
      );*!/
      return;
    }
    this.element.innerHTML = this.element.dataset.content;
    this.element.dataset.opened = true;
    this.element.classList.add('field-item__active');
  }*/

  getItemContent(item) {
    console.log(item);
    if (item.dataset.opened || item.dataset.content === '💣') {
      return;
    }

    /*item.innerHTML = this.element.dataset.content;
    item.dataset.opened = true;
    item.classList.add('field-item__active');*/

    /*if (this.element.dataset.content === '💣') {
      DATA.clicksCount += 1;
      showAllItems();
      console.log('YOU ARE LOOOOSE! ;))');
      return;
    }*/
    if (item.dataset.content === '') {
      const arr = this.getNeighborsOfItem(matrixArray, item.dataset.placeX, item.dataset.placeX);
      console.log(arr, `arr`);
      item.innerHTML = this.element.dataset.content;
      item.dataset.opened = true;
      item.classList.add('field-item__active');
      arr.forEach(item => {
        this.getItemContent(item)
      })
      /*this.openItemsArround(
        matrixArray,
        this.element.dataset.placeX,
        this.element.dataset.placeY
      );*/
      return;
    }
    /*this.element.innerHTML = this.element.dataset.content;
    this.element.dataset.opened = true;
    this.element.classList.add('field-item__active');*/
  }

  showAllbombs() {
    this.bombsArray.forEach((item) => {
      item.element.innerHTML = this.element.dataset.content;
      item.element.classList.add('field-item__active');
    });
  }

  getNeighborsOfItem(arr, placeX, placeY) {
    const x = placeX;
    const y = placeY;

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
    return arrayArround;
  }

  getSingleItemStateArround(arr, placeX, placeY) {
    const x = placeX;
    const y = placeY;
    // console.log(`go`, x, y)
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
      matrixArray[x][y].content = count;
    }

    return arrayArround;
  }

  // TODO !!!
  openItemsArround(placeX, placeY) {
    const arrayArround = this.getNeighborsOfItem(matrixArray, placeY, placeX);
    console.log(arrayArround, `arrayArround`);
    arrayArround.forEach((item) => {
      item.openItemsArround(
        item.element.dataset.placeY,
        item.element.dataset.placeX
      );
    });
    if (this.element.dataset.opened || this.element.dataset.content === '💣') {
      return;
    }
  }

  openContent() {
    if (this.element.dataset.opened || this.element.dataset.content === '💣'){
      return
    }
    if (this.element.dataset.content === ''){
      // incrementClickCount()
      this.element.innerHTML = this.element.dataset.content;
      this.element.dataset.opened = true;
      this.element.classList.add('field-item__active');
      const arrNeighbors = this.getNeighborsOfItem(matrixArray, this.placeX, this.placeY)
      arrNeighbors.forEach(item => {
        item.openContent()
      })
    }
    // incrementClickCount()
    this.element.innerHTML = this.element.dataset.content;
    this.element.dataset.opened = true;
    this.element.classList.add('field-item__active');
  }

  moveToBattlefield() {
    const x = this.placeX;
    const y = this.placeY;

    const battleField = document.querySelector('.body__field');
    this.element.classList.add('field-item');
    this.element.dataset.content = this.content;
    this.element.dataset.isBomb = this.isBomb;
    this.element.dataset.placeX = x;
    this.element.dataset.placeY = y;
    battleField.append(this.element);

    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) {
        if (e.target.dataset.content === '💣' && DATA.clicksCount === 0) {
          const body = document.querySelector('body');
          DATA.firstBombPlace.x = x;
          DATA.firstBombPlace.y = y;
          body.innerHTML = '';
          getFinallyBattlefield(10, 10, 10, DATA.firstBombPlace);
          // this.getItemContent();
          return;
        } else {
          incrementClickCount()
          if (e.target.dataset.content === '💣') {
            // DATA.clicksCount += 1;
            showAllItems();
            console.log('YOU ARE LOOOOSE! ;))');
            return;
          } else if (e.target.dataset.content === '') {
            this.openContent()
            /*const arr = this.getNeighborsOfItem(matrixArray, this.placeX, this.placeY)
            console.log(arr);
            arr.forEach(item => {
              if (!item.element.dataset.opened && item.element.dataset.content !== '💣'){
                item.openContent()
              }
            })*/
          } else {
            this.openContent()
          }

          // this.getItemContent(this.element);
        }
      }
    });
  }

  setItemContent(item) {
    item.dataset.content = this.content;
    item.dataset.isBomb = this.isBomb;
    item.dataset.place = this.place;
  }
}

export default ItemField;
