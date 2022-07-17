import { Goods } from '../modules/goods.model';
import { localStorageService } from './localStorage';


const houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;
const filtersContainer = document.querySelector('.filtres-categories') as HTMLDivElement;
const sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;

const filtersActive = localStorageService.getFilters();
const sortersActive = localStorageService.getSorters();

export function updateFiltersStatus() {
    if (filtersActive[Goods.house]) {
        const activeHouse = filtersActive[Goods.house];
        const houseInputs = Array.from(houseFilters.querySelectorAll('input'));
        houseInputs.forEach(input => {
            if (input.dataset['h'] === activeHouse) {
                input.checked = true;
            }
        });
    }
}
updateFiltersStatus();

export function updateSorterStatus() {
    console.log(sortersActive);
    const sortInputs = Array.from(sortFilters.querySelectorAll('input'));
    sortInputs.forEach(input => {
        if (input.dataset['sort'] === sortersActive.sort) {
            input.checked = true;
        }
    });
}
updateSorterStatus();

export function updateCategoriesStatus() {
    console.log('filtersActive', filtersActive);
    console.log('Goods.catego', filtersActive[Goods.categories]);
    if (filtersActive[Goods.categories]) {
        const activeCategory = filtersActive[Goods.categories];
        const categoryInputs = Array.from(filtersContainer.querySelectorAll('input'));
        console.log('categoryInputs', categoryInputs);
        categoryInputs.forEach(input => {
            console.log('activeCategory', activeCategory.categories);
            console.log('input', input);
            console.log('nput.dataset', input.dataset);
            if (activeCategory.includes(input.id)) {
                input.checked = true;
            }
        });
    }
}
updateCategoriesStatus();


//reset button

//cartStatus during F5