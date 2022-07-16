import { localStorageService } from './localStorage';
import { updateGoods } from './generate';
import { IGoods } from '../modules/goods.model';

const sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;

export function sortGoods(value: string, updatedGoods: IGoods[]) {
    let callback;
    
    switch(value) {
    case 'name_up':
        callback = (a: any, b: any) =>  {
            if (a.name < b.name) {
                return -1;
            }              
            if (a.name >  b.name) {
                return 1;
            }
            else return 0;
        };
        break;
    case 'name_down':
        callback = (a: any, b: any) =>  {
            if (a.name < b.name) {
                return 1;
            }              
            if (a.name >  b.name) {
                return -1;
            }
            else return 0;
        };
        break;
    case 'price_down':
        callback = (a: any, b: any) =>  {
            return b.price-a.price;
        };
        break;
    default:
        callback = (a: any, b: any) =>  {
            return a.price-b.price;
        };
    }
    return updatedGoods.sort(callback);
}

sortFilters.addEventListener('click', (event) => {
    const selectedSortElement = event.target as HTMLInputElement;
    
    if (selectedSortElement.tagName === 'INPUT' ) {
        const currentSort: string = <string>(<HTMLElement>event.target).dataset.sort;
        //console.log(sortGoods(currentSort, updatedGoods));
        const selectedSort = selectedSortElement.value as string; 
        localStorageService.setSort({key: 'sort', values: selectedSort});

        console.log(selectedSort);
        //sortGoods(selectedSort);
        updateGoods();
    }
});


