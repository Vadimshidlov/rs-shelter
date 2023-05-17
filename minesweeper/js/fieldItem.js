import { MatrixField } from "./field.js";
// import { App } from "./app-page.js";

export class ItemField {
  constructor(isBomb, place, bombsArray) {
    // super();
    this.isBomb = isBomb;
    this.bombsArray = bombsArray;
    this.place = place;
    this.content = isBomb !== true ? "" : "b";
    this.element = "";

    // window.addEventListener("click", () => {
    //   this.getItemContent();
    // });
  }

  getItemContent() {
    this.element.innerHTML = this.element.dataset.content;
  }

  showAllbombs() {
    console.log("all bombs");
    this.bombsArray.forEach((item) => {
      item.element.innerHTML = this.element.dataset.content;
    });
  }

  moveToBattlefield() {
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
        if (e.target.dataset.content === "💣") {
          this.showAllbombs();
          console.log("YOU ARE LOOOOSE! ;))");
        }
        console.log(e.target.dataset.content);
        this.getItemContent();
      }
    });
    // item.addEventListener("click", () => {
    //   // item.innerHTML = item.dataset.content;
    //   this.getItemContent();
    // });
  }
}
