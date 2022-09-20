import { GoodModel } from './goods.model';

export interface RenderModel {
    renderItems(items: GoodModel[]): void
}

export const enum keys {
    Sort = 'sort',
    House = 'house',
}