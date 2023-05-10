export class App {
  constructor() {
    this.page = document.createElement("div");
    this.page.classList.add("_container");
    this.header = document.createElement("div");
    this.header.classList.add("header");
    this.main = document.createElement("div");
    this.main.classList.add("main");
    this.footer = document.createElement("div");
    this.footer.classList.add("footer");
  }
}
