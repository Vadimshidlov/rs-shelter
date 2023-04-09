import { arrayOfPetsData as dataPaginationTwo } from '../main/arrayOfPetsData.js';

// PETS-MODAL-WINDOW--------------------

const modalWindow = document.querySelector('.block-friends__modal-window');
const petsPageCard = document.querySelectorAll('.block-friends__card');
console.log(petsPageCard);

export function getModal(id) {
    console.log(id);
    modalWindow.classList.add('block-friends__modal-window_active');
    document.body.classList.add('stop-scrolling');
    if (window.innerWidth > 425) {
        modalWindow.innerHTML = `
    <div class="modal-window__wrapper">
       <div class="modal-window__content">
          <button class="modal-window__button">X</button>
          <div class="modal-window__image">
             <img src=${dataPaginationTwo[id].img} alt="" />
          </div>
          <div class="modal-window__info">
             <h3 class="modal-window__title">${dataPaginationTwo[id].name}</h3>
             <h4 class="modal-window__subtitle">${dataPaginationTwo[id].type} - ${dataPaginationTwo[id].breed}</h4>
             <div class="modal-window__text">
             ${dataPaginationTwo[id].description}
             </div>
             <div class="modal-window__description">
                <ul class="modal-window__list">
                   <li class="modal-window__item">Age: ${dataPaginationTwo[id].age}</li>
                   <li class="modal-window__item">Inoculations: ${dataPaginationTwo[id].inoculations}</li>
                   <li class="modal-window__item">Diseases: ${dataPaginationTwo[id].diseases}</li>
                   <li class="modal-window__item">Parasites: ${dataPaginationTwo[id].parasites}</li>
                </ul>
             </div>
          </div>
       </div>
    </div>
    `;
    }

    if (window.innerWidth <= 425) {
        modalWindow.innerHTML = `
        <div class="modal-window__wrapper">
        <div class="modal-window__content">
            <button class="modal-window__button">X</button>
            
            <div class="modal-window__info">
                <h3 class="modal-window__title">${dataPaginationTwo[id].name}</h3>
                <h4 class="modal-window__subtitle">${dataPaginationTwo[id].type} - ${dataPaginationTwo[id].breed}</h4>
                <div class="modal-window__text">
                ${dataPaginationTwo[id].description}
                </div>
                <div class="modal-window__description">
                    <ul class="modal-window__list">
                    <li class="modal-window__item">Age: ${dataPaginationTwo[id].age}</li>
                    <li class="modal-window__item">Inoculations: ${dataPaginationTwo[id].inoculations}</li>
                    <li class="modal-window__item">Diseases: ${dataPaginationTwo[id].diseases}</li>
                    <li class="modal-window__item">Parasites: ${dataPaginationTwo[id].parasites}</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        `;
    }

    const hideModalBtn = document.querySelector('.modal-window__button');
    hideModalBtn.addEventListener('click', () => {
        hideModal();
    });
}

function hideModal() {
    modalWindow.classList.remove('block-friends__modal-window_active');
    document.body.classList.remove('stop-scrolling');
}

window.addEventListener('click', e => {
    console.log(e.target);
    if (e.target === modalWindow) {
        hideModal();
    }
});
window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
        hideModal();
    }
});

// --------BURGER-MENU--------

const blockFriends = document.querySelector('.block-friends');
const headerContent = document.querySelector('.header_content');
const burgerBtn = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu.header__menu-item_active');
const burgerBody = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__menu-item');
const headerLogo = document.querySelector('.header__logo');
const header = document.querySelector('.header');
const headerActiveLink = document.querySelector('.header__menu-item_active-link');
const headerBurgerOpacityBlock = document.querySelector('#burger-background');

function showBurger() {
    headerBurgerOpacityBlock.classList.toggle('block-friends__burger-opacity');
    headerLogo.classList.toggle('burger-opacity-logo');
    document.body.classList.toggle('stop-scrolling');
    blockFriends.classList.toggle('burger_opacity');
    burgerBtn.classList.toggle('header__burger-button_active');
    burgerBody.classList.toggle('header__menu-item_active');
    headerActiveLink.classList.add('header__menu-item_active-link__pointer');
}

function hideBurger() {
    headerBurgerOpacityBlock.classList.remove('block-friends__burger-opacity');
    burgerBody.classList.remove('header__menu-item_active');
    burgerBtn.classList.remove('header__burger-button_active');
    blockFriends.classList.toggle('burger_opacity');
    document.body.classList.toggle('stop-scrolling');
    headerLogo.classList.toggle('burger-opacity-logo');
}

burgerBtn.addEventListener('click', () => {
    console.log('hello');
    showBurger();
});

window.addEventListener('click', e => {
    console.log(e.target);
    if (burgerBody.classList.contains('header__menu-item_active')) {
        blockFriends.childNodes.forEach(el => {
            el.addEventListener('click', () => {
                headerBurgerOpacityBlock.classList.remove('block-friends__burger-opacity');
                document.body.classList.remove('stop-scrolling');
                blockFriends.classList.remove('burger_opacity');
                headerLogo.classList.remove('burger-opacity-logo');
                burgerBtn.classList.remove('header__burger-button_active');
                burgerBody.classList.remove('header__menu-item_active');
            });
        });
    }
});

headerLinks.forEach(el => {
    el.addEventListener('click', () => {
        if (burgerBody.classList.contains('header__menu-item_active')) {
            headerBurgerOpacityBlock.classList.remove('block-friends__burger-opacity');
            burgerBody.classList.remove('header__menu-item_active');
            burgerBtn.classList.remove('header__burger-button_active');
            blockFriends.classList.toggle('burger_opacity');
            document.body.classList.toggle('stop-scrolling');
            headerLogo.classList.toggle('burger-opacity-logo');
        }
    });
});

window.addEventListener('click', e => {
    console.log(e.target);
    if (e.target === headerBurgerOpacityBlock) {
        hideBurger();
    }
});
