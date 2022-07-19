import { localStorageService } from './localStorage';
import { updateGoods } from './generate';
import { IGoods } from '../modules/goods.model';
import { updateCartStatus } from './updateFiltersStatus';

const sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;

export function sortGoods(value: string, updatedGoods: IGoods[]) {
    let callback;

    if (value === 'cart') {
        const names = localStorageService.getCart();
        return updatedGoods.filter((good) => names.includes(good.id));
    }

    switch(value) {
    case 'name_up':
        callback = (a: { name: string }, b: { name: string }) =>  {
            return (a.name > b.name ? 1 : -1);
        };
        break;
    case 'name_down':
        callback = (a: { name: string }, b: { name: string }) =>  {
            return (a.name > b.name ? -1 : 1);
        };
        break;
    case 'price_up':
        callback = (a: {price: string}, b: {price: string}) =>  {
            return Number(a.price) - Number(b.price);
        };
        break;
    default:
        callback = (a: {price: string}, b: {price: string}) =>  {
            return Number(b.price) - Number(a.price);
        };
    }
    
    return updatedGoods.sort(callback);
}

sortFilters.addEventListener('click', (event: MouseEvent) => {
    const selectedSortElement = event.target as HTMLInputElement;

    if (selectedSortElement.tagName === 'INPUT' ) {
        const selectedSort = selectedSortElement.value as string; 
        localStorageService.setSort({key: 'sort', values: selectedSort});
        updateGoods();
        updateCartStatus();
    }
});

