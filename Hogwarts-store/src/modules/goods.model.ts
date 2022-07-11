export interface IGoods {
    name: string,
    img: string,
    house: string | Array<string>,
    categories: Array<string>,
    price: string,
    id: string
}

export const enum Goods {
    name = 'name',
    img = 'img',
    house = 'house',
    categories = 'categories',
    price = 'price',
    id = 'id'
}

export const enum GoodsJSON {
    name = 'name',
    img = 'img',
    house = 'house',
    categories = 'categories',
    price = 'price',
    id = 'id'
}