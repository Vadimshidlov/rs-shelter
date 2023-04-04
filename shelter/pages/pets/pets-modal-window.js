// --------BURGER-MENU--------

const blockFriends = document.querySelector('.block-friends');
const headerContent = document.querySelector('.header_content');
const burgerBtn = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu.header__menu-item_active');
const burgerBody = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__menu-item');

function showBurger() {
    document.body.classList.toggle('stop-scrolling');
    blockFriends.classList.toggle('burger_opacity');
    burgerBtn.classList.toggle('header__burger-button_active');
    burgerBody.classList.toggle('header__menu-item_active');
}
function hideBurger() {
    blockFriends.classList.remove('burger_opacity');
    burgerBody.classList.remove('header__menu-item_active');
    burgerBtn.classList.toggle('header__burger-button_active');
    document.body.classList.remove('stop-scrolling');
}

burgerBtn.addEventListener('click', () => {
    console.log('hello');
    showBurger();
});
