import {
  DATA,
  matrixArray,
  gameOver,
  getFinallyBattlefield,
  incrementClickCount,
  checkItemsCount,
  startWatch,
  stopWatch,
  setFlagCount,
  // interval,
} from './field.js';

class ItemField {
  constructor(isBomb, placeX, placeY, bombsArray) {
    this.isBomb = isBomb;
    this.bombsArray = bombsArray;
    this.placeX = placeX;
    this.placeY = placeY;
    this.content = '';
    this.element = document.createElement('div');
    // this.interval = interval;
  }

  getItemContent(item) {
    if (item.dataset.opened || item.dataset.content === '💣') {
      return;
    }

    if (item.dataset.content === '') {
      const arr = this.getNeighborsOfItem(
        matrixArray,
        item.dataset.placeX,
        item.dataset.placeX
      );
      item.innerHTML = this.element.dataset.content;
      item.dataset.opened = true;
      item.classList.add('field-item__active');
      arr.forEach((item) => {
        this.getItemContent(item);
      });
      return;
    }
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
    if (this.element.dataset.opened || this.element.dataset.content === '💣') {
      return;
    }
    if (this.element.dataset.content === '') {
      this.element.innerHTML = this.element.dataset.content;
      this.element.dataset.opened = true;
      this.element.classList.add('field-item__active');
      const arrNeighbors = this.getNeighborsOfItem(
        matrixArray,
        this.placeX,
        this.placeY
      );
      arrNeighbors.forEach((item) => {
        item.openContent();
      });
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
      if (
        e.target === this.element &&
        e.target.innerHTML !== '🚩' &&
        !e.target.dataset.opened
      ) {
        if (DATA.clicksCount === 0) {
          startWatch();
        }
        if (e.target.dataset.content === '💣' && DATA.clicksCount === 0) {
          const body = document.querySelector('body');
          DATA.firstBombPlace.x = x;
          DATA.firstBombPlace.y = y;
          body.innerHTML = '';
          getFinallyBattlefield(10, 10, 10, DATA.firstBombPlace);
          incrementClickCount();
          return;
        } else {
          incrementClickCount();

          if (e.target.dataset.content === '💣') {
            stopWatch();
            gameOver();
            return;
          } else if (e.target.dataset.content === '') {
            this.openContent();
            checkItemsCount();
          } else {
            this.openContent();
            checkItemsCount();
          }
        }
      }
    });
    this.element.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!this.element.dataset.opened) {
        if (this.element.innerHTML === '🚩') {
          DATA.flagsCount += 1;
          setFlagCount();
          this.deleteFlag();
          return;
        } else if (DATA.flagsCount !== 0) {
          DATA.flagsCount -= 1;
          setFlagCount();
          this.setFlag();
        }
      }
    });
  }

  setFlag() {
    this.element.innerHTML = '🚩';
  }
  deleteFlag() {
    this.element.innerHTML = '';
  }

  setItemContent(item) {
    item.dataset.content = this.content;
    item.dataset.isBomb = this.isBomb;
    item.dataset.place = this.place;
  }
}

export default ItemField;
