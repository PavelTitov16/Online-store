import { GoodModel } from '../models/goods.model';
import { FiltersState, SortState } from '../models/state.model';


export class State {
    private sortKey = 'sortKey';
    private filtersKey = 'filtersKey';
    private cartKey = 'cartKey';

    public setFilters(filters: {key: string; values: string | Array<string>}): void {
        const currentFilters = localStorage.getItem(this.filtersKey);

        if (currentFilters) {
            const parsedCurrentFIlters = JSON.parse(currentFilters);
            const filtersValue = JSON.stringify({...parsedCurrentFIlters, [filters.key]: filters.values});
            localStorage.setItem(this.filtersKey, filtersValue);
        } else {
            localStorage.setItem(this.filtersKey, JSON.stringify({[filters.key]: filters.values}));
        }
    }

    public setSort(sorters: {key: string; values: string}): void {
        localStorage.setItem(this.sortKey, JSON.stringify({[sorters.key]: sorters.values}));
    }


    public getFilters(): FiltersState {
        const filters = localStorage.getItem(this.filtersKey);
        return filters ? JSON.parse(filters) : {};
    }

    public getSorters(): SortState {
        const sorters = localStorage.getItem(this.sortKey);
        return sorters ? JSON.parse(sorters) : {};
    }

    public updateCart(cartGoods: string[]): void {
        localStorage.setItem(this.cartKey, JSON.stringify(cartGoods));
    }

    public getCart(): string[] {
        const cartGoods = localStorage.getItem(this.cartKey);
        return cartGoods ? JSON.parse(cartGoods) : [];
    }

    public getPrice(goodsArray: GoodModel[]): number {
        const cartGoodsID = this.getCart();
        return goodsArray.reduce((acc: number, good: GoodModel) => {
            if (cartGoodsID.includes(good.id)) {
                acc += Number(good.price);
                return acc;
            }
            return acc;
        }, 0);
    }
}
//типы у методов
