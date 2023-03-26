//class active header links

const headerItemsLinks = document.querySelectorAll('.header__menu-item');
console.log(headerItemsLinks);
/*headerItemsLinks.forEach(link => () => {
    link.addEventListener('click', (e) => {
        headerItemsLinks.forEach(el => {
            el.classList.remove('header__menu-item_active');
        });
        link.classList.add('header__menu-item_active')
    })
})*/

headerItemsLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerItemsLinks.forEach(el => {
            el.classList.remove('header__menu-item_active');
        });
        link.classList.add('header__menu-item_active')
    })

})

