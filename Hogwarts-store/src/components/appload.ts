import * as goods from '../goods.json';
import { IGoods, Goods, GoodsJSON } from '../modules/goods.model';

export function mapJsonToProducts(jsonResponse: IGoods[]) {
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









export const goodsArray = mapJsonToProducts(Array.from(goods));

/*class AppLoader {
    mapJsonToProducts(Array.from(goods));
}*/


/*export default AppLoader;*/
