import { GoodJSONModel, GoodModel } from './goods.model';

export interface GoodsGeneratorModel {
    mapJsonToProducts(jsonResponse: GoodJSONModel[], goodsInCart: string[]): GoodModel[];
}