import { arrayOfPetsData as dataModalTwo } from './arrayOfPetsData.js';

//  ---------BURGER-MENU__________________

const blockHouse = document.querySelector('.block-house');
const burgerBtn = document.querySelector('.header__burger-button');
// const headerMenu = document.querySelector('.header__menu.header__menu-item_active');
const burgerBody = document.querySelector('.header__menu');
const html = document.querySelector('html');
const body = document.querySelector('body');
const headerLogo = document.querySelector('.header__logo');
const headerLinks = document.querySelectorAll('.header__menu-item');
const headerActiveLink = document.querySelector('.header__menu-item_active-link');
const header = document.querySelector('.header');

function showBurger() {
    headerLogo.classList.toggle('burger-opacity-logo');
    document.body.classList.toggle('stop-scrolling');
    blockHouse.classList.toggle('burger_opacity');
    burgerBtn.classList.toggle('header__burger-button_active');
    burgerBody.classList.toggle('header__menu-item_active');
    headerActiveLink.classList.add('header__menu-item_active-link__pointer');
}
function hideBurger() {
    headerLogo.classList.toggle('burger-opacity-logo');
    blockHouse.classList.remove('burger_opacity');
    burgerBody.classList.remove('header__menu-item_active');
    burgerBtn.classList.toggle('header__burger-button_active');
    document.body.classList.remove('stop-scrolling');
    headerActiveLink.classList.remove('header__menu-item_active-link__pointer');
}

burgerBtn.addEventListener('click', () => {
    console.log('hello');
    showBurger();
});

window.addEventListener('click', e => {
    if (burgerBody.classList.contains('header__menu-item_active')) {
        console.log(blockHouse);
        blockHouse.childNodes.forEach(el => {
            el.addEventListener('click', () => {
                document.body.classList.remove('stop-scrolling');
                blockHouse.classList.remove('burger_opacity');
                burgerBtn.classList.remove('header__burger-button_active');
                burgerBody.classList.remove('header__menu-item_active');
                headerLogo.classList.remove('burger-opacity-logo');
            });
        });
    }
});

if (window.innerWidth < 768) {
    headerLinks.forEach(el => {
        el.addEventListener('click', () => {
            burgerBody.classList.remove('header__menu-item_active');
            burgerBtn.classList.remove('header__burger-button_active');
            blockHouse.classList.toggle('burger_opacity');
            document.body.classList.toggle('stop-scrolling');
            headerLogo.classList.toggle('burger-opacity-logo');
            headerActiveLink.classList.remove('header__menu-item_active-link__pointer');
        });
    });
}

// MODAL-WINDOW

const modalWindow = document.querySelector('.block-friends__modal-window');
const petCard = document.querySelector('#active-part');

petCard.addEventListener('click', e => {
    if (e.target.className === 'block-friends__card') {
        console.log('Click!');
        console.log(e.target.id);

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

// function getModalWindow

function getModal(id) {
    console.log('No body believe in you');
    modalWindow.classList.add('block-friends__modal-window_active');
    document.body.classList.add('stop-scrolling');
    if (window.innerWidth > 425) {
        modalWindow.innerHTML = `
        <div class="modal-window__wrapper">
           <div class="modal-window__content">
              <button class="modal-window__button">X</button>
              <div class="modal-window__image">
                 <img src=${dataModalTwo[id].img} alt="" />
              </div>
              <div class="modal-window__info">
                 <h3 class="modal-window__title">${dataModalTwo[id].name}</h3>
                 <h4 class="modal-window__subtitle">${dataModalTwo[id].type} - ${dataModalTwo[id].breed}</h4>
                 <div class="modal-window__text">
                 ${dataModalTwo[id].description}
                 </div>
                 <div class="modal-window__description">
                    <ul class="modal-window__list">
                       <li class="modal-window__item">Age: ${dataModalTwo[id].age}</li>
                       <li class="modal-window__item">Inoculations: ${dataModalTwo[id].inoculations}</li>
                       <li class="modal-window__item">Diseases: ${dataModalTwo[id].diseases}</li>
                       <li class="modal-window__item">Parasites: ${dataModalTwo[id].parasites}</li>
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
                 <h3 class="modal-window__title">${dataModalTwo[id].name}</h3>
                 <h4 class="modal-window__subtitle">${dataModalTwo[id].type} - ${dataModalTwo[id].breed}</h4>
                 <div class="modal-window__text">
                 ${dataModalTwo[id].description}
                 </div>
                 <div class="modal-window__description">
                    <ul class="modal-window__list">
                       <li class="modal-window__item">Age: ${dataModalTwo[id].age}</li>
                       <li class="modal-window__item">Inoculations: ${dataModalTwo[id].inoculations}</li>
                       <li class="modal-window__item">Diseases: ${dataModalTwo[id].diseases}</li>
                       <li class="modal-window__item">Parasites: ${dataModalTwo[id].parasites}</li>
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
    if (e.target === modalWindow) {
        hideModal();
    }
});
window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
        hideModal();
    }
});
