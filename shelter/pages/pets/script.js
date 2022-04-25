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
const popClosers =  document.querySelectorAll('[data-type]');
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
})});
/* Pop Up */

//check
const cards =  document.querySelectorAll('.pet-card');
cards.forEach(card => card.addEventListener('click', (event) => {
  createPop(event.target);
  console.log(event.target.dataset.name);
  petWrapper.classList.add('active');
  page.classList.add('lock');
}));

/* Pagination */
const slider = document.querySelector('.pets-block__slider');
let cardsAmount = 0;
let paginanion = [];

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
});




/* Pagination */


let newPage = [];
let currentPage = localStorage.getItem('currentPage') ? JSON.parse(localStorage.getItem('currentPage')) : [];

function createPagination() {
  
  for (let i = 0; i < cardsAmount; i++) {
    while (newPage.length < cardsAmount) {
      let number = Math.floor(Math.random() * pets.length);
      if (!newPage.includes(pets[number]) && !currentPage.includes(pets[number])) {
        let pet = pets[number];
        newPage.push(pet);
        
        slider.innerHTML += `
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
  }
  currentPage = newPage;
  localStorage.setItem('currentPage', JSON.stringify(currentPage));

  newPage = [];

  const cards = document.querySelectorAll('[data-name]');
  
  cards.forEach(card => card.addEventListener('click', (event) => {
    createPop(event.target);
    console.log(event.target.dataset.name);
    petWrapper.classList.add('active');
    page.classList.add('lock');

    return currentSlider;
  }));
}

createPagination();