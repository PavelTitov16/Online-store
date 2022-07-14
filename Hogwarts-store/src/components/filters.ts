import { localStorageService } from './localStorage';
import { updateGoods } from './generate';
import { Goods } from '../modules/goods.model';
import { goodsArray } from './appload';


const housesContainer = document.querySelector('.faculty-container__items') as HTMLDivElement;
const houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;

housesContainer.addEventListener('click', (event) => {
    const selectedHouseElement = event.target as HTMLDivElement;
    console.log('container', selectedHouseElement);
    const selectedHouse = selectedHouseElement.dataset['h'] as string;
    console.log('container', selectedHouse);
    localStorageService.setFilters({key: Goods.house, values: selectedHouse} );
    selectHouse(selectedHouse);
    updateGoods();
});

function selectHouse(value) {
    const houseBtns = Array.from(document.querySelectorAll('.house-btn')) as HTMLInputElement[];
    console.log('hpse btns', houseBtns);
    houseBtns.forEach(btn => {
        console.log(btn);
        if (btn.dataset['h'] === value) {
            btn.checked = true;
            console.log(btn);
        } 
    });
}

houseFilters.addEventListener('click', (event) => {
    const selectedHouseElement = event.target as HTMLInputElement;
    if (selectedHouseElement.tagName === 'INPUT') {
        console.log('filterElement', selectedHouseElement); 
        const selectedHouse = selectedHouseElement.dataset['h'] as string;
        console.log('filter', selectedHouse);
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
    /*const selectedCategory = selectedFilter.value as string;*/
 
    

});

/*checked*/

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