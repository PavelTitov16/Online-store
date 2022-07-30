
import { keys } from '../models/render.model';
import { State } from './state';
import { GoodModel } from '../models/goods.model';

const enum sortCases {
    Cart = 'cart',
    Name_up = 'name_up',
    Name_down = 'name_down',
    Price_up = 'price_up', 
}

export class Sorting {
    public sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;
    public state: State;

    constructor() {
        this.state = new State();
    }

    public sortGoods(value: string, updatedGoods: GoodModel[]): GoodModel[] {
        let callback;
    
        if (value === sortCases.Cart) {
            const names = this.state.getCart();
            return updatedGoods.filter((good) => names.includes(good.id));
        }
    
        switch(value) {
        case sortCases.Name_up:
            callback = (a: { name: string }, b: { name: string }) =>  {
                return (a.name > b.name ? 1 : -1);
            };
            break;
        case sortCases.Name_down:
            callback = (a: { name: string }, b: { name: string }) =>  {
                return (a.name > b.name ? -1 : 1);
            };
            break;
        case sortCases.Price_up:
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

    public subscribeOnSort(callback: () => void): void {
        this.sortFilters.addEventListener('click', (event: MouseEvent) => {
            const selectedSortElement = event.target as HTMLInputElement;
        
            if (selectedSortElement.tagName === 'INPUT' ) {
                const selectedSort = selectedSortElement.value as string; 
                this.state.setSort({key: keys.Sort, values: selectedSort});
                callback();
            }
        });
    }
}

