const dataPaginationTwo = [
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
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
    },
];

const petCards = [1, 2, 3, 4, 5, 6, 7, 8];

const count = 8;

// function create array of 48pets and used for desktop

function getArrayOfPageArray(arr) {
    const res = [];
    for (let i = 0; i < 6; i++) {
        res.push(
            ...arr.sort(function () {
                return Math.random() - 0.5;
            })
        );
    }
    return res;
}

// tabletsArrayOfIdValidSort 48 pets for tablet
function goTabletSixPets(arr) {
    const boolArr = [];
    for (let i = 0; i < arr.length; i += 6) {
        const curArr = [];
        for (let j = i; j < i + 6; j++) {
            curArr.push(arr[j]);
        }
        if ([...new Set(curArr)].length === 6) {
            boolArr.push(1);
        } else {
            boolArr.push(0);
        }
    }

    return boolArr.includes(0)
        ? goTabletSixPets(getArrayOfPageArray(petCards, count))
        : arr;
}

// 48pets array for mobile

function goMobileThreePets(arr) {
    console.log("i'm working now");
    const res = [];
    for (let i = 0; i < arr.length; i += 6) {
        if (
            arr[i] !== arr[i + 1] &&
            arr[i] !== arr[i + 2] &&
            arr[i + 1] !== arr[i] &&
            arr[i + 1] !== arr[i + 2]
        ) {
            res.push(1);
        } else {
            res.push(0);
        }
    }

    return res.includes(0)
        ? goMobileThreePets(getArrayOfPageArray(petCards))
        : arr;
}

function getStartArrayOfPets() {
    if (window.innerWidth >= 768) {
        const arr = getArrayOfPageArray(petCards);
        return arr;
    }
    if (window.innerWidth >= 640 && window.innerWidth < 768) {
        const arr = goTabletSixPets(getArrayOfPageArray(petCards));
        return arr;
    }
    if (window.innerWidth < 640) {
        const arr = goMobileThreePets(getArrayOfPageArray(petCards));
        return arr;
    }
}

const arrOfIndexesPets = getStartArrayOfPets();
console.log(arrOfIndexesPets);

const btnRightOne = document.querySelector("#btn-page-right");
const btnRightEnd = document.querySelector("#btn-page-right-end");
const btnLeftOne = document.querySelector("#btn-page-left");
const btnLeftEnd = document.querySelector("#btn-page-left-start");
const btnPageNumber = document.querySelector("#btn-page-count");

function getPaginaionCardsHtml(pages, count) {
    console.log("go", pages, count);
    const paginationBody = document.querySelector(".block-friends__cards");
    //    if (window.innerWidth > 1280) {
    /*let pages = pages
          let count = count*/
    let start = count * pages - pages;
    let end = count * pages;
    console.log(arrOfIndexesPets);
    paginationBody.innerHTML = "";

    for (let i = start; i < end; i++) {
        // for (let i = 8; i < 16; i++) {
        const blockFriendCard = document.createElement("div");
        blockFriendCard.classList.add("block-friends__card");
        // console.log(dataPaginationTwo[arrOfIndexesPets[i] - 1].id);
        blockFriendCard.id = dataPaginationTwo[arrOfIndexesPets[i] - 1].id;
        const blockFriendImg = document.createElement("img");
        blockFriendImg.classList.add("block-friends__card-picture");

        console.log(arrOfIndexesPets[i] - 1);
        blockFriendImg.src = `${
            dataPaginationTwo[arrOfIndexesPets[i] - 1].img
        }`;
        const blockFriendCardName = document.createElement("div");
        blockFriendCardName.classList.add("block-friends__card-text");
        blockFriendCardName.innerText = `${
            dataPaginationTwo[arrOfIndexesPets[i] - 1].name
        }`;
        const blockFriendCardButton = document.createElement("button");
        blockFriendCardButton.classList.add("block-friends__card-btn");
        blockFriendCardButton.innerText = "Learn more";
        blockFriendCard.appendChild(blockFriendImg);
        blockFriendCard.appendChild(blockFriendCardName);
        blockFriendCard.appendChild(blockFriendCardButton);
        paginationBody.appendChild(blockFriendCard);

        blockFriendCard.addEventListener("click", (e) => {
            console.log("hello");
            if (e.target.className === "block-friends__card") {
                console.log("Click!");
                console.log(e.target.id);

                getModal(e.target.id);
            }
            if (e.target.className === "block-friends__card-text") {
                console.log(
                    "Click!",
                    e.target.closest(".block-friends__card").id
                );
                getModal(e.target.closest(".block-friends__card").id);
            }
            if (e.target.className === "block-friends__card-btn") {
                console.log(
                    "Click!",
                    e.target.closest(".block-friends__card").id
                );
                getModal(e.target.closest(".block-friends__card").id);
            }
            if (e.target.className === "block-friends__card-picture") {
                console.log(
                    "Click!",
                    e.target.closest(".block-friends__card").id
                );
                getModal(e.target.closest(".block-friends__card").id);
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
    if (window.innerWidth >= 768) {
        countOfPages = 6;
        return countOfPages;
    }

    if (window.innerWidth < 640) {
        countOfPages = 16;
        return countOfPages;
    }

    if (window.innerWidth > 640 && window.innerWidth < 768) {
        countOfPages = 8;
        return countOfPages;
    }
}

function getCountOfPageElements() {
    let count;
    if (window.innerWidth >= 768) {
        count = 8;
        return count;
    }

    if (window.innerWidth < 640) {
        count = 3;
        return count;
    }

    if (window.innerWidth >= 640 && window.innerWidth < 768) {
        count = 6;
        return count;
    }
}
