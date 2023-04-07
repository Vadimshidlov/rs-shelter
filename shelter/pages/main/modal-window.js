//  ---------BURGER-MENU__________________

const blockHouse = document.querySelector(".block-house");
const burgerBtn = document.querySelector(".header__burger-button");
// const headerMenu = document.querySelector('.header__menu.header__menu-item_active');
const burgerBody = document.querySelector(".header__menu");
const html = document.querySelector("html");
const body = document.querySelector("body");
const headerLogo = document.querySelector(".header__logo");
const headerLinks = document.querySelectorAll(".header__menu-item");
const headerActiveLink = document.querySelector(
    ".header__menu-item_active-link"
);
const header = document.querySelector(".header");

function showBurger() {
    headerLogo.classList.toggle("burger-opacity-logo");
    document.body.classList.toggle("stop-scrolling");
    blockHouse.classList.toggle("burger_opacity");
    burgerBtn.classList.toggle("header__burger-button_active");
    burgerBody.classList.toggle("header__menu-item_active");
    headerActiveLink.classList.add("header__menu-item_active-link__pointer");
}
function hideBurger() {
    headerLogo.classList.toggle("burger-opacity-logo");
    blockHouse.classList.remove("burger_opacity");
    burgerBody.classList.remove("header__menu-item_active");
    burgerBtn.classList.toggle("header__burger-button_active");
    document.body.classList.remove("stop-scrolling");
    headerActiveLink.classList.remove("header__menu-item_active-link__pointer");
}

burgerBtn.addEventListener("click", () => {
    console.log("hello");
    showBurger();
});

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (burgerBody.classList.contains("header__menu-item_active")) {
        console.log(blockHouse);
        blockHouse.childNodes.forEach((el) => {
            el.addEventListener("click", () => {
                document.body.classList.remove("stop-scrolling");
                blockHouse.classList.remove("burger_opacity");
                burgerBtn.classList.remove("header__burger-button_active");
                burgerBody.classList.remove("header__menu-item_active");
                headerLogo.classList.remove("burger-opacity-logo");
            });
        });
    }
});

/*window.addEventListener('click', e => {
    if (e.target.classList.contains('.header__menu-item_active-link')) {
        hideBurger();
    }
});*/

if (window.innerWidth < 768) {
    headerLinks.forEach((el) => {
        el.addEventListener("click", () => {
            burgerBody.classList.remove("header__menu-item_active");
            burgerBtn.classList.remove("header__burger-button_active");
            blockHouse.classList.toggle("burger_opacity");
            document.body.classList.toggle("stop-scrolling");
            headerLogo.classList.toggle("burger-opacity-logo");
            headerActiveLink.classList.remove(
                "header__menu-item_active-link__pointer"
            );
        });
    });
}


// MODAL-WINDOW

const dataModalTwo = [
    {
        name: "Katrine",
        img: "../../assets/images/friends/pets-katrine.jpg",
        type: "Cat",
        breed: "British Shorthair",
        description:
            "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Jennifer",
        img: "../../assets/images/friends/pets-jennifer.jpg",
        type: "Dog",
        breed: "Labrador",
        description:
            "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Woody",
        img: "../../assets/images/friends/pets-woody.jpg",
        type: "Dog",
        breed: "Golden Retriever",
        description:
            "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"],
    },
    {
        name: "Sophia",
        img: "../../assets/images/friends/sophia.jpg",
        type: "Dog",
        breed: "Shih tzu",
        description:
            "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Timmy",
        img: "../../assets/images/friends/pets-timmy.jpg",
        type: "Cat",
        breed: "British Shorthair",
        description:
            "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"],
    },
    {
        name: "Charly",
        img: "../../assets/images/friends/pets-charly.jpg",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description:
            "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"],
    },
    {
        name: "Scarlett",
        img: "../../assets/images/friends/pets-scarlet.jpg",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description:
            "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"],
    },

    {
        name: "Freddie",
        img: "../../assets/images/friends/pets-freddie.jpg",
        type: "Cat",
        breed: "British Shorthair",
        description:
            "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"],
    },
];

const modalWindow = document.querySelector(".block-friends__modal-window");
const petCard = document.querySelector("#active-part");

petCard.addEventListener("click", (e) => {
    if (e.target.className === "block-friends__card") {
        console.log("Click!");
        console.log(e.target.id);

        getModal(e.target.id);
    }
    if (e.target.className === "block-friends__card-text") {
        console.log("Click!", e.target.closest(".block-friends__card").id);
        getModal(e.target.closest(".block-friends__card").id);
    }
    if (e.target.className === "block-friends__card-btn") {
        console.log("Click!", e.target.closest(".block-friends__card").id);
        getModal(e.target.closest(".block-friends__card").id);
    }
    if (e.target.className === "block-friends__card-picture") {
        console.log("Click!", e.target.closest(".block-friends__card").id);
        getModal(e.target.closest(".block-friends__card").id);
    }
});

// function getModalWindow

function getModal(id) {
    console.log("No body believe in you");
    modalWindow.classList.add("block-friends__modal-window_active");
    document.body.classList.add("stop-scrolling");
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
    const hideModalBtn = document.querySelector(".modal-window__button");
    hideModalBtn.addEventListener("click", () => {
        hideModal();
    });
}

function hideModal() {
    modalWindow.classList.remove("block-friends__modal-window_active");
    document.body.classList.remove("stop-scrolling");
}

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === modalWindow) {
        hideModal();
    }
});
window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        hideModal();
    }
});
