export class App {
  constructor() {
    this.body = document.querySelector("body");
    this.page = document.createElement("div");
    this.page.classList.add("_container");
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.main.classList.add("main");
    this.footer = document.createElement("footer");
    this.footer.classList.add("footer");
    this.field = "";
  }

  getHtmlPage() {
    const HEADER_TITLE = document.createElement("h1");
    HEADER_TITLE.innerHTML = "RSSchool MINESWEEPER";
    this.header.classList.add("header");
    this.header.append(HEADER_TITLE);
    const MAIN_BODY = document.createElement("div");
    MAIN_BODY.classList.add("body");

    const BODY_FIELD = document.createElement("div");
    BODY_FIELD.classList.add("body__field");
    BODY_FIELD.classList.add("field");
    this.field = BODY_FIELD;
    MAIN_BODY.append(BODY_FIELD);
    const BODY_SCORE = document.createElement("div");
    BODY_SCORE.classList.add("body__score");
    MAIN_BODY.append(BODY_SCORE);

    // ---
    this.main.append(MAIN_BODY);
    this.body.append(this.header);
    this.body.append(this.main);
    this.body.append(this.footer);
  }
}
