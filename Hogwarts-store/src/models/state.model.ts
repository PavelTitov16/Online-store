import { GoodModel } from './goods.model';

export interface SortState {
    [key: string]: string
}

export interface FiltersState {
    [key: string]: string | string[]
}

export interface StateModel {
    setFilters(filters: {key: string; values: string | Array<string>}): void;
    setSort(sorters: {key: string; values: string}): void;
    getFilters(): FiltersState;
    getSorters(): SortState;
    updateCart(cartGoods: string[]): void;
    getCart(): string[];
    getPrice(goodsArray: GoodModel[]): number;
}
