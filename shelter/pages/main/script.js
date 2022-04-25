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

document.addEventListener('mouseover', event => {

  if (popClosers) {
      popCloseBtn.classList.add('hover');
  }
  else if (!popClosers && petInfo) {
      popCloseBtn.classList.remove('hover');
  }
})
/* Pop Up */

/* Slider */
const slider = document.querySelector('.pets-block__slider');
slider.innerHTML =
  `<button class="sub-button" id="previous">
    <img src="../../assets/icons/arrow-left.svg" alt="arrow left">
  </button>
  <div class="slider__item">

  </div>
  <button class="sub-button" id="next">
    <img src="../../assets/icons/arrow-right.svg" alt="arrow right">
  </button>`;

const petsContainer = document.querySelector('.slider__item');
const next = document.getElementById('next');
const prev = document.getElementById('previous');

let sliderLength = 0;

function loadScreen() {
  if (window.innerWidth >= 1220) {
    sliderLength = 3;
  } else if (window.innerWidth < 1220 && window.innerWidth > 730) {
    sliderLength = 2;
  } else {
    sliderLength = 1;
  }
  return sliderLength;
}
loadScreen();

window.addEventListener('resize', () => {
  loadScreen();
  createCard();
});

let newSlider = [];
let currentSlider = localStorage.getItem('currentSlider') ? JSON.parse(localStorage.getItem('currentSlider')) : [];

function createCard() {
  let petCard = "";
  
  for (let i = 0; i < sliderLength; i++) {
    console.log(currentSlider);
    while (newSlider.length < sliderLength) {
      let number = Math.floor(Math.random() * pets.length);
      if (!newSlider.includes(pets[number]) && !currentSlider.includes(pets[number])) {
        let pet = pets[number];
        newSlider.push(pet);
        
        console.log(currentSlider);
        petCard += `
    <div class="pets-card" data-name="${pet.name}">
        <img class="pets-card__img" src="${pet.img}" alt="${pet.type}" data-name="${pet.name}">
        <p class="pets-card__name">
          ${pet.name}
        </p>
        <button class="button secondary-btn" data-name="${pet.name}">
          Learn more
        </button>
    </div>`;
      }
    }
    console.log(currentSlider);
  }
  currentSlider = newSlider;
  localStorage.setItem('currentSlider', JSON.stringify(currentSlider));
  petsContainer.innerHTML = petCard;
  newSlider = [];

  const cards = document.querySelectorAll('[data-name]');
  
  cards.forEach(card => card.addEventListener('click', (event) => {
    createPop(event.target);
    console.log(event.target.dataset.name);
    petWrapper.classList.add('active');
    page.classList.add('lock');

    return currentSlider;
  }));
}

createCard();

next.addEventListener('click', () => {
  petsContainer.classList.add("right");
  setTimeout(createCard, 300);
});

prev.addEventListener('click', () => {
  petsContainer.classList.add("left");
  setTimeout(createCard, 300);
});

petsContainer.addEventListener("animationend", () => {
  petsContainer.classList.remove("left");
  petsContainer.classList.remove("right");
});
