import { localStorageService } from './localStorage';
import { updateGoods, slider } from './generate';
import { Goods } from '../modules/goods.model';

const housesContainer = document.querySelector('.faculty-container__items') as HTMLDivElement;
const filtersContainer = document.querySelector('.filtres-categories') as HTMLDivElement;
const houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;
const resetFiltersBtn = document.querySelector('.reset-category__btn') as HTMLButtonElement;
const resetLocalBtn = document.querySelector('.reset-btn') as HTMLButtonElement;

export function filterMagic(): void {
    slider.classList.add('filter');
    setTimeout(updateGoods, 300);
    slider.addEventListener('animationend', () => {
        slider.classList.remove('filter');
    });
}

housesContainer.addEventListener('click', (event: MouseEvent) => {
    const selectedHouseElement = event.target as HTMLDivElement;
    const selectedHouse = selectedHouseElement.dataset['h'] as string;
    localStorageService.setFilters({key: Goods.house, values: selectedHouse} );
    selectHouse(selectedHouse);
    filterMagic();
});

export function selectHouse(value: string): void {
    const houseBtns = Array.from(document.querySelectorAll('.house-btn')) as HTMLInputElement[];
    houseBtns.forEach(btn => {
        if (btn.dataset['h'] === value) {
            btn.checked = true;
        } 
    });
}

houseFilters.addEventListener('click', (event: MouseEvent) => {
    const selectedHouseElement = event.target as HTMLInputElement;
    if (selectedHouseElement.tagName === 'INPUT') {
        const selectedHouse = selectedHouseElement.dataset['h'] as string;
        localStorageService.setFilters({key: Goods.house, values: selectedHouse} );
        filterMagic();
    }
});

filtersContainer.addEventListener('click', (event: MouseEvent) => {
    const selectedItem = event.target as HTMLInputElement;

    if (selectedItem.tagName === 'INPUT') {
        if (selectedItem.checked) {
            addCategory(selectedItem.value);
        } else deleteCategory(selectedItem.value);
    }
    filterMagic();
});

function addCategory(value: string): void {
    const activeCategories = localStorageService.getFilters()[Goods.categories];

    if (!activeCategories) {
        localStorageService.setFilters( {key: Goods.categories, values: [value] } );
    } else {
        localStorageService.setFilters( {key: Goods.categories, values: [...activeCategories, value] } );
    }
}

export function deleteCategory(value: string): void {
    const activeCategories = localStorageService.getFilters()[Goods.categories];
    const newCategories = activeCategories.filter((category: string) => category !== value);

    localStorageService.setFilters( {key: Goods.categories, values: newCategories } );
}

resetLocalBtn?.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

resetFiltersBtn.addEventListener('click', () => {
    const activeCategories = localStorageService.getFilters()[Goods.categories];
    const categoryInputs = Array.from(filtersContainer.querySelectorAll('input'));
   
    categoryInputs.forEach(input => {
        if (activeCategories.includes(input.id)) {
            input.checked = false;
            deleteCategory(input.id);
        }
    });
    selectHouse('all');
    localStorageService.setFilters({key: Goods.house, values: 'all'} );
    filterMagic();
});

