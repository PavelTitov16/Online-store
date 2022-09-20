import { GoodModel } from './goods.model';

export interface SortingModel {
    sortGoods(value: string, updatedGoods: GoodModel[]): GoodModel[];
    subscribeOnSort(callback: () => void): void;
}

