import { GoodModel } from './goods.model';

export interface SearchFormModel {
    searchData(data: GoodModel[]): GoodModel[];
    isSearchDataExist(): boolean;
    subscribeSearchButton(callback: () => void): void;
    subscribeSearchInput(callback: () => void): void;
    subscribeSearchKeydown(): void;
    init(callback: () => void): void;
}
