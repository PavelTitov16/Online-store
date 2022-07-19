import { Goods } from '../modules/goods.model';
import { localStorageService } from './localStorage';

const houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;
const filtersContainer = document.querySelector('.filtres-categories') as HTMLDivElement;
const sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;
const filtersActive = localStorageService.getFilters();
const sortersActive = localStorageService.getSorters();
const goodsInCart = localStorageService.getCart();

export function updateFiltersStatus(): void {
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

export function updateSorterStatus(): void {
    const sortInputs = Array.from(sortFilters.querySelectorAll('input'));
    sortInputs.forEach(input => {
        if (input.dataset['sort'] === sortersActive.sort) {
            input.checked = true;
        }
    });
}
updateSorterStatus();

export function updateCategoriesStatus(): void {
    if (filtersActive[Goods.categories]) {
        const activeCategory = filtersActive[Goods.categories];
        const categoryInputs = Array.from(filtersContainer.querySelectorAll('input'));

        categoryInputs.forEach(input => {
            if (activeCategory.includes(input.id)) {
                input.checked = true;
            }
        });
    }
}
updateCategoriesStatus();

export function updateCartStatus(): void {
    const goodsToCheck = Array.from(document.querySelectorAll('.goods-slider__card'));
    goodsToCheck.forEach(good => {

        for (let i = 0; i < goodsInCart.length; i++) {

            if (good.id === goodsInCart[i]) {
                (<HTMLDivElement>good).classList.add('active');
                (<HTMLElement>good.firstElementChild).classList.add('active');
                (<HTMLElement>good.lastElementChild).classList.add('active');
            }
        } 
    });
}
setTimeout(updateCartStatus, 100);
