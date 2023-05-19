export function getApp() {
  const container = document.createElement('div');
  container.classList.add('_container');
  const body = document.querySelector('body');
  const page = document.createElement('div');
  page.classList.add('_container');
  const header = document.createElement('header');
  const main = document.createElement('main');
  main.classList.add('main');
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const field = '';
  const intemField = '';
  const clicks = 0;
  const firstClickPlace = [];
  const arrayWithoutBombs = [];
  const array = [];
  const arrayBombsPlace = [];

  function getHtmlPage() {
    const HEADER_TITLE = document.createElement('h1');
    HEADER_TITLE.innerHTML = 'RSSchool MINESWEEPER';
    HEADER_TITLE.classList.add('header__title');
    header.classList.add('header');
    header.append(HEADER_TITLE);
    const MAIN_BODY = document.createElement('div');
    MAIN_BODY.classList.add('body');

    const BODY_FIELD = document.createElement('div');
    BODY_FIELD.classList.add('body__field');
    // const field = BODY_FIELD;
    MAIN_BODY.append(BODY_FIELD);
    const BODY_SCORE = document.createElement('div');
    BODY_SCORE.classList.add('body__score');
    MAIN_BODY.append(BODY_SCORE);

    // —-
    main.append(MAIN_BODY);
    container.append(header);
    container.append(main);
    container.append(footer);
    body.append(container);
  }

  getHtmlPage();
}
