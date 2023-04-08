import { arrayOfPetsData as dataPaginationTwo } from '../main/arrayOfPetsData.js';
import { getModal } from './pets-modal-window.js';

function getArrayOfPets() {
    const petCards = [1, 2, 3, 4, 5, 6, 7, 8];

    const count = 8;

    function getRandomArrayOfEightIdentifacators(arr) {
        const res = [];
        res.push(
            ...arr.sort(function () {
                return Math.random() - 0.5;
            })
        );
        return res;
    }

    const arrOf48Pets = getRandomArrayOfEightIdentifacators(petCards);

    function prepareForRandomCardsId(arr) {
        const res = [[], [], []];

        for (let i = 0; i < 3; i++) {
            res[0].push(arr[i]);
        }
        for (let i = 3; i < 6; i++) {
            res[1].push(arr[i]);
        }
        for (let i = 6; i < 8; i++) {
            res[2].push(arr[i]);
        }

        return res;
    }

    const prepareArr = prepareForRandomCardsId(arrOf48Pets);

    function getFinallArr(arr) {
        const res = [];
        for (let i = 0; i < 6; i++) {
            for (let i = 0; i < arr.length; i++) {
                res.push(
                    ...arr[i].sort(function () {
                        return Math.random() - 0.5;
                    })
                );
            }
        }

        return res;
    }

    return getFinallArr(prepareArr);
}

const arrOfIndexesPets = getArrayOfPets();

/* -----------------RESIZE--------------- */
// eventListener for braikPoints
const breakPointsWidth = window.matchMedia('(639px < width < 768px)');
const callbackForResize = () => {
    console.log('resize');
    getPaginaionCardsHtml(getCountOfPageElements(), 1);

    pagesCount = getPages();
    countOfPageElements = getCountOfPageElements();
    pageNumber = 1;
    btnPageNumber.innerText = pageNumber;

    btnRightOne.classList.remove('pagination-buttons__btn_disable');
    btnRightEnd.classList.remove('pagination-buttons__btn_disable');
    btnLeftOne.classList.add('pagination-buttons__btn_disable');
    btnLeftEnd.classList.add('pagination-buttons__btn_disable');
};
breakPointsWidth.addEventListener('change', callbackForResize);

/* -----------------RESIZE--------------- */

const btnRightOne = document.querySelector('#btn-page-right');
const btnRightEnd = document.querySelector('#btn-page-right-end');
const btnLeftOne = document.querySelector('#btn-page-left');
const btnLeftEnd = document.querySelector('#btn-page-left-start');
const btnPageNumber = document.querySelector('#btn-page-count');

function getPaginaionCardsHtml(pages, count) {
    const paginationBody = document.querySelector('.block-friends__cards');

    let start = count * pages - pages;
    let end = count * pages;
    paginationBody.innerHTML = '';

    for (let i = start; i < end; i++) {
        const blockFriendCard = document.createElement('div');
        blockFriendCard.classList.add('block-friends__card');
        blockFriendCard.id = dataPaginationTwo[arrOfIndexesPets[i] - 1].id;
        const blockFriendImg = document.createElement('img');
        blockFriendImg.classList.add('block-friends__card-picture');

        blockFriendImg.src = `${dataPaginationTwo[arrOfIndexesPets[i] - 1].img}`;
        const blockFriendCardName = document.createElement('div');
        blockFriendCardName.classList.add('block-friends__card-text');
        blockFriendCardName.innerText = `${dataPaginationTwo[arrOfIndexesPets[i] - 1].name}`;
        const blockFriendCardButton = document.createElement('button');
        blockFriendCardButton.classList.add('block-friends__card-btn');
        blockFriendCardButton.innerText = 'Learn more';
        blockFriendCard.appendChild(blockFriendImg);
        blockFriendCard.appendChild(blockFriendCardName);
        blockFriendCard.appendChild(blockFriendCardButton);
        paginationBody.appendChild(blockFriendCard);

        blockFriendCard.addEventListener('click', e => {
            if (e.target.className === 'block-friends__card') {
                getModal(e.target.id);
            }
            if (e.target.className === 'block-friends__card-text') {
                console.log('Click!', e.target.closest('.block-friends__card').id);
                getModal(e.target.closest('.block-friends__card').id);
            }
            if (e.target.className === 'block-friends__card-btn') {
                console.log('Click!', e.target.closest('.block-friends__card').id);
                getModal(e.target.closest('.block-friends__card').id);
            }
            if (e.target.className === 'block-friends__card-picture') {
                console.log('Click!', e.target.closest('.block-friends__card').id);
                getModal(e.target.closest('.block-friends__card').id);
            }
        });
    }
    //    }
}

//firstrenderofpagination(first page)
function firstRender() {
    if (window.innerWidth >= 768) {
        getPaginaionCardsHtml(getCountOfPageElements(), 1);
    }
    if (window.innerWidth >= 640 && window.innerWidth < 768) {
        getPaginaionCardsHtml(getCountOfPageElements(), 1);
    }
    if (window.innerWidth < 640) {
        getPaginaionCardsHtml(getCountOfPageElements(), 1);
    }
}

firstRender();

function getPages() {
    let countOfPages;
    if (window.innerWidth > 768) {
        countOfPages = 6;
        return countOfPages;
    }

    if (window.innerWidth <= 640) {
        //*** <
        countOfPages = 16;
        return countOfPages;
    }

    if (window.innerWidth > 640 && window.innerWidth <= 768) {
        countOfPages = 8;
        return countOfPages;
    }
}

function getCountOfPageElements() {
    let count;
    if (window.innerWidth > 768) {
        count = 8;
        return count;
    }

    if (window.innerWidth < 640) {
        count = 3;
        return count;
    }

    if (window.innerWidth >= 640 && window.innerWidth <= 768) {
        count = 6;
        return count;
    }
}

let pageNumber = 1;
let pagesCount = getPages();
let countOfPageElements = getCountOfPageElements();
console.log(pagesCount);
btnRightOne.addEventListener('click', () => {
    console.log("hello, i'm currectlyBtn");
    if (pageNumber < pagesCount) {
        pageNumber++;
    }
    btnPageNumber.innerText = `${pageNumber}`;
    if (pageNumber > 1) {
        btnLeftOne.classList.remove('pagination-buttons__btn_disable');
        btnLeftEnd.classList.remove('pagination-buttons__btn_disable');
    }
    if (pageNumber <= pagesCount) {
        getPaginaionCardsHtml(countOfPageElements, pageNumber);
    }
    if (pageNumber === pagesCount) {
        btnRightOne.classList.add('pagination-buttons__btn_disable');
        btnRightEnd.classList.add('pagination-buttons__btn_disable');
    }
});

btnLeftOne.addEventListener('click', () => {
    console.log("hello, i'm currectlyBtn");
    if (pageNumber > 1) {
        pageNumber--;
    }
    btnPageNumber.innerText = `${pageNumber}`;
    getPaginaionCardsHtml(countOfPageElements, pageNumber);
    if (pageNumber === 1) {
        btnLeftOne.classList.add('pagination-buttons__btn_disable');
        btnLeftEnd.classList.add('pagination-buttons__btn_disable');
    }
    if (pageNumber < getPages()) {
        btnRightOne.classList.remove('pagination-buttons__btn_disable');
        btnRightEnd.classList.remove('pagination-buttons__btn_disable');
    }
});

//right end ------> BUTTON

btnRightEnd.addEventListener('click', () => {
    getPaginaionCardsHtml(countOfPageElements, getPages());
    btnPageNumber.innerText = `${getPages()}`;
    pageNumber = getPages();
    btnLeftOne.classList.remove('pagination-buttons__btn_disable');
    btnLeftEnd.classList.remove('pagination-buttons__btn_disable');
    btnRightOne.classList.add('pagination-buttons__btn_disable');
    btnRightEnd.classList.add('pagination-buttons__btn_disable');
});
btnLeftEnd.addEventListener('click', () => {
    getPaginaionCardsHtml(countOfPageElements, 1);
    btnPageNumber.innerText = `${1}`;
    pageNumber = 1;
    btnLeftOne.classList.add('pagination-buttons__btn_disable');
    btnLeftEnd.classList.add('pagination-buttons__btn_disable');
    btnRightOne.classList.remove('pagination-buttons__btn_disable');
    btnRightEnd.classList.remove('pagination-buttons__btn_disable');
});
