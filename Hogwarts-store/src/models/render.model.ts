import { GoodModel } from './goods.model';

export interface RenderModel {
    renderItems(items: GoodModel[]): void
}