import { getApp } from "./app-page.js";
import ItemField from "./fieldItem.js";

export function getRandomNubers(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const DATA = {
  firstBombPlace: {},
  clicksCount: 0,
  notBombItemsCount: 90,
  gameSettings: {
    mines: "50",
    fieldsize: "10",
  },
  flagsCount: 10,
};

const arrayBombsPlace = [];
const arrayWithoutBombs = [];
export const matrixArray = [];
export let clicksCount = 0;

let minutes = 0;
let seconds = 0;
export let interval;

export function getWatch() {
  const HEADER_MINUTES = document.querySelector(".header__mintutes");
  const HEADER_SECONDS = document.querySelector(".header__seconds");
  seconds++;
  HEADER_SECONDS.innerHTML = `0` + seconds;

  if (seconds > 9) {
    HEADER_SECONDS.innerHTML = seconds;
  }
  if (seconds > 58) {
    seconds = 0;
    minutes += 1;
    HEADER_MINUTES.innerHTML = `0` + minutes;
  }

  if (minutes > 9) {
    HEADER_MINUTES.innerHTML = minutes;
  }
}

export function startWatch() {
  interval = setInterval(getWatch, 1000);
}
export function stopWatch() {
  clearInterval(interval);
}

export function incrementClickCount() {
  const clickCountDom = document.querySelector(".header__clicks");
  DATA.clicksCount += 1;
  clickCountDom.innerHTML = `Moves count: ${DATA.clicksCount}`;
}

function getBombs(arr, bombs, isFirstBombPlace) {
  isFirstBombPlace = DATA;
  let bombsCount = bombs;
  const matrixFieldHeight = arr.length;
  const matrixFieldWidth = arr[0].length;

  while (bombsCount) {
    const x = getRandomNubers(0, matrixFieldWidth - 1);
    const y = getRandomNubers(0, matrixFieldHeight);
    let current = arr[y][x];

    if (
      !current.isBomb &&
      x !== isFirstBombPlace.x &&
      y !== isFirstBombPlace.y
    ) {
      arr[y][x].content = "💣";
      arr[y][x].isBomb = true;
      arrayBombsPlace.push(arr[y][x]);
      bombsCount--;
    } else {
      arr[y][x].content = "";
    }
  }
}

function getStateOfArroundItems(arr, placeX, placeY) {
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
  ].filter((item) => typeof item !== "undefined");

  count = arrayArround.reduce((acc, el, i) => {
    acc += Boolean(el.isBomb) ? 1 : 0;
    return acc;
  }, 0);
  if (count !== 0) {
    matrixArray[x][y].content = count;
  }

  return arrayArround;
}

export function getMatrixField(
  width = 10,
  height = 10,
  bombs = 10,
  isFirstBombPlace = {}
) {
  matrixArray.length = 0;
  getApp();
  for (let i = 0; i < height; i++) {
    let curr = [];
    for (let j = 0; j < width; j++) {
      curr[j] = new ItemField(false, i, j, arrayBombsPlace);
    }
    matrixArray.push(curr);
  }

  getBombs(matrixArray, bombs, isFirstBombPlace);

  matrixArray.forEach((el, x) => {
    el.forEach((el, y) => {
      if (el.content !== "💣") {
        el.getSingleItemStateArround(matrixArray, x, y);
      }
      if (x === isFirstBombPlace?.x && y === isFirstBombPlace?.y) {
        matrixArray[x][y].element.classList.add("field-item__active");
        matrixArray[x][y].element.dataset.opened = true;
      }
    });
  });

  return matrixArray;
}

export function gameOver() {
  const FIELD = document.querySelector(".body__field");
  const HEADER = document.querySelector(".header");
  const RESULT = document.createElement("div");
  const BODY = document.querySelector("body");
  RESULT.classList.add("header__result");
  RESULT.innerHTML = `Game over. Try again!`;
  HEADER.append(RESULT);
  /* const BUTTON_RESTART = document.createElement('button');
  BUTTON_RESTART.classList.add('header__button');
  BUTTON_RESTART.innerHTML = 'Restart!';
  BUTTON_RESTART.addEventListener('click', () => {
    BODY.innerHTML = '';
    getFinallyBattlefield();
  });
  HEADER.append(BUTTON_RESTART); */
  matrixArray.forEach((el, i) => {
    el.forEach((el, j) => {
      el.element.classList.add("field-item__active");
      el.element.innerHTML = el.element.dataset.content;
    });
  });
  console.log(FIELD.childNodes);
  FIELD.childNodes.forEach((item) => {
    item.classList.add("disable-item");
  });
}

export function winGame() {
  stopWatch();
  const FIELD = document.querySelector(".body__field");
  const HEADER = document.querySelector(".header");
  const RESULT = document.createElement("div");
  const BODY = document.querySelector("body");
  RESULT.classList.add("header__result");

  const minutesResult = document.querySelector(".header__mintutes").innerHTML;
  const secondsResult = document.querySelector(".header__seconds").innerHTML;
  let time =
    minutesResult !== `00`
      ? Number(minutesResult) +
        ` minutes, ` +
        Number(secondsResult) +
        " seconds "
      : Number(secondsResult) + " seconds ";

  RESULT.innerHTML = `Hooray! You found all mines in ${time}  and ${DATA.clicksCount} moves!"`;
  HEADER.append(RESULT);
  /* const BUTTON_RESTART = document.createElement('button');
  BUTTON_RESTART.classList.add('header__button');
  BUTTON_RESTART.innerHTML = 'Restart!';
  BUTTON_RESTART.addEventListener('click', () => {
    BODY.innerHTML = '';
    getFinallyBattlefield();
  });
  HEADER.append(BUTTON_RESTART); */
  matrixArray.forEach((el, i) => {
    el.forEach((el, j) => {
      el.element.classList.add("field-item__active");
      el.element.innerHTML = el.element.dataset.content;
    });
  });
  console.log(FIELD.childNodes);
  FIELD.childNodes.forEach((item) => {
    item.classList.add("disable-item");
  });
}

export function getFinallyBattlefield(width, height, bombsCount, data) {
  DATA.clicksCount = 0;
  getMatrixField(
    DATA.gameSettings.fieldsize,
    DATA.gameSettings.fieldsize,
    DATA.gameSettings.mines,
    DATA.firstBombPlace
  );

  const fieldsizeSelcect = document.getElementById("fieldsize");
  if (DATA.gameSettings.fieldsize === "15") {
    fieldsizeSelcect.innerHTML = "";
    fieldsizeSelcect.insertAdjacentHTML(
      "beforeend",
      `
    Battlefield size:
    <select name="fieldsize" id="fieldsize" required>
      <option value="10" >10</option>
      <option value="15" selected>15</option>
      <option value="25">25</option>
    </select>
  </label>
    `
    );
  } else if (DATA.gameSettings.fieldsize === "25") {
    fieldsizeSelcect.innerHTML = "";
    fieldsizeSelcect.insertAdjacentHTML(
      "beforeend",
      `
      Battlefield size:
      <select name="fieldsize" id="fieldsize" required>
        <option value="10" >10</option>
        <option value="15" >15</option>
        <option value="25" selected>25</option>
      </select>
    </label>
    `
    );
  }

  const FORM_SETTINGS = document.getElementById("game-settings");
  FORM_SETTINGS.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault();
    console.log("Отправка!");
    serializeForm(FORM_SETTINGS);
  }

  function serializeForm(formNode) {
    console.log("go");
    const body = document.querySelector("body");
    const { elements } = formNode;
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element;

        return { name, value };
      });

    console.log(data);
    data.forEach((el) => {
      DATA.gameSettings[el.name] = el.value;
    });

    DATA.flagsCount = DATA.gameSettings.mines;

    console.log(`DATA.gameSettings`, DATA.gameSettings);
    body.innerHTML = "";

    // BODY_FIELD.style.width = `${40 * DATA.gameSettings.fieldsize}px`;

    getFinallyBattlefield(
      DATA.gameSettings.fieldsize,
      DATA.gameSettings.fieldsize,
      DATA.gameSettings.mines,
      DATA.firstBombPlace
    );

    setFieldSize();

    // document.querySelector('.body__field').style.width = `${widthTo}px`;
    // BODY_FIELD.style.width = widthTo + 'px';
  }

  getArrayWithoutBombs();
  matrixArray.forEach((el, i) => {
    el.forEach((elTwo, j) => {
      if (i === data?.x && j === data?.y) {
        const content = elTwo.content;
        elTwo.element.innerHTML = content;
        elTwo.element.dataset.opened = true;
        elTwo.element.classList.add("field-item__active");
      }

      elTwo.moveToBattlefield();
    });
  });
  setFieldSize();
}

// export function setFieldSize() {
//   if (DATA.gameSettings.fieldsize === "25") {
//     /* document.querySelectorAll('.field-item').forEach((item) => {
//       item.classList.add('field-item__large');
//     }); */

//     document.querySelector(".body__field").style.width = 643 + "px";
//     document.querySelector(".body__field").style.height = 643 + "px";
//     document.querySelectorAll(".field-item").forEach((item) => {
//       item.style.width = 20 + `px`;
//       item.style.height = 20 + `px`;
//       item.style.fontSize = 14 + `px`;
//     });
//   }
//   if (DATA.gameSettings.fieldsize === "15") {
//     // document.querySelectorAll('.field-item').forEach((item) => {
//     //   item.classList.add('field-item__medium');
//     // });
//     document.querySelector(".body__field").style.width = 482 + "px";
//     document.querySelector(".body__field").style.height = 482 + "px";
//     document.querySelectorAll(".field-item").forEach((item) => {
//       item.style.width = 25 + `px`;
//       item.style.height = 25 + `px`;
//       item.style.fontSize = 18 + `px`;
//     });
//   }
// }

export function setFieldSize() {
  if (DATA.gameSettings.fieldsize === "25") {
    /* document.querySelectorAll('.field-item').forEach((item) => {
      item.classList.add('field-item__large');
    }); */

    document.querySelector(".body__field").classList.add("field__large");
    document.querySelectorAll(".field-item").forEach((item) => {
      item.classList.add("field__item__small");
    });
  }
  if (DATA.gameSettings.fieldsize === "15") {
    // document.querySelectorAll('.field-item').forEach((item) => {
    //   item.classList.add('field-item__medium');
    // });
    document.querySelector(".body__field").classList.add("field__medium");
    document.querySelectorAll(".field-item").forEach((item) => {
      item.classList.add("field__item__medium");
    });
  }
  if (DATA.gameSettings.fieldsize === "10") {
    // document.querySelectorAll('.field-item').forEach((item) => {
    //   item.classList.add('field-item__medium');
    // });
    document.querySelector(".body__field").classList.add("field__small");
    document.querySelectorAll(".field-item").forEach((item) => {
      item.classList.add("field__item__large");
    });
  }
}

export function checkItemsCount() {
  let count = 0;
  const FIELD = document.getElementsByClassName("body__field");
  console.log(FIELD);
  FIELD[0].childNodes.forEach((item) => {
    if (item.dataset.opened && item.dataset.content !== "💣") {
      count += 1;
    }
  });
  DATA.notBombItemsCount = count;
  if (
    DATA.notBombItemsCount ===
    Number(DATA.gameSettings.fieldsize) ** 2 - Number(DATA.gameSettings.mines)
  ) {
    winGame();
  }
  console.log(DATA.notBombItemsCount, `DATA.notBombItemsCount`);
}

export function firstClickIsBomb(array, x, y) {
  array[x][y].content = "";
  array.forEach((el, i) => {
    el.forEach((elTwo, j) => {
      if ((elTwo.content === "" && i !== x, j !== y)) {
        getStateOfArroundItems(array, i, j);
      }
    });
  });
}

function getArrayWithoutBombs() {
  matrixArray.forEach((el, i) => {
    el.forEach((el, j) => {
      if (el.content === "") {
        arrayWithoutBombs.push(el);
      }
    });
  });
}

getFinallyBattlefield();
// startWatch();

export function setFlagCount() {
  const flaggetDom = document.querySelector(".header__flags-count");
  flaggetDom.innerHTML = `🚩: ${DATA.flagsCount}`;
}

console.log(getStateOfArroundItems(matrixArray, 1, 2));

/* window.addEventListener('click', () => {
  stopWatch();
}); */
