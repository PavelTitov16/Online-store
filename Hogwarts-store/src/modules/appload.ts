import * as goods from '../goods.json';
import { IGoods } from './goods.model';

const enum Goods {
    name = 'name',
    img = 'img',
    house = 'house',
    categories = 'categories',
    price = 'price',
    id = 'id'
}

const enum GoodsJSON {
    name = 'name',
    img = 'img',
    house = 'house',
    categories = 'categories',
    price = 'price',
    id = 'id'
}

function mapJsonToProducts(jsonResponse: IGoods[]) {
    return jsonResponse.map((jsonObject: IGoods) => {
        return {
            [Goods.name]: jsonObject[GoodsJSON.name],
            [Goods.img]: jsonObject[GoodsJSON.img],
            [Goods.house]: jsonObject[GoodsJSON.house],
            [Goods.categories]: jsonObject[GoodsJSON.categories],
            [Goods.price]: jsonObject[GoodsJSON.price],
            [Goods.id]: jsonObject[GoodsJSON.id],
        };
    });
}

console.log(mapJsonToProducts(Array.from(goods)));