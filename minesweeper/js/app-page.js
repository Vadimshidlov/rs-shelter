import { DATA, getFinallyBattlefield } from './field.js';

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

  function getHtmlPage() {
    const HEADER_TITLE = document.createElement('h1');
    HEADER_TITLE.innerHTML = 'RSSchool MINESWEEPER';
    HEADER_TITLE.classList.add('header__title');
    header.classList.add('header');
    header.append(HEADER_TITLE);
    const CLICKS_COUNT = document.createElement('div');
    CLICKS_COUNT.classList.add('header__clicks');
    CLICKS_COUNT.innerHTML = `Moves count: ${DATA.clicksCount}`;
    header.append(CLICKS_COUNT);
    const HEADER_CLOCKS = document.createElement('div');
    HEADER_CLOCKS.classList.add('header__clocks');

    const HEADER_CLOCKS_MINUTES = document.createElement('span');
    HEADER_CLOCKS_MINUTES.classList.add('header__mintutes');
    HEADER_CLOCKS_MINUTES.innerHTML = `00`;
    // HEADER_CLOCKS.append(HEADER_CLOCKS_MINUTES);

    const HEADER_CLOCKS_POINTS = document.createElement('span');
    HEADER_CLOCKS_POINTS.classList.add('header__dubble-points');
    HEADER_CLOCKS_POINTS.innerHTML = `:`;
    // HEADER_CLOCKS.append(HEADER_CLOCKS_POINTS);

    const HEADER_CLOCKS_SECONDS = document.createElement('span');
    HEADER_CLOCKS_SECONDS.classList.add('header__seconds');
    HEADER_CLOCKS_SECONDS.innerHTML = `00`;
    // HEADER_CLOCKS.append(HEADER_CLOCKS_SECONDS);
    HEADER_CLOCKS.insertAdjacentHTML(
      'afterbegin',
      `
    <span class="header__mintutes">00</span>
    <span class="header__dubble-points">:</span>
    <span class="header__seconds">00</span>
  `
    );
    header.append(HEADER_CLOCKS);

    const RESTART = document.createElement('button');
    RESTART.classList.add('header__button');
    RESTART.innerHTML = 'New Game';
    RESTART.addEventListener('click', () => {
      body.innerHTML = ``;
      getFinallyBattlefield();
    });
    header.append(RESTART);

    const MAIN_BODY = document.createElement('div');
    MAIN_BODY.classList.add('body');

    const BODY_FIELD = document.createElement('div');
    BODY_FIELD.classList.add('body__field');
    MAIN_BODY.append(BODY_FIELD);
    const BODY_SCORE = document.createElement('div');
    BODY_SCORE.classList.add('body__score');
    MAIN_BODY.append(BODY_SCORE);

    main.append(MAIN_BODY);
    container.append(header);
    container.append(main);
    container.append(footer);
    body.append(container);
  }

  getHtmlPage();
}
