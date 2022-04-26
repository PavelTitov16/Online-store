import pets from '../../js/pets.js';
console.log(pets);

/* Adaptive Menu */
const page = document.querySelector('.shelter-page');
const adaptiveMenu = document.querySelector('.header-menu');
const nav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav__link');
const shdwBox = document.querySelector('.shadow-box');

function openMenu() {
  adaptiveMenu.classList.add('active');
  nav.classList.add('active');
  shdwBox.classList.add('active');
  page.classList.add('lock');
}

function closeMenu() {
  adaptiveMenu.classList.remove('active');
  nav.classList.remove('active');
  shdwBox.classList.remove('active');
  page.classList.remove('lock');
}

adaptiveMenu.addEventListener('click', () => {
  if (adaptiveMenu.classList.contains('active')) {
    closeMenu();
  } else
    openMenu();
});

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
  closeMenu();
}));

shdwBox.addEventListener('click', () => {
  if (shdwBox.classList.contains('active')) {
    closeMenu();
  }
});
/* Adaptive Menu */

/* Pop Up */
const popClosers = document.querySelectorAll('[data-type]');
const petWrapper = document.querySelector('.popup-wrapper');
let petInfo = document.querySelector('.popup-block');
const popCloseBtn = document.querySelector('.popup-button');

function createPop(obj) {
  pets.forEach(pet => {
    if (pet.name === obj.dataset.name) {
      petInfo.innerHTML =
        `<div class="popup-block__item inactive">
                <img src="${pet.img}" alt="${pet.name}">
            </div>
            <div class="popup-block__item">
                <div class="popup-content">
                    <h3 class="popup-content__title">${pet.name}</h3>
                    <h4>${pet.type} - ${pet.breed}</h4>
                    <h5 class="popup-content__subtitle">${pet.description}</h5>
                    <ul class="popup-list">
                        <li class="popup-list__item">
                            <div><b>Age: </b>${pet.age}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Inoculations: </b>${pet.inoculations}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Diseases: </b>${pet.diseases}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Parasites: </b>${pet.parasites}</div>
                        </li>
                    </ul>
                </div>
            </div>`;
    }
  });
}

popClosers.forEach(closer => {
  closer.addEventListener('click', () => {
    petWrapper.classList.remove('active');
    page.classList.remove('lock');
    /* обертка наведение + закрытие */
  })
});
/* Pop Up */

//check
const cards = document.querySelectorAll('.pet-card');
cards.forEach(card => card.addEventListener('click', (event) => {
  createPop(event.target);
  console.log(event.target.dataset.name);
  petWrapper.classList.add('active');
  page.classList.add('lock');
}));

/* Pagination */
const slider = document.querySelector('.pets-block__slider');
let cardsAmount = 0;
let pagination = [];
let pageCount = 1;
const swipeL = document.getElementById('swipeL');
const buttonLeft = document.getElementById('leftB');
const pageNum = document.getElementById('pageNum');
const buttonRight = document.getElementById('rightB');
const swipeR = document.getElementById('swipeR');

function loadScreen() {
  if (window.innerWidth >= 1280) {
    cardsAmount = 8;
  } else if (window.innerWidth < 1280 && window.innerWidth > 767) {
    cardsAmount = 6;
  } else {
    cardsAmount = 3;
  }
  return cardsAmount;
}
loadScreen();

window.addEventListener('resize', () => {
  loadScreen();
  createPage();
});

let currentPage; /*= localStorage.getItem('currentPage') ? JSON.parse(localStorage.getItem('currentPage')) : [];
pagination = localStorage.getItem('currentPage') ? JSON.parse(localStorage.getItem('currentPage')) : createPage();*/
function createPage() {
  for (let i = 1; i <= (48 / cardsAmount); i++) {
    let newPage = [];
  let cardSet = '';
  while (newPage.length < cardsAmount) {
    let number = Math.floor(Math.random() * pets.length);
    if (!newPage.includes(pets[number]) ) {
      let pet = pets[number];
      newPage.push(pet);

      cardSet += `
    <div class="pet-card" data-name="${pet.name}">
        <img class="pets-card__img" src="${pet.img}" alt="${pet.type}" data-name="${pet.name}">
        <p class="pet-card__name">
          ${pet.name}
        </p>
        <button class="pet-card__btn" data-name="${pet.name}">
          Learn more
        </button>
    </div>`;
    }
  }

pagination.push(newPage);
currentPage = pagination[pageCount - 1];
slider.innerHTML = cardSet;
/*localStorage.setItem('currentPage', JSON.stringify(currentPage));*/
/*;*/
newPage = [];

const cards = document.querySelectorAll('[data-name]');

cards.forEach(card => card.addEventListener('click', (event) => {
  createPop(event.target);
  console.log(event.target.dataset.name);
  petWrapper.classList.add('active');
  page.classList.add('lock');
}));

}
}
createPage();

swipeL.addEventListener('click', () => {
  if (pageCount > 1) {
  pageCount = 1;
  pageNum.textContent = pageCount;
  setTimeout(createPage, 320);
  slider.classList.add("left");
  }
});

buttonLeft.addEventListener('click', () => {
  if (pageCount > 1) {
  pageCount--;
  pageNum.textContent = pageCount;
  slider.classList.add("left");
  setTimeout(createPage, 320);
  }
});

buttonRight.addEventListener('click', () => {
  if (pageCount < (48 / cardsAmount) ) {
  pageCount++;
  pageNum.textContent = pageCount;
  slider.classList.add("right");
  setTimeout(createPage, 320);
}});

swipeR.addEventListener('click', () => {
  console.log(pageCount);
  if (pageCount < (48 / cardsAmount) ) {
  pageCount = (48 / cardsAmount);
  pageNum.textContent = pageCount;
  slider.classList.add("right");
  setTimeout(createPage, 320);
  }
});

slider.addEventListener("animationend", () => {
  slider.classList.remove("left");
  slider.classList.remove("right");
  checkValidity();
});

function checkValidity() {
  if (pageCount === (48 / cardsAmount) ) {
    buttonRight.classList.add('inactive');
    swipeR.classList.add('inactive');
    buttonLeft.classList.remove('inactive');
    swipeL.classList.remove('inactive');
  } else if (pageCount === 1) { 
    buttonLeft.classList.add('inactive');
    swipeL.classList.add('inactive');
    buttonRight.classList.remove('inactive');
    swipeR.classList.remove('inactive');
  } else {
    buttonLeft.classList.remove('inactive');
    swipeL.classList.remove('inactive');
    buttonRight.classList.remove('inactive');
    swipeR.classList.remove('inactive');
  } 
}

checkValidity();
  
/* Pagination */