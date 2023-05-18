// import MatrixField from './field.js';
import { App } from "./app-page.js";

class ItemField extends App {
  constructor(isBomb, place, bombsArray) {
    super();
    this.isBomb = isBomb;

    this.bombsArray = bombsArray;
    this.place = place;
    // this.content = isBomb !== true ? '' : 'b';
    this.content = "";
    this.element = "";

    // window.addEventListener("click", () => {
    //   this.getItemContent();
    // });
  }

  addItemListeners() {
    this.element.addEventListener("click", (e) => {
      console.log("hello");

      if (e.target === item) {
        this.clicks++;
        if (e.target.dataset.content === "💣") {
          this.showAllbombs();
          console.log("YOU ARE LOOOOSE! ;))");
        }
        this.getItemContent();
      }
    });
  }

  getItemContent() {
    if (this.clicks !== 0) {
      this.element.innerHTML = this.element.dataset.content;
      this.element.dataset.opened = true;
      this.element.classList.add("field-item__active");
    }
  }

  showAllbombs() {
    console.log("all bombs");
    this.bombsArray.forEach((item) => {
      item.element.innerHTML = this.element.dataset.content;
      item.element.classList.add("field-item__active");
    });
  }

  /* moveToBattlefield() {
    const battleField = document.querySelector(".body__field");
    const item = document.createElement("div");
    item.classList.add("field-item");
    item.dataset.content = this.content;
    item.dataset.isBomb = this.isBomb;
    item.dataset.place = this.place;
    battleField.append(item);
    this.element = item;

    this.element.addEventListener("click", (e) => {
      console.log("hello");

      if (e.target === item) {
        this.clicks++;
        if (e.target.dataset.content === "💣") {
          this.showAllbombs();
          console.log("YOU ARE LOOOOSE! ;))");
        }
        this.getItemContent();
      }
    });
  } */

  setItemContent(item) {
    item.dataset.content = this.content;
    item.dataset.isBomb = this.isBomb;
    item.dataset.place = this.place;
  }
}

export default ItemField;
