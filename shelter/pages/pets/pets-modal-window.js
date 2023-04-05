// --------BURGER-MENU--------

const blockFriends = document.querySelector('.block-friends');
const headerContent = document.querySelector('.header_content');
const burgerBtn = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu.header__menu-item_active');
const burgerBody = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__menu-item');
const headerLogo = document.querySelector('.header__logo');
const header = document.querySelector('.header');

function showBurger() {
    document.body.classList.toggle('stop-scrolling');
    blockFriends.classList.toggle('burger_opacity');
    headerLogo.classList.toggle('burger_opacity');
    burgerBtn.classList.toggle('header__burger-button_active');
    burgerBody.classList.toggle('header__menu-item_active');
}

function hideBurger() {
    blockFriends.classList.remove('burger_opacity');
    burgerBody.classList.remove('header__menu-item_active');
    burgerBtn.classList.toggle('header__burger-button_active');
    document.body.classList.remove('stop-scrolling');
    headerLogo.classList.toggle('burger_opacity');
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
                document.body.classList.remove('stop-scrolling');
                blockFriends.classList.remove('burger_opacity');
                headerLogo.classList.remove('burger_opacity');
                burgerBtn.classList.remove('header__burger-button_active');
                burgerBody.classList.remove('header__menu-item_active');
            });
        });
    }
});

headerLinks.forEach(el => {
    el.addEventListener('click', () => {
        if (burgerBody.classList.contains('header__menu-item_active')) {
            burgerBody.classList.remove('header__menu-item_active');
            burgerBtn.classList.remove('header__burger-button_active');
            blockFriends.classList.toggle('burger_opacity');
            document.body.classList.toggle('stop-scrolling');
        }
    });
});

window.addEventListener('click', e => {
    console.log(e.target);
    /*if (e.target.closest('.header__menu')) {
      hideBurger();
  }*/
});
