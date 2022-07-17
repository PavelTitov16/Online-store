import { localStorageService } from './localStorage';
import { updateGoods } from './generate';
import { Goods } from '../modules/goods.model';
import { goodsArray } from './appload';


const housesContainer = document.querySelector('.faculty-container__items') as HTMLDivElement;
const houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;

housesContainer.addEventListener('click', (event) => {
    const selectedHouseElement = event.target as HTMLDivElement;
    const selectedHouse = selectedHouseElement.dataset['h'] as string;
    localStorageService.setFilters({key: Goods.house, values: selectedHouse} );
    selectHouse(selectedHouse);
    //Container.classList.add("left");
    setTimeout(updateGoods, 300);
    //updateGoods();
});

/*
  Container.addEventListener("animationend", () => {
    Container.classList.remove("left");
  });*/



function selectHouse(value: string) {
    const houseBtns = Array.from(document.querySelectorAll('.house-btn')) as HTMLInputElement[];
    houseBtns.forEach(btn => {
        if (btn.dataset['h'] === value) {
            btn.checked = true;
        } 
    });
}

houseFilters.addEventListener('click', (event) => {
    const selectedHouseElement = event.target as HTMLInputElement;
    if (selectedHouseElement.tagName === 'INPUT') {
        const selectedHouse = selectedHouseElement.dataset['h'] as string;
        localStorageService.setFilters({key: Goods.house, values: selectedHouse} );
        updateGoods();
    }
});

const filtersContainer = document.querySelector('.filtres-categories') as HTMLDivElement;

filtersContainer.addEventListener('click', (event) => {
    const selectedItem = event.target as HTMLInputElement;

    if (selectedItem.tagName === 'INPUT') {
        if (selectedItem.checked) {
            addCategory(selectedItem.value);
        } else deleteCategory(selectedItem.value);
    }
    updateGoods();
});

function addCategory(value: string) {
    const activeCategories = localStorageService.getFilters()[Goods.categories];

    if (!activeCategories) {
        localStorageService.setFilters( {key: Goods.categories, values: [value] } );
    } else {
        localStorageService.setFilters( {key: Goods.categories, values: [...activeCategories, value] } );
    }
}

function deleteCategory(value: string) {
    const activeCategories = localStorageService.getFilters()[Goods.categories];
    const newCategories = activeCategories.filter((category: string) => category !== value);

    localStorageService.setFilters( {key: Goods.categories, values: newCategories } );
}

/*
Сброс фильтров +20
есть кнопка reset для сброса фильтров +10
Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в избранное.
После использования кнопки reset фильтры остаются работоспособными
при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к 
первоначальным, range slider закрашивается одним цветом +10
*/
const resetLocalBtn = document.querySelector('.reset-btn');

resetLocalBtn?.addEventListener('click', () => {
    localStorage.clear(); 
    location.reload();
});