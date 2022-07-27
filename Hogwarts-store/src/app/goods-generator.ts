import { GoodsGeneratorModel } from '../models/goods-generator.model';
import { GoodJSONModel, GoodJSON, GoodModel, Good } from '../models/goods.model';

export class GoodsGenerator implements GoodsGeneratorModel {
    public mapJsonToProducts(jsonResponse: GoodJSONModel[], goodsInCart: string[]): GoodModel[] {
        return Array.from(jsonResponse).map((jsonObject: GoodJSONModel) => {
            return {
                [Good.Name]: jsonObject[GoodJSON.Name],
                [Good.Img]: jsonObject[GoodJSON.Img],
                [Good.House]: jsonObject[GoodJSON.House],
                [Good.Categories]: jsonObject[GoodJSON.Categories],
                [Good.Price]: jsonObject[GoodJSON.Price],
                [Good.Id]: jsonObject[GoodJSON.Id],
                [Good.IsFavourite]: false,
                [Good.InCart]: goodsInCart.includes(jsonObject[GoodJSON.Id])
            };
        });
    }
} 


/*type JsonDataItem = {[key: string]: value}
jsonResponse: JsonDataItem[]*/