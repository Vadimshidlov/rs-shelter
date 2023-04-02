//  ____________SLIDER_________________________________________________________________

const btnLeft = document.querySelector('.block-friends__arrow');
const btnRight = document.querySelector('.block-friends__arrow_right');
const slider = document.querySelector('.block-friends__cards');
const itemLeft = document.querySelector('#left-part');
const itemRight = document.querySelector('#right-part');
let active = document.querySelector('#active-part');

const dataPetsSlider = [
   { name: 'Katrine', img: '../../assets/images/friends/pets-katrine.jpg', isPrint: false, id: 0 },
   { name: 'Jenifer', img: '../../assets/images/friends/pets-jennifer.jpg', isPrint: false, id: 1 },
   { name: 'Woody', img: '../../assets/images/friends/pets-woody.jpg', isPrint: false, id: 2 },
   { name: 'Sophia', img: '../../assets/images/friends/sophia.jpg', isPrint: false, id: 3 },
   { name: 'Timmy', img: '../../assets/images/friends/pets-timmy.jpg', isPrint: false, id: 4 },
   { name: 'Charly', img: '../../assets/images/friends/pets-charly.jpg', isPrint: false, id: 5 },
   { name: 'Scarlet', img: '../../assets/images/friends/pets-scarlet.jpg', isPrint: false, id: 6 },
   { name: 'Freddie', img: '../../assets/images/friends/pets-freddie.jpg', isPrint: false, id: 7 },
];